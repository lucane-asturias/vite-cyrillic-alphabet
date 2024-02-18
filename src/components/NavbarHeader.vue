<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <router-link to="/" class="text-white hover:text-gray-300 font-bold text-xl">Home</router-link>
      </div>
      <div class="lg:flex items-center lg:w-auto">
        <router-link to="/sentences" class="text-white hover:text-gray-300 font-medium text-lg ml-2 lg:ml-8">Sentences</router-link>
      </div>
    </div>
  </nav>
</template>