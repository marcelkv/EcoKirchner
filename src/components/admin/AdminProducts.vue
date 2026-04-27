<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import { Product } from "@/common/models/product";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

interface ProductForm {
  productId: string | null;
  name: string;
  cost: string;
  totalItems: string;
  imageRef: string;
  imageFile: File | null;
  imagePreviewUrl: string | null;
}

export default defineComponent({
  components: { SpinnerComponent },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();

    const isLoading = ref(true);
    const isSaving = ref(false);
    const products = ref<Product[]>([]);
    const form = ref<ProductForm | null>(null);
    const deleteConfirmId = ref<string | null>(null);
    const saveError = ref<string | null>(null);

    onMounted(async () => {
      if (!userService.isAdmin) {
        await router.push({ name: "Products" });
        return;
      }
      await loadProducts();
    });

    async function loadProducts(): Promise<void> {
      isLoading.value = true;
      const loaded = await clientService.getProductsAsync();
      await Promise.all(
        loaded.map((p) =>
          p.imageReference
            ? clientService.setProductImageAsync(p)
            : Promise.resolve(),
        ),
      );
      products.value = loaded;
      isLoading.value = false;
    }

    function startCreate(): void {
      saveError.value = null;
      form.value = {
        productId: null,
        name: "",
        cost: "",
        totalItems: "",
        imageRef: "",
        imageFile: null,
        imagePreviewUrl: null,
      };
    }

    function startEdit(product: Product): void {
      saveError.value = null;
      form.value = {
        productId: product.productId,
        name: product.name,
        cost: product.cost.toFixed(2).replace(".", ","),
        totalItems: String(product.quantity),
        imageRef: product.imageReference,
        imageFile: null,
        imagePreviewUrl: product.imageUrl ?? null,
      };
    }

    function cancelEdit(): void {
      form.value = null;
      saveError.value = null;
    }

    function onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (!file || !form.value) return;
      form.value.imageFile = file;
      form.value.imagePreviewUrl = URL.createObjectURL(file);
    }

    const canSave = computed<boolean>(() => {
      if (!form.value) return false;
      if (!form.value.name.trim()) return false;
      const cost = parseFloat(form.value.cost.replace(",", "."));
      const totalItems = parseInt(form.value.totalItems, 10);
      if (isNaN(cost) || cost < 0) return false;
      if (isNaN(totalItems) || totalItems < 0) return false;
      if (!form.value.productId && !form.value.imageFile) return false;
      return true;
    });

    async function save(): Promise<void> {
      if (!form.value || !canSave.value) return;
      saveError.value = null;
      isSaving.value = true;
      try {
        const cost = parseFloat(form.value.cost.replace(",", "."));
        const totalItems = parseInt(form.value.totalItems, 10);
        await clientService.saveProductAsync(
          form.value.productId,
          form.value.name.trim(),
          cost,
          totalItems,
          form.value.imageFile,
          form.value.imageRef || null,
        );
        form.value = null;
        await loadProducts();
      } catch {
        saveError.value = "Fehler beim Speichern. Bitte erneut versuchen.";
      } finally {
        isSaving.value = false;
      }
    }

    function confirmDelete(productId: string): void {
      deleteConfirmId.value = productId;
    }

    function cancelDelete(): void {
      deleteConfirmId.value = null;
    }

    async function doDelete(): Promise<void> {
      if (!deleteConfirmId.value) return;
      isSaving.value = true;
      try {
        await clientService.deleteProductAsync(deleteConfirmId.value);
        deleteConfirmId.value = null;
        await loadProducts();
      } finally {
        isSaving.value = false;
      }
    }

    return {
      isLoading,
      isSaving,
      products,
      form,
      deleteConfirmId,
      saveError,
      canSave,
      startCreate,
      startEdit,
      cancelEdit,
      onFileSelected,
      save,
      confirmDelete,
      cancelDelete,
      doDelete,
    };
  },
});
</script>

<template>
  <div class="admin-products">
    <SpinnerComponent v-if="isLoading" v-bind:spinnerSize="'40px'" />

    <!-- ── EDIT / CREATE FORM ── -->
    <div v-else-if="form" class="form-view">
      <div class="page-header">
        <div class="back-btn" v-on:click="cancelEdit">‹ Zurück</div>
        <div class="page-title">
          {{ form.productId ? "Produkt bearbeiten" : "Neues Produkt" }}
        </div>
      </div>

      <div class="form-body">
        <div class="field-group">
          <label class="field-label">Produktname</label>
          <input
            class="field-input"
            type="text"
            v-model="form.name"
            placeholder="z.B. Bio-Äpfel"
          />
        </div>

        <div class="field-group">
          <label class="field-label">Preis (€)</label>
          <input
            class="field-input"
            type="text"
            inputmode="decimal"
            v-model="form.cost"
            placeholder="z.B. 3,50"
          />
        </div>

        <div class="field-group">
          <label class="field-label">Bestand (Stück)</label>
          <input
            class="field-input"
            type="text"
            inputmode="numeric"
            v-model="form.totalItems"
            placeholder="z.B. 10"
          />
        </div>

        <div class="field-group">
          <label class="field-label">Bild</label>
          <div class="image-preview" v-if="form.imagePreviewUrl">
            <img v-bind:src="form.imagePreviewUrl" alt="Vorschau" />
          </div>
          <label class="file-btn">
            {{ form.imagePreviewUrl ? "Bild ändern" : "Bild auswählen" }}
            <input
              type="file"
              accept="image/*"
              class="file-input"
              v-on:change="onFileSelected"
            />
          </label>
          <div class="field-hint" v-if="!form.productId && !form.imageFile">
            Bild ist erforderlich für neue Produkte.
          </div>
        </div>

        <div class="save-error" v-if="saveError">{{ saveError }}</div>

        <button
          class="save-btn"
          v-bind:class="{ disabled: !canSave || isSaving }"
          v-on:click="save"
        >
          {{ isSaving ? "Wird gespeichert…" : "SPEICHERN" }}
        </button>
      </div>
    </div>

    <!-- ── PRODUCT LIST ── -->
    <div v-else class="list-view">
      <div class="list-header">
        <div class="list-title">Produkte verwalten</div>
        <button class="add-btn" v-on:click="startCreate">
          + Neues Produkt
        </button>
      </div>

      <div class="product-list">
        <div
          class="product-row"
          v-for="product in products"
          v-bind:key="product.productId"
        >
          <img
            class="product-thumb"
            v-if="product.imageUrl"
            v-bind:src="product.imageUrl"
            alt=""
          />
          <div class="product-thumb placeholder" v-else></div>

          <div class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-meta">
              {{ product.costAsString }} &middot; {{ product.quantity }} Stück
            </div>

            <div
              class="delete-confirm"
              v-if="deleteConfirmId === product.productId"
            >
              <span class="confirm-text">Wirklich löschen?</span>
              <button
                class="confirm-btn danger"
                v-on:click="doDelete"
                v-bind:disabled="isSaving"
              >
                Löschen
              </button>
              <button class="confirm-btn" v-on:click="cancelDelete">
                Abbrechen
              </button>
            </div>

            <div class="product-actions" v-else>
              <button class="action-btn" v-on:click="startEdit(product)">
                Bearbeiten
              </button>
              <button
                class="action-btn danger"
                v-on:click="confirmDelete(product.productId)"
              >
                Löschen
              </button>
            </div>
          </div>
        </div>

        <div class="empty-hint" v-if="products.length === 0">
          Noch keine Produkte vorhanden.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.admin-products {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .form-view,
  .list-view {
    padding: 0 16px 32px;
    max-width: 560px;
    width: 100%;
    box-sizing: border-box;
  }

  /* ── Header ── */
  .page-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0 20px;

    .back-btn {
      font-size: 15px;
      color: #555;
      cursor: pointer;
      white-space: nowrap;
      padding: 4px 0;
      -webkit-tap-highlight-color: transparent;

      &:active {
        color: #000;
      }
    }

    .page-title {
      font-size: 17px;
      font-weight: bold;
    }
  }

  /* ── Form ── */
  .form-body {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .field-group {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .field-label {
        font-size: 13px;
        font-weight: 600;
        color: #555;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .field-input {
        border: 1px solid var(--lineColor);
        border-radius: 6px;
        padding: 10px 12px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        outline: none;

        &:focus {
          border-color: #aaa;
        }
      }

      .image-preview {
        img {
          width: 100%;
          max-width: 200px;
          border-radius: 6px;
          border: 1px solid var(--lineColor);
          display: block;
        }
      }

      .file-btn {
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 8px 16px;
        font-size: 14px;
        color: #333;
        cursor: pointer;
        width: fit-content;

        .file-input {
          display: none;
        }
      }

      .field-hint {
        font-size: 12px;
        color: #e07b00;
      }
    }

    .save-error {
      font-size: 14px;
      color: #c00;
    }

    .save-btn {
      background-color: #333;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 14px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      letter-spacing: 0.04em;
      -webkit-tap-highlight-color: transparent;

      &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }

  /* ── List ── */
  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0 20px;
    gap: 12px;

    .list-title {
      font-size: 20px;
      font-weight: bold;
    }

    .add-btn {
      background: none;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 8px 14px;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
      -webkit-tap-highlight-color: transparent;

      &:active {
        background-color: #f0f0f0;
      }
    }
  }

  .product-list {
    display: flex;
    flex-direction: column;
    gap: 0;

    .product-row {
      display: flex;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid var(--lineColor);
      align-items: flex-start;

      .product-thumb {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 6px;
        flex-shrink: 0;
        border: 1px solid var(--lineColor);

        &.placeholder {
          background-color: #f0f0f0;
        }
      }

      .product-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;

        .product-name {
          font-size: 15px;
          font-weight: 600;
        }

        .product-meta {
          font-size: 13px;
          color: #666;
        }

        .product-actions,
        .delete-confirm {
          display: flex;
          gap: 8px;
          margin-top: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .confirm-text {
          font-size: 13px;
          color: #c00;
          font-weight: 600;
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

    .empty-hint {
      padding: 24px 0;
      color: #888;
      font-size: 14px;
    }
  }
}
</style>
