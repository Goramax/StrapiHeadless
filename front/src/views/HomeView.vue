<script setup lang="ts">
import Slider from "../components/Slider.vue";
import IngredientsSwiper from "../components/IngredientsSwiper.vue";
</script>

<template>
  <h1>{{ pageTitle }}</h1>
  <main>
    <Slider :items="images" />
    <div>
      <h2>Our Ingredients</h2>
      <IngredientsSwiper :items="ingredients" />
      <div class="cta">
        <router-link to="/create" class="btn btn--primary"
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
      this.ingredients = ingdata.data;
      console.log(this.ingredients);
    },
  },
  created() {
    this.getData();
  },
};
</script>
