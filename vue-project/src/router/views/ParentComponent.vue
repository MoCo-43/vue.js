<template>
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <p class="parent-comonent">{{ msg }}</p>
  <ChildComponent v-on:send-message="sendMessage" ref="child_comp" />
  <!-- 이벤트-->
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "홍길동", // 부모속성값을 가져와 표기할 메세지
    };
  },
  components: { ChildComponent },
  // 이벤트 핸들러
  methods: {
    sendMessage(data) {
      console.log("전달받은 데이터 =>" + data);
    },
  },
};
</script>

<style></style>
