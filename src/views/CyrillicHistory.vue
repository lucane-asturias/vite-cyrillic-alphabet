<template>
  <div class="px-8 py-12 max-w-3xl mx-auto">
    <div class="text-2xl text-center mb-8">
      <p>
        The Cyrillic script, derived from the Greek alphabet with additional characters from the Glagolitic alphabet, was developed in the 9th century. Named after Saints Cyril and Methodius, it was initially used to spread Christianity among Slavic peoples.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-center">History of Cyrillic Script</h2>
      <p>
        Tsar Peter the Great reformed the Cyrillic alphabet in the early 18th century, aligning it more closely with the Latin alphabet. This reform aimed to modernize the script and promote literacy.
      </p>
      <p>
        The Cyrillic script played a crucial role in the dissemination of Russian culture and language across Eastern Europe, the Caucasus, Central Asia, and beyond, during the expansion of the Russian Empire and the Soviet Union.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-center">Writing System</h2>
      <p>
        Like English, Cyrillic is written from left to right and comprises uppercase and lowercase letters. However, there are distinctions between typed and handwritten Cyrillic letters, especially in cursive handwriting.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-center">Stress and Pronunciation</h2>
      <p>
        In Russian, every word has only one stress, which affects the pronunciation of the stressed vowel and neighboring vowels. Stress placement is essential for reading and understanding Russian words accurately.
      </p>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-4 text-center">Learning Cyrillic</h2>
      <p>
        To begin, familiarize yourself with the five Russian letters that closely resemble their English counterparts in appearance and pronunciation:
      </p>
      <ul class="list-disc pl-8">
        <li><strong>A а</strong> - Pronounced like the English "ah!"</li>
        <li><strong>O о</strong> - Pronounced like the English "oh!"</li>
        <li><strong>Ye е</strong> - Pronounced as "ye" or "e" depending on context</li>
        <li><strong>Em м</strong> - Equivalent to the English letter "M"</li>
        <li><strong>Ka к</strong> - Equivalent to the English letter "K"</li>
        <li><strong>Te т</strong> - Equivalent to the English letter "T"</li>
      </ul>
      <div class="mt-8">
        <p>Basic Words:</p>
        <ul class="list-disc pl-8">
          <li><strong>Мама</strong> (Mama) - Mom</li>
          <li><strong>Папа</strong> (Papa) - Dad</li>
          <li><strong>Топ</strong> (Top) - Top</li>
          <li><strong>Кот</strong> (Kot) - Cat (feminine)</li>
          <li><strong>Кошка</strong> (Koshka) - Cat (masculine)</li>
        </ul>
      </div>
    </div>
    <div class="mt-8">
      <p>
        To further expand your knowledge of the Cyrillic alphabet, please go to the specialized page on this subject by clicking the button below.
      </p>
    </div>
    <router-link :to="{ name: 'alphabet' }" class="flex inline-block justify-center mt-10 -ml-5">
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
        Learn more about Cyrillic Alphabet
      </button>
    </router-link>
  </div>
</template>