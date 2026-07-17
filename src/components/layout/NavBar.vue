<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/destination', label: 'Destination' },
  { to: '/edukasi', label: 'Edukasi' },
  { to: '/contact', label: 'Contact' },
  { to: '/news', label: 'News'},
]
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-brand-950/55 via-brand-950/20 to-transparent backdrop-blur-[2px]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
      <router-link
        to="/"
        class="text-sm font-semibold tracking-widest-plus text-white lowercase"
        @click="isOpen = false"
      >
        infosarongan
      </router-link>

      <nav class="hidden items-center gap-10 md:flex">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium tracking-wide text-white/90 transition hover:text-white"
          active-class="text-white after:w-full"
          exact-active-class="text-white after:w-full"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <button
        type="button"
        class="text-white md:hidden"
        aria-label="Buka menu navigasi"
        @click="isOpen = !isOpen"
      >
        <Menu v-if="!isOpen" class="size-6" />
        <X v-else class="size-6" />
      </button>
    </div>

    <transition name="fade">
      <nav
        v-if="isOpen"
        class="flex flex-col gap-1 bg-brand-950/90 px-6 pb-6 backdrop-blur-sm md:hidden"
      >
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
          active-class="bg-white/10 text-white"
          @click="isOpen = false"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
