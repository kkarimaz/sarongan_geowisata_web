<script setup>
import { MapPin, Mail, Phone } from '@lucide/vue'
import SocialIcon from '@/components/common/SocialIcon.vue'

const year = new Date().getFullYear()

const links = [
  { to: '/', label: 'Home' },
  { to: '/destination', label: 'Destination' },
  { to: '/edukasi', label: 'Edukasi' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { name: 'instagram', href: '#', label: 'Instagram' },
  { name: 'facebook', href: '#', label: 'Facebook' },
  { name: 'youtube', href: '#', label: 'YouTube' },
  { name: 'whatsapp', href: '#', label: 'WhatsApp' },
]
</script>

<template>
  <footer class="bg-brand-950 text-white/80">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
      <div class="md:col-span-2">
        <p class="text-sm font-semibold tracking-widest-plus text-white lowercase">infosarongan</p>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
          Portal informasi geowisata kawasan Sarongan — destinasi, edukasi geologi, dan
          potensi alam. Konten pada situs ini masih berupa placeholder.
        </p>
        <div class="mt-6 flex gap-3">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            :aria-label="social.label"
            class="flex size-9 items-center justify-center rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-brand-500 hover:text-white"
          >
            <SocialIcon :name="social.name" />
          </a>
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold tracking-widest-plus text-white/50 uppercase">Navigasi</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="link in links" :key="link.to">
            <router-link :to="link.to" class="transition hover:text-white">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-semibold tracking-widest-plus text-white/50 uppercase">Kontak</p>
        <ul class="mt-4 space-y-3 text-sm">
          <li class="flex items-start gap-2.5">
            <MapPin class="mt-0.5 size-4 shrink-0 text-brand-400" />
            <span>Desa Sarongan, Kec. Pesanggaran, Banyuwangi, Jawa Timur (placeholder)</span>
          </li>
          <li class="flex items-center gap-2.5">
            <Phone class="size-4 shrink-0 text-brand-400" />
            <span>+62 812-0000-0000</span>
          </li>
          <li class="flex items-center gap-2.5">
            <Mail class="size-4 shrink-0 text-brand-400" />
            <span>info@infosarongan.id</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <p class="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-white/40 md:px-10">
        © {{ year }} Info Sarongan. Konten &amp; foto pada situs ini adalah placeholder.
      </p>
    </div>
  </footer>
</template>
