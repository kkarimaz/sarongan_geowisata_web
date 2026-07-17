<script setup>
import { Calendar } from '@lucide/vue'
import PlaceholderImage from './PlaceholderImage.vue'

defineProps({
  article: { type: Object, required: true },
})

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-brand-950/5 ring-1 ring-brand-950/5 transition hover:-translate-y-1 hover:shadow-xl">
    <div class="aspect-[16/10] overflow-hidden">
      <PlaceholderImage :label="article.title" :variant="article.variant" rounded="rounded-none" />
    </div>
    <div class="flex flex-1 flex-col gap-2 p-5">
      <span class="inline-flex w-fit rounded-full bg-lagoon-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-lagoon-600">
        {{ article.category }}
      </span>
      <h3 class="font-display text-lg font-semibold text-brand-900 group-hover:text-brand-600">
        {{ article.title }}
      </h3>
      <p class="flex items-center gap-1.5 text-xs text-brand-950/50">
        <Calendar class="size-3.5" />
        {{ formatDate(article.date) }}
      </p>
      <p class="mt-1 line-clamp-3 text-sm text-brand-950/65">{{ article.excerpt }}</p>
    </div>
  </article>
</template>
