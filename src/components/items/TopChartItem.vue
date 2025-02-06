<script setup lang="ts">
  import { songsData } from '../../../public/audio/songs';
import { formatDuration } from '../../utils/formatDuration';

const playlistDuration = songsData.reduce((acc, song) => acc + song.duration, 0);
</script>

<template>
  <div class="bg-dark text-white flex items-center justify-between w-full">
    <div class="flex">
      <img src="@/assets/pochette-80s.png" class="w-16 h-16 rounded" />
      <div class="flex flex-col ml-3">
        <p>Golden age of Jazz</p>
        <p class="text-sm opacity-50">Sean Swadder</p>
        <p class="text-sm">{{ formatDuration(playlistDuration) }}</p>
      </div>
    </div>

    <div class="border border-white-light rounded-full p-2.5 cursor-pointer">
      <img src="@/assets/icons/heart.svg" class="w-6 h-6" />
    </div>
  </div>
</template>
