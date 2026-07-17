<script setup>
import { computed } from 'vue'
import { Image as ImageIcon } from '@lucide/vue'

/**
 * Stand-in for a real photo. Swap usages of this component for a plain
 * <img :src="..." alt="..." /> once real assets exist — see README "Mengganti
 * Konten Placeholder".
 */
const props = defineProps({
  label: { type: String, default: 'Foto Placeholder' },
  variant: { type: Number, default: 0 },
  rounded: { type: String, default: 'rounded-2xl' },
})

const palettes = [
  'from-brand-600 via-brand-500 to-lagoon-500',
  'from-lagoon-600 via-lagoon-400 to-brand-400',
  'from-brand-800 via-brand-600 to-brand-400',
  'from-lagoon-500 via-brand-500 to-brand-700',
  'from-brand-500 via-lagoon-500 to-brand-800',
]

const gradient = computed(() => palettes[props.variant % palettes.length])
</script>

<template>
  <div
    :class="[rounded, gradient]"
    class="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br"
  >
    <div
      class="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
    />
    <div
      class="absolute -bottom-12 -right-6 h-48 w-48 rounded-full bg-black/10 blur-2xl"
    />
    <div class="relative flex flex-col items-center gap-2 px-4 text-center text-white/90">
      <ImageIcon class="size-8 opacity-80" stroke-width="1.5" />
      <span class="text-xs font-medium tracking-wide opacity-80">{{ label }}</span>
    </div>
  </div>
</template>
