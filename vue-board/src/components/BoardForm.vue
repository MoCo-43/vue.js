<template>
  <form
    @submit.prevent="submit"
    class="mb-8 flex flex-col gap-3 bg-blue-50 p-4 rounded-xl shadow-sm"
  >
    <input
      v-model="title"
      required
      placeholder="제목"
      class="border p-2 rounded"
    />
    <input v-model="auth" placeholder="작성자" class="border p-2 rounded" />
    <textarea
      v-model="content"
      required
      placeholder="내용"
      class="border p-2 rounded h-24"
    ></textarea>
    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      등록
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      auth: "",
    };
  },
  methods: {
    submit() {
      if (!this.title || !this.content || !this.auth) return;
      this.$emit("add-post", {
        title: this.title,
        content: this.content,
        auth: this.auth,
      });
      this.title = "";
      this.content = "";
      this.auth = "";
    },
  },
};
</script>
