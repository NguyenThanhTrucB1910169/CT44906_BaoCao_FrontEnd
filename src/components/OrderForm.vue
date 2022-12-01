<template>
  <Form
    class="color order-form pt-3"
    @submit="submitorder"
    :validation-schema="orderFormSchema"
  >
    <div>
      <!-- <router-link
        :to="{ name: 'manager' }"
        tag="button"
        class="btn return-btn d-inline-block"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <span class="px-2">Quay lại</span>
      </router-link> -->
      <div class="form-group my-4 text-center d-inline-block">
        <h1 class="d-inline-block">Thông Tin Đặt Hàng</h1>
      </div>
    </div>

    <div class="form-group my-4">
      <label class="font-weight-bolder mx-3" for="name">Họ Tên: </label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="orderLocal.name"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group my-4">
      <label class="font-weight-bolder mx-3" for="address">Địa Chỉ</label>
      <Field
        name="address"
        type="text"
        class="form-control"
        v-model="orderLocal.address"
      />
      <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group my-4">
      <label class="font-weight-bolder mx-3" for="phone">Số Điện Thoại</label>
      <Field
        name="phone"
        type="text"
        class="form-control"
        v-model="orderLocal.phone"
      />
      <ErrorMessage name="phone" class="error-feedback" />
    </div>
    <!-- <div class="form-group my-4">
        <label class="font-weight-bolder mx-3" for="image"></label>
        <Field
          name="image"
          type="text"
          class="form-control"
          v-model="itemLocal.image"
        />
        <ErrorMessage name="image" class="error-feedback" />
      </div> -->
    <!-- <div class="form-group form-check">
        <input
          name="favorite"
          type="checkbox"
          class="form-check-input"
          v-model="itemLocal.favorite"
        />
        <label for="favorite" class="form-check-label">
          <strong>Sản phẩmyêu thích</strong>
        </label>
      </div> -->
    <div class="form-group text-center">
      <button class="btn return-btn">
        <i class="fa-regular fa-circle-check"></i>
        <span class="px-2 font-weight-bolder">Xác nhận đặt hàng</span>
      </button>
      <!-- <button
        v-if="itemLocal._id"
        type="button"
        class="ml-2 btn return-btn"
        @click="deleteItem"
      >
        <i class="fa-solid fa-trash"></i>
        <span class="px-2 font-weight-bolder">Xóa</span>
      </button> -->
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:order"],
  props: {
    order: { type: Object, required: true },
  },
  data() {
    const orderFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),

      address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
      phone: yup
        .string()
        .matches(
          /((09|03|07|08|05)+([0-9]{8})\b)/g,
          "Số điện thoại không hợp lệ."
        ),
    });
    return {
      orderLocal: this.order,
      orderFormSchema,
    };
  },
  methods: {
    submitorder() {
      this.$emit("submit:order", this.orderLocal);
    },
  },
};
</script>
<style>
@import "@/assets/form.css";
</style>
