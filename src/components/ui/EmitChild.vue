<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['sendMessage'])

const kirimPesan = () => {
  emit('sendMessage', 'Halo dari komponen anak!')
}
</script>

<template>
  <button @click="kirimPesan"
          class="bg-secondary text-white px-4 py-2 rounded shadow hover:opacity-90 transition">
    Kirim Pesan ke Induk
  </button>
</template>
