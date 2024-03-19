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
    <div class="grid grid-cols-2 gap-2 lg:grid-cols-6 md:grid-cols-3">
      <Button
        :class="{ anime: activeButtonAbout }"
        @click="
          () => {
            activeButtonAbout = true
            activeButtonTV = false
            activeButtonContacts = false
            $router.push('/about')
          }
        "
        >О КОМПАНИИ</Button
      >
      <Button>НОВОСТИ</Button>
      <Button>ВИДЕОНОВОСТИ</Button>
      <Button
        :class="{ anime: activeButtonTV }"
        @click="
          () => {
            activeButtonAbout = false
            activeButtonTV = true
            activeButtonContacts = false
            $router.push('/tv')
          }
        "
        >ТЕЛЕВИДЕНИЕ</Button
      >
      <Button>&nbsp;&nbsp;&nbsp;&nbsp;АБОНЕНТАМ&nbsp;&nbsp;&nbsp;</Button>
      <Button
        :class="{ anime: activeButtonContacts }"
        @click="
          () => {
            activeButtonAbout = false
            activeButtonTV = false
            activeButtonContacts = true
            $router.push('/contacts')
          }
        "
        >КОНТАКТЫ</Button
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
