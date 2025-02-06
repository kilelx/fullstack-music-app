import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Song } from '../types/song'
import { formatDuration } from '../utils/formatDuration'
import { songsData } from '../../public/audio/songs'

export const usePlayerStore = defineStore('player', () => {
  const audio = new Audio()
  const currentSong = ref<Song | null>(null)
  const currentSongIndex = ref(0)
  const isPlaying = ref(false)
  const isLooping = ref(false)
  const volume = ref(1)
  const currentTime = ref('00:00')
  const duration = ref('00:00')
  const progress = ref(0)
  const isLoaded = ref(false)

  function updateProgress() {
    if (!isLoaded.value || !audio.duration) return
    const progressValue = (audio.currentTime / audio.duration) * 100
    progress.value = Math.max(0, Math.min(100, Math.round(progressValue * 100) / 100))
    currentTime.value = formatDuration(audio.currentTime)
  }

  function resetProgress() {
    progress.value = 0
    currentTime.value = '00:00'
    duration.value = '00:00'
    isLoaded.value = false
  }

  function playSong(song: Song, autoplay = true) {
    const songIndex = songsData.findIndex(s => s.id === song.id)
    if (songIndex !== -1) {
      currentSongIndex.value = songIndex
    }

    if (currentSong.value?.id === song.id) {
      togglePlay()
      return
    }

    resetProgress()
    currentSong.value = song
    audio.src = song.file
    audio.volume = volume.value
    audio.loop = isLooping.value
    
    audio.addEventListener('canplaythrough', () => {
      isLoaded.value = true
      duration.value = formatDuration(audio.duration)
      if (autoplay) {
        audio.play()
          .then(() => {
            isPlaying.value = true
          })
          .catch(error => {
            console.error('Error playing audio:', error)
            isPlaying.value = false
          })
      }
    }, { once: true })
  }

  function togglePlay() {
    if (!isLoaded.value || !currentSong.value) return

    if (isPlaying.value) {
      audio.pause()
    } else {
      audio.play()
    }
    isPlaying.value = !isPlaying.value
  }

  function toggleLoop() {
    isLooping.value = !isLooping.value
    audio.loop = isLooping.value
  }

  function setVolume(value: number) {
    const newVolume = Math.max(0, Math.min(1, value))
    volume.value = newVolume
    audio.volume = newVolume
  }

  function setProgress(value: number) {
    if (!audio.duration) return
    const time = (value / 100) * audio.duration
    audio.currentTime = time
  }

  function prevSong() {
    currentSongIndex.value = (currentSongIndex.value - 1) % songsData.length
    if (currentSongIndex.value < 0) currentSongIndex.value = songsData.length - 1
    playSong(songsData[currentSongIndex.value])
  }

  function nextSong() {
    currentSongIndex.value = (currentSongIndex.value + 1) % songsData.length
    playSong(songsData[currentSongIndex.value])
  }

  audio.addEventListener('timeupdate', updateProgress)
  audio.addEventListener('ended', () => {
    if (isLooping.value) return
    isPlaying.value = false
    nextSong()
  })

  // Initialiser la première chanson sans la jouer
  if (songsData.length > 0) {
    playSong(songsData[0], false)
  }

  return {
    currentSong,
    currentSongIndex,
    isPlaying,
    isLooping,
    volume,
    currentTime,
    duration,
    progress,
    isLoaded,
    playSong,
    togglePlay,
    toggleLoop,
    setVolume,
    setProgress,
    prevSong,
    nextSong
  }
}) 