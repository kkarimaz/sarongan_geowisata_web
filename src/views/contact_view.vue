<script setup>
import { reactive, ref } from 'vue'
import { MapPin, Mail, Phone, Send, CheckCircle2 } from '@lucide/vue'
import PageBanner from '@/components/layout/EduPageBanner.vue'
import PlaceholderImage from '@/components/common/PlaceholderImage.vue'

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

// No backend wired up yet — this just simulates a submission client-side.
function handleSubmit() {
  submitted.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}

const contactInfo = [
  { icon: MapPin, label: 'Alamat', value: 'Desa Sarongan, Kec. Pesanggaran, Banyuwangi, Jawa Timur (placeholder)' },
  { icon: Phone, label: 'Telepon', value: '+62 812-0000-0000' },
  { icon: Mail, label: 'Email', value: 'info@infosarongan.id' },
]
</script>

<template>
  <div>
    <PageBanner eyebrow="Hubungi Kami" title="Contact" />

    <section class="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
      <div>
        <h2 class="font-display text-2xl font-semibold text-brand-900">Kirim Pesan</h2>
        <p class="mt-2 text-sm text-brand-950/60">
          Formulir ini belum terhubung ke backend — hanya simulasi tampilan.
        </p>

        <form v-if="!submitted" class="mt-6 flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div>
            <label for="name" class="text-sm font-medium text-brand-950/80">Nama</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Nama lengkap"
              class="mt-1.5 w-full rounded-xl border border-brand-950/10 px-4 py-2.5 text-sm outline-none ring-brand-500 placeholder:text-brand-950/30 focus:ring-2"
            />
          </div>
          <div>
            <label for="email" class="text-sm font-medium text-brand-950/80">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="nama@email.com"
              class="mt-1.5 w-full rounded-xl border border-brand-950/10 px-4 py-2.5 text-sm outline-none ring-brand-500 placeholder:text-brand-950/30 focus:ring-2"
            />
          </div>
          <div>
            <label for="message" class="text-sm font-medium text-brand-950/80">Pesan</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Tulis pesan Anda..."
              class="mt-1.5 w-full rounded-xl border border-brand-950/10 px-4 py-2.5 text-sm outline-none ring-brand-500 placeholder:text-brand-950/30 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            class="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Kirim Pesan
            <Send class="size-4" />
          </button>
        </form>

        <div v-else class="mt-6 flex items-start gap-3 rounded-2xl bg-brand-50 p-5 text-brand-800">
          <CheckCircle2 class="mt-0.5 size-5 shrink-0" />
          <p class="text-sm">
            Terima kasih! Ini hanya simulasi tampilan — pesan Anda belum benar-benar terkirim
            karena backend belum tersedia.
          </p>
        </div>

        <ul class="mt-10 flex flex-col gap-4">
          <li v-for="item in contactInfo" :key="item.label" class="flex items-start gap-3">
            <span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <component :is="item.icon" class="size-4" />
            </span>
            <span class="text-sm text-brand-950/75">
              <span class="block font-medium text-brand-950">{{ item.label }}</span>
              {{ item.value }}
            </span>
          </li>
        </ul>
      </div>

      <div class="aspect-square w-full overflow-hidden rounded-3xl shadow-lg shadow-brand-950/10 md:aspect-auto md:h-full">
        <PlaceholderImage label="Peta Lokasi — Placeholder" :variant="2" rounded="rounded-none" />
      </div>
    </section>
  </div>
</template>
