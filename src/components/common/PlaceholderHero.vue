<script setup>
/**
 * Decorative aerial-lagoon backdrop used behind the nav on the home hero
 * and the smaller inner-page banners. Purely CSS/SVG so the site looks
 * finished with zero binary assets — replace with a real photo by dropping
 * an <img>/background-image where this component is used. See README.
 */
defineProps({
  label: { type: String, default: 'Foto Aerial Sarongan' },
})
</script>

<template>
  <div class="absolute inset-0 overflow-hidden bg-brand-900">
    <div
      class="absolute inset-0 bg-gradient-to-br from-lagoon-500 via-brand-500 to-brand-800"
    />
    <svg
      class="absolute inset-0 h-full w-full opacity-70 mix-blend-soft-light"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 600"
    >
      <ellipse cx="180" cy="120" rx="260" ry="140" fill="#0f5145" opacity="0.55" />
      <ellipse cx="620" cy="60" rx="320" ry="150" fill="#0e9c7c" opacity="0.5" />
      <ellipse cx="980" cy="220" rx="300" ry="170" fill="#0f7c66" opacity="0.45" />
      <ellipse cx="450" cy="420" rx="380" ry="160" fill="#072e28" opacity="0.35" />
      <ellipse cx="1050" cy="480" rx="260" ry="150" fill="#0e9c7c" opacity="0.3" />
    </svg>
    <div class="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-brand-950/60" />
    <div class="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-transparent to-transparent" />
    <span
      class="absolute bottom-4 right-4 rounded-full bg-black/25 px-3 py-1 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-sm"
    >
      {{ label }}
    </span>
  </div>
</template>
