<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import {
  IClientService,
  StorageFolder,
  StorageImage,
} from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

type ImageStatus = "current" | "past-order" | "orphan" | "private";

interface ImageRow {
  path: string;
  name: string;
  url: string;
  status: ImageStatus;
}

const STATUS_LABEL: Record<ImageStatus, string> = {
  current: "Im Sortiment",
  "past-order": "Frühere Bestellungen",
  orphan: "Verwaist",
  private: "Privat",
};

const TABS: { value: StorageFolder; label: string }[] = [
  { value: "products", label: "Produktbilder" },
  { value: "productsLarge", label: "Originale" },
];

export default defineComponent({
  components: { SpinnerComponent },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();

    const isLoading = ref(true);
    const isDeleting = ref(false);
    const activeTab = ref<StorageFolder>("products");
    const productsRows = ref<ImageRow[]>([]);
    const productsLargeRows = ref<ImageRow[]>([]);
    const deleteConfirmPath = ref<string | null>(null);
    const errorMessage = ref<string | null>(null);

    const currentRows = computed(() =>
      activeTab.value === "products"
        ? productsRows.value
        : productsLargeRows.value,
    );

    const orphanCount = computed(
      () => productsRows.value.filter((r) => r.status === "orphan").length,
    );

    onMounted(async () => {
      if (!userService.isAdmin) {
        await router.push({ name: "Products" });
        return;
      }
      await loadAll();
    });

    async function loadAll(): Promise<void> {
      isLoading.value = true;
      errorMessage.value = null;
      deleteConfirmPath.value = null;
      try {
        const [productsImages, productsLargeImages, refs] = await Promise.all([
          clientService.listStorageImagesAsync("products"),
          clientService.listStorageImagesAsync("productsLarge"),
          clientService.getReferencedImagePathsAsync(),
        ]);

        productsRows.value = productsImages.map((img) =>
          toProductsRow(img, refs.byCurrentProducts, refs.byPastOrders),
        );
        productsLargeRows.value = productsLargeImages.map((img) => ({
          path: img.path,
          name: img.name,
          url: img.url,
          status: "private" as ImageStatus,
        }));
      } catch {
        errorMessage.value = "Fehler beim Laden der Bilder.";
      } finally {
        isLoading.value = false;
      }
    }

    function toProductsRow(
      img: StorageImage,
      current: Set<string>,
      pastOrders: Set<string>,
    ): ImageRow {
      let status: ImageStatus;
      if (current.has(img.path)) status = "current";
      else if (pastOrders.has(img.path)) status = "past-order";
      else status = "orphan";
      return { path: img.path, name: img.name, url: img.url, status };
    }

    function canDelete(row: ImageRow): boolean {
      return row.status === "orphan" || row.status === "private";
    }

    function confirmDelete(path: string): void {
      deleteConfirmPath.value = path;
    }

    function cancelDelete(): void {
      deleteConfirmPath.value = null;
    }

    async function doDelete(): Promise<void> {
      if (!deleteConfirmPath.value) return;
      const path = deleteConfirmPath.value;
      isDeleting.value = true;
      errorMessage.value = null;
      try {
        await clientService.deleteStorageImageAsync(path);
        productsRows.value = productsRows.value.filter((r) => r.path !== path);
        productsLargeRows.value = productsLargeRows.value.filter(
          (r) => r.path !== path,
        );
        deleteConfirmPath.value = null;
      } catch {
        errorMessage.value = "Löschen fehlgeschlagen.";
      } finally {
        isDeleting.value = false;
      }
    }

    return {
      isLoading,
      isDeleting,
      activeTab,
      currentRows,
      orphanCount,
      deleteConfirmPath,
      errorMessage,
      TABS,
      STATUS_LABEL,
      canDelete,
      confirmDelete,
      cancelDelete,
      doDelete,
    };
  },
});
</script>

<template>
  <div class="admin-images">
    <div class="list-view">
      <div class="list-header">
        <div class="list-title">Bilder verwalten</div>
      </div>

      <div class="tabs">
        <button
          v-for="tab in TABS"
          v-bind:key="tab.value"
          class="tab-btn"
          v-bind:class="{ active: activeTab === tab.value }"
          v-on:click="activeTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        class="orphan-hint"
        v-if="activeTab === 'products' && !isLoading && orphanCount > 0"
      >
        {{ orphanCount }} verwaiste Bilder können gelöscht werden.
      </div>

      <div class="info-hint" v-if="activeTab === 'productsLarge' && !isLoading">
        Diese Bilder sind nur für dich – nicht öffentlich verwendet.
      </div>

      <div class="spinner-wrap" v-if="isLoading">
        <SpinnerComponent v-bind:spinnerSize="'36px'" />
      </div>

      <div class="image-list" v-else>
        <div class="empty-hint" v-if="currentRows.length === 0">
          Keine Bilder vorhanden.
        </div>

        <div v-for="row in currentRows" v-bind:key="row.path" class="image-row">
          <img class="image-thumb" v-bind:src="row.url" alt="" />

          <div class="image-info">
            <div class="image-name">{{ row.name }}</div>
            <div class="status-tag" v-bind:class="row.status">
              {{ STATUS_LABEL[row.status] }}
            </div>

            <div class="delete-confirm" v-if="deleteConfirmPath === row.path">
              <span class="confirm-text">Wirklich löschen?</span>
              <button
                class="confirm-btn danger"
                v-on:click="doDelete"
                v-bind:disabled="isDeleting"
              >
                Löschen
              </button>
              <button class="confirm-btn" v-on:click="cancelDelete">
                Abbrechen
              </button>
            </div>

            <div class="image-actions" v-else-if="canDelete(row)">
              <button
                class="action-btn danger"
                v-on:click="confirmDelete(row.path)"
              >
                Löschen
              </button>
            </div>

            <div class="image-actions" v-else>
              <span class="protected-hint">geschützt</span>
            </div>
          </div>
        </div>
      </div>

      <div class="save-error" v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.admin-images {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .list-view {
    padding: 0 16px 32px;
    max-width: 880px;
    width: 100%;
    box-sizing: border-box;
  }

  .list-header {
    padding: 16px 0 16px;

    .list-title {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .tabs {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .tab-btn {
      background: none;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 5px 14px;
      font-size: 13px;
      cursor: pointer;
      color: #555;
      -webkit-tap-highlight-color: transparent;

      &.active {
        background-color: #333;
        border-color: #333;
        color: #fff;
      }

      &:active:not(.active) {
        background-color: #f0f0f0;
      }
    }
  }

  .orphan-hint {
    font-size: 13px;
    color: #e07b00;
    margin-bottom: 12px;
  }

  .info-hint {
    font-size: 13px;
    color: #666;
    margin-bottom: 12px;
  }

  .spinner-wrap {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }

  .image-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .empty-hint {
      padding: 24px 0;
      color: #888;
      font-size: 14px;
      flex: 1 1 100%;
    }

    .image-row {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px;
      border: 1px solid var(--lineColor);
      border-radius: 8px;
      box-sizing: border-box;
      width: 200px;
      max-width: 100%;

      .image-thumb {
        width: 100%;
        height: 180px;
        object-fit: contain;
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid var(--lineColor);
        display: block;
      }

      .image-info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;

        .image-name {
          font-size: 12px;
          color: #555;
          word-break: break-all;
        }

        .status-tag {
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
          padding: 3px 8px;
          width: fit-content;

          &.current {
            background-color: #e0f0e0;
            color: #2a6b2a;
          }

          &.past-order {
            background-color: #fff3e0;
            color: #a05a00;
          }

          &.orphan {
            background-color: #fde0e0;
            color: #a02020;
          }

          &.private {
            background-color: #f0f0f0;
            color: #555;
          }
        }

        .image-actions,
        .delete-confirm {
          display: flex;
          gap: 8px;
          margin-top: 2px;
          flex-wrap: wrap;
          align-items: center;
        }

        .confirm-text {
          font-size: 13px;
          color: #c00;
          font-weight: 600;
        }

        .protected-hint {
          font-size: 12px;
          color: #999;
        }

        .action-btn,
        .confirm-btn {
          background: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 4px 12px;
          font-size: 13px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;

          &.danger {
            border-color: #e07070;
            color: #c00;
          }

          &:disabled {
            opacity: 0.5;
          }
        }
      }
    }
  }

  .save-error {
    margin-top: 12px;
    font-size: 14px;
    color: #c00;
  }
}
</style>
