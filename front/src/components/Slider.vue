<template>
  <div class="slider-container">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="item in items" :key="item.id" class="swiper-slide">
          <img
            :src="baseUrl + item.attributes.url"
            :alt="item.attributes.alternativeText"
          />
        </div>
      </div>
    </div>
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
  setup() {
    const swiperInstance = ref<Swiper | null>(null);
    const baseUrl = import.meta.env.VITE_API_URL;

    onMounted(() => {
      swiperInstance.value = new Swiper(".swiper", {
        slidesPerView: 1,
      });
    });

    onUnmounted(() => {
      if (swiperInstance.value) {
        swiperInstance.value.destroy();
      }
    });

    return {
      baseUrl,
    };
  },
};
</script>

<style scoped lang="scss">
.slider-container {
  @media (max-width: 1024px) {
    width: 100%;
    height: 'auto';
  }
  @media ((min-width: 1024px) and (max-width: 1440px)) {
    width: 1024px;
    height: 512px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 720px;
  }
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
