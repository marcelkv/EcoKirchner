<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import { UserEntry, UserRole } from "@/common/models/user-entry";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

const PAGE_SIZE = 20;
const PROTECTED_EMAIL = "marcelkv90@gmail.com";

const ROLE_LABELS: Record<UserRole, string> = {
  customer: "Kunde",
  employee: "Mitarbeiter",
  admin: "Admin",
};

const ALL_ROLES: UserRole[] = ["customer", "employee", "admin"];

const FILTER_TABS: { value: UserRole | ""; label: string }[] = [
  { value: "", label: "Alle" },
  { value: "customer", label: "Kunden" },
  { value: "employee", label: "Mitarbeiter" },
  { value: "admin", label: "Admins" },
];

export default defineComponent({
  components: { SpinnerComponent },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();

    const isLoading = ref(true);
    const allUsers = ref<UserEntry[]>([]);
    const roleFilter = ref<UserRole | "">("");
    const emailSearch = ref("");
    const hasMore = ref(false);
    const cursorStack = ref<unknown[]>([null]);
    let nextPageCursor: unknown = null;

    const pendingChange = ref<{
      uid: string;
      email: string;
      newRole: UserRole;
    } | null>(null);
    const isSaving = ref(false);
    const saveError = ref<string | null>(null);

    const pageNumber = computed(() => cursorStack.value.length);
    const canGoPrev = computed(() => cursorStack.value.length > 1);
    const canGoNext = computed(() => hasMore.value && !isLoading.value);

    const filteredUsers = computed(() => {
      const search = emailSearch.value.trim().toLowerCase();
      if (!search) return allUsers.value;
      return allUsers.value.filter((u) =>
        u.email.toLowerCase().includes(search),
      );
    });

    onMounted(async () => {
      if (!userService.isAdmin) {
        await router.push({ name: "Products" });
        return;
      }
      await loadPage(null);
    });

    async function loadPage(cursor: unknown): Promise<void> {
      isLoading.value = true;
      saveError.value = null;
      pendingChange.value = null;
      try {
        const result = await clientService.getUsersPageAsync(
          roleFilter.value || null,
          PAGE_SIZE,
          cursor,
        );
        allUsers.value = result.users;
        nextPageCursor = result.nextCursor;
        hasMore.value = result.hasMore;
      } finally {
        isLoading.value = false;
      }
    }

    watch(roleFilter, async () => {
      cursorStack.value = [null];
      nextPageCursor = null;
      emailSearch.value = "";
      await loadPage(null);
    });

    async function goNextPage(): Promise<void> {
      cursorStack.value.push(nextPageCursor);
      await loadPage(nextPageCursor);
    }

    async function goPrevPage(): Promise<void> {
      cursorStack.value.pop();
      await loadPage(cursorStack.value[cursorStack.value.length - 1]);
    }

    function requestRoleChange(user: UserEntry, newRole: UserRole): void {
      if (user.email === PROTECTED_EMAIL) return;
      if (user.role === newRole) return;
      saveError.value = null;
      pendingChange.value = { uid: user.uid, email: user.email, newRole };
    }

    function cancelRoleChange(): void {
      pendingChange.value = null;
    }

    async function confirmRoleChange(): Promise<void> {
      if (!pendingChange.value) return;
      if (pendingChange.value.email === PROTECTED_EMAIL) return;
      isSaving.value = true;
      saveError.value = null;
      try {
        await clientService.updateUserRoleAsync(
          pendingChange.value.uid,
          pendingChange.value.newRole,
        );
        const user = allUsers.value.find(
          (u) => u.uid === pendingChange.value.uid,
        );
        if (user) {
          user.role = pendingChange.value.newRole;
        }
        pendingChange.value = null;
      } catch {
        saveError.value = "Fehler beim Speichern. Bitte erneut versuchen.";
      } finally {
        isSaving.value = false;
      }
    }

    return {
      isLoading,
      isSaving,
      filteredUsers,
      roleFilter,
      emailSearch,
      pageNumber,
      canGoPrev,
      canGoNext,
      pendingChange,
      saveError,
      ROLE_LABELS,
      ALL_ROLES,
      FILTER_TABS,
      PROTECTED_EMAIL,
      goNextPage,
      goPrevPage,
      requestRoleChange,
      cancelRoleChange,
      confirmRoleChange,
    };
  },
});
</script>

<template>
  <div class="admin-users">
    <div class="list-view">
      <div class="list-header">
        <div class="list-title">Benutzer verwalten</div>
      </div>

      <!-- Filters -->
      <div class="filters">
        <div class="role-tabs">
          <button
            v-for="tab in FILTER_TABS"
            v-bind:key="tab.value"
            class="tab-btn"
            v-bind:class="{ active: roleFilter === tab.value }"
            v-on:click="roleFilter = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
        <input
          class="search-input"
          type="text"
          inputmode="email"
          v-model="emailSearch"
          placeholder="E-Mail suchen…"
        />
      </div>

      <!-- Spinner during load -->
      <div class="spinner-wrap" v-if="isLoading">
        <SpinnerComponent v-bind:spinnerSize="'36px'" />
      </div>

      <!-- User list -->
      <div class="user-list" v-else>
        <div class="empty-hint" v-if="filteredUsers.length === 0">
          Keine Benutzer gefunden.
        </div>

        <div
          v-for="user in filteredUsers"
          v-bind:key="user.uid"
          class="user-row"
        >
          <div class="user-email">{{ user.email }}</div>

          <!-- Protected account -->
          <div v-if="user.email === PROTECTED_EMAIL" class="role-display">
            <span class="role-tag">{{ ROLE_LABELS[user.role] }}</span>
            <span class="protected-hint">(geschützt)</span>
          </div>

          <!-- Inline confirmation -->
          <div
            v-else-if="pendingChange && pendingChange.uid === user.uid"
            class="role-confirm"
          >
            <span class="confirm-text">
              Zu „{{ ROLE_LABELS[pendingChange.newRole] }}" ändern?
            </span>
            <button
              class="confirm-btn"
              v-on:click="confirmRoleChange"
              v-bind:disabled="isSaving"
            >
              {{ isSaving ? "…" : "Bestätigen" }}
            </button>
            <button class="confirm-btn" v-on:click="cancelRoleChange">
              Abbrechen
            </button>
          </div>

          <!-- Role buttons -->
          <div v-else class="role-buttons">
            <button
              v-for="role in ALL_ROLES"
              v-bind:key="role"
              class="role-btn"
              v-bind:class="{ active: user.role === role }"
              v-on:click="requestRoleChange(user, role)"
            >
              {{ ROLE_LABELS[role] }}
            </button>
          </div>
        </div>
      </div>

      <div class="save-error" v-if="saveError">{{ saveError }}</div>

      <!-- Pagination -->
      <div class="pagination" v-if="!isLoading && (canGoPrev || canGoNext)">
        <button
          class="page-btn"
          v-bind:disabled="!canGoPrev"
          v-on:click="goPrevPage"
        >
          ← Zurück
        </button>
        <span class="page-info">Seite {{ pageNumber }}</span>
        <button
          class="page-btn"
          v-bind:disabled="!canGoNext"
          v-on:click="goNextPage"
        >
          Weiter →
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.admin-users {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .list-view {
    padding: 0 16px 32px;
    max-width: 560px;
    width: 100%;
    box-sizing: border-box;
  }

  .list-header {
    padding: 16px 0 20px;

    .list-title {
      font-size: 20px;
      font-weight: bold;
    }
  }

  /* ── Filters ── */
  .filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;

    .role-tabs {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;

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

    .search-input {
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
  }

  /* ── Spinner ── */
  .spinner-wrap {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }

  /* ── User list ── */
  .user-list {
    display: flex;
    flex-direction: column;

    .empty-hint {
      padding: 24px 0;
      color: #888;
      font-size: 14px;
    }

    .user-row {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 14px 0;
      border-bottom: 1px solid var(--lineColor);

      .user-email {
        font-size: 14px;
        font-weight: 500;
        word-break: break-all;
      }

      .role-display {
        display: flex;
        align-items: center;
        gap: 8px;

        .role-tag {
          font-size: 13px;
          color: #555;
          background-color: #f0f0f0;
          border-radius: 4px;
          padding: 3px 10px;
        }

        .protected-hint {
          font-size: 12px;
          color: #999;
        }
      }

      .role-buttons {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;

        .role-btn {
          background: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 4px 12px;
          font-size: 13px;
          cursor: pointer;
          color: #555;
          -webkit-tap-highlight-color: transparent;

          &.active {
            background-color: #333;
            border-color: #333;
            color: #fff;
            cursor: default;
          }

          &:active:not(.active) {
            background-color: #f0f0f0;
          }
        }
      }

      .role-confirm {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;

        .confirm-text {
          font-size: 13px;
          color: #c00;
          font-weight: 600;
        }

        .confirm-btn {
          background: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 4px 12px;
          font-size: 13px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;

          &:disabled {
            opacity: 0.5;
          }
        }
      }
    }
  }

  /* ── Error ── */
  .save-error {
    margin-top: 12px;
    font-size: 14px;
    color: #c00;
  }

  /* ── Pagination ── */
  .pagination {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;

    .page-btn {
      background: none;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 8px 16px;
      font-size: 14px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      &:active:not(:disabled) {
        background-color: #f0f0f0;
      }
    }

    .page-info {
      font-size: 14px;
      color: #555;
    }
  }
}
</style>
