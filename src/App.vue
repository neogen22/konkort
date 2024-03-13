<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from './components/ui/button'
import KonkortAbout from './components/KonkortAbout.vue'
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Prata&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <div class="container mx-auto place-items-center max-w-5xl">
    <div class="flex flex-column gap-12 mt-6">
      <Button>О КОМПАНИИ</Button>
      <Button>НОВОСТИ</Button>
      <Button>ВИДЕОНОВОСТИ</Button>
      <Button>ТЕЛЕВИДЕНИЕ</Button>
      <Button>АБОНЕНТАМ</Button>
      <Button>КОНТАКТЫ</Button>
    </div>
    <KonkortAbout></KonkortAbout>
  </div>
</template>

<style scoped></style>
