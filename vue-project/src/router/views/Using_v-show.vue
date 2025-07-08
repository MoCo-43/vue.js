<template>
  <div>
    <button @click="visible = !visible">Toggle</button>
    <p v-show="visible">이 문장은 v-show로 제어됩니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>
