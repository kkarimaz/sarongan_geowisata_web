// Placeholder — ganti nama, kategori, lokasi, foto, dan deskripsi dengan data asli.
const loremShort =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset’s Body Type sheets.'

const loremLong = `${loremShort} It was popularised in the 1960s with the release of Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

// description is a list of blocks rendered in order by ArticleBody.vue:
//   { type: 'paragraph', text: '...' }
//   { type: 'image', src: importedImage, caption: '...', fit: 'cover' | 'contain' }
// src is optional (falls back to a PlaceholderImage); fit defaults to
// 'cover' (cropped 16:9) — use 'contain' for infographics/maps that must
// stay uncropped.
const loremContent = [{ type: 'paragraph', text: loremLong }]

export const destinations = [
  {
    slug: 'destinasi-1',
    name: 'Muara Mbaduk',
    category: 'Camping Ground',
    location: 'Sarongan, Banyuwangi',
    excerpt: 'Tempat bertemunya sungai, laut, dan keajaiban alam di selatan Meru Betiri.',
    description: [
      {
        type: 'paragraph',
        text: 'Sarongan - Ada sesuatu yang menenangkan dari tempat ketika sungai dan laut bertemu. Di Muara Mbaduk, pertemuan tersebut menciptakan lanskap yang begitu khas: aliran Sungai Buyuk yang bermuara ke Samudra Hindia, hamparan pasir yang membentang di antara keduanya, serta vegetasi hijau yang tumbuh di sekitar muara. Berada di Desa Sarongan, Kecamatan Pesanggaran, Kabupaten Banyuwangi, Muara Mbaduk menjadi salah satu destinasi yang menawarkan sisi lain dari pesisir selatan Banyuwangi. Jauh dari kesan pantai yang hanya identik dengan pasir dan ombak, tempat ini menghadirkan suasana yang lebih tenang dengan perpaduan sungai, laut, pasir, dan hutan mangrove.',
      },
      {
        type: 'paragraph',
        text: 'Hal yang paling menarik dari Muara Mbaduk adalah pemandangannya yang memperlihatkan dua lingkungan berbeda dalam satu tempat. Air Sungai Buyuk mengalir dari daratan menuju laut, sementara di hadapannya terbentang luas Samudra Hindia dengan ombak yang terus bergerak menuju pesisir. Di antara sungai dan laut terdapat hamparan pasir yang menjadi ciri khas muara. Dari kejauhan, bentang pasir tersebut terlihat seperti garis alami yang memisahkan aliran sungai dari luasnya lautan. Suasana di sekitar muara terasa berbeda dari pantai yang ramai. Suara aliran air sungai berpadu dengan deburan ombak, sementara hijaunya vegetasi di sekitar muara memberikan kesan alami yang masih kuat. Tempat seperti ini terasa cocok untuk berhenti sejenak, menikmati pemandangan, dan membiarkan suasana pesisir berjalan tanpa terburu-buru.',
      },
      {
        type: 'paragraph',
        text: 'Di sekitar bagian dalam muara, vegetasi mangrove tumbuh mengikuti kondisi lingkungan yang dipengaruhi oleh percampuran air sungai dan air laut. Kehadiran mangrove memberikan warna hijau yang kontras dengan pasir dan birunya perairan. Tidak hanya mempercantik lanskap, kawasan mangrove juga menjadi habitat bagi berbagai organisme pesisir. Akar-akar mangrove yang rapat menjadi tempat berlindung bagi ikan, kepiting, dan berbagai organisme lainnya. Bagi pengunjung, keberadaan mangrove memberikan pengalaman yang berbeda dari wisata pantai pada umumnya. Muara tidak hanya dapat dinikmati dari sisi laut, tetapi juga dari lingkungan pesisir yang lebih tenang dan hijau.',
      },
    ],
    image: '',
    variant: 0,
  },
  {
    slug: 'destinasi-2',
    name: 'Teluk Ijo',
    category: 'Wisata Bahari',
    location: 'Sarongan, Banyuwangi',
    excerpt: loremShort,
    description: loremContent,
    variant: 1,
  },
  {
    slug: 'destinasi-3',
    name: 'Pantai Benteng',
    category: 'Camping Ground',
    location: 'Sarongan, Banyuwangi',
    excerpt: loremShort,
    description: loremContent,
    variant: 2,
  },
  {
    slug: 'destinasi-4',
    name: 'Destinasi 4',
    category: 'Geowisata',
    location: 'Sarongan, Banyuwangi',
    excerpt: loremShort,
    description: loremContent,
    variant: 3,
  },
  {
    slug: 'destinasi-5',
    name: 'Destinasi 5',
    category: 'Wisata Alam',
    location: 'Sarongan, Banyuwangi',
    excerpt: loremShort,
    description: loremContent,
    variant: 4,
  },
  {
    slug: 'destinasi-6',
    name: 'Destinasi 6',
    category: 'Wisata Bahari',
    location: 'Sarongan, Banyuwangi',
    excerpt: loremShort,
    description: loremContent,
    variant: 0,
  },
]
