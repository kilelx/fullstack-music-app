<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { albumsList } from "../mocks/mockAlbums";
import { songsData } from "../../public/audio/songs";
import SongLineItem from "../components/items/SongLineItem.vue";

const route = useRoute();
const albumId = computed(() => route.params.id as string);

const album = computed(() => {
  return albumsList.find((a) => a.id === Number(albumId.value));
});
</script>

<template>
  <div v-if="album" class="text-white max-w-[1400px] ml-[60px]">
    <div class="flex items-end">
      <img
        :src="album.imgUrl"
        :alt="album.title"
        class="w-64 h-64 object-cover rounded-3xl"
      />
      <div class="ml-6">
        <h1 class="text-7xl text-secondary font-bold">{{ album.title }}</h1>
        <div class="flex mt-6">
          <p class="font-semibold">{{ album.artist }}</p>
          <p class="opacity-50">&nbsp;- {{ songsData.length }} songs</p>
        </div>
      </div>
    </div>

    <div class="mt-10 flex flex-col gap-6">
      <SongLineItem v-for="song in songsData" :key="song.id" :song="song" />
    </div>
  </div>
</template>
