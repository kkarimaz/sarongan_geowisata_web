import { ref, watch, toValue } from 'vue'
import { fetchNewsList, fetchNewsBySlug } from '@/lib/sanityNews'

export function useSanityNewsList() {
  const articles = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  async function load() {
    isLoading.value = true
    error.value = null
    try {
      articles.value = await fetchNewsList()
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  load()

  return { articles, isLoading, error, reload: load }
}

// slugSource can be a ref, getter, or plain string — toValue() unwraps any of them.
export function useSanityNewsPost(slugSource) {
  const post = ref(null)
  const isLoading = ref(true)
  const error = ref(null)

  async function load() {
    const slug = toValue(slugSource)
    isLoading.value = true
    error.value = null
    post.value = null
    try {
      post.value = await fetchNewsBySlug(slug)
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  // { immediate: true } covers the initial mount; the watch itself covers
  // navigating from one /news/:slug to another without unmounting the view
  // (e.g. clicking a "related article" card).
  watch(() => toValue(slugSource), load, { immediate: true })

  return { post, isLoading, error }
}
