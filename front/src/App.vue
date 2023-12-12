<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="burger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="logo">
      <router-link to="/"><img src="./assets/imgs/logo.png" alt="BurgerVerseOnline" /></router-link>
    </div>
  </header>

  <RouterView />

  <footer>
    FOOTER
  </footer>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  gap: 4rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0 0 20px 20px;
  .logo{
    display: block;
    width: 180px;
    position: relative;
    img{
      width: 100%;
      height: auto;
    }
  }
  .burger-menu{
    width: 40px;
    height: 40px;
    cursor: pointer;
    span{
      display: block;
      width: 100%;
      height: 4px;
      background-color: #000;
      margin-bottom: 8px;
      border-radius: 5px;
    }
  }
}
</style>