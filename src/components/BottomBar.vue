<script setup lang="ts">
import { ref } from 'vue'
import shuffleIcon from '@/assets/icons/shuffle.svg'
import prevIcon from '@/assets/icons/previous.svg'
import playIcon from '@/assets/icons/play.svg'
import repeatOne from '@/assets/icons/repeat-one.svg'
import volume from '@/assets/icons/volume.svg'
import AudioPlayer from './AudioPlayer.vue'

const player = ref()
const volumeBarRef = ref<HTMLDivElement>()

const handleVolumeStart = (event: MouseEvent | TouchEvent) => {
    if (volumeBarRef.value) {
        player.value?.startDraggingVolume(event, volumeBarRef.value)
    }
}
</script>

<template>
    <AudioPlayer ref="player" />
    <div class="w-screen h-[110px] fixed bottom-0 left-0 rounded-tr-lg rounded-tl-lg bg-[#101010] bg-opacity-30 backdrop-blur-[30px] px-6">
        <div class="max-w-[1400px] h-[110px] mx-auto flex py-6 text-white">
            <!-- Song -->
            <div class="flex gap-3 w-[225px]">
                <img :src="player?.currentSong?.image" class="w-12 h-12 rounded-lg object-cover"/>
                <div class="flex flex-col gap-1">
                    <p class="font-bold">{{ player?.currentSong?.title }}</p>
                    <p class="text-sm opacity-50">{{ player?.currentSong?.author }}</p>
                </div>
            </div>
            <!-- Player -->
            <div class="w-full max-w-[750px] mx-auto">
                <div class="flex gap-10 mx-auto items-center w-fit">
                    <img :src="shuffleIcon" class="w-5 h-5 cursor-pointer opacity-50" />
                    <img :src="prevIcon" class="w-5 h-5 cursor-pointer" @click="player?.prevSong" />
                    <div class="p-2.5 bg-secondary rounded-full shadow-yellow cursor-pointer" @click="player?.togglePlay">
                        <span v-if="player?.isPlaying" class="text-sm font-medium px-1">Pause</span>
                        <img v-else :src="playIcon" class="w-5 h-5" />
                    </div>
                    <img :src="prevIcon" class="w-5 h-5 cursor-pointer transform rotate-180" @click="player?.nextSong" />
                    <img :src="repeatOne" :class="['w-5 h-5 cursor-pointer', { 'opacity-50': !player?.isLooping }]" @click="player?.toggleLoop" />
                </div>
                <div class="flex items-center gap-2">
                    <p>{{ player?.currentTime }}</p>
                    <div class="w-full h-1 bg-[rgba(255,255,255,.1)] rounded relative mt-5">
                        <div class="h-1 rounded absolute bg-secondary will-change-transform" :style="{ width: player?.progress + '%' }"></div>
                        <div class="h-3 w-3 rounded-full absolute top-1/2 bg-secondary shadow-light z-10 will-change-transform"
                             :style="{ left: player?.progress + '%', transform: 'translate(-50%, -50%) translateZ(0)' }"></div>
                    </div>
                    <p>{{ player?.duration }}</p>
                </div>
            </div>
             <!-- Volume -->
            <div class="flex w-[225px] items-center gap-2">
                <img :src="volume" class="w-5 h-5" />
                <div ref="volumeBarRef" 
                     class="w-full h-1 bg-[rgba(255,255,255,.1)] rounded relative cursor-pointer"
                     @mousedown="handleVolumeStart"
                     @touchstart.prevent="handleVolumeStart">
                    <div class="h-1 rounded absolute bg-secondary will-change-transform" 
                         :style="{ width: player?.volumePercentage + '%' }"></div>
                    <div class="h-3 w-3 rounded-full absolute top-1/2 bg-secondary shadow-light z-10 will-change-transform"
                         :style="{ left: player?.volumePercentage + '%', transform: 'translate(-50%, -50%) translateZ(0)' }"></div>
                </div>
            </div>
        </div>
    </div>
</template> 