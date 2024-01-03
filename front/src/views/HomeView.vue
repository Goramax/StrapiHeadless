<script setup lang="ts">
import Slider from "../components/Slider.vue";
import IngredientsSwiper from "../components/IngredientsSwiper.vue";
</script>

<template>
  <main>
    <h1>{{ pageTitle }}</h1>
    <Slider :items="images" />
    <div class="content-container">
      <h2>Our Ingredients</h2>
      <IngredientsSwiper :items="ingredients" />
      <div class="cta">
        <router-link to="/order" class="btn btn--primary"
          >Create your own burger !</router-link
        >
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pageTitle: null,
      images: [],
      ingredients: [],
    };
  },
  methods: {
    async getData() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/api/home?populate=*`
      );
      const data = await response.json();
      this.pageTitle = data.data.attributes.title;
      this.images = data.data.attributes.Slider.data;
      const ingresponse = await fetch(
        import.meta.env.VITE_API_URL + `/api/ingredients?populate=*`
      );
      const ingdata = await ingresponse.json();
      this.ingredients = ingdata.data.filter(
        (item : any) => item.attributes.name !== "None"
      );
      console.log(this.ingredients);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.content-container {
  padding: 2rem 0;
  border-radius: 20px 20px 0 0;
}
@import "../assets/scss/global.scss";
</style>
