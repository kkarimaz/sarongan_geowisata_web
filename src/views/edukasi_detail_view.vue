<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Calendar, Tag } from '@lucide/vue'
import PageBanner from '@/components/layout/PageBanner.vue'
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import { articles } from '@/data/articles'
import { formatDate } from '@/utils/format'

const route = useRoute()

const article = computed(() => articles.find((a) => a.slug === route.params.slug))

const paragraphs = computed(() =>
  article.value
    ? article.value.content
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    : [],
)

const others = computed(() => articles.filter((a) => a.slug !== route.params.slug).slice(0, 3))
</script>

<template>
  <div v-if="article">
    <PageBanner :eyebrow="article.category" :title="article.title" />

    <section class="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <RouterLink to="/edukasi" class="text-sm font-semibold text-brand-600 hover:text-brand-800">
        &larr; Kembali ke Edukasi
      </RouterLink>

      <div class="mt-6 aspect-[16/8] overflow-hidden rounded-3xl shadow-lg shadow-brand-950/10">
        <img
          v-if="article.image"
          :src="article.image"
          :alt="article.title"
          class="h-full w-full object-cover"
        />
        <PlaceholderImage v-else :label="article.title" :variant="article.variant" rounded="rounded-none" />
      </div>

      <div class="mt-6 flex flex-wrap gap-4 text-sm text-brand-950/60">
        <span class="flex items-center gap-1.5">
          <Tag class="size-4 text-brand-600" />
          {{ article.category }}
        </span>
        <span class="flex items-center gap-1.5">
          <Calendar class="size-4 text-brand-600" />
          {{ formatDate(article.date) }}
        </span>
      </div>

      <h1 class="mt-4 font-display text-3xl font-semibold text-brand-900 md:text-4xl">
        {{ article.title }}
      </h1>

      <div class="mt-5 flex flex-col gap-4 leading-relaxed text-brand-950/70">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>
    </section>

    <section v-if="others.length" class="border-t border-brand-950/5 bg-brand-50/40">
      <div class="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <h2 class="font-display text-2xl font-semibold text-brand-900">Artikel Lainnya</h2>
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="item in others" :key="item.slug" :article="item" base-path="/edukasi" />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-3xl px-6 py-24 text-center">
    <h1 class="font-display text-3xl font-semibold text-brand-900">Artikel tidak ditemukan</h1>
    <RouterLink to="/edukasi" class="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-800">
      &larr; Kembali ke Edukasi
    </RouterLink>
  </div>
</template>
