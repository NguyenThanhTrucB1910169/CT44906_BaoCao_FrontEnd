<template>
  <nav class="navbar navbar-expand-lg nabar">
    <div class="nav-title">
      <img src="../assets/Untitled design.png" alt="" class="logo" />
      <a href="/" class="navbar-brand">Jazzy Jewels</a>
    </div>

    <div class="nav-links">
      <router-link
        :to="{ name: 'Home' }"
        tag="button"
        class="btn btn-default d-inline-block"
        >Trang chủ</router-link
      >
      <router-link
        :to="{ name: 'Products' }"
        tag="button"
        class="btn btn-default d-inline-block"
        >Sản Phẩm</router-link
      >
      <router-link
        :to="{ name: 'Signin' }"
        tag="button"
        class="btn btn-default d-inline-block"
        @click="alertLogin"
        >Quản lý sản phẩm</router-link
      >
      <router-link
        :to="{ name: 'Signup' }"
        tag="button"
        class="btn btn-default d-inline-block"
        >Đăng Ký</router-link
      >
    </div>
    <router-link
      :to="{ name: 'Cart' }"
      tag="button"
      class="btn btn-default d-inline-block icon"
      ><i class="fa-solid fa-bag-shopping"></i
    ></router-link>
  </nav>
</template>
<script>
export default {
  methods: {
    alertLogin() {
      alert("Đăng nhập để quản lý sản phẩm!");
    },
  },
};
</script>
