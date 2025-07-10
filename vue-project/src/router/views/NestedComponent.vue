<template>
  <h3>상위컴포넌트 = 하위컴포넌트(PageTitle)</h3>
  <!-- 데이터 속성에 있는 값을 전달할때 -->
  <!-- PageTitle이라는 값은 고정값이며, 상위 혹은 하위 컴포넌트에서 값을 전달하고싶을때 사용 가능 -->
  <PageTitle
    v-bind:title="titleMsg"
    v-bind:likes="likeCnt"
    v-bind:isOK="OkVal"
    v-bind:members="memberList"
  >
    <template v-slot><p>slot의 내용입니다</p></template>
    <template v-slot:header><p>Header의 slot입니다</p></template>
    <template v-slot:footer><p>footer의 slot입니다</p></template>
  </PageTitle>
</template>

<script>
import PageTitle from "../../components/PageTitle.vue";
export default {
  components: {
    PageTitle, // 하위 컴포넌트를 불러옴
  },
  data() {
    return {
      titleMsg: "hello",
      likeCnt: 3,
      OkVal: false,
      memberList: [
        { name: "아버지", age: 40 },
        { name: "어머니", age: 35 },
        { name: "아들", age: 5 },
      ],
    };
  },
};
</script>
