# Geowisata Sarongan — Website

Website informasi geowisata kawasan Sarongan: destinasi wisata, edukasi geologi/konservasi,
dan informasi kontak. Dibangun dengan Vue 3 + Vite + Tailwind CSS v4.

> **Status konten:** semua foto dan tulisan (artikel, deskripsi destinasi, statistik) pada
> repo ini masih **placeholder**. Lihat [Mengganti Konten Placeholder](#mengganti-konten-placeholder)
> untuk cara menggantinya dengan konten asli.

## Tech Stack

| Layer            | Tools                                                        |
| ----------------- | ------------------------------------------------------------ |
| Framework          | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`) |
| Build tool         | [Vite](https://vite.dev/)                                     |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Routing            | [Vue Router](https://router.vuejs.org/)                       |
| State management   | [Pinia](https://pinia.vuejs.org/) (terpasang, belum dipakai — lihat catatan di bawah) |
| Ikon               | [`@lucide/vue`](https://lucide.dev/)                          |
| HTTP client        | [Axios](https://axios-http.com/) (terpasang, belum dipakai) |
| CMS (khusus News)  | [Sanity](https://sanity.io/) via `@sanity/client`, `@sanity/image-url`, `@portabletext/vue` — lihat [Setup CMS](#setup-cms-sanity---halaman-news) |
| Testing (belum diisi) | Vitest (`vitest.config.js`), Playwright (`playwright.config.js`) — konfigurasi ada, belum ada test/dependency Playwright terpasang |

## Menjalankan Proyek

```bash
npm install       # install dependencies
npm run dev        # jalankan dev server (default: http://localhost:5173)
npm run build       # build production ke folder dist/
npm run preview     # preview hasil build production secara lokal
```

> Halaman `/news` mengambil data dari Sanity — tanpa setup di bawah dan file `.env`,
> halaman ini akan menampilkan pesan "Gagal memuat berita" karena `VITE_SANITY_PROJECT_ID`
> masih kosong. Semua halaman lain (Home, Destination, Edukasi, Contact) tidak terpengaruh.

## Setup CMS (Sanity) — Halaman News

Bagian **News** (`/news`, `/news/:slug`) sudah disambungkan ke [Sanity](https://sanity.io/),
sebuah headless CMS gratis. Admin dashboard-nya (disebut **Studio**) ada di folder `studio/`
di repo ini — tapi itu aplikasi terpisah (React, bukan Vue) yang di-deploy sendiri ke URL
`https://<nama>.sanity.studio`. Perangkat desa login ke URL itu dan tinggal isi form, tanpa
perlu tahu soal kode sama sekali. Situs utama (folder `src/`) otomatis mengambil apa pun yang
mereka publish di sana — tidak perlu redeploy.

**Langkah-langkah ini harus dijalankan sendiri** (butuh login interaktif ke akun Sanity, tidak
bisa diotomatisasi):

1. **Buat akun & project Sanity** — buka [sanity.io/manage](https://sanity.io/manage), daftar/masuk,
   lalu buat project baru (mis. "Sarongan Geowisata"). Tambahkan dataset bernama `production`
   dengan visibility **Public** (wajib — situs mengambil data tanpa token/login, dataset
   Private akan menyebabkan error 401). Catat **Project ID**-nya, ditampilkan di halaman
   project tersebut.

2. **Isi Project ID** ke 2 file di `studio/` (ganti `REPLACE_WITH_PROJECT_ID`):
   - `studio/sanity.config.js`
   - `studio/sanity.cli.js`

3. **Install & login Studio:**
   ```bash
   cd studio
   npm install
   npx sanity login
   ```

4. **Izinkan localhost mengakses data** (CORS) — perlu supaya `npm run dev` di root bisa fetch
   dari Sanity:
   ```bash
   npx sanity cors add http://localhost:5173 --no-credentials
   ```
   Nanti setelah situs ini di-deploy ke domain publik, tambahkan origin domain tersebut juga
   dengan perintah yang sama.

5. **Coba Studio secara lokal** dulu untuk memastikan schema-nya jalan:
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3333`, login, buat satu berita percobaan (isi judul, kategori,
   tanggal, ringkasan, foto utama, dan isi artikel — bisa sisipkan foto + keterangan di
   tengah artikel lewat tombol "+" di editor), lalu **Publish**.

6. **Deploy Studio** supaya perangkat desa bisa akses tanpa kamu jalanin apa pun secara lokal:
   ```bash
   npx sanity deploy
   ```
   Pilih subdomain (mis. `sarongan-desa` → jadi `https://sarongan-desa.sanity.studio`). Inilah
   URL dashboard admin yang dipakai perangkat desa sehari-hari.

7. **Undang perangkat desa sebagai editor** — di [sanity.io/manage](https://sanity.io/manage),
   buka project → **Members** → **Invite** → masukkan email mereka → role **Editor**. Mereka
   akan menerima email undangan, bikin/login akun Sanity sendiri, lalu bisa langsung buka URL
   Studio dari langkah 6.

8. **Sambungkan situs utama ke project Sanity** — di root repo (bukan di `studio/`):
   ```bash
   cp .env.example .env
   ```
   Isi `.env`:
   ```
   VITE_SANITY_PROJECT_ID=project-id-dari-langkah-1
   VITE_SANITY_DATASET=production
   ```

9. `npm run dev` di root, buka `/news` — berita percobaan dari langkah 5 harusnya muncul.

### Cara kerja singkat (untuk yang mau ubah kode-nya)

- `src/lib/sanity.js` — client Sanity + builder URL gambar, baca `VITE_SANITY_PROJECT_ID`/`VITE_SANITY_DATASET` dari `.env`.
- `src/lib/sanityNews.js` — query GROQ (daftar berita & satu berita by slug) + `toCardArticle()` yang mengubah dokumen Sanity ke bentuk yang sudah dipakai `ArticleCard.vue`.
- `src/composables/useSanityNews.js` — wrapper reaktif Vue di atas fungsi-fungsi tersebut (loading/error state).
- `src/components/common/PortableTextImage.vue` — render foto+caption yang disisipkan di tengah artikel (field `body` di Sanity pakai format Portable Text, bukan array block custom seperti di Edukasi).
- `studio/schemaTypes/newsPost.js` — definisi field yang muncul di form Studio.

Bagian **Edukasi** (`/edukasi`) sengaja **tidak** ikut dipindah ke Sanity — datanya masih statis di `src/data/articles.js` seperti sebelumnya.

## Struktur Proyek

`studio/` adalah project Sanity Studio terpisah (lihat [Setup CMS](#setup-cms-sanity---halaman-news))
— punya `package.json`/`node_modules` sendiri, tidak ikut ke-bundle oleh Vite.

```
sarongan_geowisata_web/
├── src/                        # aplikasi Vue (dijelaskan di bawah)
└── studio/                     # Sanity Studio — admin dashboard untuk News, app React terpisah
    ├── schemaTypes/
    │   └── newsPost.js           # field-field yang muncul di form Studio
    ├── sanity.config.js           # projectId/dataset + plugin Studio
    └── sanity.cli.js              # dipakai perintah CLI (login, cors, deploy)
```

```
src/
├── main.js                  # entry point: pasang Pinia, Vue Router, directive v-reveal, dan CSS global
├── App.vue                  # root layout: NavBar + <router-view /> (dengan page-fade transition) + Footer
├── assets/
│   └── main.css               # import Tailwind + tema warna/font kustom (@theme) + CSS reveal/transition
├── router/
│   └── index.js               # definisi semua route (lazy-loaded per halaman)
├── directives/
│   └── reveal.js               # v-reveal — fade/slide-in via IntersectionObserver saat elemen masuk viewport
├── utils/
│   └── format.js               # formatDate() bersama
├── lib/                      # integrasi Sanity (khusus News, lihat Setup CMS)
│   ├── sanity.js                # client Sanity + builder URL gambar
│   └── sanityNews.js            # query GROQ + reshape data ke bentuk ArticleCard
├── composables/
│   └── useSanityNews.js        # wrapper reaktif Vue di atas src/lib/sanityNews.js (loading/error state)
├── data/                     # "database" placeholder berupa modul JS statis (News TIDAK di sini lagi — lihat lib/)
│   ├── stats.js                # 3 angka statistik di homepage (Luas Wilayah, dst.)
│   ├── destinations.js          # daftar destinasi wisata
│   └── articles.js              # daftar artikel edukasi
├── components/
│   ├── layout/
│   │   ├── NavBar.vue             # navigasi atas, transparan di atas hero/banner
│   │   ├── Footer.vue             # footer (kontak, sosial media, navigasi)
│   │   ├── EduPageBanner.vue      # header/banner untuk halaman Edukasi & Contact
│   │   ├── NewsPageBanner.vue     # header/banner untuk halaman News
│   │   └── DestPageBanner.vue     # header/banner untuk halaman Destination
│   ├── home/
│   │   ├── HeroSection.vue       # hero "VISIT Sarongan" di homepage
│   │   ├── StatsSection.vue      # kontainer 3 kartu statistik
│   │   ├── StatCard.vue          # satu kartu statistik
│   │   ├── DestinationsSection.vue # kontainer daftar destinasi unggulan (homepage)
│   │   └── DestinationRow.vue     # satu baris destinasi (foto + teks berselang-seling)
│   └── common/
│       ├── PlaceholderImage.vue   # kotak foto placeholder bergradasi (kartu/list)
│       ├── PlaceholderHero.vue    # backdrop placeholder untuk hero & banner
│       ├── DestinationCard.vue    # kartu destinasi (grid, dipakai di /destination)
│       ├── ArticleCard.vue        # kartu artikel (grid, dipakai di /edukasi dan /news)
│       ├── ArticleBody.vue        # render isi artikel Edukasi (array block paragraf/gambar statis)
│       ├── PortableTextImage.vue  # render foto+caption di tengah isi berita News (format Portable Text Sanity)
│       └── SocialIcon.vue         # ikon sosial media (Instagram/Facebook/dll — lucide tidak menyediakan ikon brand)
└── views/
    ├── homepage_view.vue           # "/" — Hero, Stats, Destinations (sesuai desain)
    ├── destination_view.vue         # "/destination" — grid semua destinasi
    ├── destination_detail_view.vue  # "/destination/:slug" — detail satu destinasi
    ├── edukasi_view.vue             # "/edukasi" — grid semua artikel (data statis)
    ├── edukasi_detail_view.vue      # "/edukasi/:slug" — detail satu artikel edukasi
    ├── news_view.vue                # "/news" — grid berita, fetch dari Sanity
    ├── news_detail_view.vue         # "/news/:slug" — detail satu berita, fetch dari Sanity
    └── contact_view.vue             # "/contact" — form kontak (simulasi, belum ada backend) + info kontak
```

## Halaman & Routing

| Path                    | Halaman              | Keterangan                                     |
| ------------------------ | --------------------- | ------------------------------------------------ |
| `/`                       | Home                   | Sesuai mockup desain: Hero, Stats, Destinations    |
| `/destination`            | Destination (list)     | Grid semua destinasi dari `data/destinations.js`   |
| `/destination/:slug`      | Destination (detail)   | Detail 1 destinasi + rekomendasi destinasi lain     |
| `/edukasi`                | Edukasi (list)          | Grid semua artikel dari `data/articles.js` (statis) |
| `/edukasi/:slug`          | Edukasi (detail)        | Detail 1 artikel edukasi                            |
| `/news`                   | News (list)             | Grid berita, fetch dari Sanity CMS                  |
| `/news/:slug`             | News (detail)           | Detail 1 berita, fetch dari Sanity CMS              |
| `/contact`                | Contact                | Form kontak (client-side only) + info kontak       |

Routing didefinisikan di [src/router/index.js](src/router/index.js), semua halaman di-*lazy
load* per route.

## Desain & Tema

Warna dan font kustom didefinisikan lewat Tailwind v4 `@theme` di
[src/assets/main.css](src/assets/main.css):

- **Warna**: skala `brand-*` (hijau teal, warna utama) dan `lagoon-*` (biru cyan, warna aksen),
  diambil dari palet mockup desain (laguna/pantai aerial).
- **Font**: `font-display` (Playfair Display, untuk judul besar seperti "Sarongan") dan
  `font-sans` (Poppins, untuk body & navigasi), dimuat dari Google Fonts lewat
  [index.html](index.html).

NavBar bersifat `fixed` dengan latar gradasi gelap tipis + blur, sehingga teks putihnya tetap
terbaca baik di atas hero/banner foto maupun saat halaman di-scroll.

## Mengganti Konten Placeholder

Karena belum ada foto dan tulisan asli, semua foto memakai komponen dekoratif
(`PlaceholderImage.vue` / `PlaceholderHero.vue`, gradasi warna + ikon, tanpa file gambar
biner) dan semua tulisan panjang memakai teks *Lorem Ipsum* / judul generik. Semuanya
ditandai jelas agar mudah ditemukan dan diganti.

### 1. Foto

- **Foto per item (kartu destinasi/artikel, gambar hero destinasi):**
  Ganti pemakaian `<PlaceholderImage :label="..." :variant="..." />` dengan `<img>` biasa,
  contoh di [DestinationCard.vue](src/components/common/DestinationCard.vue):
  ```vue
  <!-- sebelum -->
  <PlaceholderImage :label="destination.name" :variant="destination.variant" />

  <!-- sesudah -->
  <img :src="destination.image" :alt="destination.name" class="h-full w-full object-cover" />
  ```
  Simpan file foto asli di `src/assets/images/`, lalu tambahkan properti `image` (hasil
  `import` atau path) pada item terkait di `src/data/destinations.js` / `src/data/articles.js`.

- **Foto hero (homepage) & banner (halaman lain):**
  Ganti isi [PlaceholderHero.vue](src/components/common/PlaceholderHero.vue) — cukup ubah
  `<div>` gradasi menjadi `<img>` atau `background-image` yang menunjuk ke foto aerial asli.
  Karena dipakai bersama oleh Hero & semua `PageBanner`, cukup diganti sekali di satu tempat.

### 2. Tulisan

| Konten                          | Lokasi file                          |
| --------------------------------- | --------------------------------------- |
| Angka statistik homepage (3 kartu) | `src/data/stats.js`                       |
| Nama, kategori, lokasi, deskripsi destinasi | `src/data/destinations.js`               |
| Judul, kategori, tanggal, isi artikel edukasi | `src/data/articles.js`                   |
| Info kontak (alamat, telepon, email) | `src/components/layout/Footer.vue` dan `src/views/contact_view.vue` (`contactInfo`) |
| Tautan sosial media | `src/components/layout/Footer.vue` (`socials`, isi `href` dengan URL asli) |

Struktur data (nama field) di masing-masing modul `data/*.js` sudah final — cukup ubah
isinya (`name`, `excerpt`, `description`, dst.) tanpa perlu mengubah komponen tampilan.

**Menyisipkan foto + caption di tengah isi artikel (edukasi/news):** field `content` di
`src/data/articles.js` dan `src/data/news.js` bukan string, tapi array "block" yang
dirender berurutan oleh [ArticleBody.vue](src/components/common/ArticleBody.vue). Ada dua
jenis block:

```js
{ type: 'paragraph', text: 'Isi paragraf...' }
{ type: 'image', src: fotoYangDiimport, caption: 'Keterangan kecil di bawah foto' }
```

Tinggal sisipkan object `{ type: 'image', ... }` di posisi manapun dalam array `content`
sesuai urutan yang diinginkan. Kalau foto asli belum ada, `src` boleh dihilangkan — akan
otomatis fallback ke `PlaceholderImage` tapi caption tetap tampil. Contoh penerapan ada di
`artikel-1` pada `src/data/articles.js`.

### 3. Form Kontak

Form di `/contact` ([contact_view.vue](src/views/contact_view.vue)) saat ini hanya simulasi
di sisi klien (`handleSubmit` langsung menampilkan pesan sukses tanpa mengirim data kemana
pun). Untuk mengaktifkannya, sambungkan `handleSubmit` ke endpoint API (Axios sudah
terpasang sebagai dependency untuk keperluan ini).

## Catatan Pengembangan Lanjutan

- **Pinia**: sudah dipasang di `main.js` tapi belum dipakai — cocok dipakai nanti bila data
  destinasi/artikel diambil dari API/CMS (bukan modul statis `data/*.js`) dan perlu state
  management terpusat (loading state, cache, dsb).
- **Playwright**: `playwright.config.js` sudah ada tapi package `@playwright/test` belum
  ter-install dan belum ada folder `e2e/`. Jalankan `npm install -D @playwright/test &&
  npx playwright install` bila ingin mulai menulis e2e test.
- **Vitest**: `vitest.config.js` sudah ada, belum ada file test maupun script `"test"` yang
  memanggilnya di `package.json`.
- Section homepage (Hero, Stats, Destinations) mengikuti desain mockup yang diberikan.
  Halaman `/destination`, `/edukasi`, dan `/contact` belum punya desain mockup khusus —
  layout-nya dibuat konsisten dengan bahasa visual homepage (warna, font, komponen kartu).
