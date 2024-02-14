<template>
  <div class="flex flex-col justify-center items-center mt-5">
   
    <div class="w-full max-w-4xl">
      <div class="w-full p-4">
        <h2 class="text-2xl font-bold mb-6 text-center">Russian Alphabet</h2>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="letter in russianAlphabet"
            :key="letter"
            @click="selectedLetter = letter"
            class="cursor-pointer p-4 m-2 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <p class="text-lg">{{ letter }}</p>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-6 text-center">Letter Information</h2>
        <div v-if="selectedLetter" class="p-4 bg-gray-800 rounded-lg">
          <p class="font-bold">{{ selectedLetter }}</p>
          <p>{{ letterInfo[selectedLetter] }}</p>
        </div>
        <div v-else class="p-4 bg-gray-800 rounded-lg">
          <p class="italic">Click on a letter to see its information.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const russianAlphabet = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
    'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
  ]
  const letterInfo = {
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    // Add information for other letters
  }
  let selectedLetter = null;
</script>