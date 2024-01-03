<template>
  <div class="main-menu">
    <span class="close-menu" id="close-menu" @click="closeMenu">
      <span></span>
      <span></span>
    </span>
    <div class="main-menu-container">
      <div class="main-menu-content">
        <div class="main-menu-content__item">
          <router-link to="/" class="btn btn--primary" @click="closeMenu"
            >Home</router-link
          >
        </div>
        <div class="main-menu-content__item">
          <router-link to="/order" class="btn btn--primary" @click="closeMenu"
            >Create your own burger !</router-link
          >
        </div>
        <!-- <div class="main-menu-content__item">
          <router-link to="/login" class="btn btn--primary" @click="closeMenu"
            >Login</router-link
          >
        </div>
        <div class="main-menu-content__item">
          <router-link
            to="/register"
            class="btn btn--primary"
            @click="closeMenu"
            >Register</router-link
          >
        </div> -->
        <div class="main-menu-content__item">
          <router-link
            to="/admin"
            class="btn btn--primary"
            @click="closeMenu"
            >Admin</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainMenuComponent",
  methods: {
    closeMenu() {
      const mainMenu = document.querySelector(".main-menu");
      mainMenu?.classList.remove("active");
    },
  },
};
</script>

<style lang="scss">
.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  &.active {
    z-index: 999;
    opacity: 1;
  }
  &:not(.active) {
    z-index: -10;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-100%);
  }
  .main-menu-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .main-menu-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .main-menu-content__item {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .btn {
          padding: 1rem 2rem;
          border-radius: 5px;
          transition: all 0.2s ease-in-out;
          background-color: $color-primary;
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          width: 100%;
          &:hover {
            background-color: $color-primary-dark;
            transform: scale(1.1) rotate(-2deg);
          }
        }
      }
    }
  }
  .close-menu {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 1;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 100%;
      height: 4px;
      background-color: #000;
      border-radius: 5px;
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
