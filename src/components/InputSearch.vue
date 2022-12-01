<script>
export default {
  props: {
    modelValue: { type: String, default: "" },
  },
  // data: {
  //   key: "",
  // },
  emits: ["submit", "update:modelValue"],
  methods: {
    updateModelValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    submit() {
      this.$emit("submit");
    },
    // changeSort(event) {
    //   console.log(event.target.value);
    // },
    // highPrice() {
    //   alert("Tăng dần");
    // },
    // lowPrice() {
    //   alert("Giảm dần");
    // },
  },
};
</script>

<template>
  <!-- <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Nhập thông tin cần tìm"
      :value="modelValue"
      @input="updateModelValue"
      @keyup.enter="submit"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="submit">
        <i class="fa-brands fa-searchengin"></i> Tìm kiếm
      </button>
    </div>
  </div> -->
  <div class="input-group rounded input-search">
    <button class="btn btn-outline-secondary search-icon" type="button">
      <i class="fas fa-search"></i>
    </button>

    <input
      type="text"
      class="form-control search-text"
      placeholder="Nhập thông tin cần tìm"
      :value="modelValue"
      @input="updateModelValue"
      @keyup.enter="submit"
    />
    <!-- <select name="" id="" @change="changeSort(this.key)" v-model="key">
      <option value="1">Giá Tăng dần</option>
      <option value="2">Giá Giảm dần</option>
    </select> -->
  </div>
</template>
