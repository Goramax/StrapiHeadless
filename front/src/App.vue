<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
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
};
</script>

<style lang="scss">
@import "./assets/scss/swiper.scss";
header {
  display: flex;
  align-items: center;
  gap: 4rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0 0 20px 20px;
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
