<script setup lang="ts">
import BottomBar from './components/BottomBar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <body class="bg-dark-base w-screen relative pl-[100px] pb-[130px] pt-[100px] min-h-[100vh]">
    <Sidebar />
    <router-view />
    <BottomBar />
  </body>
</template>

<style scoped>
</style>
