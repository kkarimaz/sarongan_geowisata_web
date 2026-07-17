<script setup>
import { MapPin } from '@lucide/vue'
import PlaceholderImage from './PlaceholderImage.vue'

defineProps({
  destination: { type: Object, required: true },
})
</script>

<template>
  <router-link
    :to="`/destination/${destination.slug}`"
    class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-brand-950/5 ring-1 ring-brand-950/5 transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <PlaceholderImage :label="destination.name" :variant="destination.variant" rounded="rounded-none" />
    </div>
    <div class="flex flex-1 flex-col gap-2 p-5">
      <span class="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700">
        {{ destination.category }}
      </span>
      <h3 class="font-display text-lg font-semibold text-brand-900 group-hover:text-brand-600">
        {{ destination.name }}
      </h3>
      <p class="flex items-center gap-1.5 text-xs text-brand-950/50">
        <MapPin class="size-3.5" />
        {{ destination.location }}
      </p>
      <p class="mt-1 line-clamp-2 text-sm text-brand-950/65">{{ destination.excerpt }}</p>
    </div>
  </router-link>
</template>
