<script setup>
defineProps({
  stat: { type: Object, required: true },
})
</script>

<template>
  <div class="flex flex-col items-center gap-5 rounded-3xl bg-white p-6 text-center shadow-xl shadow-brand-950/10 md:p-7">
    <p class="text-sm font-bold tracking-wide text-brand-700">{{ stat.label }}</p>
    <div :class="stat.color" class="flex w-full items-center justify-center rounded-2xl px-5 py-5">
      <span class="text-lg font-bold text-white md:text-xl">{{ stat.value }}</span>
    </div>
  </div>
</template>
