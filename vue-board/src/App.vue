<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <nav class="bg-blue-600 p-4 flex gap-4 text-white shadow-lg mb-6">
      <router-link class="hover:underline" to="/">홈</router-link>
      <router-link class="hover:underline" to="/board">게시판</router-link>
    </nav>
    <router-view />
  </div>
</template>
