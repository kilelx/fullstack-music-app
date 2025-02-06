<script setup lang="ts">
import { Song } from '../../../public/audio/songs';
import { usePlayerStore } from '../../stores/playerStore';
import { formatDuration } from '../../utils/formatDuration';

const props = defineProps<{
    song: Song
}>();

const playerStore = usePlayerStore()

// Pour jouer une chanson
const handleClick = () => {
  playerStore.playSong(props.song)
}
</script>

<template>
    <div class="flex items-center text-white cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors" @click="handleClick">
        <img :src="song.image" class="w-12 h-12 object-cover rounded mr-3" />
        <p class="font-semibold">{{ song.title }}</p>
        <p class="opacity-50 text-sm">&nbsp;- {{ song.author }}</p>
        <p class="ml-auto">{{ formatDuration(song.duration) }}</p>
    </div>
</template>
