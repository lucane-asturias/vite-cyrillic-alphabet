<template>
  <nav class="bg-gray-800 p-4">
    <div class="flex justify-between items-center">
      <div>
        <router-link to="/" class="text-white font-bold text-xl">Home</router-link>
      </div>
      <div class="lg:flex lg:items-center lg:w-auto">
        <router-link to="/cyrillic-alphabet" class="text-white font-medium text-lg lg:ml-8">Cyrillic Alphabet</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const showMenu = ref(false)

  function toggleMenu() {
    showMenu.value = !showMenu.value
  }
</script>