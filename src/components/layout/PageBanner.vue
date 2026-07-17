<script setup>
import PlaceholderHero from '@/components/common/PlaceholderHero.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
})
</script>

<template>
  <section class="relative flex h-72 items-end overflow-hidden md:h-80">
    <PlaceholderHero />
    <div class="relative mx-auto w-full max-w-7xl px-6 pb-10 md:px-10">
      <p
        v-if="eyebrow"
        class="text-xs font-semibold tracking-widest-plus text-white/80 uppercase"
      >
        {{ eyebrow }}
      </p>
      <h1 class="mt-2 font-display text-4xl font-semibold text-white md:text-5xl">
        {{ title }}
      </h1>
    </div>
  </section>
</template>
