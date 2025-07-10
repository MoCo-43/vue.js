<template>
  <div class="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
    <div v-if="post">
      <h2 class="text-2xl font-bold text-blue-700 mb-2">{{ post.title }}</h2>
      <h2 class="text-2xl font-bold text-black-500 mb-2">{{ post.auth }}</h2>
      <div class="text-gray-700 whitespace-pre-line mb-4">
        {{ post.content }}
      </div>
      <router-link to="/board" class="text-blue-600 hover:underline"
        >← 목록으로</router-link
      >
    </div>
    <div v-else class="text-gray-400">존재하지 않는 게시글입니다.</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BoardDetail",
  computed: {
    ...mapGetters(["getPostById"]),
    post() {
      return this.getPostById(this.$route.params.id);
    },
  },
};
</script>
