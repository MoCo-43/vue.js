<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button v-on:click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleClick() {
      //  $emit을 사용
      console.log(this); // this => 현재만들어진 컴포넌트를 가르킴
      this.$emit("my-event", this.label + "을 전달"); // my-event값과 label의정보 값 까지 같이 보여주면서 방출함
    },
  },
};
</script>

<style scoped>
button {
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
}
</style>
