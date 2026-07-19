<script setup>
import PlaceholderHero from '@/components/common/PlaceholderHero.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
})
</script>

<template>
  <section class="relative flex min-h-72 items-end md:min-h-80">
    <PlaceholderHero />
    <img 
    src="@/assets/images/IMG_6276.webp" 
    alt="Teluk Ijo, Sarongan, Banyuwangi" 
    class="absolute inset-0 h-full w-full object-cover z-0"
    />
    <div class="relative mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
      <p
        v-if="eyebrow"
        v-reveal
        class="text-xs font-semibold tracking-widest-plus text-white/80 uppercase"
      >
        {{ eyebrow }}
      </p>
      <h1 v-reveal="100" class="mt-2 text-balance font-display text-3xl font-semibold text-white md:text-5xl">
        {{ title }}
      </h1>
    </div>
  </section>
</template>
