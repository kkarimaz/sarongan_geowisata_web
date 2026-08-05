import { sanityClient, urlFor } from './sanity'

const CARD_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  mainImage
`

const LIST_QUERY = `*[_type == "newsPost"] | order(publishedAt desc){ ${CARD_FIELDS} }`
const DETAIL_QUERY = `*[_type == "newsPost" && slug.current == $slug][0]{ ${CARD_FIELDS}, body }`

// Reshapes a Sanity newsPost document into the { slug, title, category, date,
// excerpt, image, variant } object ArticleCard.vue already expects — no
// changes needed there, article.image is just bound to :src.
export function toCardArticle(doc, index = 0) {
  return {
    slug: doc.slug,
    title: doc.title,
    category: doc.category,
    date: doc.publishedAt,
    excerpt: doc.excerpt,
    image: doc.mainImage
      ? urlFor(doc.mainImage).width(800).height(500).fit('crop').auto('format').url()
      : undefined,
    variant: index % 5,
  }
}

export function fetchNewsList() {
  return sanityClient.fetch(LIST_QUERY)
}

export function fetchNewsBySlug(slug) {
  return sanityClient.fetch(DETAIL_QUERY, { slug })
}
