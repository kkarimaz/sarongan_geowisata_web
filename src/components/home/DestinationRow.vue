<script setup>
import { computed } from 'vue'
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'

const props = defineProps({
  destination: { type: Object, required: true },
  reverse: { type: Boolean, default: false },
})

const restOfExcerpt = computed(() => props.destination.excerpt.replace(/^Lorem Ipsum/, '').trim())
</script>

<template>
  <div class="flex flex-col items-center gap-8 md:gap-12" :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'">
    <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-brand-950/10 md:w-2/5">
      <PlaceholderImage :label="destination.name" :variant="destination.variant" />
    </div>

    <div class="w-full md:w-3/5">
      <span class="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700">
        {{ destination.category }}
      </span>
      <h3 class="mt-3 font-display text-2xl font-semibold text-brand-900">{{ destination.name }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-brand-950/70 md:text-base">
        <strong class="font-semibold text-brand-950">Lorem Ipsum</strong> {{ restOfExcerpt }}
      </p>
      <router-link
        :to="`/destination/${destination.slug}`"
        class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-800"
      >
        Baca Selengkapnya
        <span aria-hidden="true">&rarr;</span>
      </router-link>
    </div>
  </div>
</template>
