<template>
  <main>
    <h1>All orders :</h1>
    <div class="content-container">
      <div class="orders-container" v-for="order in orders">
        <OrderCard
          :order="order"
          @refreshData="getData"
          @openModal="openModal"
        />
      </div>
    </div>
  </main>
  <EditModal
    :orderId="orderEditId"
    :orderPrice="orderEditPrice"
    v-if="modalIsOpen"
    @closeModal="closeModal"
  />
</template>

<script setup lang="ts">
import OrderCard from "../components/OrderCard.vue";
import EditModal from "@/components/EditModal.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      orders: [],
      modalIsOpen: false,
      orderEditId: 0,
      orderEditPrice: 0,
    };
  },
  components: {
    EditModal,
  },
  methods: {
    async getData() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/orders?populate=*"
      );
      const data = await response.json();
      this.orders = data.data;
    },
    openModal(id: number, price: number) {
      this.modalIsOpen = true;
      this.orderEditId = id;
      this.orderEditPrice = price;
    },
    closeModal() {
      this.modalIsOpen = false;
      this.getData();
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
