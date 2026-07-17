<script setup>
import { stats } from '@/data/stats'
import StatCard from './StatCard.vue'
</script>

<template>
  <section class="relative z-10 -mt-20 px-6 md:-mt-24 md:px-10">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
      <StatCard v-for="stat in stats" :key="stat.label" :stat="stat" />
    </div>
  </section>
</template>
