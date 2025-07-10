<template>
  <ul>
    <li v-for="post in posts" :key="post.id" class="border-b flex items-center">
      <router-link :to="'/board/' + post.id" class="block p-4 flex-1">
        <span class="font-semibold text-lg text-blue-700">{{
          post.title
        }}</span>
        <br />
        <span class="font-semibold text-lg text-Black-500">{{
          post.auth
        }}</span>
        <span class="block text-gray-500 text-sm mt-1"
          >{{ post.content.slice(0, 40) }}...</span
        >
      </router-link>
      <button
        class="ml-2 px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-700"
        @click="$emit('delete-post', post.id)"
      >
        삭제
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["posts"],
};
</script>
