<template>
    <div class="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h1>Hello, {{ msg }}</h1>
<div>
    <h2>Your Posts</h2>
    <div v-for="post in query.posts">
        {{ post.title }}
    </div>
</div>

      </div>
    </div>
  </template>
  <style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>
  <script setup>
    /// Auto Import
    import { onMounted, ref, computed } from 'vue'
    import { useMotion } from '@vueuse/motion'

    /// Hydration
    const query = {}
    const vue = {}
    
    /// Script
    const msg = 'Kendrid Spirit'


    // onMounted(() => {
      // console.log('window.tailwindCSS', window.tailwindCSS)
      // window.tailwindCSS.refresh()
    // })
  </script>