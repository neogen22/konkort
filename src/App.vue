<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from './components/ui/button'
import { ref } from 'vue'
let activeButtonAbout = ref(false)
let activeButtonTV = ref(false)
let activeButtonContacts = ref(false)
</script>

<template>
  <div class="container mx-auto place-items-center max-w-5xl mt-6">
    <div class="flex flex-wrap justify-around gap-4">
      <RouterLink to="/about"
        ><Button
          :class="{ anime: activeButtonAbout }"
          @click="
            () => {
              activeButtonAbout = true
              activeButtonTV = false
              activeButtonContacts = false
            }
          "
          >&nbsp;&nbsp;О КОМПАНИИ&nbsp;&nbsp;</Button
        ></RouterLink
      >
      <Button
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;НОВОСТИ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button
      >
      <Button>ВИДЕОНОВОСТИ</Button>
      <RouterLink to="/tv"
        ><Button
          :class="{ anime: activeButtonTV }"
          @click="
            () => {
              activeButtonAbout = false
              activeButtonTV = true
              activeButtonContacts = false
            }
          "
          >&nbsp;&nbsp;ТЕЛЕВИДЕНИЕ&nbsp;&nbsp;</Button
        ></RouterLink
      >
      <Button>&nbsp;&nbsp;&nbsp;&nbsp;АБОНЕНТАМ&nbsp;&nbsp;&nbsp;</Button>
      <RouterLink to="/contacts"
        ><Button
          :class="{ anime: activeButtonContacts }"
          @click="
            () => {
              activeButtonAbout = false
              activeButtonTV = false
              activeButtonContacts = true
            }
          "
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;КОНТАКТЫ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button
        ></RouterLink
      >
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.anime {
  text-align: center;
  outline: 3px rgba(18, 222, 218, 0.895) solid;
  animation: test 1s infinite;
}
@keyframes test {
  25% {
    outline-color: rgba(18, 222, 218, 0.895);
  }
  50% {
    outline-color: rgba(91, 247, 244, 0.895);
  }
  75% {
    outline-color: rgba(232, 242, 242, 0.895);
  }
}
</style>
