// Placeholder — ganti judul, tanggal, kategori, foto, dan isi artikel dengan konten asli.
const loremShort =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966.'

const loremLong = `${loremShort} When designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset’s Body Type sheets. It was popularised in the 1960s with the release of Letraset sheets.`

// content is a list of blocks rendered in order by ArticleBody.vue:
//   { type: 'paragraph', text: '...' }
//   { type: 'image', src: importedImage, caption: '...' }  — src is optional;
//   omit it to fall back to a PlaceholderImage (still shows the caption).
const loremContent = [{ type: 'paragraph', text: loremLong }]

export const articles = [
  {
    slug: 'artikel-1',
    title: 'Judul Artikel Berita 1',
    category: 'Geologi',
    date: '2026-01-12',
    excerpt: loremShort,
    content: loremContent,
    variant: 1,
  },
  {
    slug: 'artikel-2',
    title: 'Judul Artikel Berita 2',
    category: 'Konservasi',
    date: '2026-02-03',
    excerpt: loremShort,
    content: loremContent,
    variant: 2,
  },
  {
    slug: 'artikel-3',
    title: 'Judul Artikel Berita 3',
    category: 'Ekowisata',
    date: '2026-03-18',
    excerpt: loremShort,
    content: loremContent,
    variant: 3,
  },
  {
    slug: 'artikel-4',
    title: 'Judul Artikel Berita 4',
    category: 'Budaya Lokal',
    date: '2026-04-25',
    excerpt: loremShort,
    content: loremContent,
    variant: 4,
  },
  {
    slug: 'artikel-5',
    title: 'Judul Artikel Berita 5',
    category: 'Geologi',
    date: '2026-05-09',
    excerpt: loremShort,
    content: loremContent,
    variant: 0,
  },
  {
    slug: 'artikel-6',
    title: 'Judul Artikel Berita 6',
    category: 'Konservasi',
    date: '2026-06-14',
    excerpt: loremShort,
    content: loremContent,
    variant: 1,
  },
]
