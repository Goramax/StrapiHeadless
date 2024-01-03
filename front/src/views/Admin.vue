<template>
  <main>
    <h1>All orders :</h1>
    <div class="content-container">
      <div class="orders-container" v-for="order in orders">
        <OrderCard :order="order" @refreshData="getData" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import OrderCard from "../components/OrderCard.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async getData() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/orders?populate=*"
      );
      const data = await response.json();
      this.orders = data.data;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.orders-container {
  padding: 2rem;
}
</style>
