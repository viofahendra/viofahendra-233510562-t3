<script setup>
defineProps({
  name: String,
  role: String,
})
</script>

<template>
  <div class="p-4 bg-blue-100 text-blue-900 rounded shadow">
    <p class="font-bold">Halo, {{ name }}!</p>
    <p class="italic">Pekerjaanmu: {{ role }}</p>
  </div>
</template>
