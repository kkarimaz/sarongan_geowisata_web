<script setup>
import PageBanner from '@/components/layout/PageBanner.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import { articles } from '@/data/articles'
</script>

<template>
  <div>
    <PageBanner eyebrow="Belajar" title="Edukasi" />

    <section class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <p class="max-w-2xl text-brand-950/65">
        Artikel edukasi seputar geologi, konservasi, dan ekowisata Sarongan. Judul, tanggal,
        dan isi artikel di bawah ini masih placeholder.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard v-for="article in articles" :key="article.slug" :article="article" />
      </div>
    </section>
  </div>
</template>
