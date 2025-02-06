<script setup lang="ts">
import { ref } from 'vue';
import SidebarIcon from './SidebarIcon.vue';

const sidebarLinks = ref([
  {
    alt: "Accueil",
    route: "/",
    img: new URL("../assets/icons/home.svg", import.meta.url).href,
    imgActive: new URL("../assets/icons/home-filled.svg", import.meta.url).href,
  },
  {
    alt: "Library",
    route: "/playlists",
    img: new URL("../assets/icons/music-library.svg", import.meta.url).href,
    imgActive: new URL("../assets/icons/music-library-filled.svg", import.meta.url).href,
  },
  {
    alt: "Radio",
    route: "/radio",
    img: new URL("../assets/icons/radio.svg", import.meta.url).href,
    imgActive: new URL("../assets/icons/radio-filled.svg", import.meta.url).href,
  },
  {
    alt: "Clips",
    route: "/video",
    img: new URL("../assets/icons/videos.svg", import.meta.url).href,
    imgActive: new URL("../assets/icons/videos-filled.svg", import.meta.url).href,
  },
  {
    alt: "Profil",
    route: "/profile",
    img: new URL("../assets/icons/profile.svg", import.meta.url).href,
    imgActive: new URL("../assets/icons/profile-filled.svg", import.meta.url).href,
  },
  {
    alt: "Logout",
    route: "/logout",
    img: new URL("../assets/icons/logout.svg", import.meta.url).href,
    imgActive: new URL("../assets/icons/logout-filled.svg", import.meta.url).href,
  },
])
</script>

<template>
  <header class="flex flex-col items-center fixed top-6 left-6 w-fit">
    <img src="../assets/icons/logo-app.svg" class="w-8 h-8 mb-10" />
    <div class="bg-dark-alt rounded-full py-6 px-4">
      <ul class="flex flex-col gap-8">
        <SidebarIcon 
          v-for="link in sidebarLinks.slice(0, 4)" 
          :key="link.alt"
          :alt="link.alt" 
          :route="link.route"
          :img="link.img"
          :imgActive="link.imgActive"
        />
      </ul>
    </div>
    <div class="bg-dark-alt rounded-full py-6 px-4 mt-5">
      <ul class="flex flex-col gap-8">
        <SidebarIcon 
          v-for="link in sidebarLinks.slice(4, sidebarLinks.length)" 
          :key="link.alt"
          :alt="link.alt" 
          :route="link.route"
          :img="link.img"
          :imgActive="link.imgActive"
        />
      </ul>
    </div>
    <div>

    </div>
  </header>
</template>
