<script setup>
import EmitChild from '../ui/EmitChild.vue'
import emit1 from '../../assets/emit1.png' // SS kode anak (yang emit)
import emit2 from '../../assets/emit2.png' // SS kode induk (yang menangkap)

import { ref } from 'vue'
const message = ref('')
</script>

<template>
  <section class="p-10 space-y-12">
    <!-- Judul -->
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
        <span class="w-3 h-8 bg-secondary rounded-sm"></span>
        Emit di Vue 3
      </h1>
      <p class="text-lg text-gray-700 max-w-4xl leading-relaxed">
        <strong>Emit</strong> digunakan dalam Vue untuk mengirim event dari komponen anak ke komponen induk.
        Biasanya digunakan saat anak ingin memberi tahu induk bahwa suatu aksi terjadi.
        Di bawah ini adalah contoh komponen anak yang memancarkan event dan induk yang menanggapinya.
      </p>
    </div>

    <!-- Kode Anak -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Anak</h2>
      </div>
      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="emit1" alt="Kode Emit Anak" class="rounded-md shadow-md border" />
      </div>
    </div>

    <!-- Kode Induk -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Induk</h2>
      </div>
      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="emit2" alt="Kode Emit Induk" class="rounded-md shadow-md border" />
      </div>
    </div>

    <!-- Output -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Hasil Output</h2>
      </div>
      <div class="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm space-y-4">
        <EmitChild @sendMessage="message = $event" />
        <p v-if="message" class="text-lg text-green-700 font-semibold">
          Pesan dari anak: {{ message }}
        </p>
      </div>
    </div>
  </section>
</template>
