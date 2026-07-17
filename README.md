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
| HTTP client        | [Axios](https://axios-http.com/) (terpasang, belum dipakai — untuk integrasi API/CMS nanti) |
| Testing (belum diisi) | Vitest (`vitest.config.js`), Playwright (`playwright.config.js`) — konfigurasi ada, belum ada test/dependency Playwright terpasang |

## Menjalankan Proyek

```bash
npm install       # install dependencies
npm run dev        # jalankan dev server (default: http://localhost:5173)
npm run build       # build production ke folder dist/
npm run preview     # preview hasil build production secara lokal
```

## Struktur Proyek

```
src/
├── main.js                  # entry point: pasang Pinia, Vue Router, dan CSS global
├── App.vue                  # root layout: NavBar + <router-view /> + Footer
├── assets/
│   └── main.css              # import Tailwind + tema warna/font kustom (@theme)
├── router/
│   └── index.js               # definisi semua route (lazy-loaded per halaman)
├── data/                     # "database" placeholder berupa modul JS statis
│   ├── stats.js                # 3 angka statistik di homepage (Luas Wilayah, dst.)
│   ├── destinations.js          # daftar destinasi wisata
│   └── articles.js              # daftar artikel edukasi
├── components/
│   ├── layout/
│   │   ├── NavBar.vue           # navigasi atas, transparan di atas hero/banner
│   │   ├── Footer.vue           # footer (kontak, sosial media, navigasi)
│   │   └── PageBanner.vue        # header/banner untuk halaman selain Home
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
│       ├── ArticleCard.vue        # kartu artikel (grid, dipakai di /edukasi)
│       └── SocialIcon.vue         # ikon sosial media (Instagram/Facebook/dll — lucide tidak menyediakan ikon brand)
└── views/
    ├── homepage_view.vue          # "/" — Hero, Stats, Destinations (sesuai desain)
    ├── destination_view.vue        # "/destination" — grid semua destinasi
    ├── destination_detail_view.vue # "/destination/:slug" — detail satu destinasi
    ├── edukasi_view.vue            # "/edukasi" — grid semua artikel
    └── contact_view.vue            # "/contact" — form kontak (simulasi, belum ada backend) + info kontak
```

## Halaman & Routing

| Path                    | Halaman              | Keterangan                                     |
| ------------------------ | --------------------- | ------------------------------------------------ |
| `/`                       | Home                   | Sesuai mockup desain: Hero, Stats, Destinations    |
| `/destination`            | Destination (list)     | Grid semua destinasi dari `data/destinations.js`   |
| `/destination/:slug`      | Destination (detail)   | Detail 1 destinasi + rekomendasi destinasi lain     |
| `/edukasi`                | Edukasi                | Grid semua artikel dari `data/articles.js`         |
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
