<template>
  <h3>자식컴포넌트(ChildComponent.vue)</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage" ref="sendBtn">메세지보내기</button>
  <!-- 이벤트-->
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      // 이벤트 핸들러
      this.$emit("send-message", this.msg); // $emit => 전달값을 방출하는거  // send-message 부모컴포넌트에 있는 거를 호출
      // this.$parent.msg = this.msg;
      // this.$parent.sendMessage("Test");
      // this.$parent.$parent.msg = this.msg; // 상위에 있는 부모 부모 를 표기
      // this.$root.msg = this.msg; //  this.$parent.$parent.msg 이거 대신 최상위 값 표기
    },
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>
