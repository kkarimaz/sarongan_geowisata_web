<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { PortableText } from '@portabletext/vue'
import { Calendar, Tag } from '@lucide/vue'
import PageBanner from '@/components/layout/NewsPageBanner.vue'
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import PortableTextImage from '@/components/common/PortableTextImage.vue'
import { useSanityNewsPost, useSanityNewsList } from '@/composables/useSanityNews'
import { toCardArticle } from '@/lib/sanityNews'
import { urlFor } from '@/lib/sanity'
import { formatDate } from '@/utils/format'

const route = useRoute()

const { post, isLoading, error } = useSanityNewsPost(() => route.params.slug)
const notFound = computed(() => !isLoading.value && !error.value && !post.value)

const { articles: allDocs } = useSanityNewsList()
const others = computed(() =>
  allDocs.value
    .filter((doc) => doc.slug !== route.params.slug)
    .slice(0, 3)
    .map(toCardArticle),
)

const heroImageUrl = computed(() =>
  post.value?.mainImage
    ? urlFor(post.value.mainImage).width(1600).fit('max').auto('format').url()
    : null,
)

const portableTextComponents = { types: { imageWithCaption: PortableTextImage } }
</script>

<template>
  <div v-if="isLoading" class="mx-auto max-w-5xl px-6 py-24">
    <div class="h-8 w-40 animate-pulse rounded bg-brand-950/5" />
  </div>

  <div v-else-if="post">
    <PageBanner :eyebrow="post.category" :title="post.title" />

    <section class="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <RouterLink to="/news" class="text-sm font-semibold text-brand-600 hover:text-brand-800">
        &larr; Kembali ke News
      </RouterLink>

      <div class="mt-6 aspect-[16/8] overflow-hidden rounded-3xl shadow-lg shadow-brand-950/10">
        <img
          v-if="heroImageUrl"
          :src="heroImageUrl"
          :alt="post.title"
          class="h-full w-full object-cover"
        />
        <PlaceholderImage v-else :label="post.title" rounded="rounded-none" />
      </div>

      <div v-reveal class="mt-6 flex flex-wrap gap-4 text-sm text-brand-950/60">
        <span class="flex items-center gap-1.5">
          <Tag class="size-4 text-brand-600" />
          {{ post.category }}
        </span>
        <span class="flex items-center gap-1.5">
          <Calendar class="size-4 text-brand-600" />
          {{ formatDate(post.publishedAt) }}
        </span>
      </div>

      <h1 v-reveal="100" class="mt-4 font-display text-3xl font-semibold text-brand-900 md:text-4xl">
        {{ post.title }}
      </h1>

      <div v-reveal="180" class="mt-5 flex flex-col gap-6 leading-relaxed text-brand-950/70">
        <PortableText :value="post.body" :components="portableTextComponents" />
      </div>
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

  <div v-else-if="notFound" class="mx-auto max-w-3xl px-6 py-24 text-center">
    <h1 class="font-display text-3xl font-semibold text-brand-900">Berita tidak ditemukan</h1>
    <RouterLink to="/news" class="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-800">
      &larr; Kembali ke News
    </RouterLink>
  </div>

  <div v-else class="mx-auto max-w-3xl px-6 py-24 text-center text-red-700">
    Gagal memuat berita. Coba muat ulang halaman.
  </div>
</template>
