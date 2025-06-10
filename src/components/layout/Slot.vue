<script setup>
import SlotChild from '../ui/SlotChild.vue'
import slot1 from '../../assets/slot1.png' // SS komponen anak (yang pakai <slot>)
import slot2 from '../../assets/slot2.png' // SS komponen induk (yang isi slot)
</script>

<template>
  <section class="p-10 space-y-12">
    <!-- Judul -->
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
        <span class="w-3 h-8 bg-secondary rounded-sm"></span>
        Slot di Vue 3
      </h1>
      <p class="text-lg text-gray-700 max-w-4xl leading-relaxed">
        <strong>Slot</strong> digunakan di Vue untuk memungkinkan komponen induk mengisi konten
        di bagian tertentu dalam komponen anak. Slot sangat berguna untuk membuat komponen
        yang fleksibel dan bisa digunakan ulang.
      </p>
    </div>

    <!-- Kode Anak (yang pakai <slot>) -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Anak</h2>
      </div>
      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="slot1" alt="Kode Slot Anak" class="rounded-md shadow-md border" />
      </div>
    </div>

    <!-- Kode Induk (yang isi slot) -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Kode Komponen Induk</h2>
      </div>
      <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img :src="slot2" alt="Kode Slot Induk" class="rounded-md shadow-md border" />
      </div>
    </div>

    <!-- Output Slot -->
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-2 h-6 bg-secondary rounded-sm"></span>
        <h2 class="text-2xl font-semibold text-gray-800">Hasil Output</h2>
      </div>
      <div class="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm">
        <SlotChild>
          <p class="text-lg text-purple-800 font-semibold">
            Ini adalah konten dari komponen induk yang masuk ke dalam slot anak.
          </p>
        </SlotChild>
      </div>
    </div>
  </section>
</template>
