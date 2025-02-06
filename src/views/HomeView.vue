<script setup lang="ts">
import AlbumsList from "../components/AlbumsList.vue";
import TopCharts from "../components/TopCharts.vue";
import TopChartsList from "../components/TopChartsList.vue";
</script>

<template>
  <div class="flex w-full gap-10 max-w-[1400px]">
    <section class="w-full">
      <div
        class="max-w-[700px] w-full rounded-[50px] bg-[#609EAF] p-10 text-white relative overflow-hidden"
      >
        <div class="h-full flex flex-col justify-between gap-20 w-2/3">
          <p class="text-sm">Currated playlist</p>
          <div>
            <h2 class="text-4xl font-bold">Classic Jazz</h2>
            <p class="max-w-[280px]">
              I Got A Woman, Petty call me everyday, Out of time, No love,
              Louis Armstrong, and so much more
            </p>
          </div>
          <p>32k Likes</p>
        </div>
        <img
          src="/eric-isma.png"
          class="absolute max-h-full object-cover bottom-0 right-10 z-10"
        />
        <img
          src="/white-lines.svg"
          class="absolute w-full z-0 bottom-0 -right-1/4"
        />
      </div>
    </section>
    <TopCharts />
  </div>

  <AlbumsList title="New releases." listType="album" />
  <TopChartsList title="Top charts." listType="Song" />
</template>
