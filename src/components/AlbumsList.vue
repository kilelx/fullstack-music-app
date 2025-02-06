<script setup lang="ts">
import SquareCardItem from './items/SquareCardItem.vue';
import { albumsList } from '../mocks/mockAlbums';

defineProps<{
  title: string;
  listType: string;
}>()
</script>

<template>
    <h2 class="text-white text-2xl font-bold mt-10">
        {{ title }}
    </h2>

    <div class="flex gap-6 mt-5 overflow-hidden overflow-x-auto relative pr-6">
        <div class="relative top-0 left-0 bg-red-400 w-5 h-10"></div>
        <SquareCardItem 
          v-for="album in albumsList" 
          :key="album.id"
          :title="album.title"
          :artist="album.artist" 
          :link="album.link"
          :imgUrl="album.imgUrl"
        />
        <SquareCardItem 
          v-for="album in albumsList" 
          :key="album.id"
          :title="album.title"
          :artist="album.artist" 
          :link="album.link"
          :imgUrl="album.imgUrl"
        />

    </div>
</template>