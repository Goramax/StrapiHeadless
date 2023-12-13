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
      <div class="swiper-button-next">
        <Chevron />
      </div>
      <div class="swiper-button-prev">
        <Chevron />
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Chevron from "@/components/icons/Chevron.vue";
import { ref, onMounted, onUnmounted } from "vue";
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

export default {
  name: "SliderComponent",
  components: {
    Chevron,
  },
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
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
    height: "auto";
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

  .swiper-slide {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.swiper-wrapper .swiper-slide {
  @media (max-width: 1024px) {
    height: "auto";
  }
  @media ((min-width: 1024px) and (max-width: 1440px)) {
    height: 512px;
  }
  @media (min-width: 1440px) {
    height: 720px;
  }
}
</style>
