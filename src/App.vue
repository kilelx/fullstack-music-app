<script setup lang="ts">
import BottomBar from './components/BottomBar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <body class="bg-dark-base w-screen relative pl-[100px] pt-[100px] h-[120vh]">
    <Sidebar />
    <router-view />
    <BottomBar />
  </body>
</template>

<style scoped>
</style>
