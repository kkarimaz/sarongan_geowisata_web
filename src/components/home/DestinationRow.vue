<script setup>
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'

defineProps({
  destination: { type: Object, required: true },
  reverse: { type: Boolean, default: false },
})
</script>

<template>
  <div class="flex flex-col items-center gap-8 md:gap-12" :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'">
    <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-brand-950/10 md:w-2/5">
      <img
        v-if="destination.image"
        :src="destination.image"
        :alt="destination.name"
        class="h-full w-full object-cover"
      />
      <PlaceholderImage v-else :label="destination.name" :variant="destination.variant" />
    </div>

    <div class="w-full md:w-3/5">
      <span class="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700">
        {{ destination.category }}
      </span>
      <h3 class="mt-3 font-display text-2xl font-semibold text-brand-900">{{ destination.name }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-brand-950/70 md:text-base">
        {{ destination.excerpt }}
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
