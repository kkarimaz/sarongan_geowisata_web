<script setup>
import PageBanner from '@/components/layout/EduPageBanner.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import { articles } from '@/data/articles'
</script>

<template>
  <div>
    <PageBanner eyebrow="Belajar" title="Edukasi" />

    <section class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <p v-reveal class="max-w-2xl text-brand-950/65">
        Jelajahi berbagai artikel edukatif yang mengupas tuntas keunikan geologi, upaya konservasi, kegiatan warga, dan pesona ekowisata di Desa Sarongan.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          v-for="(article, index) in articles"
          :key="article.slug"
          :article="article"
          v-reveal="(index % 3) * 120"
        />
      </div>
    </section>
  </div>
</template>
