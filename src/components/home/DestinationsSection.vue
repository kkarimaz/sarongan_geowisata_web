<script setup>
import { destinations } from '@/data/destinations'
import DestinationRow from './DestinationRow.vue'

const featured = destinations.slice(0, 3)
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
    <h2 class="font-sans text-3xl font-bold tracking-wide text-brand-600 md:text-4xl">Destinations</h2>

    <div class="mt-12 flex flex-col gap-16 md:gap-20">
      <DestinationRow
        v-for="(destination, index) in featured"
        :key="destination.slug"
        :destination="destination"
        :reverse="index % 2 === 1"
      />
    </div>

    <div class="mt-16 text-center">
      <router-link
        to="/destination"
        class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        Lihat Semua Destinasi
        <span aria-hidden="true">&rarr;</span>
      </router-link>
    </div>
  </section>
</template>
