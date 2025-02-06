<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePlayerStore } from '../stores/playerStore'

const playerStore = usePlayerStore()
const isDraggingVolume = ref(false)
// const isDraggingProgress = ref(false)

const updateVolumeFromEvent = (event: MouseEvent, volumeBarElement: HTMLElement) => {
    const rect = volumeBarElement.getBoundingClientRect()
    const x = event.clientX
    const position = x - rect.left
    const width = rect.width
    const newVolume = Math.max(0, Math.min(1, position / width))
    playerStore.setVolume(newVolume)
}

const startDraggingVolume = (event: MouseEvent, volumeBarElement: HTMLElement) => {
    isDraggingVolume.value = true
    updateVolumeFromEvent(event, volumeBarElement)
    
    const handleMove = (e: MouseEvent) => updateVolumeFromEvent(e, volumeBarElement)
    const handleStop = () => {
        isDraggingVolume.value = false
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', handleStop)
    }
    
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleStop)
}

// const updateProgressFromEvent = (event: MouseEvent, progressBarElement: HTMLElement) => {
//     const rect = progressBarElement.getBoundingClientRect()
//     const x = event.clientX
//     const position = x - rect.left
//     const width = rect.width
//     const newProgress = Math.max(0, Math.min(100, (position / width) * 100))
//     playerStore.setProgress(newProgress)
// }

// const startDraggingProgress = (event: MouseEvent, progressBarElement: HTMLElement) => {
//     isDraggingProgress.value = true
//     updateProgressFromEvent(event, progressBarElement)
    
//     const handleMove = (e: MouseEvent) => updateProgressFromEvent(e, progressBarElement)
//     const handleStop = () => {
//         isDraggingProgress.value = false
//         document.removeEventListener('mousemove', handleMove)
//         document.removeEventListener('mouseup', handleStop)
//     }
    
//     document.addEventListener('mousemove', handleMove)
//     document.addEventListener('mouseup', handleStop)
// }

const volumePercentage = computed(() => playerStore.volume * 100)

defineExpose({
    isPlaying: computed(() => playerStore.isPlaying),
    currentTime: computed(() => playerStore.currentTime),
    duration: computed(() => playerStore.duration),
    progress: computed(() => playerStore.progress),
    isLooping: computed(() => playerStore.isLooping),
    currentSongIndex: computed(() => playerStore.currentSongIndex),
    volume: computed(() => playerStore.volume),
    volumePercentage,
    isDraggingVolume,
    currentSong: computed(() => playerStore.currentSong),
    togglePlay: () => playerStore.togglePlay(),
    toggleLoop: () => playerStore.toggleLoop(),
    prevSong: () => playerStore.prevSong(),
    nextSong: () => playerStore.nextSong(),
    startDraggingVolume,
    // startDraggingProgress,
})
</script>

<template>
</template>