<script setup>
import PropsChild from '../ui/PropsChild.vue'
import props1 from '../../assets/props1.png' 
import props2 from '../../assets/props2.png' 
</script>

<template>
  <section class="p-10 space-y-12">
    <!-- Judul Utama -->
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
        <span class="w-3 h-8 bg-secondary rounded-sm"></span>
        Props di Vue 3
      </h1>
      <p class="text-lg text-gray-700 max-w-4xl leading-relaxed">
        <strong>Props</strong> adalah mekanisme untuk mengirim data dari komponen induk ke komponen anak.
        Props memungkinkan komponen menjadi lebih fleksibel dan dapat digunakan ulang dengan data berbeda.
        Di bawah ini adalah contoh implementasi props sederhana.
      </p>
    </div>

    <!-- Kode Komponen Induk -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Induk</h2>
      </div>

      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="props1" alt="Kode Props Induk" class="rounded-md shadow-md border" />
      </div>
    </div>

    <!-- Kode Komponen Anak -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Anak</h2>
      </div>

      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="props2" alt="Kode Props Anak" class="rounded-md shadow-md border" />
      </div>
    </div>

    <!-- Output Props -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Hasil Output</h2>
      </div>

      <div class="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm">
        <PropsChild name="Vue Developer" role="Frontend Engineer" />
      </div>
    </div>
  </section>
</template>
