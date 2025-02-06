<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { albumsList } from '../mocks/mockAlbums';

const route = useRoute();
const albumId = computed(() => route.params.id as string);

const album = computed(() => {
  return albumsList.find(a => a.id === albumId.value);
});
</script>

<template>
  <div v-if="album" class="p-10">
    <h1 class="text-3xl text-secondary font-bold">{{ album.title }}</h1>
    <div class="mt-4">
      <img :src="album.imgUrl" :alt="album.title" class="w-64 h-64 object-cover">
      <p class="text-white mt-4">{{ album.artist }}</p>
    </div>
  </div>
</template>
