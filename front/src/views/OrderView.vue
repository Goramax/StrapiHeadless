<template>
  <main>
    <h1>{{ pageTitle }}</h1>
    <div class="content-container">
      <form class="order-form">
        <section class="bun">
          <h2>Choose your buns</h2>
          <!-- show a radio for each types_with_ingredients.Bread -->
          <div class="grid">
            <div
              class="buns-radio img-radio"
              v-for="(bun, i) in types_with_ingredients.Breads"
              :key="bun.id"
            >
              <input
                type="radio"
                :id="bun.id"
                :value="bun.id"
                name="bun"
                v-model="bun[i]"
              />
              <label :for="bun.id"
                >{{ bun.attributes.name }}
                <img
                  :src="baseUrl + bun.attributes.image.data.attributes.url"
                  :alt="bun.attributes.name"
                />
              </label>
            </div>
          </div>
        </section>
      </form>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pageTitle: null,
      types_with_ingredients: [],
      baseUrl: import.meta.env.VITE_API_URL,
    };
  },
  methods: {
    async getData() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/api/create-burger?populate=*`
      );
      const data = await response.json();
      this.pageTitle = data.data.attributes.title;
      const ingresponse = await fetch(
        import.meta.env.VITE_API_URL +
          `/api/ingredients/?populate[ingredient_type][fields][0]=id&populate=image`
      );
      const ingdata = await ingresponse.json();
      const ingredients = ingdata.data;
      const ingtypesresponse = await fetch(
        import.meta.env.VITE_API_URL + `/api/ingredient-types/?populate=*`
      );
      const ingtypesdata = await ingtypesresponse.json();
      const ingredient_types = ingtypesdata.data;
      const types_with_ingredients = [];
      ingredient_types.forEach((type) => {
        const type_name = type.attributes.name;
        const type_id = type.id;
        const type_ingredients = [];
        ingredients.forEach((ingredient) => {
          if (ingredient.attributes.ingredient_type.data.id === type_id) {
            type_ingredients.push(ingredient);
          }
        });
        types_with_ingredients[type_name] = type_ingredients;
      });
      this.types_with_ingredients = types_with_ingredients;
      console.log(this.types_with_ingredients);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.content-container {
  border-radius: 20px 20px 0 0;
  padding: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.img-radio{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  input{
    display: none;
  }
  img{
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  input:checked + img{
    background-color: $color-primary;
  }
  label{
    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        font-size: 1.2rem;
        gap: 0.5rem;
        width: 100%;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: bold;
  }

}
</style>
