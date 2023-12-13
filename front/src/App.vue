<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
    <div class="header-container">
      <div class="burger-menu" id="burger-menu" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="logo">
        <router-link to="/"
          ><img src="./assets/imgs/logo.png" alt="BurgerVerseOnline"
        /></router-link>
      </div>
    </div>
  </header>
  <Menu />

  <RouterView />

  <footer>
    <div class="footer-container">
      <div class="copyright">
        <p>&copy; {{ year }} BurgerVerseOnline</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    openMenu() {
      const mainMenu = document.querySelector(".main-menu");
      mainMenu?.classList.add("active");
    },
  },
  mounted() {
    window.addEventListener("scroll", function () {
      if (window.innerWidth > 768) return;
      const header = document.querySelector("header");
      header?.classList.toggle("sticky", window.scrollY > 0);
      const main = document.querySelector("main");
      if (header?.classList.contains("sticky")) {
        main?.style.setProperty(
          "margin-top",
          `${header?.offsetHeight}px`,
          "important"
        );
      } else {
        main?.style.setProperty("margin-top", "0px", "important");
      }
    });
  },
};
</script>

<style lang="scss">
@import "./assets/scss/swiper.scss";
header {
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  .header-container {
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 4rem;
    .logo {
      display: block;
      width: 180px;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
    }
    .burger-menu {
      width: 40px;
      height: 40px;
      cursor: pointer;
      span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: #000;
        margin-bottom: 8px;
        border-radius: 5px;
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    z-index: 100;
    width: 100%;
    height: "auto";
    position: relative;
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      z-index: 100;
      padding: 0;
    }
    .header-container {
      padding: 0.5rem 2rem;
      gap: 2rem;
      .logo {
        width: 120px;
      }
      .burger-menu {
        width: 30px;
        height: 30px;
        span {
          height: 3px;
          margin-bottom: 6px;
        }
      }
    }
  }
}
footer {
  background-color: #fff;
  .footer-container {
    padding: 2rem;
    color: #fff;
    background-color: $color-primary;
    border-radius: 20px 20px 0 0;
    .copyright {
      text-align: center;
      width: 100%;
    }
  }
}
</style>
