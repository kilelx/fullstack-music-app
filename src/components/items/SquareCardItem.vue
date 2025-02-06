<script setup lang="ts">
defineProps<{
  title: string;
  artist: string;
  link: string;
  imgUrl: string;
}>()
</script>

<template>
    <div class="flex flex-col min-w-[150px] text-white cursor-pointer">
        <img :src="imgUrl" alt="" class="w-full h-[150px] object-cover rounded-3xl">
        <p class="text-lg mt-1">{{ title }}</p>
        <p class="opacity-50 text-sm">{{ artist }}</p>
    </div>
</template>