<script setup>
import PlaceholderImage from './PlaceholderImage.vue'

// `blocks` is an ordered list of paragraph/image blocks — see the
// "content" field shape documented in src/data/articles.js.
defineProps({
  blocks: { type: Array, required: true },
})
</script>

<template>
  <div class="mt-5 flex flex-col gap-6 leading-relaxed text-brand-950/70">
    <template v-for="(block, index) in blocks" :key="index">
      <p v-if="block.type === 'paragraph'">{{ block.text }}</p>

      <figure v-else-if="block.type === 'image'" class="flex flex-col gap-2">
        <div class="aspect-[16/9] overflow-hidden rounded-2xl shadow-md shadow-brand-950/10">
          <img
            v-if="block.src"
            :src="block.src"
            :alt="block.caption || ''"
            class="h-full w-full object-cover"
          />
          <PlaceholderImage
            v-else
            :label="block.caption || 'Foto Placeholder'"
            :variant="block.variant ?? 0"
            rounded="rounded-none"
          />
        </div>
        <figcaption v-if="block.caption" class="text-center text-xs text-brand-950/50">
          {{ block.caption }}
        </figcaption>
      </figure>
    </template>
  </div>
</template>
