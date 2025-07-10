<template>
  <h3>MiddleComponent.vue (중간컴포넌트)</h3>
  <GrandChildComponent />
</template>

<script>
import GrandChildComponent from "./GrandChildComponent.vue";
export default {
  components: { GrandChildComponent },
};
</script>

<style scoped>
.middle-component {
  border: 1px solid red;
}
</style>
