<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">X</span>
      <form @submit.prevent="editOrder">
        <label for="price">Price</label>
        <input type="number" id="price" name="price" v-model="newOrderPrice" />
        <button type="button" @click="editOrder">Edit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EditModalComponent",
  props: {
    orderId: {
      type: Number,
      required: true,
    },
    orderPrice: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
        newOrderPrice: this.orderPrice,
    };
  },
  methods: {
    editOrder() {
      fetch(import.meta.env.VITE_API_URL + "/api/orders/" + this.orderId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            price: this.newOrderPrice,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
            this.closeModal();
          console.log(data);
        });
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: relative;
  min-height: 100px;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    label,
    input {
      max-width: 200px;
    }
  }
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
