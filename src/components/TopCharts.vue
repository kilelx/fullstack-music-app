<script setup lang="ts">
  import TopChartItem from './items/TopChartItem.vue';
</script>

<template>
  <section class="w-full max-w-[600px]">
    <h3 class="text-white text-2xl">Top Charts</h3>
    <ul class="mt-4 flex flex-col gap-6">
      <TopChartItem />
      <TopChartItem />
      <TopChartItem />
    </ul>
  </section>
</template>