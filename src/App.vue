<script setup>
import Sidebar from './components/layout/Sidebar.vue'
</script>

<template>
  <div class="bg-primary min-h-screen flex">
    <!-- Sidebar -->
    <Sidebar class="w-54" />

    <!-- Main content -->
    <main class="w-full ml-54">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
