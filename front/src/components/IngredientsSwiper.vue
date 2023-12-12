<template>
  <div class="swiper-ingredients">
    <div class="swiper-wrapper">
      <div v-for="item in items" :key="item.id" class="swiper-slide tooltip">
        <img
          :src="baseUrl + item.attributes.image.data.attributes.url"
          :alt="item.attributes.name"
        />
        <span class="tooltiptext">{{ item.attributes.name }}</span>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Swiper from "swiper";
import "swiper/css";

export default {
  name: "SwiperComponent",
  props: {
    items: {
      type: [Array, Object],
    },
  },
  setup(props) {
    const ingredientsSwiperInstance = ref<Swiper | null>(null);
    const baseUrl = import.meta.env.VITE_API_URL;

    onMounted(() => {
      ingredientsSwiperInstance.value = new Swiper(".swiper-ingredients", {
        slidesPerView: 10,
        loop: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    });

    onUnmounted(() => {
      if (ingredientsSwiperInstance.value) {
        ingredientsSwiperInstance.value.destroy();
      }
    });

    return {
      baseUrl,
    };
  },
};
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    user-select: none;
  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
