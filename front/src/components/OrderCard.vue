<template>
  <div class="order-card">
    <div class="infos">
      <span class="name">{{ order.attributes.Reference }}</span>
      <span class="ingredients">
        [<span
          v-for="ingredient in order.attributes.ingredients.data"
          :key="ingredient.id"
        >
          {{ ingredient.attributes.name }}, </span
        >]
      </span>
      <span class="price">{{ order.attributes.price }} €</span>
    </div>
    <div class="actions">
      <span class="action delete" @click="deleteOrder">
        <Delete />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Delete from "@/components/icons/Delete.vue";
export default {
  name: "OrderCardComponent",
  components: {
    Delete,
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteOrder() {
      fetch(
        import.meta.env.VITE_API_URL +
          "/api/orders/" +
          this.order.id +
          "?force=true",
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.refreshData();
        });
    },
    refreshData() {
      this.$emit("refreshData");
    },
  },
};
</script>

<style scoped lang="scss">
.order-card {
  display: flex;
  .infos {
    width: 60%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    .name {
      font-weight: bold;
    }
  }
  .actions {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  .actions {
    .action {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
