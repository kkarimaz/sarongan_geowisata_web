import { defineField, defineType } from 'sanity'

export const newsPost = defineType({
  name: 'newsPost',
  title: 'Berita',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Bagian URL, mis. /news/nama-slug-ini. Klik "Generate" setelah mengisi judul.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      description: 'Bebas diisi, mis. "Pembangunan", "Kegiatan Warga", "Pengumuman".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Terbit',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      description: 'Ditampilkan di kartu daftar berita. Maksimal ±240 karakter.',
      validation: (Rule) => Rule.required().max(240),
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto Utama',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Isi Artikel',
      type: 'array',
      description: 'Tulis paragraf seperti biasa. Untuk menyisipkan foto di tengah artikel, gunakan tombol "+" lalu pilih Gambar, dan isi keterangan fotonya.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          name: 'imageWithCaption',
          title: 'Gambar',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              title: 'Keterangan Foto',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category',
    },
  },
})
