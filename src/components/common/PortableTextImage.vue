<script setup>
import { urlFor } from '@/lib/sanity'

// Custom @portabletext/vue serializer for the `imageWithCaption` inline type
// defined in studio/schemaTypes/newsPost.js.
defineProps({
  value: { type: Object, required: true },
})
</script>

<template>
  <figure class="flex flex-col gap-2">
    <div class="aspect-[16/9] overflow-hidden rounded-2xl shadow-md shadow-brand-950/10">
      <img
        :src="urlFor(value).width(1200).fit('max').auto('format').url()"
        :alt="value.caption || ''"
        class="h-full w-full object-cover"
      />
    </div>
    <figcaption v-if="value.caption" class="text-center text-xs text-brand-950/50">
      {{ value.caption }}
    </figcaption>
  </figure>
</template>
