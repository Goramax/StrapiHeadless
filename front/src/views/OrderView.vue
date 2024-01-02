<template>
  <main>
    <h1>{{ pageTitle }}</h1>
    <div class="content-container">
      <div class="container-padding">
        <form class="order-form" @submit.prevent="uploadForm">
          <section class="bun">
            <h2>Choose your bun</h2>
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
                  data-type="Breads"
                  @change="updateSubtotal"
                />
                <label :for="bun.id"
                  >{{ bun.attributes.name }} (${{ bun.attributes.price }})
                  <img
                    :src="baseUrl + bun.attributes.image.data.attributes.url"
                    :alt="bun.attributes.name"
                  />
                </label>
              </div>
            </div>
          </section>
          <section class="ingredients">
            <h2>Choose your ingredients</h2>
            <h3>Meat</h3>
            <div class="grid">
              <div
                class="meat-radio img-radio"
                v-for="(meat, i) in types_with_ingredients.Meats"
                :key="meat.id"
              >
                <input
                  type="radio"
                  :id="meat.id"
                  :value="meat.id"
                  name="meat"
                  v-model="meat[i]"
                  data-type="Meats"
                  @change="updateSubtotal"
                />
                <label :for="meat.id"
                  >{{ meat.attributes.name }} (${{ meat.attributes.price }})
                  <img
                    :src="baseUrl + meat.attributes.image.data.attributes.url"
                    :alt="meat.attributes.name"
                  />
                </label>
              </div>
            </div>
            <h3>Sauces</h3>
            <div class="grid">
              <div
                class="sauce-radio img-radio"
                v-for="(sauce, i) in types_with_ingredients.Sauces"
                :key="sauce.id"
              >
                <input
                  type="checkbox"
                  :id="sauce.id"
                  :value="sauce.id"
                  name="sauce"
                  v-model="sauce[i]"
                  data-type="Sauces"
                  @change="updateSubtotal"
                />
                <label :for="sauce.id"
                  >{{ sauce.attributes.name }} (${{ sauce.attributes.price }})
                  <img
                    :src="baseUrl + sauce.attributes.image.data.attributes.url"
                    :alt="sauce.attributes.name"
                  />
                </label>
              </div>
            </div>
            <h3>Extras</h3>
            <div class="grid">
              <div
                class="extra-radio img-radio"
                v-for="(extra, i) in types_with_ingredients.Extras"
                :key="extra.id"
              >
                <input
                  type="checkbox"
                  :id="extra.id"
                  :value="extra.id"
                  name="extra"
                  v-model="extra[i]"
                  data-type="Extras"
                  @change="updateSubtotal"
                />
                <label :for="extra.id"
                  >{{ extra.attributes.name }} (${{ extra.attributes.price }})
                  <img
                    :src="baseUrl + extra.attributes.image.data.attributes.url"
                    :alt="extra.attributes.name"
                  />
                </label>
              </div>
            </div>
          </section>
          <h2>Side Dishes</h2>
          <section class="side-dishes">
            <div class="grid">
              <div
                class="side-dish-radio img-radio"
                v-for="(side_dish, i) in types_with_ingredients.Sidedishes"
                :key="side_dish.id"
              >
                <input
                  type="radio"
                  :id="side_dish.id"
                  :value="side_dish.id"
                  name="side_dish"
                  v-model="side_dish[i]"
                  data-type="Sidedishes"
                  @change="updateSubtotal"
                />
                <label :for="side_dish.id"
                  >{{ side_dish.attributes.name }} (${{
                    side_dish.attributes.price
                  }})
                  <img
                    :src="
                      baseUrl + side_dish.attributes.image.data.attributes.url
                    "
                    :alt="side_dish.attributes.name"
                  />
                </label>
              </div>
            </div>
          </section>
          <section class="drink">
            <h2>Drinks</h2>
            <div class="grid">
              <div
                class="drink-radio img-radio"
                v-for="(drink, i) in types_with_ingredients.Drinks"
                :key="drink.id"
              >
                <input
                  type="radio"
                  :id="drink.id"
                  :value="drink.id"
                  name="drink"
                  v-model="drink[i]"
                  data-type="Drinks"
                  @change="updateSubtotal"
                />
                <label :for="drink.id"
                  >{{ drink.attributes.name }} (${{ drink.attributes.price }})
                  <img
                    :src="baseUrl + drink.attributes.image.data.attributes.url"
                    :alt="drink.attributes.name"
                  />
                </label>
              </div>
            </div>
          </section>
          <section class="dessert">
            <h2>Desserts</h2>
            <div class="grid">
              <div
                class="dessert-radio img-radio"
                v-for="(dessert, i) in types_with_ingredients.Desserts"
                :key="dessert.id"
              >
                <input
                  type="radio"
                  :id="dessert.id"
                  :value="dessert.id"
                  name="dessert"
                  v-model="dessert[i]"
                  data-type="Desserts"
                  @change="updateSubtotal"
                />
                <label :for="dessert.id"
                  >{{ dessert.attributes.name }} (${{
                    dessert.attributes.price
                  }})
                  <img
                    :src="
                      baseUrl + dessert.attributes.image.data.attributes.url
                    "
                    :alt="dessert.attributes.name"
                  />
                </label>
              </div>
            </div>
          </section>
          <section class="subtotal" v-if="types_with_ingredients">
            <h2>Subtotal</h2>
            <div class="subtotal-radio">
              <p>Subtotal: ${{ subtotal }}</p>
            </div>
          </section>
          <section class="submit">
            <div class="submit-radio">
              <button type="submit">Order !</button>
            </div>
          </section>
        </form>
      </div>
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
      subtotal: 0,
      selected_ingredients: [],
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
        const type_name = type.attributes.name.replace(/\s/g, "");
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
    },
    async uploadForm() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              price: this.subtotal,
              ingredients: this.selected_ingredients,
              linkedUser: 1, // No auth, so default user
              date: new Date(),
            },
          }),
        }
      );
      const data = await response.json();
      if (data.data) {
        this.$router.push({
          name: "order-confirm",
          params: { id: data.data.id },
        });
      } else {
        alert("Error, please try again");
      }
    },
    updateSubtotal() {
      let subtotal = 0;
      // get all checked ingredients in form
      const checked_ingredients = document.querySelectorAll(
        "input[type=radio]:checked, input[type=checkbox]:checked"
      );
      // from the array types_with_ingredients, get the ingredient object that matches the checked ingredient id and add its price to the subtotal
      checked_ingredients.forEach((checked_ingredient) => {
        const ingredient_id = checked_ingredient.value;
        const ingredient_type = checked_ingredient.dataset.type;
        const ingredient = this.types_with_ingredients![ingredient_type].find(
          (ingredient) => ingredient.id === parseInt(ingredient_id)
        );
        subtotal += ingredient.attributes.price;
      });
      this.subtotal = subtotal;
      this.selected_ingredients = [];
      for (let i = 0; i < checked_ingredients.length; i++) {
        this.selected_ingredients.push(checked_ingredients[i].value);
      }
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
  .container-padding {
    padding: 2rem;
  }
}
h3 {
  text-decoration: underline;
}
h2 {
  padding: 1rem 2rem;
  background-color: $color-light-grey;
  border-radius: 20px;
  text-align: center;
}
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.img-radio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  input {
    display: none;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  input:checked + label img {
    background-color: $color-primary;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  input + label img {
    transition: all 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
  }
  label {
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
.submit-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    background-color: $color-primary;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    min-width: 20%;
    border: none;
    &:hover {
      background-color: $color-primary-dark;
      transform: scale(1.1) rotate(-2deg);
    }
  }
}
.subtotal-radio p {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
@import "../assets/scss/global.scss";
</style>
