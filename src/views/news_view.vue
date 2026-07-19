<script setup>
import PageBanner from '@/components/layout/NewsPageBanner.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import { articles } from '@/data/news'
</script>

<template>
  <div>
    <PageBanner eyebrow="Berita" title="Sarongan" />

    <section class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <p v-reveal class="max-w-2xl text-brand-950/65">
        Artikel berita seputar apa yang terjadi di Desa Sarongan.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          v-for="(article, index) in articles"
          :key="article.slug"
          :article="article"
          base-path="/news"
          v-reveal="(index % 3) * 120"
        />
      </div>
    </section>
  </div>
</template>
