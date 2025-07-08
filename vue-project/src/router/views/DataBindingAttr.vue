<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribute 바인딩하기</p>
  <img v-bind:src="imgSrc" :width="widVal + 'px'" />
  <p>
    <input type="number" v-model.number="widVal" />
  </p>
  <p>
    <input type="text" v-model="msg" />
    <!-- v-bind => 속성(HTML attribute)에 값 바인딩 -->
    <!-- v-on =>  이벤트에 메서드 바인딩 -->
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
  </p>
  <p>객체를 활용한 바인딩</p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>
  <p>배열을 활용한 바인딩</p>
  <h3 v-bind:class="classAry">감길동</h3>
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  // data영역
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgId: "130px",
      widVal: 100,
      btnShow: true,
      msg: "",
      isRed: true, // 객체방식  바인딩 시 => {'클래스명': true, '클래스명': false}
      isActive: true,
      activeClass: "active", // 배열을 활용한 방식
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  methods: {
    // 이벤트
    alertFnc() {
      alert(this.msg);
    },
    showFnc() {
      // 홍길동의 이름을 폰트색깔을 빨간색으로 되었다가 안되었다 하는 이벤트 만들어보기
      console.log(this.msg);
      this.isRed = !this.isRed;
    },
  },
  mounted() {
    console.log(this);
    this.msg = "홍길동";
    this.imgId = "230px";
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
.active {
  background-color: antiquewhite;
}
</style>
