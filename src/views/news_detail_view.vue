<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Calendar, Tag } from '@lucide/vue'
import PageBanner from '@/components/layout/EduPageBanner.vue'
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import ArticleBody from '@/components/common/ArticleBody.vue'
import { articles } from '@/data/news'
import { formatDate } from '@/utils/format'

const route = useRoute()

const article = computed(() => articles.find((a) => a.slug === route.params.slug))

const others = computed(() => articles.filter((a) => a.slug !== route.params.slug).slice(0, 3))
</script>

<template>
  <div v-if="article">
    <PageBanner :eyebrow="article.category" :title="article.title" />

    <section class="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <RouterLink to="/news" class="text-sm font-semibold text-brand-600 hover:text-brand-800">
        &larr; Kembali ke News
      </RouterLink>

      <div class="mt-6 aspect-[16/8] overflow-hidden rounded-3xl shadow-lg shadow-brand-950/10">
        <PlaceholderImage :label="article.title" :variant="article.variant" rounded="rounded-none" />
      </div>

      <div v-reveal class="mt-6 flex flex-wrap gap-4 text-sm text-brand-950/60">
        <span class="flex items-center gap-1.5">
          <Tag class="size-4 text-brand-600" />
          {{ article.category }}
        </span>
        <span class="flex items-center gap-1.5">
          <Calendar class="size-4 text-brand-600" />
          {{ formatDate(article.date) }}
        </span>
      </div>

      <h1 v-reveal="100" class="mt-4 font-display text-3xl font-semibold text-brand-900 md:text-4xl">
        {{ article.title }}
      </h1>

      <ArticleBody v-reveal="180" :blocks="article.content" />
    </section>

    <section v-if="others.length" class="border-t border-brand-950/5 bg-brand-50/40">
      <div class="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <h2 v-reveal class="font-display text-2xl font-semibold text-brand-900">Berita Lainnya</h2>
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            v-for="(item, index) in others"
            :key="item.slug"
            :article="item"
            base-path="/news"
            v-reveal="index * 120"
          />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-3xl px-6 py-24 text-center">
    <h1 class="font-display text-3xl font-semibold text-brand-900">Berita tidak ditemukan</h1>
    <RouterLink to="/news" class="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-800">
      &larr; Kembali ke News
    </RouterLink>
  </div>
</template>
