<template>
  <slot name="header"></slot>
  <h3>PageTitle</h3>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
  <p v-bind:class="{ 'red-font': isOk }">환영합니다</p>
  <!-- 하위컴포넌트에서 상위컴포넌트로 -->
  <ul>
    <li v-bind:key="i" v-for="(m, i) in member">
      이름: {{ m.name }}, 나이 {{ m.age }}
    </li>
  </ul>
  <slot name="footer"></slot>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  props: {
    // 상위컴포넌트에서 하위컴포넌트로 값을 전달
    title: { type: String, default: "페이지 제목" },
    likes: { type: Number, default: 0 },
    isOk: { type: Boolean, default: false },
    members: {
      type: Array,
      default: () => {
        return [{ name: "삼촌", age: 37 }];
      },
    },
  },
};
</script>

<style>
.red-font {
  color: red;
}
</style>
