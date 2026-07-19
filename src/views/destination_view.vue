<script setup>
import PageBanner from '@/components/layout/DestPageBanner.vue'
import DestinationCard from '@/components/common/DestinationCard.vue'
import { destinations } from '@/data/destinations'
</script>

<template>
  <div>
    <PageBanner eyebrow="Jelajahi" title="Destinations" />

    <section class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <p class="max-w-2xl text-brand-950/65">
        Daftar destinasi wisata di kawasan Sarongan berikut masih menggunakan data dan foto
        placeholder — akan diperbarui dengan informasi resmi setiap lokasi.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DestinationCard v-for="destination in destinations" :key="destination.slug" :destination="destination" />
      </div>
    </section>
  </div>
</template>
