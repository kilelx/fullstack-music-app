<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { songsData } from '../../public/audio/songs'
import { formatDuration } from '../utils/formatDuration'

const audio = new Audio()
const isPlaying = ref(false)
const currentTime = ref('00:00')
const duration = ref('00:00')
const progress = ref(0)
const isLooping = ref(false)
const currentSongIndex = ref(0)
const isLoaded = ref(false)
const volume = ref(1)
const isDraggingVolume = ref(false)
const isDraggingProgress = ref(false)

const updateProgress = () => {
    if (!isLoaded.value) return
    
    if (audio.duration) {
        const progressValue = (audio.currentTime / audio.duration) * 100
        progress.value = Math.max(0, Math.min(100, Math.round(progressValue * 100) / 100))
        currentTime.value = formatDuration(audio.currentTime)
    }
}

const resetProgress = () => {
    progress.value = 0
    currentTime.value = '00:00'
    duration.value = '00:00'
    isLoaded.value = false
}

const togglePlay = () => {
    if (!isLoaded.value) return
    
    if (isPlaying.value) {
        audio.pause()
    } else {
        audio.play()
    }
    isPlaying.value = !isPlaying.value
}

const toggleLoop = () => {
    isLooping.value = !isLooping.value
    audio.loop = isLooping.value
}

const prevSong = () => {
    currentSongIndex.value = (currentSongIndex.value - 1 + songsData.length) % songsData.length
    loadSong()
}

const nextSong = () => {
    currentSongIndex.value = (currentSongIndex.value + 1) % songsData.length
    loadSong()
}

const updateVolumeFromEvent = (event: MouseEvent, volumeBarElement: HTMLElement) => {
    const rect = volumeBarElement.getBoundingClientRect()
    const x = event.clientX
    const position = x - rect.left
    const width = rect.width
    const newVolume = Math.max(0, Math.min(1, position / width))
    setVolume(newVolume)
}

const startDraggingVolume = (event: MouseEvent, volumeBarElement: HTMLElement) => {
    console.log('start dragging')
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

const updateProgressFromEvent = (event: MouseEvent, progressBarElement: HTMLElement) => {
    const rect = progressBarElement.getBoundingClientRect()
    const x = event.clientX
    const position = x - rect.left
    const width = rect.width
    const newProgress = Math.max(0, Math.min(1, position / width))
    progress.value = newProgress
}

const startDraggingProgress = (event: MouseEvent, progressBarElement: HTMLElement) => {
    isDraggingProgress.value = true
    updateVolumeFromEvent(event, progressBarElement)
    
    const handleMove = (e: MouseEvent) => updateProgressFromEvent(e, progressBarElement)
    const handleStop = () => {
        isDraggingProgress.value = false
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', handleStop)
    }
    
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleStop)
}

// const setProgress = (value: number) => {
//     const newVolume = Math.max(0, Math.min(1, value))
//     volume.value = newVolume
//     audio.volume = newVolume
// }

const setVolume = (value: number) => {
    const newVolume = Math.max(0, Math.min(1, value))
    volume.value = newVolume
    audio.volume = newVolume
}

const loadSong = () => {
    try {
        resetProgress()
        const song = songsData[currentSongIndex.value]
        audio.src = song.file
        audio.volume = volume.value
        
        audio.addEventListener('canplaythrough', () => {
            isLoaded.value = true
            duration.value = formatDuration(audio.duration)
            if (isPlaying.value) {
                audio.play().catch(error => {
                    console.error('Error playing audio:', error)
                    isPlaying.value = false
                })
            }
        }, { once: true })
    } catch (error) {
        console.error('Error loading song:', error)
    }
}

onMounted(() => {
    loadSong()
    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', () => {
        if (!isLooping.value) {
            nextSong()
        }
    })
})

onUnmounted(() => {
    audio.removeEventListener('timeupdate', updateProgress)
    audio.pause()
    audio.src = ''
})

const currentSong = computed(() => songsData[currentSongIndex.value])
const volumePercentage = computed(() => volume.value * 100)

defineExpose({
    isPlaying, // 2tat de lecture
    currentTime,
    duration, // durée totale
    progress, // progress en %
    isLooping,
    currentSongIndex,
    volume,
    volumePercentage,
    isDraggingVolume,
    currentSong,
    togglePlay,
    toggleLoop,
    prevSong,
    nextSong,
    startDraggingVolume,
    startDraggingProgress,
})
</script>

<template>
</template>