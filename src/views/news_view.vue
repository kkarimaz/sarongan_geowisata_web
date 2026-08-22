<script setup>
import { computed } from 'vue'
import PageBanner from '@/components/layout/NewsPageBanner.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import { useSanityNewsList } from '@/composables/useSanityNews'
import { toCardArticle } from '@/lib/sanityNews'

const { articles: docs, isLoading, error } = useSanityNewsList()
const articles = computed(() => docs.value.map(toCardArticle))
</script>

<template>
  <div>
    <PageBanner eyebrow="Berita" title="Sarongan" />

    <section class="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <p v-reveal class="max-w-2xl text-brand-950/65">
        Temukan berita terbaru seputar kegiatan warga, upaya konservasi, dan perkembangan ekowisata di Desa Sarongan. Dapatkan informasi terkini yang menginspirasi dan memperkaya pengetahuan Anda tentang keindahan alam dan budaya lokal.
      </p>

      <div v-if="isLoading" class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="n in 6" :key="n" class="h-72 animate-pulse rounded-2xl bg-brand-950/5" />
      </div>

      <div v-else-if="error" class="mt-10 rounded-2xl bg-red-50 p-6 text-sm text-red-700">
        Gagal memuat berita. Coba muat ulang halaman.
      </div>

      <div v-else-if="!articles.length" class="mt-10 rounded-2xl bg-brand-50 p-6 text-sm text-brand-950/60">
        Belum ada berita yang dipublikasikan.
      </div>

      <div v-else class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
