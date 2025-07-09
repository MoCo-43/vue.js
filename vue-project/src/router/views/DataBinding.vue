<template>
  <h1>Hello, {{ msg }}</h1>
  <h1 v-text="msg"></h1>
  <!-- 디렉티브-->
  <h2 v-html="htmlStr"></h2>

  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model.number="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">경기</option>
      <option value="052">부산</option>
    </select>
  </p>

  <p>
    <label
      >{{ checking }}
      <input
        type="checkbox"
        true-value="yes"
        false-value="no"
        v-model="checking"
      />
    </label>
  </p>
  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}</p>
</template>

<script>
// view-model의 바인딩
export default {
  data() {
    return {
      msg: "World!!",
      htmlStr: `<span style="color: red;">Red Text</span>`,
      valueModel: "홍길동",
      numberModel: 10,
      city: "042",
      checking: "yes",
    };
  },
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>
