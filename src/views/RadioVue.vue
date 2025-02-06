<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://player.radioking.io/scripts/iframe.bundle.js'
  script.type = 'text/javascript'
  document.body.appendChild(script)
})
</script>

<template>
  <h1 class="text-3xl text-secondary font-bold ml-10">Radio</h1>
  <div class="mt-6 ml-4 grid grid-cols-3">
    <iframe src="https://player.radioking.io/radio-pomme-dapi/?c=%23FFED00&c2=%232F3542&f=v&i=0&p=1&s=0&li=1&popup=0&plc=0&h=365&l=275&v=2" style="border-radius: 5px; width: 275px; height: 365px;" frameBorder="0"></iframe>
    <div>
      <iframe src="https://embed.radiofrance.fr/francebleu/player?id_station=20" width="300" height="150" frameborder="0" allow="autoplay" class="w-full"></iframe>
      <iframe src="https://embed.radiofrance.fr/francebleu/player?id_station=34" width="300" height="150" frameborder="0" allow="autoplay" class="w-full"></iframe>
    </div>
  </div>
</template>
