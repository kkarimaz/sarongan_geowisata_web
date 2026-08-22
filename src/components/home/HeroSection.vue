<script setup>
import PlaceholderHero from '@/components/common/PlaceholderHero.vue'
</script>

<template>
  <section class="relative h-[560px] w-full overflow-hidden md:h-[680px]">
    <PlaceholderHero label="Foto Aerial Kawasan Sarongan" />
    <img 
    src="@/assets/images/IMG_6276.webp" 
    alt="Teluk Ijo, Sarongan, Banyuwangi" 
    class="absolute inset-0 h-full w-full object-cover z-0"
    />
    <div class="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
      <p v-reveal class="text-3xl font-semibold tracking-widest-plus text-white/85">VISIT</p>
      <h1 v-reveal="120" class="font-display text-7xl leading-none font-semibold text-white sm:text-8xl md:text-9xl">
        Sarongan
      </h1>
    </div>
  </section>
</template>
