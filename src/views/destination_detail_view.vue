<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MapPin, Tag } from '@lucide/vue'
import PageBanner from '@/components/layout/EduPageBanner.vue'
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'
import DestinationCard from '@/components/common/DestinationCard.vue'
import { destinations } from '@/data/destinations'

const route = useRoute()

const destination = computed(() => destinations.find((d) => d.slug === route.params.slug))

const others = computed(() =>
  destinations.filter((d) => d.slug !== route.params.slug).slice(0, 3),
)
</script>

<template>
  <div v-if="destination">
    <PageBanner :eyebrow="destination.category" :title="destination.name" />

    <section class="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <RouterLink to="/destination" class="text-sm font-semibold text-brand-600 hover:text-brand-800">
        &larr; Kembali ke Destinations
      </RouterLink>

      <div class="mt-6 aspect-[16/8] overflow-hidden rounded-3xl shadow-lg shadow-brand-950/10">
        <PlaceholderImage :label="destination.name" :variant="destination.variant" rounded="rounded-none" />
      </div>

      <div v-reveal class="mt-6 flex flex-wrap gap-4 text-sm text-brand-950/60">
        <span class="flex items-center gap-1.5">
          <Tag class="size-4 text-brand-600" />
          {{ destination.category }}
        </span>
        <span class="flex items-center gap-1.5">
          <MapPin class="size-4 text-brand-600" />
          {{ destination.location }}
        </span>
      </div>

      <h1 v-reveal="100" class="mt-4 font-display text-3xl font-semibold text-brand-900 md:text-4xl">
        {{ destination.name }}
      </h1>

      <p v-reveal="180" class="mt-5 leading-relaxed text-brand-950/70">
        {{ destination.description }}
      </p>
    </section>

    <section v-if="others.length" class="border-t border-brand-950/5 bg-brand-50/40">
      <div class="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <h2 v-reveal class="font-display text-2xl font-semibold text-brand-900">Destinasi Lainnya</h2>
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DestinationCard
            v-for="(item, index) in others"
            :key="item.slug"
            :destination="item"
            v-reveal="index * 120"
          />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-3xl px-6 py-24 text-center">
    <h1 class="font-display text-3xl font-semibold text-brand-900">Destinasi tidak ditemukan</h1>
    <RouterLink to="/destination" class="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-800">
      &larr; Kembali ke Destinations
    </RouterLink>
  </div>
</template>
