<script setup lang="ts">
import { ref } from 'vue'
import pochette from '@/assets/pochette-80s.png'
import shuffleIcon from '@/assets/icons/shuffle.svg'
import prevIcon from '@/assets/icons/previous.svg'
import playIcon from '@/assets/icons/play.svg'
import pauseIcon from '@/assets/icons/pause.svg'
import repeatOne from '@/assets/icons/repeat-one.svg'
import volume from '@/assets/icons/volume.svg'
import AudioPlayer from './AudioPlayer.vue'

const audioPlayer = ref()
</script>

<template>
    <div class="w-screen h-[110px] fixed bottom-0 left-0 rounded-tr-lg rounded-tl-lg bg-[#101010] bg-opacity-30 backdrop-blur-[30px] px-6">
        <div class="max-w-[1400px] h-[110px] mx-auto flex py-6 text-white">
            <!-- Song -->
            <div class="flex gap-3 w-[225px]">
                <img :src="pochette" class="w-12 h-12 rounded-lg"/>
                <div class="flex flex-col gap-1">
                    <p class="font-bold">{{ audioPlayer.currentSong.title }}</p>
                    <p class="text-sm opacity-50">{{ audioPlayer.currentSong.author }}</p>
                </div>
            </div>
            <!-- Player -->
            <div class="w-full max-w-[750px] mx-auto">
                <div class="flex gap-10 mx-auto items-center w-fit">
                    <img :src="shuffleIcon" class="w-5 h-5 cursor-pointer opacity-50" />
                    <img :src="prevIcon" class="w-5 h-5 cursor-pointer" @click="audioPlayer.prevSong" />
                    <div class="p-2.5 bg-secondary rounded-full shadow-yellow cursor-pointer" @click="audioPlayer.togglePlay">
                        <img :src="audioPlayer.isPlaying ? pauseIcon : playIcon" class="w-5 h-5" />
                    </div>
                    <img :src="prevIcon" class="w-5 h-5 cursor-pointer transform rotate-180" @click="audioPlayer.nextSong" />
                    <img :src="repeatOne" :class="['w-5 h-5 cursor-pointer', { 'opacity-50': !audioPlayer.isLooping }]" @click="audioPlayer.toggleLoop" />
                </div>
                <div class="flex items-center gap-2">
                    <p>{{ audioPlayer.currentTime }}</p>
                    <div class="w-full h-1 bg-[rgba(255,255,255,.1)] rounded relative mt-5" @mousedown="(e) => {
                        console.log('clic')
                        audioPlayer.startDraggingProgress(e, e.target);}">
                        <div class="h-1 rounded absolute bg-secondary" :style="{ width: audioPlayer.progress + '%' }"></div>
                        <div class="h-3 w-3 rounded-full absolute top-1/2 transform -translate-y-1/2 bg-secondary shadow-light z-10"
                             :style="{ left: audioPlayer.progress + '%' }"></div>
                    </div>
                    <p>{{ audioPlayer.duration }}</p>
                </div>
            </div>
             <!-- Volume -->
            <div class="flex w-[225px] items-center gap-2">
                <img :src="volume" class="w-5 h-5" />
                <div 
                    class="w-full h-1 bg-[rgba(255,255,255,.1)] rounded relative"
                    @mousedown="(e) => audioPlayer.startDraggingVolume(e, e.target)"
                >
                    <div class="h-1 rounded absolute bg-secondary" :style="{ width: audioPlayer.volumePercentage + '%' }"></div>
                    <div class="h-3 w-3 rounded-full absolute top-1/2 transform -translate-y-1/2 bg-secondary shadow-light z-10"
                         :style="{ left: audioPlayer.volumePercentage + '%' }"></div>
                </div>
            </div>
        </div>
        <AudioPlayer ref="audioPlayer" />
    </div>
</template>