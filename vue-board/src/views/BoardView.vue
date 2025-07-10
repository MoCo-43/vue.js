<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-blue-700">게시글 목록</h2>
    <BoardForm @add-post="addPost" />
    <BoardList :posts="posts" @delete-post="onDelete" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BoardList from "../components/BoardList.vue";
import BoardForm from "../components/BoardForm.vue";

export default {
  components: { BoardList, BoardForm },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["addPost", "deletePost"]),
    onDelete(id) {
      this.deletePost(id);
    },
  },
};
</script>
