<script setup>
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Nested', href: '/nested' },
  { name: 'Props', href: '/props' },
  { name: 'Emit', href: '/emit' },
  { name: 'Slot', href: '/slot' },
]
</script>

<template>
  <nav class="w-54 fixed top-0 h-screen bg-secondary text-gray-800 shadow-xl px-6 py-8 font-sans">
    <h2 class="text-2xl font-bold mb-6 tracking-wide border-b pb-2 text-gray-900">
      Pertemuan 4
    </h2>

    <ul class="space-y-4 text-lg">
      <li v-for="item in navItems" :key="item.href">
        <router-link
          :to="item.href"
          class="block px-4 py-2 rounded-md transition duration-200 ease-in-out 
                 hover:bg-white hover:text-secondary hover:shadow-sm font-medium"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
