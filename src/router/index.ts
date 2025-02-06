import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaylistView from '../views/PlaylistView.vue'
import RadioVue from '../views/RadioVue.vue'
import VideoVue from '../views/VideoVue.vue'
import ProfileVue from '../views/ProfileVue.vue'
import LogoutVue from '../views/LogoutVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: PlaylistView
    },
    {
      path: '/radio',
      name: 'radio',
      component: RadioVue
    },
    {
      path: '/video',
      name: 'video',
      component: VideoVue
    },
    {
      path: '/profile',
      name: 'profil',
      component: ProfileVue
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutVue
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('../views/AlbumVue.vue')
    },
  ]
})

export default router