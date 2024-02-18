<template>
  <div class="flex flex-col justify-center items-center my-5">
    <div class="w-full max-w-4xl">
      <div class="w-full p-4">
        <h2 class="text-2xl font-bold mb-6 text-center tracking-widest">Cyrillic Alphabet</h2>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="letter in russianAlphabet"
            :key="letter"
            @click="setSelectedLetter(letter)"
            class="cursor-pointer p-4 m-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            :class="{ 'bg-slate-600': letter === selectedLetter }"
          >
            <p class="text-lg">{{ letter }}</p>
          </div>
        </div>
      </div>
      <div ref="letterInfoContainer" class="p-4">
        <h2 class="text-2xl font-bold mb-6 text-center tracking-widest">Letter Information</h2>
        <div v-if="selectedLetter" class="p-4 px-5 bg-gray-800 rounded-lg space-y-5 tracking-wider">
          <div class="text-center border-b border-gray-600 pb-2">
            <span class="text-3xl mr-2">{{ selectedLetter }}</span>
            <span class="text-xl">{{ selectedLetter.toLowerCase() }}</span>
          </div>
          <section class="letter-info border-b border-gray-600 py-2 leading-relaxed">
            <p 
              v-for="info in generalInfo[selectedLetter]"
              :key="info"
              class="mb-2"
            ><span v-html="info" /></p>
          </section>
          <section class="letter-sentence">
            <ul v-if="sentenceInfo[selectedLetter]">
              <li class="mb-2"
                v-for="sentence in sentenceInfo[selectedLetter]"
                :key="sentence"
              ><span v-html="sentence" /></li>
            </ul>
          </section>
          <section class="next-prev-buttons border-t border-gray-600 pt-5 flex flex-col items-center">
            <div class="mb-3 text-xs">You can use the arrow keys to navigate!</div>
            <div class="flex">
              <button 
                v-if="selectedLetter !== 'А'" 
                @click="goToPrevLetter" 
                class="mr-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 outline-none text-white font-bold py-2 px-4 rounded-md"
              >⬅ Previous letter</button>
              <button
                v-if="selectedLetter !== 'Я'"
                @click="goToNextLetter"
                class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 outline-none text-white font-bold py-2 px-4 rounded-md"
              >Next letter ➡</button>
            </div>
          </section>
        </div>
        <div v-else class="p-4 bg-gray-800 rounded-lg">
          <p class="italic">Click on a letter to see its information! (Start in alphabetical order if you are beginner)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { generalInfo, sentenceInfo } from '../helper/alphabet_data.ts'

const russianAlphabet = [
  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
  'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
]

const letterInfoContainer = ref(null)
const selectedLetter = ref(null)

onMounted(() => window.addEventListener('keydown', handleKeyPress))
onUnmounted(() => window.removeEventListener('keydown', handleKeyPress))

function setSelectedLetter(letter) {
  selectedLetter.value = letter
  letterInfoContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function handleKeyPress(event) {
  if (event.key === 'ArrowLeft') goToPrevLetter()
  else if (event.key === 'ArrowRight') goToNextLetter()
}

const scrollToLetterInfoContainer = () => {
  if (letterInfoContainer.value) {
    letterInfoContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function goToNextLetter() {
  const currentIndex = russianAlphabet.indexOf(selectedLetter.value)
  if (currentIndex < russianAlphabet.length - 1) {
    selectedLetter.value = russianAlphabet[currentIndex + 1]
    scrollToLetterInfoContainer()
  }
}

function goToPrevLetter() {
  const currentIndex = russianAlphabet.indexOf(selectedLetter.value)
  if (currentIndex > 0) {
    selectedLetter.value = russianAlphabet[currentIndex - 1]
    scrollToLetterInfoContainer()
  }
}
</script>