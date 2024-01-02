<template>
  <main>
    <h1>Order [{{ orderRef }}] confirmed</h1>
    <div class="content-container">
      <div class="cta">
        <router-link to="/" class="btn btn--primary">Back to home</router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      orderRef: "ORDERNUMBER",
    };
  },
  methods: {
    async getData() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/api/orders/${this.$route.params.id}`
      );
      const data = await response.json();
      this.orderRef = data.data.attributes.Reference;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";
</style>
