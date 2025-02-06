<script setup lang="ts">
defineProps<{
  alt: string;
  route: string;
  img: string;
  imgActive: string;
}>();
</script>

<template>
  <li>
    <router-link :to="route" class="text-white flex items-center" v-slot="{ isActive }">
      <img :src="isActive ? imgActive : img" :alt="alt" class="w-8 h-8" />
    </router-link>
  </li>
</template>

<style scoped>
</style>