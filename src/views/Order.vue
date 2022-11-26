<template>
  <div class="d-lg-flex justify-content-around">
    <OrderForm :order="order" @submit:order="createOrder" />

    <OrderProducts :cartList="cartList" @update:total="totalSet" />
  </div>
</template>
<script>
import OrderForm from "@/components/OrderForm.vue";
import CartService from "@/services/cart.service";
import OrderService from "@/services/order.service";
import OrderProducts from "@/components/OrderProducts.vue";
export default {
  components: {
    OrderForm,
    OrderProducts,
  },
  data() {
    return {
      cartList: [],
      order: {},
    };
  },
  methods: {
    async getListCart() {
      try {
        this.cartList = await CartService.getAll();
        this.order.products = this.cartList;
      } catch (error) {
        console.log(error);
      }
    },
    async createOrder() {
      try {
        await OrderService.create(this.order);
        alert("Đặt Hàng Thành Công");
        await CartService.deleteAll();
        this.$router.push({ name: "Cart" });
      } catch (error) {
        console.log(error);
      }
    },

    totalSet(total) {
      this.order.total = total;
    },
    refreshList() {
      this.getListCart();
      //   this.activeIndex = -1;
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
