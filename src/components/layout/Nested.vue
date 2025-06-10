<script setup>
import NestedChildA from '../ui/NestedChildA.vue'
import NestedChildB from '../ui/NestedChildB.vue'
import n1 from '../../assets/n1.png'
import n2 from '../../assets/n2.png'
</script>

<template>
  <section class="p-10 space-y-12">
    <!-- Judul Utama -->
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
        <span class="w-3 h-8 bg-secondary rounded-sm"></span>
        Nested Component
      </h1>
      <p class="text-lg text-gray-700 max-w-4xl leading-relaxed">
        Nested component adalah komponen yang dipanggil di dalam komponen lainnya. Hal ini membantu menyusun tampilan secara lebih modular, terstruktur, dan mudah dikelola.
        Berikut ini adalah contoh dua komponen anak yang disisipkan ke dalam satu komponen induk.
      </p>
    </div>

    <!-- Komponen Anak A -->
    <div class="space-y-6">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Anak A</h2>
      </div>

      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="n1" alt="Kode Anak A" class="rounded-md shadow-md border" />
      </div>

      <div class="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm">
        <NestedChildA />
      </div>
    </div>

    <!-- Komponen Anak B -->
    <div class="space-y-6">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Anak B</h2>
      </div>

      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="n2" alt="Kode Anak B" class="rounded-md shadow-md border" />
      </div>

      <div class="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm">
        <NestedChildB />
      </div>
    </div>
  </section>
</template>
