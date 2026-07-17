<script setup>
// Lucide dropped brand/social marks, so these few glyphs are hand-drawn
// minimal paths instead of pulling in a second icon library.
defineProps({
  name: {
    type: String,
    required: true,
    validator: (v) => ['instagram', 'facebook', 'youtube', 'whatsapp', 'tiktok'].includes(v),
  },
})
</script>

<template>
  <svg
    v-if="name === 'instagram'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    class="size-full"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
  <svg
    v-else-if="name === 'facebook'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    class="size-full"
  >
    <path
      d="M15 8.5h2V5.2c-.35-.05-1.55-.2-2.96-.2-2.93 0-4.94 1.79-4.94 5.08V13H6.5v3.7H9.1V22h3.66v-5.3h2.78l.44-3.7h-3.22v-2.5c0-1.07.29-1.8 1.84-1.8Z"
    />
  </svg>
  <svg
    v-else-if="name === 'youtube'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    class="size-full"
  >
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" stroke="none" />
  </svg>
  <svg
    v-else-if="name === 'whatsapp'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    class="size-full"
  >
    <path
      d="M6.3 17.7 4 21l3.4-2.2A8.5 8.5 0 1 0 4 12a8.4 8.4 0 0 0 1.1 4.2Z"
    />
    <path
      d="M9 10.5c.3 2 2.5 4.2 4.5 4.5.9.13 1.3-.5 1.3-1l-.2-1-1.7-.7-.7.9c-.9-.4-1.8-1.3-2.2-2.2l.9-.7-.7-1.7-1 .1c-.4 0-1 .3-.2 1.8Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
  <svg
    v-else-if="name === 'tiktok'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    class="size-full"
  >
    <path
      d="M14 4v10.2a2.8 2.8 0 1 1-2.3-2.75M14 4c.3 2.1 1.8 3.6 4 3.9"
    />
  </svg>
</template>
