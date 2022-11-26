<script>
import AppBar from "./components/AppBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    AppBar,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <AppBar />
    <!-- <div class="container mt-3"> -->
    <router-view />
    <!-- <h1>Hello World</h1>  -->
    <!-- </div> -->
    <Footer></Footer>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
