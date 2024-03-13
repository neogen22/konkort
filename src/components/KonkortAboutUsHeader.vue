<script setup lang="ts">
import { Button } from './ui/button'
import { ref, shallowRef } from 'vue'
import KonkortAboutUsAboutUs from './KonkortAboutUsAboutUs.vue'
import KonkortAboutUsUslugi from './KonkortAboutUsUslugi.vue'
import KonkortLicenses from './KonkortLicenses.vue'
let aboutUsButtonResult = shallowRef(KonkortLicenses)
let firstButton = ref(true)
let secondButton = ref(false)
let thirdButton = ref(false)
</script>

<template>
  <div class="flex flex-row gap-4">
    <Button
      @click="
        () => {
          aboutUsButtonResult = KonkortAboutUsAboutUs
          firstButton = true
          secondButton = false
          thirdButton = false
        }
      "
      :class="{ anime: firstButton }"
      >О нас</Button
    >
    <Button
      @click="
        () => {
          aboutUsButtonResult = KonkortAboutUsUslugi
          firstButton = false
          secondButton = true
          thirdButton = false
        }
      "
      :class="{ anime: secondButton }"
      >Услуги</Button
    >
    <Button
      @click="
        () => {
          aboutUsButtonResult = KonkortLicenses
          firstButton = false
          secondButton = false
          thirdButton = true
        }
      "
      :class="{ anime: thirdButton }"
      >Лицензии</Button
    >
  </div>
  <div class="mt-7">
    <component :is="aboutUsButtonResult"></component>
  </div>
</template>
<style scoped>
.anime {
  text-align: center;
  animation: blur 0.75s ease-out infinite;
  text-shadow:
    0px 0px 5px #fff,
    0px 0px 7px #fff;
}
@keyframes blur {
  from {
    text-shadow:
      0px 0px 10px #fff,
      0px 0px 10px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #7b96b8,
      0px 0px 150px #7b96b8,
      0px 10px 100px #7b96b8,
      0px 10px 100px #7b96b8,
      0px 10px 100px #7b96b8,
      0px 10px 100px #7b96b8,
      0px -10px 100px #7b96b8,
      0px -10px 100px #7b96b8;
  }
}
p {
  font-family: 'Roboto';
}
</style>
