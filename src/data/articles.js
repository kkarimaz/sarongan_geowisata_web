import tehHerbal1 from '@/assets/images/edukasi/teh_herbal_1.webp'
import tehHerbal2 from '@/assets/images/edukasi/webp/teh_herbal_2.webp'
import tehHerbal3 from '@/assets/images/edukasi/webp/teh_herbal_3.webp'
import rumputGamaUmami1 from '@/assets/images/edukasi/webp/GAMAUMAMI.webp'
import rumputGamaUmami2 from '@/assets/images/edukasi/webp/TANAM_GAMAUMAMI.webp'
import rumputGamaUmami3 from '@/assets/images/edukasi/webp/TANAM2_GAMAUMAMI.webp'
import rumputGamaUmami4 from '@/assets/images/edukasi/webp/FITRES_IMRON.webp'
import AirAiran1 from '@/assets/images/edukasi/webp/air_airan_1.webp'
import AirAiran2 from '@/assets/images/edukasi/webp/air_airan_2.webp'
import AirAiran3 from '@/assets/images/edukasi/webp/air_airan_3.webp'
import penyu1 from '@/assets/images/edukasi/webp/penyu1.webp'
import penyu2 from '@/assets/images/edukasi/webp/penyu2.webp'
import penyu3 from '@/assets/images/edukasi/webp/penyu3.webp'
import agroforestri1 from '@/assets/images/edukasi/webp/agroforestri_1.webp'
import agroforestri2 from '@/assets/images/edukasi/webp/agroforestri_2.webp'
import agroforestri3 from '@/assets/images/edukasi/webp/agroforestri_3.webp'
import agroherbal1 from '@/assets/images/edukasi/webp/agroherbal1.webp'
import agroherbal2 from '@/assets/images/edukasi/webp/agroherbal2.webp'
import agroherbal3 from '@/assets/images/edukasi/webp/agroherbal3.webp'
import filtrasi1 from '@/assets/images/edukasi/webp/filtrasi1.webp'
import filtrasi2 from '@/assets/images/edukasi/webp/filtrasi2.webp'

const loremShort =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966.'

// content is a list of blocks rendered in order by ArticleBody.vue:
//   { type: 'paragraph', text: '...' }
//   { type: 'heading', text: '...' }     — top-level section heading
//   { type: 'subheading', text: '...' }  — secondary heading within a section
//   { type: 'link', text: '...', href: '...' }
//   { type: 'image', src: importedImage, caption: '...', fit: 'cover' | 'contain' }
//   src is optional (falls back to a PlaceholderImage); fit defaults to
//   'cover' (cropped 16:9) — use 'contain' for infographics/posters that
//   must stay uncropped.

export const articles = [
  {
    slug: 'artikel-1',
    title: 'PKK Desa Sarongan Belajar Olah Daun Kelor Menjadi Teh Herbal sebagai Upaya Promosi Gaya Hidup Sehat',
    category: 'Agroherbal',
    date: '2026-07-10',
    excerpt: "Mahasiswa KKN-PPM UGM Desa Sarongan melaksanakan program pengolahan teh herbal sebagai upaya edukasi dan promosi pemanfaatan herbal lokal dari daun kelor sebagai sumber pangan yang fungsional.",
    content: [
      {
        type: 'paragraph',
        text: 'Sarongan - Desa Sarongan banyak ditumbuhi beragam tanaman pangan dan herbal, salah satunya yakni daun kelor yang selama ini telah menjadi bagian dari kehidupan masyarakat. Tanaman ini banyak dijumpai di pekarangan rumah warga. Dalam kehidupan sehari-hari, tanaman daun kelor ini diyakini secara turun-temurun oleh masyarakat sebagai tanaman yang memiliki manfaat kesehatan, seperti membantu meningkatkan produksi ASI dan menjaga tekanan darah. Berdasarkan potensi tersebut, tim KKN-PPM Universitas Gadjah Mada berinovasi dengan mengajak ibu-ibu PKK Desa Sarongan dalam pengolahan daun kelor menjadi teh herbal melalui kegiatan sosialisasi dan demonstrasi pembuatan produk.',
      },
      {
        type: 'paragraph',
        text: 'Kegiatan dilaksanakan pada hari Jumat, 10 Juli 2026 di Balai Desa Sarongan yang diawali dengan penyampaian penyampaian materi mengenai diabetes melitus tipe 2, yang terdiri atas faktor risiko, gejala, hingga pentingnya menerapkan pola hidup sehat sebagai upaya menurunkan risiko gejala menjadi diabetes melitus tipe 2. Materi ini disampaikan berdasarkan hasil observasi lapangan yang menunjukkan bahwa cukup banyak masyarakat berusia lanjut di Desa Sarongan yang menjadi pasien dalam Program Pengelolaan Penyakit Kronis (Prolanis) dan wajib menjalani konsumsi obat secara rutin. Kondisi tersebut menarik perhatian tim KKN untuk dapat memberikan edukasi mengenai pemanfaatan tanaman yang ada di sekitar lingkungan sebagai bagian dari upaya promotif dan preventif dalam menjaga kesehatan masyarakat Desa Sarongan.',
      },
      {
        type: 'paragraph',
        text: 'Dalam sesi selanjutnya, peserta diperkenalkan dengan potensi daun kelor sebagai bahan pangan yang bersifat fungsional, sehingga dapat diolah menjadi berbagai hidangan, salah satunya menjadi minuman herbal. Beberapa penelitian yang telah dilakukan sebelumnya, menunjukkan bahwa daun kelor mengandung berbagai senyawa bioaktif yang berpotensi membantu dan mendukung dalam pengendalian kadar gula darah dalam tubuh apabila dikonsumsi sebagai bagian dari upaya pola makan sehat. Namun demikian, konsumsi daun kelor tetap harus berada dalam posisi sebagai pendamping gaya hidup sehat, bukan serta merta sebagai pengganti pengobatan medis.',
      },
      {
        type: 'image',
        src: tehHerbal2,
        caption: 'Mahasiswa KKN-PPM Universitas Gadjah Mada memberikan edukasi mengenai pemanfaatan daun kelor sebagai bahan pangan fungsional kepada ibu-ibu PKK Desa Sarongan di Balai Desa Sarongan.',
      },
      {
        type: 'image',
        src: tehHerbal3,
        caption: 'Ibu-ibu PKK Desa Sarongan mengikuti demonstrasi pembuatan teh herbal daun kelor di Balai Desa Sarongan.',
      },
      {
        type: 'paragraph',
        text: 'Suasana semakin meriah saat memasuki sesi demonstrasi pembuatan teh herbal daun kelor. Kegiatan ini menjadi sesi yang paling dinanti dan disambut antusias oleh ibu-ibu PKK Desa Sarongan, yang turut mempraktikkan setiap tahapan pengolahan daun kelor hingga siap seduh menjadi minuman herbal. Pada kesempatan ini, produk teh herbal daun kelor yang dibuat dipadukan dengan jahe emprit. Untuk memberikan cita rasa yang lebih nikmat, seduhan teh dapat ditambahkan dengan madu maupun gula jawa sebagai pemanis alami sesuai selera peserta.',
      },
      {
        type: 'paragraph',
        text: 'Proses pembuatannya pun relatif sederhana. Daun kelor yang telah dipetik, dicuci hingga bersih, kemudian dikeringkan menggunakan oven pada suhu sekitar 80°C selama kurang lebih 30 menit dan sering dilakukan pengecekan setiap 10 menit. Opsi pengeringan lain dapat dilakukan dengan dijemur di bawah sinar matahari selama kurang lebih tiga hari dengan penutup kain bersih berwarna gelap untuk menghindari teh terkontaminasi dengan zat lain. Daun yang telah benar-benar kering ditandai dengan tekstur yang rapuh saat diremas, kemudian dipotong atau diblender kasar. Pada tahap ini, aroma daun kelor juga menjadi lebih harum menyerupai aroma daun teh kering, sehingga memberikan sensasi segar saat diseduh.',
      },
      {
        type: 'paragraph',
        text: 'Melalui kegiatan ini, Tim KKN-PPM Universitas Gadjah Mada berharap pemanfaatan daun kelor tidak terbatas sebagai sayuran, melainkan juga berkembang menjadi produk olahan yang bernilai tambah, mudah didapat dan dibuat, serta dapat menjadi alternatif minuman herbal bagi masyarakat. Tujuan lain dari program ini sebagai upaya dalam mendorong pemanfaatan pengelolaan lahan, serta pemanfaatan kekayaan sumber daya alam di Desa Sarongan sebagai bagian dari budaya hidup sehat yang berkelanjutan.',
      },
    ],
    image: tehHerbal1,
    variant: 1,
  },
  {
    slug: 'artikel-2',
    title: 'Mahasiswa KKN-PPM UGM Dorong Diversifikasi Pertanian melalui Sosialisasi Agroforestri untuk Mengoptimalkan Lahan dan Mendorong Pertanian Berkelanjutan',
    category: 'Agroforestri',
    date: '2026-07-21',
    excerpt: "Mahasiswa KKN-PPM UGM Desa Sarongan melaksanakan program sosialisasi agroforestri sebagai upaya edukasi dan promosi pemanfaatan lahan secara optimal untuk mendukung pertanian berkelanjutan.",
    content: [
      {
        type: 'paragraph',
        text: 'Banyuwangi - Optimalisasi lahan pertanian kembali menjadi perhatian di tengah meningkatnya tekanan terhadap kualitas tanah akibat praktik budidaya tanaman yang kurang ramah lingkungan, seperti praktik budidaya yang masih bergantung pada penggunaan pupuk kimia dalam jangka panjang. Di Desa Sarongan, Kecamatan Pesanggaran, yang dikenal sebagai salah satu sentra budidaya buah naga, tantangan tersebut turut dirasakan oleh para petani. Selain dari faktor tingginya kebutuhan pupuk untuk mempertahankan produktivitas tanaman, juga terdapat ruang di sela-sela tanaman buah naga yang masih dapat dioptimalkan. ',
      },
      {
        type: 'paragraph',
        text: 'Melihat kondisi tersebut, mahasiswa KKN-PPM Universitas Gadjah Mada menyelenggarakan Sosialisasi sebagai upaya memperkenalkan alternatif sistem pertanian yang lebih produktif sekaligus berkelanjutan. Kegiatan ini disusun berdasarkan hasil observasi lapangan, pengukuran kondisi tanah, serta wawancara bersama kelompok tani sehingga materi yang disampaikan berdasar pada kebutuhan dan tantangan nyata yang dihadapi oleh petani. Melalui pendekatan lintas disiplin ilmu, mahasiswa menghadirkan rekomendasi berbasis ilmiah yang dapat menjadi bahan pertimbangan bagi masyarakat dalam mengembangkan sistem pertanian yang sesuai dengan potensi yang dimiliki Desa Sarongan. Penyelenggaraan sosialisasi tersebut dilaksanakan pada hari Selasa, 21 Juli 2026, bertempat di Balai Desa Sarongan. Kegiatan ini dihadiri sekitar 20 hingga 25 anggota kelompok tani Desa Sarongan yang aktif dalam membudidayakan buah naga. Dalam kegiatan ini, mahasiswa bukan semata menawarkan solusi yang bersifat instan, melainkan memberikan rekomendasi yang diharapkan dapat menjadi pijakan bagi masyarakat dalam mengembangkan inovasi pertanian secara mandiri dan berkelanjutan.',
      },
      {
        type: 'paragraph',
        text: 'Sebagai bagian dari identifikasi kondisi lapangan, tim KKN-PPM UGM melakukan pengambilan sampel tanah pada delapan lahan milik anggota Kelompok Tani Desa Sarongan. Hasil pengukuran menunjukkan bahwa tingkat keasaman (pH) tanah berada pada kisaran 5-7, yang secara umum masih tergolong sesuai untuk mendukung pertumbuhan tanaman buah naga. Meskipun demikian, variasi nilai pH antar lahan menunjukkan adanya perbedaan kondisi pengelolaan tanah. Berdasarkan hasil diskusi bersama petani, lahan dengan pH yang lebih rendah pada umumnya merupakan lahan yang banyak mengandalkan penggunaan pupuk kimia secara intensif, sedangkan lahan yang telah dipadukan dengan pupuk kandang maupun pupuk organik lainnya menunjukkan kondisi tanah yang relatif lebih baik. Hasil observasi dan pengukuran tersebut menjadi salah satu dasar dalam penyusunan materi sosialisasi mengenai pentingnya menjaga kualitas tanah melalui diversifikasi tanaman dan penerapan sistem agroforestri. ',
      },
      {
        type: 'image',
        src: agroforestri3,
        caption: 'Tim KKN-PPM UGM melakukan pengukuran pH tanah pada 3 lapisan untuk mengetahui kondisi keasaman tanah perkebunan buah naga',
        fit: 'contain',
      },
      {
        type: 'paragraph',
        text: 'Selain melakukan pengukuran tanah, mahasiswa juga melakukan wawancara dengan sejumlah petani untuk memahami praktik budidaya buah naga yang telah dilakukan selama bertahun-tahun. Dari hasil diskusi diketahui bahwa biaya produksi terbesar berasal dari kebutuhan pupuk, terutama pada fase awal pertumbuhan tanaman. Sebagian besar petani masih memilih pupuk kimia karena dianggap lebih praktis dan memberikan hasil yang cepat. Namun, beberapa petani yang telah mengombinasikan pupuk kimia dengan pupuk organik mengungkapkan bahwa pertumbuhan batang akan jauh lebih baik, tanaman lebih sehat, serta hasil panen cenderung meningkat, namun proses pembuahan lebih lama dan cenderung kompleks. Selain itu, beberapa petani juga menyampaikan bahwa sistem tumpang sari sebenarnya pernah diterapkan ketika buah naga masih berusia muda, seperti penanaman cabe kecil, terong, maupun kacang tanah. Akan tetapi, praktik tersebut umumnya dihentikan setelah tanaman buah naga memasuki fase produktif karena adanya kekhawatiran terhadap persaingan unsur hara dan keterbatasan tenaga dalam merawat beberapa komoditas dalam waktu yang bersamaan. ',
      },
      {
        type: 'paragraph',
        text: 'Suasana pelaksanaan sosialisasi berlangsung hangat dan interaktif sejak awal pemaparan hingga akhir. Peserta aktif menyimak penjelasan mengenai hasil observasi lapangan yang dilakukan mahasiswa sekaligus membandingkan dengan pengalaman individu dalam mengelola kebun buah naga. Kegiatan sosialisasi ini menjadi forum penyampaian materi yang nyaman untuk bertukar pengetahuan antara masyarakat Desa Sarongan dengan mahasiswa KKN-PPM UGM.',
      },
      {
        type: 'image',
        src: agroforestri1,
        caption: 'Mahasiswa KKN-PPM UGM menyampaikan materi sosialisasi agroforestri kepada anggota Kelompok Tani Desa Sarongan di Balai Desa Sarongan',
      },
      {
        type: 'paragraph',
        text: 'Dalam kegiatan tersebut, peserta diperkenalkan dengan konsep agroforestri. Agroforestri merupakan sistem pengelolaan lahan yang mengintegrasikan berbagai jenis tanaman dalam satu lingkup kawasan budidaya untuk meningkatkan produktivitas sekaligus menjaga keseimbangan lingkungan. Pola penanam seperti ini dinilai mampu meningkatkan hasil atau produksi panen sekaligus menjaga kesehatan serta keseimbangan ekosistem. Dalam konteks pertanian buah naga di Desa Sarongan, konsep ini dikenal diperkenalkan melalui sistem tumpang sari, yaitu teknik menanam tanaman pendamping di area tanaman utama dengan tetap memperhatikan kebutuhan nutrisi, ruang tumbuh, sistem perakaran, serta kebutuhan lain pada masing-masing tanaman. Melalui pendekatan ini, lahan yang sebelumnya belum dimanfaatkan dapat menghasilkan komoditas tambahan tanpa perlu membuka lahan baru.',
      },
      {
        type: 'paragraph',
        text: 'Penerapan dari sistem agroforestri ini tidak hanya bertujuan untuk meningkatkan efisiensi pemanfaatan lahan, melainkan juga memberikan berbagai manfaat secara ekologis dan ekonomis. Penanaman tanaman pendamping juga dapat membantu menekankan pertumbuhan gulma, memperbaiki struktur tanah, meningkatkan kandungan bahan organik yang diperlukan tanaman, serta mengurangi ketergantungan terhadap pupuk kimia.  Di samping itu, mahasiswa turut menjelaskan bahwa penerapan sistem tumpang sari memerlukan perencanaan yang matang. Pemilihan jenis tumbuhan harus disesuaikan dengan karakteristik akar, kebutuhan nutrisi, dan siklus pertumbuhan agar tidak menimbulkan persaingan dengan tanaman buah naga. ',
      },
      {
        type: 'image',
        src: agroforestri2,
        caption: 'Penyampaian materi konsep agroforestri dan penerapan sistem tumpang sari pada budidaya buah naga',
      },
      {
        type: 'paragraph',
        text: 'Berdasarkan hasil observasi dan diskusi dengan kelompok tani, terdapat beberapa tanaman yang direkomendasikan sebagai tanaman pendamping, antara lain jahe. Tanaman empon-empon tersebut dipilih karena memiliki sistem perakaran yang relatif dangkal, bernilai ekonomi, serta mudah dibudidayakan. ',
      },
      {
        type: 'paragraph',
        text: 'Melalui kegiatan ini, mahasiswa KKN-PPM Universitas Gadjah Mada berharap agar sistem agroforestri tidak hanya menjadi pengetahuan baru bagi kelompok tani, melainkan juga menjadi inspirasi dalam mengoptimalkan pemanfaatan lahan buah naga secara bertahap. Kolaborasi ini diharapkan mampu mendorong penerapan sistem pertanian yang lebih produktif, ramah lingkungan, serta berkelanjutan di Desa Sarongan. ',
      },
    ],
    image: agroforestri2,
    variant: 2,
  },
  {
    slug: 'artikel-3',
    title: 'Tanaman Herbal sebagai Peluang Baru: KKN-PPM UGM Kenalkan Agroherbal untuk Kesehatan dan Diversifikasi Pendapatan Petani Desa Sarongan',
    category: 'Agroherbal',
    date: '2026-07-21',
    excerpt: 'Mahasiswa KKN-PPM UGM Desa Sarongan melaksanakan program sosialisasi agroherbal sebagai upaya edukasi dan promosi pemanfaatan tanaman herbal untuk kesehatan dan diversifikasi pendapatan petani.',
    content: [
      {
        type: 'paragraph',
        text: 'Sarongan - Desa Sarongan dikenal sebagai salah satu desa yang menjadi sentra budidaya buah naga di Kecamatan Pesanggaran, Kabupaten Banyuwangi. Namun dibalik itu, desa ini juga memiliki potensi pada tanaman herbal yang tumbuh subur dan melimpah di tanah Sarongan. Berbagai jenis empon-empon, seperti cabe jawa, jahe, kunyit, dan tanaman herbal lain mudah dijumpai di lingkungan masyarakat. Selama ini, tanaman tersebut lebih dikenal oleh masyarakat sebagai bumbu dapur. Sedangkan, tanaman-tanaman tersebut juga menyimpan berbagai manfaat pada kesehatan yang dapat meningkatkan pola hidup sehat masyarakat.',
      },
      {
        type: 'paragraph',
        text: 'Melalui hasil observasi lapangan dan diskusi bersama beberapa anggota kelompok Tani Desa Sarongan, mahasiswa KKN-PPM Universitas Gadjah Mada mengidentifikasikan potensi pengembangan tanaman herbal yang dapat dimanfaatkan sebagai komoditas pertanian yang bernilai ekonomi, juga sebagai bagian dari upaya promotif dan preventif dalam menjaga kesehatan masyarakat. Berbekal dari potensi tersebut, tim KKN-PPM UGM menyelenggarakan kegiatan Sosialisasi Agroherbal bersama kelompok Tani Desa Sarongan pada Selasa malam, 21 Juli 2026, bertempat di Balai Desa Sarongan. Kegiatan ini diikuti oleh sejumlah 15 anggota kelompok tani yang antusias dalam diskusi mengenai peluang pemanfaatan tanaman herbal dalam mendukung pertanian yang berkelanjutan sekaligus juga meningkatkan kualitas kesehatan masyarakat. ',
      },
      // {
      //   type: 'image',
      //   src: '',
      //   caption: '',
      // },
      // {
      //   type: 'image',
      //   src: '',
      //   caption: '',
      // },
      {
        type: 'image',
        src: agroherbal2,
        caption: 'Mahasiswa KKN-PPM UGM menyampaikan materi sosialisasi Agroherbal kepada anggota Kelompok Tani Desa Sarongan di Balai Desa Sarongan',
      },
      {
        type: 'paragraph',
        text: 'Sebelum pelaksanaan sosialisasi, tim KKN-PPM UGM melakukan serangkaian wawancara bersama dengan petani buah naga untuk mengetahui jenis tanaman yang dinilai sesuai dengan kondisi lahan setempat. Hasil wawancara menunjukkan bahwa masyarakat telah mengenal beberapa tanaman herbal berdasarkan pengetahuan turun temurun, seperti jahe dan kencur, bahkan sebagai petani menilai tanaman-tanaman tersebut merupakan jenis tanaman yang relatif mudah dibudidayakan dengan biaya perawatan yang rendah. Pak Ridwan, salah satu petani buah naga, menyampaikan bahwa dibandingkan beberapa tanaman palawija, empon-empon cenderung lebih mudah dirawat dan tidak membutuhkan biaya produksi yang terlalu besar. Pendapat serupa juga disampaikan oleh Pak Eko yang menilai tanaman herbal memiliki peluang untuk dikembangkan sebagai tanaman pendamping selama pengaturan jarak waktu tanam dapat dilakukan dengan baik. ',
      },
      // {
      //   type: 'image',
      //   src: '',
      //   caption: '',
      // },
      // {
      //   type: 'image',
      //   src: '',
      //   caption: 'Tim KKN-PPM UGM melakukan wawancara dengan petani buah naga dalam identifikasi potensi pengembangan tanaman herbal di Desa Sarongan',
      // },
      {
        type: 'paragraph',
        text: 'Melalui hasil tersebut, tim KKN-PPM UGM mengangkat aspek kesehatan sebagai spek utama pembahasan dalam kegiatan sosialisasi. Pada kegiatan tersebut, pengenalan manfaat jahe (Zingiber Officinale) sebagai salah satu tanaman herbal yang mudah dijumpai ini menjadi fokus utama pembahasan. Tim KKN-PPM UGM menjelaskan bahwa jahe mengandung senyawa aktif seperti gingerol, shogaol, dan zingerone yang memiliki aktivitas antioksidan dan antiinflamasi. Penyampaian materi berdasarkan pada berbagai penelitian sebelumnya yang menunjukkan bahwa konsumsi jahe secara rutin sebagai bagian dari pola hidup sehat dapat berpotensi dalam membantu meningkatkan sensitivitas insulin, mendukung pengendalian kadar gula darah dalam tubuh, serta mengurangi stres oksidatif yang berkaitan dengan perkembangan penyakit metabolik seperti diabetes melitus tipe 2. Penjelasan juga menekankan pada fungsi tanamann herbal yang bukan merupakan pokok pengganti terapi medis, melainkan sebagai pendukung gaya hidup sehat apabila dikonsumsi tepat. ',
      },
      {
        type: 'paragraph',
        text: 'Pembahasan selanjutnya membahas keterkaitan antara kondisi kesehatan masyarakat dengan tanaman herbal. Seiring dengan bertambahnya usia, risiko terhadap penyakit tidak menular seperti diabetes melitus tipe 2 semakin meningkat akibat akumulasi berbagai faktor risiko, seperti pola makan yang tidak seimbang aktivitas fisik sehari-hari. Oleh karena itu, pengenalan tanaman herbal diharapkan dapat menjadi salah satu bentuk edukasi preventif yang mudah diterapkan oleh masyarakat melalui pemanfaatan sumber daya yang tersedia di lingkungan sekitar tempat tinggal. ',
      },
      {
        type: 'paragraph',
        text: 'Suasana sosialisasi berlangsung interaktif. Peserta aktif mengajukan berbagai pertanyaan mengenai jenis jahe yang paling sesuai untuk ditanam di lahan pertanian, teknik budidaya, hingga cara pengolahan dan konsumsi jahe agar manfaatnya dapat diperoleh secara optimal. Antusiasme dari masyarakat ini, menunjukkan bahwa tanaman herbal tidak lagi dipandang hanya sebagai bumbu dapur, melainkan juga mulai dilihat sebagai komoditas yang bernilai ekonomi sekaligus memberikan manfaat bagi kesehatan keluarga. ',
      },
      // {
      //   type: 'image',
      //   src: '',
      //   caption: '',
      // },
      {
        type: 'image',
        src: agroherbal3,
        caption: 'Peserta aktif berdiskusi terkait pengelolaan dan pemanfaatan tanaman herbal',
      },
      {
        type: 'paragraph',
        text: 'Melalui kegiatan Sosialisasi ini, mahasiswa KKN-PPM Universitas Gadjah MAda berharap agar masyarakat Desa Sarongan semakin mengenal potensi tanaman herbal sebagai bagian dari sistem pertanian yang berkelanjutan. Pemanfaatan tanaman herbal diharapkan tidak hanya mampu memberikan tambahan pendapatan bagi petani melalui diversifikasi hasil panen, melainkan juga mendorong masyarakat untuk menerapkan gaya hidup yang lebih sehat melalui pemanfaatan tanaman obat yang mudah dan banyak dijumpai di lingkungan sekitar. Dengan demikian, tanaman herbal dapat berkembang menjadi potensi lokal yang mendukung kesejahteraan sekaligus kesehatan masyarakat Desa Sarongan. ',
      },
    ],
    image: agroherbal1,
    variant: 3,
  },
  {
    slug: 'artikel-4',
    title: 'Mahasiswa KKN Ajarkan Budidaya Rumput Gama Umami untuk Sapi dan Berikan Vitamin bagi Ayam di Desa Sarongan',
    category: 'Peternakan',
    date: '2026-07-25',
    excerpt: 'Mahasiswa KKN-PPM UGM Desa Sarongan melaksanakan program edukasi budidaya rumput gama umami untuk pakan sapi dan pemberian vitamin bagi ayam sebagai upaya meningkatkan produktivitas ternak.',
    content: [
      {
        type: 'paragraph',
        text: 'Sarongan – Sekelompok mahasiswa Kuliah Kerja Nyata (KKN) yang ditempatkan di Desa Sarongan melaksanakan program kerja di bidang peternakan sebagai bentuk kontribusi nyata terhadap peningkatan kesejahteraan masyarakat setempat. Program ini terbagi menjadi dua fokus utama, yaitu pengenalan dan pelatihan budidaya rumput Gama Umami sebagai pakan unggulan bagi sapi yang menyasar kelompok tani, serta pemberian vitamin bagi ayam yang menyasar para peternak ayam di desa tersebut.',
      },
      {
        type: 'paragraph',
        text: 'Desa Sarongan dikenal sebagai salah satu desa dengan potensi peternakan yang cukup besar, baik dari sektor sapi maupun ayam. Namun, minimnya pengetahuan warga terkait pakan ternak berkualitas dan perawatan ternak yang optimal membuat produktivitas hewan ternak belum berkembang secara maksimal. Melihat kondisi tersebut, mahasiswa KKN berinisiatif menghadirkan program yang bersifat edukatif sekaligus aplikatif, sehingga manfaatnya dapat langsung dirasakan oleh masyarakat.',
      },
      {
        type: 'image',
        src: rumputGamaUmami3,
        caption: 'Rumput Gama Umami yang sedang dibudidayakan di Desa Sarongan',
      },
      {
        type: 'heading',
        text: 'Rumput Gama Umami: Pengetahuan Singkat bagi Kelompok Tani',
      },
      {
        type: 'paragraph',
        text: 'Dalam program pertama, mahasiswa KKN memperkenalkan rumput Gama Umami kepada kelompok tani di Desa Sarongan. Gama Umami merupakan hasil pemuliaan rumput gajah melalui teknik radiasi sinar gamma yang dikembangkan oleh Fakultas Peternakan UGM bekerja sama dengan Badan Tenaga Nuklir Nasional (BATAN). Melalui proses radiasi tersebut, dihasilkan varietas rumput gajah yang jauh lebih unggul dibandingkan tetuanya, baik dari segi produktivitas maupun kualitas gizinya.',
      },
      {
        type: 'paragraph',
        text: 'Mahasiswa menjelaskan kepada warga bahwa rumput Gama Umami memiliki sejumlah keunggulan dibandingkan rumput gajah biasa. Produksi biomassa segarnya dapat mencapai 50 kg per meter persegi, jauh lebih tinggi dibandingkan rumput gajah lokal yang hanya berkisar 30 kg per meter persegi. Selain itu, kandungan protein kasarnya mencapai 11–14,7%, sehingga sangat baik sebagai pakan hijauan untuk ternak ruminansia seperti sapi. Rumput ini juga dapat dipanen hingga enam kali dalam setahun, menjadikannya pilihan pakan yang efisien sepanjang musim.',
      },
      {
        type: 'paragraph',
        text: 'Keunggulan lain yang tidak kalah penting adalah tekstur daun dan batangnya. Berbeda dengan rumput gajah biasa yang berbulu halus dan dapat menimbulkan rasa gatal, daun Gama Umami lebih halus dan nyaman, sehingga lebih disukai ternak. Batangnya pun empuk dan bahkan bisa dimakan langsung oleh ternak tanpa perlu dicacah terlebih dahulu, sehingga sangat memudahkan peternak yang belum memiliki mesin pencacah pakan.',
      },
      {
        type: 'paragraph',
        text: 'Dalam sesi pelatihan, mahasiswa KKN mengajarkan cara budidaya rumput Gama Umami mulai dari teknik penyetekan batang, pengolahan lahan, hingga perawatan agar pertumbuhannya optimal. Warga diajarkan bahwa rumput ini dapat dikembangkan dengan mudah melalui stek batang, dan dalam waktu singkat mampu menghasilkan banyak tunas baru. Metode budidaya yang sederhana ini membuat kelompok tani optimis dapat mengembangkan rumput Gama Umami secara mandiri di lahan masing-masing untuk memenuhi kebutuhan pakan sapi mereka.',
      },
      {
        type: 'heading',
        text: 'Vitamin untuk Ayam: Upaya Tingkatkan Produktivitas Peternak',
      },
      {
        type: 'paragraph',
        text: 'Selain program rumput Gama Umami, mahasiswa KKN juga menjalankan program kerja kedua yang menyasar para peternak ayam di Desa Sarongan. Pada program ini, mahasiswa memberikan vitamin tambahan bagi ayam ternak warga guna menjaga kesehatan serta meningkatkan produktivitasnya, khususnya dalam hal kualitas dan kuantitas produksi telur.',
      },
      {
        type: 'paragraph',
        text: 'Kegiatan pemberian vitamin dilakukan secara langsung oleh mahasiswa KKN dengan didampingi para peternak ayam, sehingga warga dapat sekaligus mempelajari cara pemberian vitamin yang benar, baik dari segi dosis maupun waktu pemberian yang tepat. Selain memberikan vitamin secara langsung, mahasiswa juga memberikan edukasi mengenai pentingnya menjaga kebersihan kandang serta pengaturan pola makan ayam agar hasil yang didapatkan lebih maksimal.',
      },
      {
        type: 'paragraph',
        text: 'Pemberian vitamin secara rutin dinilai penting untuk menekan angka kematian ayam akibat penyakit, sekaligus membantu ayam tetap sehat dan produktif meskipun dalam kondisi cuaca yang kurang mendukung. Mahasiswa KKN turut menyoroti potensi ekonomi yang menjanjikan dari usaha peternakan ayam di Desa Sarongan, mengingat jumlah peternak ayam di desa tersebut masih tergolong sedikit dibandingkan dengan potensi pasar yang ada. Kondisi ini menjadi peluang tersendiri bagi warga, karena tingkat persaingan usaha di sektor peternakan ayam belum terlalu ketat.',
      },
      {
        type: 'image',
        src: rumputGamaUmami4,
        caption: '',
        // fit: 'contain',
      },
      {
        type: 'paragraph',
        text: 'Sebagian besar peternak ayam di Desa Sarongan mengandalkan hasil produksi telur sebagai sumber penghasilan utama mereka. Dengan pemberian vitamin secara berkala, diharapkan kualitas dan kuantitas telur yang dihasilkan dapat meningkat, sehingga mampu memenuhi permintaan pasar sekaligus membuka peluang perluasan usaha ke depannya.',
      },
      {
        type: 'paragraph',
        text: 'Melalui dua program kerja ini, mahasiswa KKN berharap dapat memberikan dampak positif yang berkelanjutan bagi masyarakat Desa Sarongan, baik dari kelompok tani maupun peternak ayam. Program budidaya rumput Gama Umami diharapkan mampu meningkatkan kualitas pakan dan produktivitas sapi secara jangka panjang, sementara pemberian vitamin bagi ayam diharapkan dapat menjaga kesehatan ternak dan mendorong peningkatan hasil produksi telur.',
      },
      {
        type: 'paragraph',
        text: 'Dengan bekal pengetahuan dan keterampilan baru yang telah diberikan, masyarakat diharapkan mampu mengembangkan usaha peternakan mereka secara lebih optimal, sehingga dapat meningkatkan kesejahteraan ekonomi keluarga maupun desa secara keseluruhan.',
      },
    ],
    image: rumputGamaUmami1,
    variant: 4,
  },
  {
    slug: 'artikel-5',
    title: 'Mengenal Kondisi Sumber Air Desa Sarongan Melalui Pemetaan dan Peninjauan Kualitas Air Tanah',
    category: 'Edukasi Lingkungan',
    date: '2026-07-18',
    excerpt: loremShort,
    content: [
      {
        type: 'paragraph',
        text: 'Air merupakan sumber daya yang penting dalam menunjang kehidupan manusia, kegunaannya sangat baik untuk kebutuhan rumah tangga, pertanian, maupun menjaga keseimbangan ekosistem. Sebagai salah satu wilayah yang memiliki bentang alam perbukitan, dataran rendah dan pesisir pantai, Desa Sarongan memiliki sistem air tanah yang menarik dan perlu dipahami agar pemanfaatannya dapat dilakukan secara berkelanjutan.',
      },
      {
        type: 'paragraph',
        text: 'Melalui program interdisipliner KKN-PPM Universitas Gadjah Mada Unit Sagara Pesanggaran, melakukan pemetaan serta peninjauan kondisi air tanah di Dusun Krajan, Desa Sarongan. Kegiatan ini bertujuan menyajikan informasi mengenai sistem air tanah dalam bentuk infografis yang mudah dipahami masyarakat sekaligus mendukung upaya konservasi sumber daya air.',
      },
      {
        type: 'paragraph',
        text: 'Survei dilakukan pada sejumlah titik pengamatan yang meliputi sumur warga, tandon air, sumber mata air, dan sungai. Data yang dikumpulkan mencakup kedalaman muka air tanah (MAT), ketinggian muka air tanah, pola aliran air tanah, serta beberapa parameter kualitas air seperti pH, total dissolved solids (TDS), dan suhu. Data tersebut kemudian diolah menjadi tabel dan peta tematik sehingga kondisi air tanah dapat divisualisasikan serta dibaca secara lebih mudah.',
      },
      {
        type: 'image',
        src: AirAiran3,
        caption: '',
      },
      {
        type: 'image',
        src: AirAiran2,
        caption: 'Tim KKN-PPM UGM melakukan pemetaan dan peninjauan kualitas air tanah di Dusun Krajan, Desa Sarongan',
      },
      {
        type: 'paragraph',
        text: 'Hasilnya menunjukkan bahwa sistem air tanah di Dusun Krajan didominasi oleh akuifer bebas, yaitu lapisan air tanah yang berhubungan langsung dengan permukaan sehingga kondisi muka air tanah dapat berubah mengikuti curah hujan, musim, maupun pemanfaatan air oleh masyarakat. Daerah perbukitan yang tersusun oleh batuan breksi piroklastik berperan sebagai daerah resapan (recharge), tempat air hujan meresap ke dalam tanah. Selanjutnya, air tanah mengalir menuju daerah yang lebih rendah hingga akhirnya muncul kembali sebagai mata air, rembesan, maupun aliran sungai (discharge).',
      },
      {
        type: 'paragraph',
        text: 'Pengambilan data dilakukan pada musim kemarau, sehingga debit sungai yang diamati relatif kecil. Meski demikian, aliran sungai tetap berlangsung karena memperoleh pasokan dari air tanah (baseflow) yang tersimpan di bawah permukaan. Temuan ini memperlihatkan bahwa keberadaan daerah resapan memiliki peran penting dalam menjaga ketersediaan air, terutama ketika curah hujan rendah.',
      },
      {
        type: 'paragraph',
        text: 'Selain itu, kegiatan ini juga memberikan gambaran mengenai kondisi kualitas air melalui parameter pH, TDS dan suhu. Hasil pengukuran menunjukkan adanya variasi nilai pada setiap titik pengamatan yang dipengaruhi oleh kondisi geologi serta aktivitas di sekitar wilayah, seperti pertanian, perkebunan, peternakan, dan permukiman. Meskipun begitu, parameter tersebut merupakan indikator awal dan belum dapat digunakan untuk menentukan adanya pencemaran tanpa analisis yang lebih mendalam.',
      },
      {
        type: 'image',
        src: AirAiran1,
        fit: 'contain',
        caption: 'Hasil infografis pemetaan dan peninjauan kualitas air tanah di Dusun Krajan, Desa Sarongan',
      },
      {
        type: 'paragraph',
        text: 'Infografis yang dihasilkan diharapkan dapat menjadi media informasi yang mudah dipahami oleh masyarakat maupun pemerintah desa. Dengan memahami bagaimana air hujan meresap, mengalir di bawah permukaan, hingga kembali muncul sebagai mata air dan sungai, masyarakat diharapkan semakin menyadari pentingnya menjaga daerah resapan, mengelola penggunaan air tanah secara bijaksana, serta meminimalkan aktivitas yang berpotensi menurunkan kualitas air.',
      },
    ],
    image: AirAiran3,
    variant: 0,
  },
  {
    slug: 'artikel-6',
    title: 'Dari Tanah ke Keran: Mengenal Konsep Filtrasi Air, dari yang Sederhana hingga yang Canggih',
    category: 'Lingkungan',
    date: '2026-06-14',
    excerpt: loremShort,
    content: [
      {
        type: 'paragraph',
        text: 'Survei air tanah di Dusun Krajan sebelumnya menunjukkan bahwa parameter kualitas air seperti pH, TDS, dan suhu bervariasi di tiap titik pengamatan, dipengaruhi kondisi geologi dan aktivitas sekitar (pertanian, peternakan, permukiman). Artinya, air dari sumur atau mata air tidak selalu langsung siap pakai tanpa penanganan lebih lanjut.',
      },
      {
        type: 'paragraph',
        text: 'Di sinilah filtrasi air berperan: menjawab bagaimana cara memastikan air tersebut layak dan aman digunakan sehari-hari.',
      },
      {
        type: 'heading',
        text: 'Apa Itu Filtrasi Air?',
      },
      {
        type: 'paragraph',
        text: 'Secara sederhana, filtrasi air adalah proses pemisahan partikel, zat pengotor, maupun mikroorganisme dari air dengan cara melewatkan air tersebut melalui media penyaring tertentu. Media ini bekerja lewat beberapa mekanisme utama:',
      },
      {
        type: 'paragraph',
        text: 'Penyaringan fisik (mechanical filtration): menahan partikel padat berdasarkan ukurannya, seperti pasir, lumpur, atau serpihan organik.',
      },
      {
        type: 'paragraph',
        text: 'Adsorpsi: menyerap zat kimia, bau, warna, dan senyawa organik terlarut ke permukaan media, seperti yang dilakukan karbon aktif.',
      },
      {
        type: 'paragraph',
        text: 'Pertukaran ion (ion exchange): mengganti ion-ion tertentu dalam air (misalnya kalsium dan magnesium penyebab kesadahan) dengan ion lain yang lebih aman.',
      },
      {
        type: 'paragraph',
        text: 'Setiap sistem filtrasi, baik yang sesederhana botol plastik bekas maupun yang serumit instalasi pengolahan air skala kota, pada dasarnya menggabungkan beberapa mekanisme ini sesuai kebutuhan.',
      },
      {
        type: 'heading',
        text: 'Filtrasi Sederhana: Solusi Skala Rumah Tangga dan Komunitas',
      },
      {
        type: 'paragraph',
        text: 'Untuk kondisi seperti di Dusun Krajan, di mana masyarakat mengandalkan sumur, tandon, dan mata air secara langsung, filtrasi sederhana berbasis media alami menjadi solusi yang realistis, murah, dan mudah diterapkan. Beberapa media yang umum digunakan antara lain:',
      },
      {
        type: 'paragraph',
        text: 'Kerikil dan batu split (gravel): berfungsi sebagai lapisan penyaring paling awal, menahan partikel besar seperti pasir kasar, lumpur, dan kotoran organik. Kerikil juga membantu menjaga aliran air tetap merata sebelum masuk ke lapisan berikutnya.',
      },
      {
        type: 'paragraph',
        text: 'Pasir silika (silica sand): menyaring partikel yang lebih halus dibanding kerikil, seperti lumpur halus dan sedimen. Pasir silika juga membantu memperbaiki kejernihan (turbidity) air secara signifikan.',
      },
      {
        type: 'paragraph',
        text: 'Arang aktif (activated carbon): media ini punya pori-pori mikroskopis yang sangat banyak sehingga mampu menyerap bau, warna, klorin, serta senyawa organik terlarut. Arang aktif sangat efektif memperbaiki rasa dan aroma air.',
      },
      {
        type: 'paragraph',
        text: 'Zeolit: mineral alami berpori yang berfungsi menyerap logam berat, amonia, serta beberapa senyawa penyebab kesadahan air. Zeolit sering diletakkan berdekatan dengan arang aktif untuk saling melengkapi fungsi adsorpsi.',
      },
      {
        type: 'paragraph',
        text: 'Kapas, dakron, atau ijuk: biasanya diposisikan sebagai lapisan akhir (paling dekat dengan outlet) karena berfungsi menyaring partikel-partikel halus yang lolos dari lapisan sebelumnya, sekaligus mencegah media lain ikut terbawa keluar bersama air.',
      },
      {
        type: 'paragraph',
        text: 'Susunan media dalam sistem sederhana umumnya mengikuti prinsip kasar ke halus (coarse-to-fine): dimulai dari kerikil, lalu pasir silika, arang aktif, zeolit, dan diakhiri kapas/dakron sebagai penyaring akhir sebelum air keluar. Prinsip ini penting agar setiap lapisan bekerja optimal tanpa cepat tersumbat, dan air yang keluar benar-benar telah melalui seluruh proses penjernihan secara bertahap. Sistem seperti ini bisa dibangun menggunakan wadah sederhana seperti botol atau galon plastik bekas, pipa PVC, hingga drum, sehingga sangat cocok diterapkan di tingkat rumah tangga ataupun perseorangan.',
      },
      {
        type: 'heading',
        text: 'Penerapan Filtrasi Sederhana di Tingkat Desa dan Rumahan',
      },
      {
        type: 'image',
        src: filtrasi2,
        caption: 'Sistem filtrasi sederhana berbasis media alami yang dapat diterapkan di rumah tangga maupun skala komunitas',
        fit: 'contain',
      },
      {
        type: 'paragraph',
        text: 'Konsep filtrasi sederhana di atas bukan sekadar teori, tetapi bisa langsung diterapkan dalam berbagai kebutuhan nyata di lingkungan desa maupun skala rumah tangga, di antaranya:',
      },
      {
        type: 'paragraph',
        text: 'Penjernihan air sumur untuk kebutuhan MCK: air sumur yang keruh atau berbau, terutama saat musim hujan ketika sedimen ikut terbawa, dapat disaring terlebih dahulu sebelum digunakan untuk mandi, cuci, dan keperluan rumah tangga lainnya menggunakan filter sederhana.',
      },
      {
        type: 'paragraph',
        text: 'Pengolahan air tandon/penampungan komunal: tandon air yang menjadi sumber distribusi bersama warga dapat dilengkapi filter sederhana di jalur pipa masuk (inlet), sehingga air yang tersimpan lebih bersih dan tidak cepat menimbulkan endapan atau lumut.',
      },
      {
        type: 'paragraph',
        text: 'Perbaikan kualitas air untuk konsumsi sehari-hari: filter dengan tambahan arang aktif dan zeolit dapat digunakan pada skala rumah tangga untuk memperbaiki rasa, bau, dan warna air sumur atau mata air sebelum dimasak atau dikonsumsi.',
      },
      {
        type: 'paragraph',
        text: 'Pemanfaatan air hujan (rainwater harvesting): di wilayah dengan keterbatasan sumber air tanah, air hujan yang ditampung dapat disaring secara sederhana sebelum digunakan untuk keperluan non-konsumsi seperti menyiram tanaman atau mencuci, sehingga mengurangi ketergantungan pada sumur di musim kemarau.',
      },
      {
        type: 'heading',
        text: 'Pemeliharaan Sistem Filter Air',
      },
      {
        type: 'paragraph',
        text: 'Pemeliharaan sistem filter air penting agar filter yang telah digunakan dapat bertahan lama, bekerja dengan efektif, dan tidak menjadi sumber pencemaran yang baru. Beberapa hal yang dapat diterapkan antara lain:',
      },
      {
        type: 'paragraph',
        text: 'Pembersihan media secara berkala: kerikil dan pasir silika perlu dibilas ulang secara rutin (umumnya setiap 2–4 minggu tergantung tingkat kekeruhan air baku) untuk menghilangkan endapan lumpur dan kotoran yang menumpuk di permukaan media, agar aliran air tidak tersumbat dan daya saring tetap maksimal.',
      },
      {
        type: 'paragraph',
        text: 'Penggantian media yang sudah jenuh: arang aktif dan zeolit memiliki kapasitas adsorpsi terbatas — begitu pori-porinya jenuh menyerap zat pengotor, media tersebut tidak lagi efektif dan justru berpotensi melepas kembali zat yang sudah terserap. Idealnya, arang aktif dan zeolit diganti setiap 1–3 bulan, tergantung intensitas pemakaian dan kualitas air baku.',
      },
      {
        type: 'paragraph',
        text: 'Penggantian lapisan kapas/dakron: sebagai lapisan penyaring akhir, kapas atau dakron paling cepat kotor karena menahan partikel-partikel halus. Lapisan ini sebaiknya diperiksa dan diganti lebih sering, sekitar setiap 2–4 minggu, terutama jika air yang keluar mulai terasa lambat mengalir (indikasi tersumbat).',
      },
      {
        type: 'paragraph',
        text: 'Pengecekan wadah dan jalur pipa: wadah filter (botol, galon, atau pipa PVC) perlu diperiksa dari kebocoran, retak, atau pertumbuhan lumut/alga di bagian dalam yang terkena cahaya matahari langsung. Sebaiknya wadah filter ditempatkan di area teduh untuk menghambat pertumbuhan alga.',
      },
      {
        type: 'paragraph',
        text: 'Sanitasi sistem secara menyeluruh: setiap kali penggantian media, seluruh wadah filter sebaiknya dicuci bersih menggunakan air mengalir, dan bila perlu dibilas dengan air panas atau larutan disinfektan ringan, untuk memastikan tidak ada mikroorganisme yang berkembang biak di dalam sistem.',
      },
      {
        type: 'paragraph',
        text: 'Filtrasi air sederhana membuktikan bahwa menjaga kualitas air tidak selalu membutuhkan biaya besar atau teknologi rumit. Dengan memanfaatkan media yang mudah didapat seperti kerikil, pasir silika, arang aktif, zeolit, hingga kapas atau dakron, masyarakat Desa Sarongan dapat memperbaiki kejernihan, bau, dan rasa air dari sumur, tandon, maupun air hujan yang mereka gunakan sehari-hari. Namun demikian, keberhasilan sistem ini sangat bergantung pada konsistensi pemeliharaan, sebab filter yang dibiarkan tanpa perawatan justru berisiko menjadi sumber pencemaran baru, bukan solusi.',
      },
      {
        type: 'paragraph',
        text: 'Pada akhirnya, konsep filtrasi ini menjadi pelengkap dari pemahaman tentang siklus air tanah itu sendiri, mulai dari daerah resapan yang menyerap air hujan hingga upaya sederhana masyarakat dalam memastikan air yang mereka konsumsi tetap layak dan aman. Dengan begitu, warga Desa Sarongan tidak hanya memahami dari mana air mereka berasal, tetapi juga mampu berperan aktif menjaga kualitasnya secara mandiri dan berkelanjutan.',
      },
    ],
    image: filtrasi1,
    variant: 1,
  },
  {
    slug: 'artikel-7',
    title: 'Menjaga Jejak Pulang Penyu: Upaya Konservasi Penyu di Taman Nasional Meru Betiri',
    category: 'Konservasi',
    date: '2026-07-30',
    excerpt: loremShort,
    content: [
      {
        type: 'paragraph',
        text: 'Pantai Sukamade yang berada di kawasan Taman Nasional Meru Betiri, Dusun Sukamade, Desa Sarongan, Kecamatan Pesanggaran, Kabupaten Banyuwangi, Jawa Timur, merupakan salah satu area konservasi penyu di Indonesia yang menjadi lokasi pendaratan serta peneluran alami penyu. Pantai Sukamade memiliki karakteristik pantai yang landai, hamparan pasir yang mendukung proses peneluran, serta lingkungan pesisir yang masih terjaga. Kondisi tersebut menjadikan Sukamade sebagai salah satu lokasi penting bagi keberlangsungan populasi penyu di Indonesia. Berdasarkan informasi dari pengelola Taman Nasional Meru Betiri, terdapat empat jenis penyu dari tujuh jenis penyu laut yang diketahui di dunia yang ditemukan di Pantai Sukamade, yaitu penyu hijau (Chelonia mydas), penyu sisik (Eretmochelys imbricata), penyu slengkrah atau penyu lekang (Lepidochelys olivacea), dan penyu belimbing (Dermochelys coriacea).',
      },
      {
        type: 'paragraph',
        text: 'Penyu merupakan salah satu satwa yang penting untuk dikonservasi karena termasuk kelompok hewan purba yang telah bertahan dan berevolusi selama jutaan tahun hingga saat ini. Keberadaannya menjadi bagian penting dari keanekaragaman hayati serta menunjukkan perjalanan panjang evolusi kehidupan di bumi. Selain itu, penyu memiliki tingkat kelangsungan hidup yang rendah pada fase awal kehidupannya. Dari banyaknya tukik yang dilepaskan ke laut, hanya sebagian kecil yang dapat bertahan hingga mencapai fase dewasa. Penyu juga memiliki umur yang relatif panjang dan membutuhkan waktu bertahun-tahun untuk mencapai kematangan seksual sehingga proses regenerasi populasinya berlangsung secara lambat. Kondisi tersebut membuat penyu menjadi satwa yang rentan terhadap berbagai ancaman karena kehilangan individu dewasa membutuhkan waktu yang cukup lama untuk digantikan oleh generasi berikutnya.',
      },
      {
        type: 'paragraph',
        text: 'Selain memiliki nilai evolusioner, penyu juga memegang peranan penting dalam menjaga keseimbangan ekosistem laut. Setiap jenis penyu memiliki peran ekologis yang berbeda, mulai dari membantu menjaga kondisi padang lamun dan ekosistem pesisir hingga menjadi bagian dari rantai makanan di laut. Keberadaan penyu juga dapat menjadi salah satu indikator bahwa suatu kawasan masih memiliki kondisi ekosistem yang mampu mendukung kehidupan berbagai organisme. Oleh karena itu, keberadaan penyu tidak hanya penting bagi spesies itu sendiri, tetapi juga bagi ekosistem yang menjadi tempat hidupnya.',
      },
      {
        type: 'image',
        src: penyu3,
        caption: 'Bayi penyu atau tukik yang baru menetas di lokasi penangkaran di Pantai Sukamade, Taman Nasional Meru Betiri',
      },
      {
        type: 'paragraph',
        text: 'Penyu memiliki siklus hidup yang unik karena menghabiskan sebagian besar hidupnya di laut, tetapi kembali ke daratan untuk bertelur. Penyu dapat melakukan migrasi dengan jarak yang sangat jauh antara habitat mencari makan dan pantai penelurannya. Salah satu hal yang menarik adalah kemampuan penyu untuk kembali ke wilayah tempat ia dilahirkan ketika telah mencapai usia reproduktif. Fenomena ini dikenal sebagai natal homing. Dengan kemampuan tersebut, penyu yang berasal dari Pantai Sukamade memiliki kemungkinan untuk kembali ke kawasan tersebut ketika telah dewasa dan memasuki masa reproduksi. Kemampuan navigasi penyu dalam melakukan perjalanan jarak jauh dipengaruhi oleh berbagai petunjuk lingkungan, salah satunya adalah medan magnet bumi. Namun, kemampuan untuk kembali ke pantai kelahiran tidak selalu berarti penyu akan berhasil melakukan peneluran di lokasi tersebut. Kondisi lingkungan pantai sangat berpengaruh terhadap keputusan penyu untuk melanjutkan proses pendaratan dan peneluran. Apabila habitat peneluran mengalami perubahan atau gangguan yang terlalu besar penyu dapat terganggu dan memilih untuk kembali ke laut tanpa bertelur.',
      },
      {
        type: 'paragraph',
        text: 'Hal tersebut menunjukkan bahwa keberlangsungan hidup penyu sangat bergantung pada keterhubungan antara ekosistem laut dan ekosistem pesisir. Pantai yang menjadi lokasi peneluran perlu dijaga agar tetap memiliki kondisi yang sesuai bagi penyu untuk bertelur, sedangkan laut juga harus tetap menyediakan habitat dan sumber makanan yang mendukung kehidupan penyu. Oleh karena itu, menjaga ekosistem pesisir merupakan salah satu bagian penting dalam konservasi penyu. Tim KKN UGM turut melaksanakan kegiatan bersih-bersih pantai sebagai salah satu bentuk upaya menjaga kebersihan dan kondisi ekosistem pesisir agar tetap mendukung kehidupan biota laut, termasuk penyu yang datang untuk bertelur.',
      },
      {
        type: 'paragraph',
        text: 'Bersama dengan Taman Nasional Meru Betiri, kegiatan konservasi penyu di Sukamade juga didukung melalui kegiatan ekowisata berupa pengamatan penyu, pengambilan telur untuk penangkaran, serta pelepasliaran tukik. Kegiatan pengamatan dilakukan dengan menanti penyu yang datang dari laut menuju pesisir pada malam hari. Pada proses tersebut, wisatawan dan ranger tidak diperbolehkan menggunakan penerangan secara sembarangan karena cahaya dapat mengganggu penyu yang sedang menuju pantai. Penyu yang terganggu dapat kembali ke laut sebelum bertelur atau mengalami perubahan perilaku selama proses peneluran.',
      },
      {
        type: 'paragraph',
        text: 'Setelah berhasil naik ke pesisir, penyu akan mencari lokasi yang sesuai untuk bertelur. Penyu kemudian mulai menggali pasir menggunakan sirip bagian belakang hingga membentuk lubang sarang. Setelah lubang dirasa cukup, penyu akan mulai mengeluarkan telur secara bertahap. Satu individu penyu dapat menghasilkan puluhan hingga ratusan telur dalam satu kali peneluran, tergantung jenis dan kondisi individunya. Setelah seluruh telur dikeluarkan, penyu akan menutup lubang menggunakan pasir. Penyu juga dapat melakukan gerakan menggali dan mengaduk pasir di sekitar sarang setelah proses peneluran. Perilaku tersebut dapat membantu menyamarkan lokasi sarang sehingga telur lebih sulit ditemukan oleh predator.',
      },
      {
        type: 'image',
        src: penyu2,
        caption: 'Penyu yang sedang bertelur di Pantai Sukamade, Taman Nasional Meru Betiri',
      },
      {
        type: 'paragraph',
        text: 'Dalam kegiatan konservasi di Sukamade, telur penyu yang ditemukan kemudian dapat dipindahkan ke lokasi penangkaran untuk mengurangi risiko predasi dan meningkatkan keberhasilan penetasan. Ancaman terhadap telur dapat berasal dari predator alami seperti babi hutan dan biawak, maupun aktivitas manusia. Pemindahan telur dilakukan oleh petugas dengan tetap memperhatikan prosedur penanganan agar kondisi telur tetap terjaga. Telur kemudian ditanam kembali pada media pasir dengan kondisi yang dibuat menyerupai lingkungan peneluran alami.',
      },
      {
        type: 'image',
        src: penyu1,
        caption: 'Telur penyu yang telah dipindahkan ke lokasi penangkaran untuk mengurangi risiko predasi dan meningkatkan keberhasilan penetasan',
      },
      {
        type: 'paragraph',
        text: 'Telur penyu membutuhkan waktu sekitar 50–60 hari untuk berkembang hingga menetas, meskipun lama inkubasi dapat berbeda bergantung pada kondisi lingkungan, terutama suhu pasir. Suhu menjadi salah satu faktor penting dalam perkembangan embrio penyu karena tidak hanya memengaruhi lama inkubasi, tetapi juga berhubungan dengan penentuan jenis kelamin tukik. Oleh karena itu, kondisi pasir di tempat penangkaran perlu dipantau dan dikelola agar tetap sesuai untuk perkembangan telur.',
      },
      {
        type: 'paragraph',
        text: 'Setelah menetas, tukik tidak langsung dilepaskan ke laut. Tukik terlebih dahulu dibiarkan menyelesaikan proses keluar dari sarang dan memastikan cadangan makanan dari kuning telur telah terserap dengan baik. Tukik kemudian ditempatkan sementara dalam wadah atau akuarium dengan air laut untuk memastikan kondisinya cukup baik sebelum dilakukan pelepasliaran. Tahapan ini dilakukan agar tukik dapat beradaptasi dengan kondisi lingkungan dan memiliki kesiapan yang lebih baik ketika dilepaskan ke habitat alaminya.',
      },
      {
        type: 'paragraph',
        text: 'Selain kegiatan pengambilan telur dan penetasan, pelepasliaran tukik juga menjadi salah satu kegiatan yang menarik dalam konservasi penyu di Sukamade. Tukik yang telah dinyatakan siap kemudian dilepaskan menuju laut. Meskipun jumlah tukik yang berhasil menetas berjumlah cukup tinggi, tidak semua tukik dapat bertahan hingga dewasa. Setelah dilepaskan ke laut, tukik harus menghadapi berbagai tantangan, mulai dari predator, ketersediaan makanan, kondisi lingkungan, hingga aktivitas manusia. Oleh karena itu, pelepasliaran bukan menjadi akhir dari proses konservasi, tetapi merupakan salah satu tahapan awal dalam perjalanan panjang kehidupan penyu.',
      },
      {
        type: 'paragraph',
        text: 'Salah satu keunikan Pantai Sukamade adalah aktivitas peneluran penyu yang dapat berlangsung hampir sepanjang tahun. Berdasarkan hasil wawancara dan pengamatan di lapangan, aktivitas penyu mendarat untuk bertelur dapat ditemukan pada berbagai waktu dan tidak hanya terbatas pada satu periode peneluran yang singkat. Kondisi tersebut menjadikan Sukamade sebagai lokasi yang sangat penting untuk pemantauan dan konservasi penyu secara berkelanjutan. Keberadaan penyu yang terus datang ke kawasan ini juga menunjukkan pentingnya kondisi lingkungan Pantai Sukamade sebagai habitat peneluran.',
      },
      {
        type: 'paragraph',
        text: 'Pada akhirnya, keberadaan penyu di Pantai Sukamade sangat bergantung pada kondisi lingkungan yang ada di sekitarnya. Penyu dapat kembali setelah melakukan perjalanan yang sangat jauh, tetapi keberadaan mereka di pantai tidak akan bertahan apabila habitat tempat mereka bertelur terus mengalami kerusakan dan gangguan. Oleh karena itu, konservasi penyu bukan hanya tentang bagaimana menyelamatkan telur dan tukik, tetapi juga bagaimana memastikan Pantai Sukamade tetap menjadi tempat yang aman bagi penyu untuk kembali, bertelur, dan melanjutkan siklus kehidupannya. Untuk informasi lebih lanjut mengenai konservasi penyu di Taman Nasional Meru Betiri, kunjungi situs resmi Taman Nasional Meru Betiri berikut:',
      },
      {
        type: 'link',
        text: 'https://merubetiri.id/',
        href: 'https://merubetiri.id/',
      }
    ],
    image: penyu1,
    variant: 1,
  },
  {
    slug: 'artikel-8',
    title: 'Mengenal Keanekaragaman Flora Pesisir Kawasan Sarongan: Muara Mbaduk, Pantai Benteng, Pantai Rajegwesi, dan Pantai Sukamade',
    category: 'Flora & Keanekaragaman Hayati',
    date: '2026-06-14',
    excerpt: 'Dokumentasi taksonomi, karakteristik morfologi, dan potensi ekologis maupun ekonomi berbagai jenis vegetasi pesisir yang ditemukan di empat kawasan pantai: Muara Mbaduk, Pantai Benteng, Pantai Rajegwesi, dan Pantai Sukamade.',
    content: [
      // ================= MUARA MBADUK =================
      { type: 'heading', text: 'Muara Mbaduk' },
      {
        type: 'paragraph',
        text: 'Keanekaragaman vegetasi di kawasan Pantai Muara Mbaduk menunjukkan adanya berbagai jenis tumbuhan yang mampu beradaptasi terhadap karakteristik lingkungan pesisir. Setiap jenis memiliki karakter taksonomi dan morfologi yang berbeda serta peranan ekologis yang mendukung keberlangsungan ekosistem pantai. Selain memiliki fungsi ekologis, keberadaan tumbuhan tersebut juga berpotensi dikembangkan sebagai bagian dari daya tarik wisata berbasis edukasi dan konservasi. Oleh karena itu, pengenalan jenis tumbuhan di Pantai Muara Mbaduk dilakukan melalui identifikasi taksonomi, karakteristik morfologi, serta potensi pemanfaatannya dalam mendukung pengelolaan kawasan wisata secara berkelanjutan.',
      },

      { type: 'subheading', text: '1. Katang-Katang' },
      { type: 'image', caption: 'Tumbuhan, daun, dan buah Katang-Katang — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Solanales, Famili Convolvulaceae, Genus Ipomoea, Spesies Ipomoea pes-caprae.',
      },
      {
        type: 'paragraph',
        text: 'Katang-katang (Ipomoea pes-caprae) merupakan tumbuhan menjalar yang termasuk dalam famili Convolvulaceae dan umum ditemukan pada kawasan pantai berpasir. Tumbuhan ini memiliki batang berbentuk bulat, menjalar di atas permukaan tanah, dan dapat tumbuh memanjang dengan percabangan yang cukup banyak. Batangnya umumnya berwarna hijau hingga kecokelatan dan pada bagian tertentu dapat membentuk akar pada ruas yang bersentuhan dengan tanah. Daunnya merupakan daun tunggal yang tersusun berseling dengan bentuk khas menyerupai telapak kaki kambing, yaitu berbentuk membulat dengan lekukan yang cukup dalam pada bagian ujung sehingga terbagi menjadi dua lobus. Permukaan daun relatif licin dan tebal, dengan warna hijau serta tangkai daun yang cukup panjang.',
      },
      {
        type: 'paragraph',
        text: 'Bunga katang-katang tumbuh pada ketiak daun dan berbentuk seperti corong dengan ukuran relatif besar. Mahkota bunga umumnya berwarna merah muda hingga ungu muda dengan bagian tengah yang lebih gelap, sedangkan kelopak berwarna hijau. Buah berbentuk kapsul bulat telur hingga hampir bulat dan mengandung beberapa biji berwarna cokelat kehitaman dengan permukaan berbulu. Sistem perakaran berkembang pada bagian ruas batang yang menyentuh tanah sehingga membantu tumbuhan bertahan pada substrat berpasir. Karakter batang yang menjalar, daun berbentuk khas dengan dua lobus, serta bunga berbentuk corong menjadi ciri morfologi utama yang memudahkan identifikasi I. pes-caprae di kawasan pesisir Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Katang-katang memiliki peran penting dalam mempertahankan kestabilan substrat pada kawasan pantai berpasir. Pertumbuhannya yang menjalar dan sistem perakaran yang berkembang pada lapisan pasir memungkinkan tumbuhan ini membantu mengikat sedimen serta mengurangi pergerakan pasir akibat angin. Fungsi tersebut menjadikan katang-katang sebagai salah satu komponen vegetasi yang berperan dalam proses stabilisasi pantai dan pengurangan potensi erosi. Keberadaannya juga dapat mendukung terbentuknya kondisi mikrohabitat yang memungkinkan organisme lain memanfaatkan kawasan tersebut. Di sisi lain, katang-katang memiliki potensi pemanfaatan dalam bidang kesehatan karena berbagai penelitian telah mengidentifikasi kandungan metabolit sekunder dan aktivitas biologis dari bagian tanaman tersebut. Potensi ini dapat menjadi dasar pengembangan penelitian bahan alam, khususnya dalam pencarian senyawa bioaktif, meskipun pemanfaatannya sebagai bahan obat tetap memerlukan pengujian lebih lanjut terkait efektivitas, keamanan, dan dosis.',
      },

      { type: 'subheading', text: '2. Ketapang' },
      { type: 'image', caption: 'Pohon serta daun dan buah Ketapang — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Myrtales, Famili Combretaceae, Genus Terminalia, Spesies Terminalia catappa L.',
      },
      {
        type: 'paragraph',
        text: 'Ketapang (Terminalia catappa L.) merupakan pohon yang termasuk dalam famili Combretaceae dan umum ditemukan di kawasan pesisir tropis. Pohon ini memiliki batang tegak dengan kulit batang berwarna cokelat keabu-abuan serta percabangan yang tumbuh mendatar dan tersusun bertingkat sehingga membentuk tajuk menyerupai payung. Daunnya merupakan daun tunggal berukuran besar, berbentuk membulat telur hingga lonjong terbalik (obovate), dengan tepi rata dan pertulangan menyirip yang jelas. Daun muda umumnya berwarna hijau muda hingga kemerahan, kemudian berubah menjadi hijau tua dan dapat berubah menjadi kuning, jingga, atau merah kecokelatan sebelum gugur.',
      },
      {
        type: 'paragraph',
        text: 'Bunga ketapang berukuran kecil, berwarna putih kehijauan hingga kekuningan, dan tersusun dalam bentuk bulir pada ketiak daun atau ujung ranting. Buah berbentuk bulat telur hingga lonjong dengan bagian tepi melebar menyerupai sayap, berwarna hijau saat muda dan berubah menjadi kuning, merah keunguan, hingga cokelat ketika matang. Bijinya berada di dalam lapisan buah yang cukup keras. Karakter tajuk yang lebar, daun besar, serta buah bersayap menjadi ciri morfologi utama yang memudahkan identifikasi T. catappa di kawasan pesisir, termasuk kawasan wisata Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Ketapang laut memiliki manfaat ekologis melalui perannya dalam membentuk tutupan vegetasi dan menyediakan kondisi mikrohabitat di kawasan pesisir. Tajuk yang relatif lebar dapat memberikan keteduhan serta mengurangi paparan radiasi matahari secara langsung pada permukaan tanah. Serasah daun yang dihasilkan juga berkontribusi terhadap pemasukan bahan organik ke dalam tanah setelah mengalami proses dekomposisi. Siklus tersebut merupakan bagian dari proses pengembalian unsur hara yang mendukung produktivitas ekosistem. Selain fungsi ekologis, ketapang memiliki potensi pemanfaatan pada berbagai bidang. Buah dan bijinya diketahui dapat dimanfaatkan sebagai bahan pangan, sementara beberapa bagian tanaman telah digunakan dalam pengobatan tradisional. Kandungan senyawa bioaktif yang terdapat pada bagian tanaman juga menjadikan ketapang berpotensi untuk dikaji lebih lanjut dalam penelitian farmakologi dan pengembangan bahan alam. Dalam konteks pemanfaatan kawasan pesisir, keberadaan ketapang juga dapat mendukung kenyamanan masyarakat karena berfungsi sebagai vegetasi peneduh.',
      },

      { type: 'subheading', text: '3. Waru Laut' },
      { type: 'image', caption: 'Pohon dan daun Waru Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Tracheophyta, Kelas Magnoliopsida, Ordo Malvales, Famili Malvaceae, Genus Hibiscus, Spesies Hibiscus tiliaceus L.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut (Hibiscus tiliaceus L.) merupakan tumbuhan pesisir yang termasuk dalam famili Malvaceae dan memiliki kemampuan beradaptasi dengan lingkungan pantai. Tumbuhan ini umumnya berupa pohon atau perdu dengan batang tegak dan percabangan yang cukup banyak, serta dapat mencapai ukuran sedang. Kulit batang berwarna abu-abu kecokelatan dan pada bagian tertentu dapat menghasilkan serat yang kuat. Daunnya merupakan daun tunggal yang tersusun berseling, berbentuk jantung hingga menyerupai bulat telur, dengan ujung meruncing dan pangkal berbentuk jantung. Permukaan daun umumnya berwarna hijau dan memiliki tekstur agak kasar, sedangkan bagian bawah daun cenderung lebih pucat serta ditutupi rambut halus. Pertulangan daun menjari dengan beberapa tulang utama yang berawal dari pangkal daun sehingga menjadi salah satu karakter morfologi yang mudah diamati.',
      },
      {
        type: 'paragraph',
        text: 'Bunga waru laut berukuran cukup besar dan muncul pada ketiak daun atau bagian ujung ranting. Bunga memiliki lima mahkota yang umumnya berwarna kuning dengan bagian tengah berwarna merah tua atau keunguan, kemudian dapat berubah menjadi kemerahan sebelum gugur. Benang sari menyatu membentuk tabung yang mengelilingi tangkai putik, menjadi ciri khas bunga dari famili Malvaceae. Buah berbentuk bulat telur hingga hampir bulat dan merupakan buah kapsul yang ketika matang dapat membuka untuk melepaskan biji. Biji berukuran kecil dan umumnya berwarna cokelat hingga hitam. Kombinasi daun berbentuk jantung, bunga berwarna kuning dengan pusat kemerahan, serta buah kapsul menjadi karakter utama yang dapat digunakan untuk mengenali H. tiliaceus di kawasan pesisir Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut memberikan kontribusi terhadap pembentukan vegetasi pelindung pada kawasan pesisir. Keberadaannya dapat membantu mempertahankan kondisi substrat serta mengurangi paparan langsung faktor lingkungan terhadap kawasan di belakang pantai. Tajuk dan struktur vegetasinya juga dapat menciptakan ruang yang lebih terlindungi bagi organisme yang memanfaatkan kawasan pesisir sebagai habitat. Bagi masyarakat, waru laut memiliki potensi pemanfaatan yang berkaitan dengan bahan kayu dan serat. Kayunya secara tradisional dapat digunakan untuk berbagai kebutuhan, termasuk bahan bangunan ringan, peralatan, dan kerajinan. Pemanfaatan tersebut menunjukkan adanya nilai ekonomi dan sosial yang dapat dikembangkan dari tumbuhan pesisir. Meskipun demikian, pemanfaatan perlu mempertimbangkan keberadaan tumbuhan di habitat alami agar kebutuhan manusia tidak menyebabkan penurunan populasi maupun mengurangi fungsi ekologisnya.',
      },

      { type: 'subheading', text: '4. Cemara Laut' },
      { type: 'image', caption: 'Tegakan, daun, dan buah Cemara Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Casuarinales, Famili Casuarinaceae, Genus Casuarina, Spesies Casuarina equisetifolia L.',
      },
      {
        type: 'paragraph',
        text: 'Cemara laut (Casuarina equisetifolia L.) merupakan tumbuhan pesisir yang termasuk dalam famili Casuarinaceae dan memiliki kemampuan beradaptasi pada lingkungan pantai. Tumbuhan ini berupa pohon dengan batang tegak dan dapat tumbuh mencapai ukuran relatif besar, dengan percabangan yang banyak serta tajuk berbentuk kerucut hingga membulat. Kulit batang berwarna cokelat keabu-abuan dan bertekstur kasar, sedangkan cabang muda berwarna hijau dan berbentuk ramping menyerupai jarum. Daun cemara laut mengalami reduksi menjadi sisik-sisik kecil yang tersusun mengelilingi ranting sehingga ranting hijau berfungsi sebagai bagian utama dalam fotosintesis. Ranting tersebut berbentuk silindris, beruas, dan memberikan tampilan menyerupai daun jarum yang menjadi ciri khas C. equisetifolia.',
      },
      {
        type: 'paragraph',
        text: 'Bunga cemara laut berukuran kecil dan tidak memiliki mahkota yang mencolok. Bunga jantan dan betina umumnya terdapat pada satu individu, dengan bunga jantan tersusun dalam bulir pada bagian ujung ranting, sedangkan bunga betina berkembang pada bagian lateral ranting. Buahnya berbentuk menyerupai kerucut kecil dengan permukaan keras dan tersusun dari banyak bagian seperti sisik. Ketika matang, buah berwarna cokelat dan dapat menghasilkan biji kecil bersayap yang membantu penyebaran oleh angin. Sistem perakaran cemara laut berkembang kuat dan mampu membantu pohon bertahan pada substrat berpasir serta kondisi lingkungan pesisir. Karakter batang tegak, ranting hijau beruas menyerupai jarum, dan buah berbentuk kerucut menjadi ciri utama yang dapat digunakan untuk mengidentifikasi C. equisetifolia di kawasan Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Cemara laut memiliki peran dalam membentuk struktur vegetasi yang dapat memberikan perlindungan terhadap kawasan pesisir. Keberadaan tegakan cemara laut dapat membantu mengurangi kecepatan angin dan memberikan perlindungan terhadap vegetasi yang berada di belakangnya. Kondisi tersebut juga dapat menciptakan lingkungan mikro yang lebih sesuai bagi pertumbuhan vegetasi lain. Dalam pengelolaan kawasan pesisir, cemara laut sering dikaitkan dengan kegiatan rehabilitasi dan penghijauan karena kemampuannya beradaptasi pada lingkungan pantai. Selain fungsi ekologis, keberadaan cemara laut memiliki potensi dalam mendukung pengembangan wisata berbasis alam. Tegakan pohon dapat memberikan keteduhan, memperbaiki kualitas visual lanskap, dan meningkatkan kenyamanan pengunjung. Dengan demikian, pengelolaan cemara laut dapat memberikan manfaat ekologis sekaligus mendukung fungsi sosial kawasan apabila dilakukan dengan tetap mempertahankan karakter vegetasi alami.',
      },

      { type: 'subheading', text: '5. Kranji Bangkong / Malapari' },
      { type: 'image', caption: 'Pohon dan bunga Malapari — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Fabales, Famili Fabaceae, Genus Pongamia, Spesies Pongamia pinnata (L.) Pierre.',
      },
      {
        type: 'paragraph',
        text: 'Kranji bangkong atau malapari (Pongamia pinnata (L.) Pierre) merupakan tumbuhan berbentuk pohon yang termasuk dalam famili Fabaceae dan banyak ditemukan pada kawasan pesisir tropis. Pohon ini memiliki batang tegak dengan percabangan yang cukup banyak serta tajuk yang lebar dan rindang. Kulit batang berwarna abu-abu kecokelatan hingga cokelat tua dengan permukaan yang relatif kasar. Daunnya merupakan daun majemuk menyirip ganjil yang tersusun berseling pada ranting. Anak daun umumnya berjumlah 5–7 helai, berbentuk bulat telur hingga elips, dengan permukaan licin dan mengilap, tepi rata, serta ujung meruncing. Daun muda berwarna hijau muda, sedangkan daun yang telah berkembang sempurna berwarna hijau tua.',
      },
      {
        type: 'paragraph',
        text: 'Bunga malapari tersusun dalam bentuk tandan yang muncul pada ketiak daun atau ujung ranting. Bunga berukuran sedang dengan mahkota berwarna putih hingga merah muda keunguan dan memiliki pola warna yang lebih gelap pada bagian tengahnya. Buah berupa polong berbentuk lonjong hingga agak pipih, berwarna hijau ketika muda dan berubah menjadi cokelat ketika matang, serta umumnya mengandung satu hingga dua biji. Biji berbentuk bulat telur hingga lonjong dan berwarna cokelat kemerahan. Sistem perakaran berkembang cukup kuat sehingga mendukung pertumbuhan pada lingkungan pesisir. Karakter daun majemuk dengan beberapa anak daun, bunga berwarna putih hingga merah muda, serta buah polong yang pipih menjadi ciri morfologi utama yang dapat digunakan untuk mengenali P. pinnata di kawasan pesisir Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Kranji bangkong atau Malapari memiliki potensi pemanfaatan yang menonjol dalam bidang energi terbarukan. Biji tumbuhan ini mengandung minyak nabati yang dapat diolah dan dikembangkan sebagai bahan baku biodiesel. Pemanfaatan tersebut memberikan peluang dalam pengembangan sumber energi alternatif yang berasal dari sumber daya hayati dan dapat diperbarui. Potensi malapari menjadi semakin relevan dalam konteks kebutuhan terhadap sumber energi yang lebih berkelanjutan serta pengurangan ketergantungan terhadap bahan bakar fosil. Selain menghasilkan bahan baku energi, keberadaan pohon malapari tetap memberikan fungsi ekologis sebagai bagian dari vegetasi pesisir. Tajuk dan sistem perakarannya dapat berkontribusi terhadap pembentukan tutupan vegetasi dan perlindungan substrat. Pengembangan malapari untuk kepentingan ekonomi perlu dilakukan melalui pendekatan budidaya dan pemanfaatan yang terencana sehingga tidak mengorbankan fungsi ekologis kawasan.',
      },

      { type: 'subheading', text: '6. Rumput Angin' },
      { type: 'image', caption: 'Daun, rumpun, dan buah Rumput Angin — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Equisetopsida, Ordo Poales, Famili Poaceae, Genus Spinifex, Spesies Spinifex littoreus (Burm.f.) Merr.',
      },
      {
        type: 'paragraph',
        text: 'Rumput angin (Spinifex littoreus (Burm.f.) Merr.) merupakan tumbuhan herba tahunan yang termasuk dalam famili Poaceae dan umum ditemukan pada kawasan pantai berpasir. Tumbuhan ini memiliki batang menjalar yang tumbuh membentuk rumpun dan dapat memanjang di atas permukaan pasir. Akar tumbuh pada buku-buku batang yang bersentuhan dengan substrat sehingga membantu tumbuhan melekat dan berkembang pada lingkungan berpasir. Daunnya berbentuk pita atau lanset sempit, bertekstur agak kaku, dengan ujung meruncing dan permukaan yang dapat terasa kasar. Daun berwarna hijau hingga hijau keabu-abuan dan tersusun pada buku batang. Karakter batang yang menjalar dan kemampuan membentuk rumpun merupakan ciri penting yang mendukung adaptasi S. littoreus terhadap kondisi lingkungan pantai.',
      },
      {
        type: 'paragraph',
        text: 'Perbungaan rumput angin memiliki bentuk khas berupa bonggol atau kepala bunga yang relatif besar dan menyerupai bola berduri. Bunga jantan dan betina terdapat pada individu yang berbeda (dioesis), dengan perbungaan betina umumnya memiliki struktur yang lebih besar dan mencolok. Perbungaan dapat terlepas dan terbawa angin setelah matang sehingga membantu proses penyebaran. Buah atau spikelet berukuran kecil dan terlindungi oleh struktur perbungaan yang keras serta berduri. Sistem perakaran dan batang menjalar memungkinkan rumput angin membantu mengikat pasir dan membentuk vegetasi penutup pada kawasan pantai. Karakter daun sempit dan kaku, batang menjalar, serta perbungaan berbentuk bola menjadi ciri morfologi utama yang dapat digunakan untuk mengidentifikasi S. littoreus di kawasan Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Rumput angin memiliki peranan penting dalam mempertahankan struktur pantai berpasir, terutama pada kawasan yang memiliki gumuk pasir. Sistem perakarannya membantu mengikat partikel pasir sehingga mengurangi mobilitas sedimen yang dipengaruhi oleh angin. Proses tersebut berkontribusi terhadap stabilisasi permukaan pasir dan mempertahankan struktur geomorfologi pantai. Hilangnya vegetasi pantai seperti rumput angin dapat menyebabkan substrat menjadi lebih mudah bergerak sehingga meningkatkan kerentanan kawasan terhadap erosi dan perubahan bentuk pantai. Selain fungsi ekologisnya, keberadaan rumput angin memiliki potensi sebagai objek pendidikan lingkungan karena dapat digunakan untuk menjelaskan proses adaptasi tumbuhan terhadap kondisi pesisir serta hubungan antara vegetasi dan kestabilan pantai. Nilai tersebut dapat dikembangkan dalam kegiatan edukasi dan interpretasi lingkungan, khususnya pada kawasan wisata berbasis alam.',
      },

      { type: 'subheading', text: '7. Biduri' },
      { type: 'image', caption: 'Tumbuhan, daun, dan bunga Biduri — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Gentianales, Famili Apocynaceae, Genus Calotropis, Spesies Calotropis gigantea (L.) W.T.Aiton.',
      },
      {
        type: 'paragraph',
        text: 'Biduri (Calotropis gigantea (L.) Dryand.) merupakan tumbuhan perdu yang termasuk dalam famili Apocynaceae dan umum ditemukan pada kawasan pesisir tropis, terutama pada lahan terbuka dan berpasir. Batangnya berwarna hijau hingga abu-abu dan memiliki permukaan yang relatif halus serta mengandung getah putih yang keluar apabila jaringan tanaman terluka. Daunnya merupakan daun tunggal yang tersusun berhadapan, berukuran besar, berbentuk bulat telur hingga elips, dengan ujung meruncing dan pangkal membulat hingga berbentuk hati. Permukaan daun berwarna hijau keabu-abuan. Pertulangan daun menyirip cukup jelas dan tulang daun utama tampak menonjol pada bagian bawah daun.',
      },
      {
        type: 'paragraph',
        text: 'Bunga biduri tersusun dalam perbungaan berbentuk payung yang muncul pada ketiak daun atau ujung ranting. Bunga memiliki lima mahkota dengan bentuk menyerupai bintang dan umumnya berwarna putih hingga ungu muda, dengan bagian tengah berupa struktur mahkota tambahan yang lebih menonjol. Buah berbentuk sepasang folikel yang menyerupai polong dan berwarna hijau ketika muda, kemudian mengering saat matang. Di dalam buah terdapat banyak biji berwarna cokelat yang dilengkapi rambut halus berwarna putih pada salah satu ujungnya sehingga membantu penyebaran biji oleh angin. Getah putih, daun berukuran besar dan berbulu, serta bunga berbentuk bintang merupakan karakter morfologi utama yang dapat digunakan untuk mengidentifikasi C. gigantea di kawasan pesisir Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Biduri memiliki manfaat ekologis dalam mendukung pembentukan vegetasi pada kawasan pesisir yang memiliki kondisi lingkungan relatif kering dan terbuka. Keberadaannya dapat membantu menutup permukaan tanah serta berkontribusi dalam mempertahankan struktur substrat melalui sistem perakarannya. Vegetasi biduri juga dapat menjadi bagian dari habitat bagi berbagai organisme, termasuk serangga yang memanfaatkan tumbuhan sebagai sumber pakan maupun tempat beraktivitas. Selain manfaat ekologis, biduri memiliki potensi pemanfaatan dalam bidang kesehatan dan penelitian bahan alam. Berbagai bagian tumbuhan ini diketahui mengandung senyawa metabolit sekunder yang berpotensi memiliki aktivitas biologis, sehingga menarik untuk dikaji dalam penelitian farmakologi maupun pengembangan bahan obat. Dalam pengetahuan tradisional, biduri juga telah dimanfaatkan untuk berbagai keperluan. Namun, pemanfaatannya perlu dilakukan secara hati-hati karena getah biduri mengandung senyawa yang dapat bersifat toksik dan menyebabkan iritasi. Oleh karena itu, potensi biduri lebih tepat dikembangkan melalui penelitian dan pengolahan yang terkontrol, bukan melalui penggunaan secara langsung tanpa pengetahuan yang memadai.',
      },

      { type: 'subheading', text: '8. Pandan Laut' },
      { type: 'image', caption: 'Tumbuhan dan bunga Pandan Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Pandanales, Famili Pandanaceae, Genus Pandanus, Spesies Pandanus odorifer (Forssk.) Kuntze.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut (Pandanus odorifer (Forssk.) Kuntze) merupakan tumbuhan pesisir yang termasuk dalam famili Pandanaceae dan umumnya tumbuh pada kawasan pantai berpasir. Tumbuhan ini berbentuk perdu atau pohon kecil dengan batang tegak dan bercabang, serta memiliki akar tunjang yang tumbuh dari bagian batang dan berfungsi memperkuat tumbuhan pada substrat berpasir. Daunnya berbentuk pita panjang, sempit, dan kaku dengan ujung meruncing serta tepi yang berduri. Daun tersusun rapat dan spiral pada ujung batang. Permukaan daun berwarna hijau hingga hijau tua dengan pertulangan sejajar yang jelas. Karakter akar tunjang dan susunan daun yang rapat pada ujung batang menjadi ciri morfologi khas P. odorifer.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut merupakan tumbuhan dioesis, sehingga bunga jantan dan bunga betina terdapat pada individu yang berbeda. Perbungaan jantan umumnya memiliki struktur seperti rangkaian bulir yang dikelilingi braktea berwarna putih hingga kekuningan dan menghasilkan aroma yang khas, sedangkan perbungaan betina berkembang menjadi buah majemuk berbentuk bulat hingga menyerupai nanas. Buah tersusun atas banyak bagian kecil berbentuk poligonal yang disebut drupelet dan umumnya berwarna hijau ketika muda, kemudian berubah menjadi kuning hingga jingga ketika matang. Biji berada di dalam bagian buah tersebut dan dapat tersebar melalui berbagai media, terutama air. Daun panjang berduri, akar tunjang yang kuat, serta buah majemuk yang menyerupai nanas menjadi karakter morfologi utama yang dapat digunakan untuk mengidentifikasi P. odorifer di kawasan Pantai Muara Mbaduk, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut memiliki kontribusi penting terhadap kestabilan lingkungan pantai melalui sistem perakarannya yang mampu memperkuat substrat berpasir. Keberadaannya dapat membantu mengurangi pergerakan pasir serta membentuk vegetasi yang berperan dalam mempertahankan kondisi kawasan pesisir. Vegetasi pandan laut juga dapat menyediakan ruang perlindungan bagi organisme kecil yang memanfaatkan kawasan tersebut. Selain fungsi ekologis, pandan laut memiliki potensi ekonomi melalui pemanfaatan daunnya sebagai bahan baku kerajinan. Daun yang memiliki serat kuat dapat diolah menjadi berbagai produk anyaman, seperti tikar, tas, wadah, dan produk kerajinan lainnya. Pengembangan produk berbasis pandan laut dapat menjadi salah satu alternatif ekonomi kreatif bagi masyarakat pesisir. Apabila disertai dengan pengelolaan bahan baku yang berkelanjutan, pemanfaatan tersebut dapat meningkatkan nilai ekonomi sumber daya lokal sekaligus mendorong masyarakat untuk mempertahankan keberadaan vegetasi pandan laut di lingkungannya.',
      },

      // ================= PANTAI BENTENG =================
      { type: 'heading', text: 'Pantai Benteng' },
      {
        type: 'paragraph',
        text: 'Vegetasi yang terdapat di kawasan Pantai Benteng merupakan salah satu komponen penting dalam membentuk karakter ekosistem pesisir sekaligus memperkaya daya tarik alami kawasan wisata. Berbagai jenis tumbuhan memiliki karakteristik taksonomi dan morfologi yang beragam sebagai bentuk adaptasi terhadap kondisi lingkungan pantai. Keberadaan tumbuhan tersebut tidak hanya memiliki nilai ekologis, tetapi juga dapat memberikan potensi dalam pengembangan wisata edukasi, konservasi, dan pengenalan keanekaragaman hayati kepada pengunjung. Untuk mengetahui nilai tersebut secara lebih mendalam, setiap jenis tumbuhan selanjutnya diperkenalkan berdasarkan klasifikasi taksonomi, karakteristik morfologi, dan potensi yang dimilikinya di kawasan Pantai Benteng.',
      },

      { type: 'subheading', text: '1. Kranji Bangkong / Malapari' },
      { type: 'image', caption: 'Pohon dan bunga Malapari — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Fabales, Famili Fabaceae, Genus Pongamia, Spesies Pongamia pinnata (L.) Pierre.',
      },
      {
        type: 'paragraph',
        text: 'Kranji bangkong atau malapari (Pongamia pinnata (L.) Pierre) merupakan tumbuhan berbentuk pohon yang termasuk dalam famili Fabaceae dan banyak ditemukan pada kawasan pesisir tropis. Pohon ini memiliki batang tegak dengan percabangan yang cukup banyak serta tajuk yang lebar dan rindang. Kulit batang berwarna abu-abu kecokelatan hingga cokelat tua dengan permukaan yang relatif kasar. Daunnya merupakan daun majemuk menyirip ganjil yang tersusun berseling pada ranting. Anak daun umumnya berjumlah 5–7 helai, berbentuk bulat telur hingga elips, dengan permukaan licin dan mengilap, tepi rata, serta ujung meruncing. Daun muda berwarna hijau muda, sedangkan daun yang telah berkembang sempurna berwarna hijau tua.',
      },
      {
        type: 'paragraph',
        text: 'Bunga malapari tersusun dalam bentuk tandan yang muncul pada ketiak daun atau ujung ranting. Bunga berukuran sedang dengan mahkota berwarna putih hingga merah muda keunguan dan memiliki pola warna yang lebih gelap pada bagian tengahnya. Buah berupa polong berbentuk lonjong hingga agak pipih, berwarna hijau ketika muda dan berubah menjadi cokelat ketika matang, serta umumnya mengandung satu hingga dua biji. Biji berbentuk bulat telur hingga lonjong dan berwarna cokelat kemerahan. Sistem perakaran berkembang cukup kuat sehingga mendukung pertumbuhan pada lingkungan pesisir. Karakter daun majemuk dengan beberapa anak daun, bunga berwarna putih hingga merah muda, serta buah polong yang pipih menjadi ciri morfologi utama yang dapat digunakan untuk mengenali P. pinnata di kawasan pesisir Pantai Benteng, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Kranji bangkong atau malapari memiliki potensi pemanfaatan yang menonjol dalam bidang energi terbarukan. Biji tumbuhan ini mengandung minyak nabati yang dapat diolah dan dikembangkan sebagai bahan baku biodiesel. Pemanfaatan tersebut memberikan peluang dalam pengembangan sumber energi alternatif yang berasal dari sumber daya hayati dan dapat diperbarui. Potensi malapari menjadi semakin relevan dalam konteks kebutuhan terhadap sumber energi yang lebih berkelanjutan serta pengurangan ketergantungan terhadap bahan bakar fosil. Selain menghasilkan bahan baku energi, keberadaan pohon malapari tetap memberikan fungsi ekologis sebagai bagian dari vegetasi pesisir. Tajuk dan sistem perakarannya dapat berkontribusi terhadap pembentukan tutupan vegetasi dan perlindungan substrat. Pengembangan malapari untuk kepentingan ekonomi perlu dilakukan melalui pendekatan budidaya dan pemanfaatan yang terencana sehingga tidak mengorbankan fungsi ekologis kawasan.',
      },

      { type: 'subheading', text: '2. Beruas Laut' },
      { type: 'image', caption: 'Rumpun dan daun Beruas Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Equisetopsida, Ordo Campanulales, Famili Goodeniaceae, Genus Scaevola, Spesies Scaevola taccada (Gaertn.) Roxb.',
      },
      {
        type: 'paragraph',
        text: 'Beruas laut (Scaevola taccada (Gaertn.) Roxb.) merupakan tumbuhan perdu yang termasuk dalam famili Goodeniaceae dan umum ditemukan pada kawasan pesisir tropis. Tumbuhan ini memiliki batang yang tegak hingga menjalar dengan percabangan cukup banyak dan membentuk tajuk yang rimbun. Batangnya berwarna hijau hingga cokelat keabu-abuan dengan permukaan relatif licin. Daunnya merupakan daun tunggal yang tersusun berseling dan cenderung mengelompok pada ujung ranting. Daun berbentuk bulat telur hingga lonjong terbalik (obovate), berukuran cukup tebal dan berdaging, dengan ujung membulat serta tepi daun rata. Permukaan daun berwarna hijau mengilap, sedangkan pertulangan daun menyirip tampak cukup jelas pada permukaan bawah daun.',
      },
      {
        type: 'paragraph',
        text: 'Bunga beruas laut berukuran kecil hingga sedang dan umumnya muncul pada ketiak daun. Mahkota bunga berwarna putih hingga putih kehijauan dan memiliki bentuk khas yang terbelah pada satu sisi sehingga menyerupai kipas atau setengah lingkaran. Buah berbentuk bulat hingga agak lonjong, berdaging, berwarna hijau ketika muda dan berubah menjadi putih hingga ungu kehitaman ketika matang. Buah umumnya mengandung satu biji yang berukuran relatif besar. Karakter daun yang tebal dan berdaging, bunga berbentuk kipas, serta buah yang berubah warna menjadi gelap ketika matang merupakan ciri morfologi utama yang dapat digunakan untuk mengidentifikasi S. taccada di kawasan pesisir Pantai Benteng, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Beruas laut memiliki fungsi ekologis sebagai bagian dari vegetasi yang berkembang pada lingkungan pesisir dan berkontribusi terhadap pembentukan tutupan tumbuhan di dekat garis pantai. Keberadaannya dapat membantu mempertahankan kondisi substrat serta menyediakan ruang yang dapat dimanfaatkan oleh organisme kecil. Vegetasi pesisir yang terbentuk juga memiliki peranan dalam menjaga kompleksitas habitat sehingga mendukung keberadaan berbagai organisme yang saling berinteraksi dalam ekosistem. Dari perspektif pemanfaatan, beruas laut memiliki potensi untuk dikaji sebagai sumber bahan alam karena beberapa penelitian menunjukkan adanya kandungan senyawa metabolit sekunder dengan aktivitas biologis tertentu. Potensi tersebut membuka peluang penelitian lebih lanjut dalam bidang farmasi, pangan fungsional, maupun pengembangan bahan alami. Namun, pengembangan pemanfaatannya perlu didukung oleh kajian ilmiah yang memadai serta memperhatikan keberlanjutan populasi di habitat alaminya.',
      },

      { type: 'subheading', text: '3. Katang-Katang' },
      { type: 'image', caption: 'Tumbuhan dan daun Katang-Katang — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Solanales, Famili Convolvulaceae, Genus Ipomoea, Spesies Ipomoea pes-caprae.',
      },
      {
        type: 'paragraph',
        text: 'Katang-katang (Ipomoea pes-caprae (L.) R.Br.) merupakan tumbuhan menjalar yang termasuk dalam famili Convolvulaceae dan umum ditemukan pada kawasan pantai berpasir. Tumbuhan ini memiliki batang berbentuk bulat, menjalar di atas permukaan tanah, dan dapat tumbuh memanjang dengan percabangan yang cukup banyak. Batangnya umumnya berwarna hijau hingga kecokelatan dan pada bagian tertentu dapat membentuk akar pada ruas yang bersentuhan dengan tanah. Daunnya merupakan daun tunggal yang tersusun berseling dengan bentuk khas menyerupai telapak kaki kambing, yaitu berbentuk membulat dengan lekukan yang cukup dalam pada bagian ujung sehingga terbagi menjadi dua lobus. Permukaan daun relatif licin dan tebal, dengan warna hijau serta tangkai daun yang cukup panjang.',
      },
      {
        type: 'paragraph',
        text: 'Bunga katang-katang tumbuh pada ketiak daun dan berbentuk seperti corong dengan ukuran relatif besar. Mahkota bunga umumnya berwarna merah muda hingga ungu muda dengan bagian tengah yang lebih gelap, sedangkan kelopak berwarna hijau. Buah berbentuk kapsul bulat telur hingga hampir bulat dan mengandung beberapa biji berwarna cokelat kehitaman dengan permukaan berbulu. Sistem perakaran berkembang pada bagian ruas batang yang menyentuh tanah sehingga membantu tumbuhan bertahan pada substrat berpasir. Karakter batang yang menjalar, daun berbentuk khas dengan dua lobus, serta bunga berbentuk corong menjadi ciri morfologi utama yang memudahkan identifikasi I. pes-caprae di kawasan pesisir Pantai Benteng, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Katang-katang memiliki peran penting dalam mempertahankan kestabilan substrat pada kawasan pantai berpasir. Pertumbuhannya yang menjalar dan sistem perakaran yang berkembang pada lapisan pasir memungkinkan tumbuhan ini membantu mengikat sedimen serta mengurangi pergerakan pasir akibat angin. Fungsi tersebut menjadikan katang-katang sebagai salah satu komponen vegetasi yang berperan dalam proses stabilisasi pantai dan pengurangan potensi erosi. Keberadaannya juga dapat mendukung terbentuknya kondisi mikrohabitat yang memungkinkan organisme lain memanfaatkan kawasan tersebut. Di sisi lain, katang-katang memiliki potensi pemanfaatan dalam bidang kesehatan karena berbagai penelitian telah mengidentifikasi kandungan metabolit sekunder dan aktivitas biologis dari bagian tanaman tersebut. Potensi ini dapat menjadi dasar pengembangan penelitian bahan alam, khususnya dalam pencarian senyawa bioaktif, meskipun pemanfaatannya sebagai bahan obat tetap memerlukan pengujian lebih lanjut terkait efektivitas, keamanan, dan dosis.',
      },

      { type: 'subheading', text: '4. Waru Laut' },
      { type: 'image', caption: 'Pohon dan daun Waru Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Tracheophyta, Kelas Magnoliopsida, Ordo Malvales, Famili Malvaceae, Genus Hibiscus, Spesies Hibiscus tiliaceus L.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut (Hibiscus tiliaceus L.) merupakan tumbuhan pesisir yang termasuk dalam famili Malvaceae dan memiliki kemampuan beradaptasi dengan lingkungan pantai. Tumbuhan ini umumnya berupa pohon atau perdu dengan batang tegak dan percabangan yang cukup banyak, serta dapat mencapai ukuran sedang. Kulit batang berwarna abu-abu kecokelatan dan pada bagian tertentu dapat menghasilkan serat yang kuat. Daunnya merupakan daun tunggal yang tersusun berseling, berbentuk jantung hingga menyerupai bulat telur, dengan ujung meruncing dan pangkal berbentuk jantung. Permukaan daun umumnya berwarna hijau dan memiliki tekstur agak kasar, sedangkan bagian bawah daun cenderung lebih pucat serta ditutupi rambut halus. Pertulangan daun menjari dengan beberapa tulang utama yang berawal dari pangkal daun sehingga menjadi salah satu karakter morfologi yang mudah diamati.',
      },
      {
        type: 'paragraph',
        text: 'Bunga waru laut berukuran cukup besar dan muncul pada ketiak daun atau bagian ujung ranting. Bunga memiliki lima mahkota yang umumnya berwarna kuning dengan bagian tengah berwarna merah tua atau keunguan, kemudian dapat berubah menjadi kemerahan sebelum gugur. Benang sari menyatu membentuk tabung yang mengelilingi tangkai putik, menjadi ciri khas bunga dari famili Malvaceae. Buah berbentuk bulat telur hingga hampir bulat dan merupakan buah kapsul yang ketika matang dapat membuka untuk melepaskan biji. Biji berukuran kecil dan umumnya berwarna cokelat hingga hitam. Kombinasi daun berbentuk jantung, bunga berwarna kuning dengan pusat kemerahan, serta buah kapsul menjadi karakter utama yang dapat digunakan untuk mengenali H. tiliaceus di kawasan pesisir Pantai Benteng, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut memberikan kontribusi terhadap pembentukan vegetasi pelindung pada kawasan pesisir. Keberadaannya dapat membantu mempertahankan kondisi substrat serta mengurangi paparan langsung faktor lingkungan terhadap kawasan di belakang pantai. Tajuk dan struktur vegetasinya juga dapat menciptakan ruang yang lebih terlindungi bagi organisme yang memanfaatkan kawasan pesisir sebagai habitat. Bagi masyarakat, waru laut memiliki potensi pemanfaatan yang berkaitan dengan bahan kayu dan serat. Kayunya secara tradisional dapat digunakan untuk berbagai kebutuhan, termasuk bahan bangunan ringan, peralatan, dan kerajinan. Pemanfaatan tersebut menunjukkan adanya nilai ekonomi dan sosial yang dapat dikembangkan dari tumbuhan pesisir. Meskipun demikian, pemanfaatan perlu mempertimbangkan keberadaan tumbuhan di habitat alami agar kebutuhan manusia tidak menyebabkan penurunan populasi maupun mengurangi fungsi ekologisnya.',
      },

      { type: 'subheading', text: '5. Pandan Laut' },
      { type: 'image', caption: 'Tumbuhan dan bunga Pandan Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Pandanales, Famili Pandanaceae, Genus Pandanus, Spesies Pandanus odorifer (Forssk.) Kuntze.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut (Pandanus odorifer (Forssk.) Kuntze) merupakan tumbuhan pesisir yang termasuk dalam famili Pandanaceae dan umumnya tumbuh pada kawasan pantai berpasir. Tumbuhan ini berbentuk perdu atau pohon kecil dengan batang tegak dan bercabang, serta memiliki akar tunjang yang tumbuh dari bagian batang dan berfungsi memperkuat tumbuhan pada substrat berpasir. Daunnya berbentuk pita panjang, sempit, dan kaku dengan ujung meruncing serta tepi yang berduri. Daun tersusun rapat dan spiral pada ujung batang. Permukaan daun berwarna hijau hingga hijau tua dengan pertulangan sejajar yang jelas. Karakter akar tunjang dan susunan daun yang rapat pada ujung batang menjadi ciri morfologi khas P. odorifer.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut merupakan tumbuhan dioesis, sehingga bunga jantan dan bunga betina terdapat pada individu yang berbeda. Perbungaan jantan umumnya memiliki struktur seperti rangkaian bulir yang dikelilingi braktea berwarna putih hingga kekuningan dan menghasilkan aroma yang khas, sedangkan perbungaan betina berkembang menjadi buah majemuk berbentuk bulat hingga menyerupai nanas. Buah tersusun atas banyak bagian kecil berbentuk poligonal yang disebut drupelet dan umumnya berwarna hijau ketika muda, kemudian berubah menjadi kuning hingga jingga ketika matang. Biji berada di dalam bagian buah tersebut dan dapat tersebar melalui berbagai media, terutama air. Daun panjang berduri, akar tunjang yang kuat, serta buah majemuk yang menyerupai nanas menjadi karakter morfologi utama yang dapat digunakan untuk mengidentifikasi P. odorifer di kawasan Pantai Benteng, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut memiliki kontribusi penting terhadap kestabilan lingkungan pantai melalui sistem perakarannya yang mampu memperkuat substrat berpasir. Keberadaannya dapat membantu mengurangi pergerakan pasir serta membentuk vegetasi yang berperan dalam mempertahankan kondisi kawasan pesisir. Vegetasi pandan laut juga dapat menyediakan ruang perlindungan bagi organisme kecil yang memanfaatkan kawasan tersebut. Selain fungsi ekologis, pandan laut memiliki potensi ekonomi melalui pemanfaatan daunnya sebagai bahan baku kerajinan. Daun yang memiliki serat kuat dapat diolah menjadi berbagai produk anyaman, seperti tikar, tas, wadah, dan produk kerajinan lainnya. Pengembangan produk berbasis pandan laut dapat menjadi salah satu alternatif ekonomi kreatif bagi masyarakat pesisir. Apabila disertai dengan pengelolaan bahan baku yang berkelanjutan, pemanfaatan tersebut dapat meningkatkan nilai ekonomi sumber daya lokal sekaligus mendorong masyarakat untuk mempertahankan keberadaan vegetasi pandan laut di lingkungannya.',
      },

      // ================= PANTAI RAJEGWESI =================
      { type: 'heading', text: 'Pantai Rajegwesi' },
      {
        type: 'paragraph',
        text: 'Keberadaan berbagai jenis vegetasi di kawasan Pantai Rajegwesi menunjukkan tingginya keragaman tumbuhan yang menjadi bagian dari ekosistem pesisir. Setiap jenis tumbuhan memiliki ciri taksonomi dan morfologi yang khas serta kemampuan adaptasi yang berbeda terhadap kondisi lingkungan pantai. Keragaman tersebut tidak hanya penting bagi keseimbangan ekologis kawasan, tetapi juga memiliki potensi untuk mendukung pengembangan wisata berbasis edukasi dan konservasi. Dengan demikian, pengenalan jenis tumbuhan di Pantai Rajegwesi dilakukan melalui pembahasan taksonomi, karakteristik morfologi, dan potensi masing-masing jenis dalam mendukung nilai ekologis serta daya tarik wisata kawasan.',
      },

      { type: 'subheading', text: '1. Ketapang' },
      { type: 'image', caption: 'Pohon dan daun muda Ketapang — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Myrtales, Famili Combretaceae, Genus Terminalia, Spesies Terminalia catappa L.',
      },
      {
        type: 'paragraph',
        text: 'Ketapang (Terminalia catappa L.) merupakan pohon yang termasuk dalam famili Combretaceae dan umum ditemukan di kawasan pesisir tropis. Pohon ini memiliki batang tegak dengan kulit batang berwarna cokelat keabu-abuan serta percabangan yang tumbuh mendatar dan tersusun bertingkat sehingga membentuk tajuk menyerupai payung. Daunnya merupakan daun tunggal berukuran besar, berbentuk membulat telur hingga lonjong terbalik (obovate), dengan tepi rata dan pertulangan menyirip yang jelas. Daun muda umumnya berwarna hijau muda hingga kemerahan, kemudian berubah menjadi hijau tua dan dapat berubah menjadi kuning, jingga, atau merah kecokelatan sebelum gugur.',
      },
      {
        type: 'paragraph',
        text: 'Bunga ketapang berukuran kecil, berwarna putih kehijauan hingga kekuningan, dan tersusun dalam bentuk bulir pada ketiak daun atau ujung ranting. Buah berbentuk bulat telur hingga lonjong dengan bagian tepi melebar menyerupai sayap, berwarna hijau saat muda dan berubah menjadi kuning, merah keunguan, hingga cokelat ketika matang. Bijinya berada di dalam lapisan buah yang cukup keras. Karakter tajuk yang lebar, daun besar, serta buah bersayap menjadi ciri morfologi utama yang memudahkan identifikasi T. catappa di kawasan pesisir, termasuk kawasan wisata Pantai Rajegwesi, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Ketapang laut memiliki manfaat ekologis melalui perannya dalam membentuk tutupan vegetasi dan menyediakan kondisi mikrohabitat di kawasan pesisir. Tajuk yang relatif lebar dapat memberikan keteduhan serta mengurangi paparan radiasi matahari secara langsung pada permukaan tanah. Serasah daun yang dihasilkan juga berkontribusi terhadap pemasukan bahan organik ke dalam tanah setelah mengalami proses dekomposisi. Siklus tersebut merupakan bagian dari proses pengembalian unsur hara yang mendukung produktivitas ekosistem. Selain fungsi ekologis, ketapang memiliki potensi pemanfaatan pada berbagai bidang. Buah dan bijinya diketahui dapat dimanfaatkan sebagai bahan pangan, sementara beberapa bagian tanaman telah digunakan dalam pengobatan tradisional. Kandungan senyawa bioaktif yang terdapat pada bagian tanaman juga menjadikan ketapang berpotensi untuk dikaji lebih lanjut dalam penelitian farmakologi dan pengembangan bahan alam. Dalam konteks pemanfaatan kawasan pesisir, keberadaan ketapang juga dapat mendukung kenyamanan masyarakat karena berfungsi sebagai vegetasi peneduh.',
      },

      { type: 'subheading', text: '2. Nyamplung' },
      { type: 'image', caption: 'Pohon dan daun Nyamplung — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Streptophyta, Kelas Equisetopsida, Ordo Malpighiales, Famili Calophyllaceae, Genus Calophyllum, Spesies Callophyllum inophyllum L.',
      },
      {
        type: 'paragraph',
        text: 'Nyamplung (Calophyllum inophyllum L.) merupakan pohon pesisir yang termasuk dalam famili Calophyllaceae dan banyak ditemukan pada wilayah pantai tropis. Pohon ini memiliki batang tegak dengan percabangan yang cukup banyak dan membentuk tajuk yang relatif lebar dan rimbun. Kulit batang umumnya berwarna cokelat keabu-abuan hingga cokelat tua dengan permukaan yang relatif kasar, sedangkan bagian dalam batang dapat menghasilkan getah berwarna putih kekuningan. Daunnya merupakan daun tunggal yang tersusun berhadapan, berbentuk elips hingga lonjong, dengan permukaan licin dan mengilap serta tepi daun rata. Pertulangan daun terlihat jelas berupa tulang daun sekunder yang tersusun rapat dan hampir sejajar sehingga menjadi salah satu karakter penting dalam mengenali nyamplung.',
      },
      {
        type: 'paragraph',
        text: 'Bunga nyamplung berukuran kecil, berwarna putih, dan umumnya tersusun dalam perbungaan yang muncul pada ketiak daun atau ujung ranting. Bunga memiliki benang sari berwarna kuning yang tampak menonjol di bagian tengah sehingga memberikan ciri khas pada bunga. Buah berbentuk bulat hingga agak lonjong dengan permukaan licin, berwarna hijau ketika muda dan berubah menjadi kekuningan hingga kecokelatan ketika matang. Buah memiliki satu biji berukuran relatif besar yang dilindungi oleh lapisan tempurung keras. Karakter batang yang kokoh, daun tebal dan mengilap, serta buah bulat dengan biji besar menjadi ciri morfologi utama yang dapat digunakan untuk mengidentifikasi C. inophyllum di kawasan pesisir, termasuk kawasan wisata Pantai Rajegwesi, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Nyamplung memiliki nilai ekologis sekaligus potensi ekonomi yang cukup besar. Keberadaan pohon ini dapat berkontribusi terhadap pembentukan tutupan vegetasi, perlindungan substrat, dan penyediaan habitat bagi organisme yang berada di kawasan pesisir. Potensi utama nyamplung terdapat pada bijinya yang menghasilkan minyak nabati. Minyak tersebut telah banyak dikaji sebagai bahan baku biodiesel sehingga nyamplung memiliki peluang untuk dikembangkan sebagai salah satu sumber bahan bakar nabati. Pengembangan tersebut dapat memberikan nilai tambah terhadap sumber daya lokal sekaligus mendukung diversifikasi energi terbarukan. Selain minyak, bagian tanaman lainnya juga memiliki potensi pemanfaatan, termasuk kayu dan komponen biomassa. Apabila dikelola melalui sistem budidaya, pemanenan, dan pengolahan yang tepat, nyamplung dapat menjadi salah satu sumber daya yang memberikan manfaat ekonomi tanpa menghilangkan fungsi ekologisnya sebagai bagian dari vegetasi pesisir.',
      },

      { type: 'subheading', text: '3. Waru Laut' },
      { type: 'image', caption: 'Pohon dan daun Waru Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Tracheophyta, Kelas Magnoliopsida, Ordo Malvales, Famili Malvaceae, Genus Hibiscus, Spesies Hibiscus tiliaceus L.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut (Hibiscus tiliaceus L.) merupakan tumbuhan pesisir yang termasuk dalam famili Malvaceae dan memiliki kemampuan beradaptasi dengan lingkungan pantai. Tumbuhan ini umumnya berupa pohon atau perdu dengan batang tegak dan percabangan yang cukup banyak, serta dapat mencapai ukuran sedang. Kulit batang berwarna abu-abu kecokelatan dan pada bagian tertentu dapat menghasilkan serat yang kuat. Daunnya merupakan daun tunggal yang tersusun berseling, berbentuk jantung hingga menyerupai bulat telur, dengan ujung meruncing dan pangkal berbentuk jantung. Permukaan daun umumnya berwarna hijau dan memiliki tekstur agak kasar, sedangkan bagian bawah daun cenderung lebih pucat serta ditutupi rambut halus. Pertulangan daun menjari dengan beberapa tulang utama yang berawal dari pangkal daun sehingga menjadi salah satu karakter morfologi yang mudah diamati.',
      },
      {
        type: 'paragraph',
        text: 'Bunga waru laut berukuran cukup besar dan muncul pada ketiak daun atau bagian ujung ranting. Bunga memiliki lima mahkota yang umumnya berwarna kuning dengan bagian tengah berwarna merah tua atau keunguan, kemudian dapat berubah menjadi kemerahan sebelum gugur. Benang sari menyatu membentuk tabung yang mengelilingi tangkai putik, menjadi ciri khas bunga dari famili Malvaceae. Buah berbentuk bulat telur hingga hampir bulat dan merupakan buah kapsul yang ketika matang dapat membuka untuk melepaskan biji. Biji berukuran kecil dan umumnya berwarna cokelat hingga hitam. Kombinasi daun berbentuk jantung, bunga berwarna kuning dengan pusat kemerahan, serta buah kapsul menjadi karakter utama yang dapat digunakan untuk mengenali H. tiliaceus di kawasan pesisir Pantai Rajegwesi, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut memberikan kontribusi terhadap pembentukan vegetasi pelindung pada kawasan pesisir. Keberadaannya dapat membantu mempertahankan kondisi substrat serta mengurangi paparan langsung faktor lingkungan terhadap kawasan di belakang pantai. Tajuk dan struktur vegetasinya juga dapat menciptakan ruang yang lebih terlindungi bagi organisme yang memanfaatkan kawasan pesisir sebagai habitat. Bagi masyarakat, waru laut memiliki potensi pemanfaatan yang berkaitan dengan bahan kayu dan serat. Kayunya secara tradisional dapat digunakan untuk berbagai kebutuhan, termasuk bahan bangunan ringan, peralatan, dan kerajinan. Pemanfaatan tersebut menunjukkan adanya nilai ekonomi dan sosial yang dapat dikembangkan dari tumbuhan pesisir. Meskipun demikian, pemanfaatan perlu mempertimbangkan keberadaan tumbuhan di habitat alami agar kebutuhan manusia tidak menyebabkan penurunan populasi maupun mengurangi fungsi ekologisnya.',
      },

      { type: 'subheading', text: '4. Katang-Katang' },
      { type: 'image', caption: 'Tumbuhan dan daun Katang-Katang — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Solanales, Famili Convolvulaceae, Genus Ipomoea, Spesies Ipomoea pes-caprae.',
      },
      {
        type: 'paragraph',
        text: 'Katang-katang (Ipomoea pes-caprae (L.) R.Br.) merupakan tumbuhan menjalar yang termasuk dalam famili Convolvulaceae dan umum ditemukan pada kawasan pantai berpasir. Tumbuhan ini memiliki batang berbentuk bulat, menjalar di atas permukaan tanah, dan dapat tumbuh memanjang dengan percabangan yang cukup banyak. Batangnya umumnya berwarna hijau hingga kecokelatan dan pada bagian tertentu dapat membentuk akar pada ruas yang bersentuhan dengan tanah. Daunnya merupakan daun tunggal yang tersusun berseling dengan bentuk khas menyerupai telapak kaki kambing, yaitu berbentuk membulat dengan lekukan yang cukup dalam pada bagian ujung sehingga terbagi menjadi dua lobus. Permukaan daun relatif licin dan tebal, dengan warna hijau serta tangkai daun yang cukup panjang.',
      },
      {
        type: 'paragraph',
        text: 'Bunga katang-katang tumbuh pada ketiak daun dan berbentuk seperti corong dengan ukuran relatif besar. Mahkota bunga umumnya berwarna merah muda hingga ungu muda dengan bagian tengah yang lebih gelap, sedangkan kelopak berwarna hijau. Buah berbentuk kapsul bulat telur hingga hampir bulat dan mengandung beberapa biji berwarna cokelat kehitaman dengan permukaan berbulu. Sistem perakaran berkembang pada bagian ruas batang yang menyentuh tanah sehingga membantu tumbuhan bertahan pada substrat berpasir. Karakter batang yang menjalar, daun berbentuk khas dengan dua lobus, serta bunga berbentuk corong menjadi ciri morfologi utama yang memudahkan identifikasi I. pes-caprae di kawasan pesisir Pantai Rajegwesi, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Katang-katang memiliki peran penting dalam mempertahankan kestabilan substrat pada kawasan pantai berpasir. Pertumbuhannya yang menjalar dan sistem perakaran yang berkembang pada lapisan pasir memungkinkan tumbuhan ini membantu mengikat sedimen serta mengurangi pergerakan pasir akibat angin. Fungsi tersebut menjadikan katang-katang sebagai salah satu komponen vegetasi yang berperan dalam proses stabilisasi pantai dan pengurangan potensi erosi. Keberadaannya juga dapat mendukung terbentuknya kondisi mikrohabitat yang memungkinkan organisme lain memanfaatkan kawasan tersebut. Di sisi lain, katang-katang memiliki potensi pemanfaatan dalam bidang kesehatan karena berbagai penelitian telah mengidentifikasi kandungan metabolit sekunder dan aktivitas biologis dari bagian tanaman tersebut. Potensi ini dapat menjadi dasar pengembangan penelitian bahan alam, khususnya dalam pencarian senyawa bioaktif, meskipun pemanfaatannya sebagai bahan obat tetap memerlukan pengujian lebih lanjut terkait efektivitas, keamanan, dan dosis.',
      },

      { type: 'subheading', text: '5. Cemara Laut' },
      { type: 'image', caption: 'Pohon dan daun Cemara Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Casuarinales, Famili Casuarinaceae, Genus Casuarina, Spesies Casuarina equisetifolia L.',
      },
      {
        type: 'paragraph',
        text: 'Cemara laut (Casuarina equisetifolia L.) merupakan tumbuhan pesisir yang termasuk dalam famili Casuarinaceae dan memiliki kemampuan beradaptasi pada lingkungan pantai. Tumbuhan ini berupa pohon dengan batang tegak dan dapat tumbuh mencapai ukuran relatif besar, dengan percabangan yang banyak serta tajuk berbentuk kerucut hingga membulat. Kulit batang berwarna cokelat keabu-abuan dan bertekstur kasar, sedangkan cabang muda berwarna hijau dan berbentuk ramping menyerupai jarum. Daun cemara laut mengalami reduksi menjadi sisik-sisik kecil yang tersusun mengelilingi ranting sehingga ranting hijau berfungsi sebagai bagian utama dalam fotosintesis. Ranting tersebut berbentuk silindris, beruas, dan memberikan tampilan menyerupai daun jarum yang menjadi ciri khas C. equisetifolia.',
      },
      {
        type: 'paragraph',
        text: 'Bunga cemara laut berukuran kecil dan tidak memiliki mahkota yang mencolok. Bunga jantan dan betina umumnya terdapat pada satu individu, dengan bunga jantan tersusun dalam bulir pada bagian ujung ranting, sedangkan bunga betina berkembang pada bagian lateral ranting. Buahnya berbentuk menyerupai kerucut kecil dengan permukaan keras dan tersusun dari banyak bagian seperti sisik. Ketika matang, buah berwarna cokelat dan dapat menghasilkan biji kecil bersayap yang membantu penyebaran oleh angin. Sistem perakaran cemara laut berkembang kuat dan mampu membantu pohon bertahan pada substrat berpasir serta kondisi lingkungan pesisir. Karakter batang tegak, ranting hijau beruas menyerupai jarum, dan buah berbentuk kerucut menjadi ciri utama yang dapat digunakan untuk mengidentifikasi C. equisetifolia di kawasan Pantai Rajegwesi, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Cemara laut memiliki peran dalam membentuk struktur vegetasi yang dapat memberikan perlindungan terhadap kawasan pesisir. Keberadaan tegakan cemara laut dapat membantu mengurangi kecepatan angin dan memberikan perlindungan terhadap vegetasi yang berada di belakangnya. Kondisi tersebut juga dapat menciptakan lingkungan mikro yang lebih sesuai bagi pertumbuhan vegetasi lain. Dalam pengelolaan kawasan pesisir, cemara laut sering dikaitkan dengan kegiatan rehabilitasi dan penghijauan karena kemampuannya beradaptasi pada lingkungan pantai. Selain fungsi ekologis, keberadaan cemara laut memiliki potensi dalam mendukung pengembangan wisata berbasis alam. Tegakan pohon dapat memberikan keteduhan, memperbaiki kualitas visual lanskap, dan meningkatkan kenyamanan pengunjung. Dengan demikian, pengelolaan cemara laut dapat memberikan manfaat ekologis sekaligus mendukung fungsi sosial kawasan apabila dilakukan dengan tetap mempertahankan karakter vegetasi alami.',
      },

      { type: 'subheading', text: '6. Keben' },
      { type: 'image', caption: 'Semai dan daun Keben — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Ericales, Famili Lecythidaceae, Genus Barringtonia, Spesies Barringtonia asiatica (L.) Kurz.',
      },
      {
        type: 'paragraph',
        text: 'Keben (Barringtonia asiatica (L.) Kurz) merupakan tumbuhan pesisir yang termasuk dalam famili Lecythidaceae dan umumnya tumbuh pada kawasan pantai tropis. Tumbuhan ini berupa pohon dengan batang tegak, percabangan relatif rendah, serta tajuk yang lebar dan rimbun. Kulit batang berwarna abu-abu kecokelatan dengan permukaan yang relatif kasar. Daunnya merupakan daun tunggal yang tersusun mengelompok pada ujung ranting, berukuran besar, berbentuk bulat telur hingga lonjong, dengan ujung membulat dan tepi daun rata. Permukaan daun berwarna hijau tua, tebal, serta mengilap, sedangkan pertulangan daun menyirip dan terlihat cukup jelas. Karakter daun yang besar dan tersusun rapat pada ujung ranting menjadi salah satu ciri yang mudah dikenali pada B. asiatica.',
      },
      {
        type: 'paragraph',
        text: 'Bunga keben berukuran besar dan tersusun dalam bentuk tandan yang muncul dari ketiak daun atau bagian ujung ranting. Bunga memiliki kelopak berwarna hijau dan mahkota berwarna putih dengan banyak benang sari yang panjang, umumnya berwarna putih hingga merah muda pada bagian ujungnya, sehingga memberikan penampilan menyerupai kuas. Buah keben berbentuk bulat hingga agak persegi dengan permukaan berserat atau bersegi, berwarna hijau ketika muda dan berubah menjadi kecokelatan ketika matang. Buah mengandung satu biji berukuran besar yang terlindungi oleh lapisan buah yang cukup kuat. Kombinasi daun besar dan mengilap, bunga putih dengan benang sari panjang, serta buah berukuran besar menjadi karakter morfologi utama yang dapat digunakan untuk mengidentifikasi B. asiatica di kawasan pesisir Pantai Rajegwesi, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Keben memiliki manfaat ekologis sebagai bagian dari vegetasi alami yang tumbuh pada kawasan pesisir. Keberadaannya berkontribusi terhadap pembentukan struktur vegetasi, penyediaan naungan, serta penyediaan ruang hidup bagi berbagai organisme yang berasosiasi dengan kawasan pantai. Pohon ini juga memiliki nilai dalam pengetahuan tradisional masyarakat karena beberapa bagian tumbuhan telah dimanfaatkan untuk berbagai keperluan. Pengetahuan tersebut memiliki potensi untuk dikembangkan menjadi bahan kajian etnobotani maupun penelitian mengenai kandungan bioaktif. Selain itu, keberadaan keben dapat dimanfaatkan sebagai bagian dari materi pendidikan lingkungan dan interpretasi keanekaragaman hayati pesisir. Pemanfaatan yang didasarkan pada pengetahuan lokal dan didukung penelitian ilmiah dapat memberikan nilai tambah, tetapi tetap perlu memperhatikan keberlanjutan populasi serta tidak mendorong eksploitasi berlebihan terhadap tumbuhan di alam.',
      },

      // ================= PANTAI SUKAMADE =================
      { type: 'heading', text: 'Pantai Sukamade' },
      {
        type: 'paragraph',
        text: 'Kawasan Pantai Sukamade memiliki keanekaragaman flora yang menjadi bagian penting dari ekosistem alami Taman Nasional Meru Betiri. Jenis tumbuhan yang terdapat di kawasan ini memiliki karakteristik taksonomi dan morfologi yang beragam serta menunjukkan kemampuan adaptasi terhadap kondisi habitatnya. Selain berperan secara ekologis, beberapa jenis tumbuhan memiliki nilai penting dalam aspek konservasi, pendidikan, dan pengembangan wisata berbasis keanekaragaman hayati. Oleh sebab itu, pengenalan flora di kawasan Pantai Sukamade mencakup identifikasi taksonomi, karakteristik morfologi, serta potensi ekologis, edukatif, dan wisata dari masing-masing jenis tumbuhan yang ditemukan.',
      },

      { type: 'subheading', text: '1. Waru Laut' },
      { type: 'image', caption: 'Bunga Waru Laut berwarna ungu dan daunnya — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Tracheophyta, Kelas Magnoliopsida, Ordo Malvales, Famili Malvaceae, Genus Hibiscus, Spesies Hibiscus tiliaceus L.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut (Hibiscus tiliaceus L.) merupakan tumbuhan pesisir yang termasuk dalam famili Malvaceae dan memiliki kemampuan beradaptasi dengan lingkungan pantai. Tumbuhan ini umumnya berupa pohon atau perdu dengan batang tegak dan percabangan yang cukup banyak, serta dapat mencapai ukuran sedang. Kulit batang berwarna abu-abu kecokelatan dan pada bagian tertentu dapat menghasilkan serat yang kuat. Daunnya merupakan daun tunggal yang tersusun berseling, berbentuk jantung hingga menyerupai bulat telur, dengan ujung meruncing dan pangkal berbentuk jantung. Permukaan daun umumnya berwarna hijau dan memiliki tekstur agak kasar, sedangkan bagian bawah daun cenderung lebih pucat serta ditutupi rambut halus. Pertulangan daun menjari dengan beberapa tulang utama yang berawal dari pangkal daun sehingga menjadi salah satu karakter morfologi yang mudah diamati.',
      },
      {
        type: 'paragraph',
        text: 'Bunga waru laut berukuran cukup besar dan muncul pada ketiak daun atau bagian ujung ranting. Bunga memiliki lima mahkota yang umumnya berwarna kuning dengan bagian tengah berwarna merah tua atau keunguan, kemudian dapat berubah menjadi kemerahan sebelum gugur. Namun, yang ditemukan di area Pantai Sukamade memiliki bunga berwarna ungu. Benang sari menyatu membentuk tabung yang mengelilingi tangkai putik, menjadi ciri khas bunga dari famili Malvaceae. Buah berbentuk bulat telur hingga hampir bulat dan merupakan buah kapsul yang ketika matang dapat membuka untuk melepaskan biji. Biji berukuran kecil dan umumnya berwarna cokelat hingga hitam. Kombinasi daun berbentuk jantung, bunga berwarna kuning dengan pusat kemerahan, serta buah kapsul menjadi karakter utama yang dapat digunakan untuk mengenali H. tiliaceus di kawasan pesisir Pantai Sukamade, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Waru laut memberikan kontribusi terhadap pembentukan vegetasi pelindung pada kawasan pesisir. Keberadaannya dapat membantu mempertahankan kondisi substrat serta mengurangi paparan langsung faktor lingkungan terhadap kawasan di belakang pantai. Tajuk dan struktur vegetasinya juga dapat menciptakan ruang yang lebih terlindungi bagi organisme yang memanfaatkan kawasan pesisir sebagai habitat. Bagi masyarakat, waru laut memiliki potensi pemanfaatan yang berkaitan dengan bahan kayu dan serat. Kayunya secara tradisional dapat digunakan untuk berbagai kebutuhan, termasuk bahan bangunan ringan, peralatan, dan kerajinan. Pemanfaatan tersebut menunjukkan adanya nilai ekonomi dan sosial yang dapat dikembangkan dari tumbuhan pesisir. Meskipun demikian, pemanfaatan perlu mempertimbangkan keberadaan tumbuhan di habitat alami agar kebutuhan manusia tidak menyebabkan penurunan populasi maupun mengurangi fungsi ekologisnya.',
      },

      { type: 'subheading', text: '2. Rumput Angin' },
      { type: 'image', caption: 'Daun, rumpun, dan buah Rumput Angin — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Equisetopsida, Ordo Poales, Famili Poaceae, Genus Spinifex, Spesies Spinifex littoreus (Burm.f.) Merr.',
      },
      {
        type: 'paragraph',
        text: 'Rumput angin (Spinifex littoreus (Burm.f.) Merr.) merupakan tumbuhan herba tahunan yang termasuk dalam famili Poaceae dan umum ditemukan pada kawasan pantai berpasir. Tumbuhan ini memiliki batang menjalar yang tumbuh membentuk rumpun dan dapat memanjang di atas permukaan pasir. Akar tumbuh pada buku-buku batang yang bersentuhan dengan substrat sehingga membantu tumbuhan melekat dan berkembang pada lingkungan berpasir. Daunnya berbentuk pita atau lanset sempit, bertekstur agak kaku, dengan ujung meruncing dan permukaan yang dapat terasa kasar. Daun berwarna hijau hingga hijau keabu-abuan dan tersusun pada buku batang. Karakter batang yang menjalar dan kemampuan membentuk rumpun merupakan ciri penting yang mendukung adaptasi S. littoreus terhadap kondisi lingkungan pantai.',
      },
      {
        type: 'paragraph',
        text: 'Perbungaan rumput angin memiliki bentuk khas berupa bonggol atau kepala bunga yang relatif besar dan menyerupai bola berduri. Bunga jantan dan betina terdapat pada individu yang berbeda (dioesis), dengan perbungaan betina umumnya memiliki struktur yang lebih besar dan mencolok. Perbungaan dapat terlepas dan terbawa angin setelah matang sehingga membantu proses penyebaran. Buah atau spikelet berukuran kecil dan terlindungi oleh struktur perbungaan yang keras serta berduri. Sistem perakaran dan batang menjalar memungkinkan rumput angin membantu mengikat pasir dan membentuk vegetasi penutup pada kawasan pantai. Karakter daun sempit dan kaku, batang menjalar, serta perbungaan berbentuk bola menjadi ciri morfologi utama yang dapat digunakan untuk mengidentifikasi S. littoreus di kawasan Pantai Sukamade, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Rumput angin memiliki peranan penting dalam mempertahankan struktur pantai berpasir, terutama pada kawasan yang memiliki gumuk pasir. Sistem perakarannya membantu mengikat partikel pasir sehingga mengurangi mobilitas sedimen yang dipengaruhi oleh angin. Proses tersebut berkontribusi terhadap stabilisasi permukaan pasir dan mempertahankan struktur geomorfologi pantai. Hilangnya vegetasi pantai seperti rumput angin dapat menyebabkan substrat menjadi lebih mudah bergerak sehingga meningkatkan kerentanan kawasan terhadap erosi dan perubahan bentuk pantai. Selain fungsi ekologisnya, keberadaan rumput angin memiliki potensi sebagai objek pendidikan lingkungan karena dapat digunakan untuk menjelaskan proses adaptasi tumbuhan terhadap kondisi pesisir serta hubungan antara vegetasi dan kestabilan pantai. Nilai tersebut dapat dikembangkan dalam kegiatan edukasi dan interpretasi lingkungan, khususnya pada kawasan wisata berbasis alam.',
      },

      { type: 'subheading', text: '3. Beruas Laut' },
      { type: 'image', caption: 'Tumbuhan dan daun Beruas Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Equisetopsida, Ordo Campanulales, Famili Goodeniaceae, Genus Scaevola, Spesies Scaevola taccada (Gaertn.) Roxb.',
      },
      {
        type: 'paragraph',
        text: 'Beruas laut (Scaevola taccada (Gaertn.) Roxb.) merupakan tumbuhan perdu yang termasuk dalam famili Goodeniaceae dan umum ditemukan pada kawasan pesisir tropis. Tumbuhan ini memiliki batang yang tegak hingga menjalar dengan percabangan cukup banyak dan membentuk tajuk yang rimbun. Batangnya berwarna hijau hingga cokelat keabu-abuan dengan permukaan relatif licin. Daunnya merupakan daun tunggal yang tersusun berseling dan cenderung mengelompok pada ujung ranting. Daun berbentuk bulat telur hingga lonjong terbalik (obovate), berukuran cukup tebal dan berdaging, dengan ujung membulat serta tepi daun rata. Permukaan daun berwarna hijau mengilap, sedangkan pertulangan daun menyirip tampak cukup jelas pada permukaan bawah daun.',
      },
      {
        type: 'paragraph',
        text: 'Bunga beruas laut berukuran kecil hingga sedang dan umumnya muncul pada ketiak daun. Mahkota bunga berwarna putih hingga putih kehijauan dan memiliki bentuk khas yang terbelah pada satu sisi sehingga menyerupai kipas atau setengah lingkaran. Buah berbentuk bulat hingga agak lonjong, berdaging, berwarna hijau ketika muda dan berubah menjadi putih hingga ungu kehitaman ketika matang. Buah umumnya mengandung satu biji yang berukuran relatif besar. Karakter daun yang tebal dan berdaging, bunga berbentuk kipas, serta buah yang berubah warna menjadi gelap ketika matang merupakan ciri morfologi utama yang dapat digunakan untuk mengidentifikasi S. taccada di kawasan pesisir Sukamade, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Beruas laut memiliki fungsi ekologis sebagai bagian dari vegetasi yang berkembang pada lingkungan pesisir dan berkontribusi terhadap pembentukan tutupan tumbuhan di dekat garis pantai. Keberadaannya dapat membantu mempertahankan kondisi substrat serta menyediakan ruang yang dapat dimanfaatkan oleh organisme kecil. Vegetasi pesisir yang terbentuk juga memiliki peranan dalam menjaga kompleksitas habitat sehingga mendukung keberadaan berbagai organisme yang saling berinteraksi dalam ekosistem. Dari perspektif pemanfaatan, beruas laut memiliki potensi untuk dikaji sebagai sumber bahan alam karena beberapa penelitian menunjukkan adanya kandungan senyawa metabolit sekunder dengan aktivitas biologis tertentu. Potensi tersebut membuka peluang penelitian lebih lanjut dalam bidang farmasi, pangan fungsional, maupun pengembangan bahan alami. Namun, pengembangan pemanfaatannya perlu didukung oleh kajian ilmiah yang memadai serta memperhatikan keberlanjutan populasi di habitat alaminya.',
      },

      { type: 'subheading', text: '4. Ketapang' },
      { type: 'image', caption: 'Pohon Ketapang — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Myrtales, Famili Combretaceae, Genus Terminalia, Spesies Terminalia catappa L.',
      },
      {
        type: 'paragraph',
        text: 'Ketapang (Terminalia catappa L.) merupakan pohon yang termasuk dalam famili Combretaceae dan umum ditemukan di kawasan pesisir tropis. Pohon ini memiliki batang tegak dengan kulit batang berwarna cokelat keabu-abuan serta percabangan yang tumbuh mendatar dan tersusun bertingkat sehingga membentuk tajuk menyerupai payung. Daunnya merupakan daun tunggal berukuran besar, berbentuk membulat telur hingga lonjong terbalik (obovate), dengan tepi rata dan pertulangan menyirip yang jelas. Daun muda umumnya berwarna hijau muda hingga kemerahan, kemudian berubah menjadi hijau tua dan dapat berubah menjadi kuning, jingga, atau merah kecokelatan sebelum gugur.',
      },
      {
        type: 'paragraph',
        text: 'Ketapang laut memiliki manfaat ekologis melalui perannya dalam membentuk tutupan vegetasi dan menyediakan kondisi mikrohabitat di kawasan pesisir. Tajuk yang relatif lebar dapat memberikan keteduhan serta mengurangi paparan radiasi matahari secara langsung pada permukaan tanah. Serasah daun yang dihasilkan juga berkontribusi terhadap pemasukan bahan organik ke dalam tanah setelah mengalami proses dekomposisi. Siklus tersebut merupakan bagian dari proses pengembalian unsur hara yang mendukung produktivitas ekosistem. Selain fungsi ekologis, ketapang memiliki potensi pemanfaatan pada berbagai bidang. Buah dan bijinya diketahui dapat dimanfaatkan sebagai bahan pangan, sementara beberapa bagian tanaman telah digunakan dalam pengobatan tradisional. Kandungan senyawa bioaktif yang terdapat pada bagian tanaman juga menjadikan ketapang berpotensi untuk dikaji lebih lanjut dalam penelitian farmakologi dan pengembangan bahan alam. Dalam konteks pemanfaatan kawasan pesisir, keberadaan ketapang juga dapat mendukung kenyamanan masyarakat karena berfungsi sebagai vegetasi peneduh.',
      },

      { type: 'subheading', text: '5. Keben' },
      { type: 'image', caption: 'Pohon dan daun Keben — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Ericales, Famili Lecythidaceae, Genus Barringtonia, Spesies Barringtonia asiatica (L.) Kurz.',
      },
      {
        type: 'paragraph',
        text: 'Keben (Barringtonia asiatica (L.) Kurz) merupakan tumbuhan pesisir yang termasuk dalam famili Lecythidaceae dan umumnya tumbuh pada kawasan pantai tropis. Tumbuhan ini berupa pohon dengan batang tegak, percabangan relatif rendah, serta tajuk yang lebar dan rimbun. Kulit batang berwarna abu-abu kecokelatan dengan permukaan yang relatif kasar. Daunnya merupakan daun tunggal yang tersusun mengelompok pada ujung ranting, berukuran besar, berbentuk bulat telur hingga lonjong, dengan ujung membulat dan tepi daun rata. Permukaan daun berwarna hijau tua, tebal, serta mengilap, sedangkan pertulangan daun menyirip dan terlihat cukup jelas. Karakter daun yang besar dan tersusun rapat pada ujung ranting menjadi salah satu ciri yang mudah dikenali pada B. asiatica.',
      },
      {
        type: 'paragraph',
        text: 'Bunga keben berukuran besar dan tersusun dalam bentuk tandan yang muncul dari ketiak daun atau bagian ujung ranting. Bunga memiliki kelopak berwarna hijau dan mahkota berwarna putih dengan banyak benang sari yang panjang, umumnya berwarna putih hingga merah muda pada bagian ujungnya, sehingga memberikan penampilan menyerupai kuas. Buah keben berbentuk bulat hingga agak persegi dengan permukaan berserat atau bersegi, berwarna hijau ketika muda dan berubah menjadi kecokelatan ketika matang. Buah mengandung satu biji berukuran besar yang terlindungi oleh lapisan buah yang cukup kuat. Kombinasi daun besar dan mengilap, bunga putih dengan benang sari panjang, serta buah berukuran besar menjadi karakter morfologi utama yang dapat digunakan untuk mengidentifikasi B. asiatica di kawasan pesisir Pantai Sukamade, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Keben memiliki manfaat ekologis sebagai bagian dari vegetasi alami yang tumbuh pada kawasan pesisir. Keberadaannya berkontribusi terhadap pembentukan struktur vegetasi, penyediaan naungan, serta penyediaan ruang hidup bagi berbagai organisme yang berasosiasi dengan kawasan pantai. Pohon ini juga memiliki nilai dalam pengetahuan tradisional masyarakat karena beberapa bagian tumbuhan telah dimanfaatkan untuk berbagai keperluan. Pengetahuan tersebut memiliki potensi untuk dikembangkan menjadi bahan kajian etnobotani maupun penelitian mengenai kandungan bioaktif. Selain itu, keberadaan keben dapat dimanfaatkan sebagai bagian dari materi pendidikan lingkungan dan interpretasi keanekaragaman hayati pesisir. Pemanfaatan yang didasarkan pada pengetahuan lokal dan didukung penelitian ilmiah dapat memberikan nilai tambah, tetapi tetap perlu memperhatikan keberlanjutan populasi serta tidak mendorong eksploitasi berlebihan terhadap tumbuhan di alam.',
      },

      { type: 'subheading', text: '6. Nyamplung' },
      { type: 'image', caption: 'Tumbuhan dan daun Nyamplung — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Streptophyta, Kelas Equisetopsida, Ordo Malpighiales, Famili Calophyllaceae, Genus Calophyllum, Spesies Callophyllum inophyllum L.',
      },
      {
        type: 'paragraph',
        text: 'Nyamplung (Calophyllum inophyllum L.) merupakan pohon pesisir yang termasuk dalam famili Calophyllaceae dan banyak ditemukan pada wilayah pantai tropis. Pohon ini memiliki batang tegak dengan percabangan yang cukup banyak dan membentuk tajuk yang relatif lebar dan rimbun. Kulit batang umumnya berwarna cokelat keabu-abuan hingga cokelat tua dengan permukaan yang relatif kasar, sedangkan bagian dalam batang dapat menghasilkan getah berwarna putih kekuningan. Daunnya merupakan daun tunggal yang tersusun berhadapan, berbentuk elips hingga lonjong, dengan permukaan licin dan mengilap serta tepi daun rata. Pertulangan daun terlihat jelas berupa tulang daun sekunder yang tersusun rapat dan hampir sejajar sehingga menjadi salah satu karakter penting dalam mengenali nyamplung.',
      },
      {
        type: 'paragraph',
        text: 'Bunga nyamplung berukuran kecil, berwarna putih, dan umumnya tersusun dalam perbungaan yang muncul pada ketiak daun atau ujung ranting. Bunga memiliki benang sari berwarna kuning yang tampak menonjol di bagian tengah sehingga memberikan ciri khas pada bunga. Buah berbentuk bulat hingga agak lonjong dengan permukaan licin, berwarna hijau ketika muda dan berubah menjadi kekuningan hingga kecokelatan ketika matang. Buah memiliki satu biji berukuran relatif besar yang dilindungi oleh lapisan tempurung keras. Karakter batang yang kokoh, daun tebal dan mengilap, serta buah bulat dengan biji besar menjadi ciri morfologi utama yang dapat digunakan untuk mengidentifikasi C. inophyllum di kawasan pesisir, termasuk kawasan wisata Pantai Sukamade, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Nyamplung memiliki nilai ekologis sekaligus potensi ekonomi yang cukup besar. Keberadaan pohon ini dapat berkontribusi terhadap pembentukan tutupan vegetasi, perlindungan substrat, dan penyediaan habitat bagi organisme yang berada di kawasan pesisir. Potensi utama nyamplung terdapat pada bijinya yang menghasilkan minyak nabati. Minyak tersebut telah banyak dikaji sebagai bahan baku biodiesel sehingga nyamplung memiliki peluang untuk dikembangkan sebagai salah satu sumber bahan bakar nabati. Pengembangan tersebut dapat memberikan nilai tambah terhadap sumber daya lokal sekaligus mendukung diversifikasi energi terbarukan. Selain minyak, bagian tanaman lainnya juga memiliki potensi pemanfaatan, termasuk kayu dan komponen biomassa. Apabila dikelola melalui sistem budidaya, pemanenan, dan pengolahan yang tepat, nyamplung dapat menjadi salah satu sumber daya yang memberikan manfaat ekonomi tanpa menghilangkan fungsi ekologisnya sebagai bagian dari vegetasi pesisir.',
      },

      { type: 'subheading', text: '7. Pandan Laut' },
      { type: 'image', caption: 'Rumpun Pandan Laut — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Magnoliophyta, Kelas Magnoliopsida, Ordo Pandanales, Famili Pandanaceae, Genus Pandanus, Spesies Pandanus odorifer (Forssk.) Kuntze.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut (Pandanus odorifer (Forssk.) Kuntze) merupakan tumbuhan pesisir yang termasuk dalam famili Pandanaceae dan umumnya tumbuh pada kawasan pantai berpasir. Tumbuhan ini berbentuk perdu atau pohon kecil dengan batang tegak dan bercabang, serta memiliki akar tunjang yang tumbuh dari bagian batang dan berfungsi memperkuat tumbuhan pada substrat berpasir. Daunnya berbentuk pita panjang, sempit, dan kaku dengan ujung meruncing serta tepi yang berduri. Daun tersusun rapat dan spiral pada ujung batang. Permukaan daun berwarna hijau hingga hijau tua dengan pertulangan sejajar yang jelas. Karakter akar tunjang dan susunan daun yang rapat pada ujung batang menjadi ciri morfologi khas P. odorifer.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut merupakan tumbuhan dioesis, sehingga bunga jantan dan bunga betina terdapat pada individu yang berbeda. Perbungaan jantan umumnya memiliki struktur seperti rangkaian bulir yang dikelilingi braktea berwarna putih hingga kekuningan dan menghasilkan aroma yang khas, sedangkan perbungaan betina berkembang menjadi buah majemuk berbentuk bulat hingga menyerupai nanas. Buah tersusun atas banyak bagian kecil berbentuk poligonal yang disebut drupelet dan umumnya berwarna hijau ketika muda, kemudian berubah menjadi kuning hingga jingga ketika matang. Biji berada di dalam bagian buah tersebut dan dapat tersebar melalui berbagai media, terutama air. Daun panjang berduri, akar tunjang yang kuat, serta buah majemuk yang menyerupai nanas menjadi karakter morfologi utama yang dapat digunakan untuk mengidentifikasi P. odorifer di kawasan Pantai Sukamade, Banyuwangi.',
      },
      {
        type: 'paragraph',
        text: 'Pandan laut memiliki kontribusi penting terhadap kestabilan lingkungan pantai melalui sistem perakarannya yang mampu memperkuat substrat berpasir. Keberadaannya dapat membantu mengurangi pergerakan pasir serta membentuk vegetasi yang berperan dalam mempertahankan kondisi kawasan pesisir. Vegetasi pandan laut juga dapat menyediakan ruang perlindungan bagi organisme kecil yang memanfaatkan kawasan tersebut. Selain fungsi ekologis, pandan laut memiliki potensi ekonomi melalui pemanfaatan daunnya sebagai bahan baku kerajinan. Daun yang memiliki serat kuat dapat diolah menjadi berbagai produk anyaman, seperti tikar, tas, wadah, dan produk kerajinan lainnya. Pengembangan produk berbasis pandan laut dapat menjadi salah satu alternatif ekonomi kreatif bagi masyarakat pesisir. Apabila disertai dengan pengelolaan bahan baku yang berkelanjutan, pemanfaatan tersebut dapat meningkatkan nilai ekonomi sumber daya lokal sekaligus mendorong masyarakat untuk mempertahankan keberadaan vegetasi pandan laut di lingkungannya.',
      },

      { type: 'subheading', text: '8. Bunga Padmosari (Rafflesia)' },
      { type: 'image', caption: 'Bunga Padmosari saat mekar dan sebelum mekar (kuncup) — foto akan ditambahkan' },
      {
        type: 'paragraph',
        text: 'Klasifikasi: Kingdom Plantae, Divisi Spermatophyta, Kelas Angiospermae, Ordo Aristolochiales, Famili Rafflesiaceae, Genus Rafflesia, Spesies Rafflesia zollingeriana Kds.',
      },
      {
        type: 'paragraph',
        text: 'Rafflesia zollingeriana Kds. merupakan tumbuhan holoparasit dari famili Rafflesiaceae yang memiliki morfologi sangat khas karena tidak mempunyai akar, batang, dan daun sejati. Seluruh tubuh vegetatifnya berkembang di dalam jaringan tumbuhan inang, terutama liana dari genus Tetrastigma, sedangkan bagian yang tampak di atas permukaan tanah berupa struktur bunga. Kuncup bunga pada awal perkembangannya berbentuk bulat hingga menyerupai kubah dan muncul dari jaringan inang. Menjelang mekar, bagian perigon mulai berkembang dan memperlihatkan warna kemerahan. Bunga yang telah mekar memiliki diameter 15–40 cm, dengan lima lobus perigon berwarna merah hingga merah kecokelatan yang dihiasi bintik-bintik putih. Karakter bunga yang besar, tidak memiliki daun dan batang, serta hidup bergantung pada tumbuhan inang menjadi ciri utama R. zollingeriana sehingga sangat bergantung pada keberadaan tumbuhan inangnya. Siklus mekarnya diawali dari kopula atau kuncup, kemudian berkembang menjadi brakta (Br), perigon (P), dan akhirnya memasuki fase mekar yang terjadi dalam waktu yang relatif singkat.',
      },
    ],
    variant: 1,
  },
]
