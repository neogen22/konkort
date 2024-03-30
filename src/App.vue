<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, watch, ref, onMounted } from 'vue'
import router from './router'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar'

const route = useRoute()
const path = computed(() => route.path)
let aboutCompanyBoolean = ref(false)
let tvBoolean = ref(false)
let smooth = ref(undefined)
watch(path, (now, next) => {
  if (now === '/about/aboutUs' || now === '/about/services' || now === '/about/licenses') {
    aboutCompanyBoolean.value = true
  } else {
    aboutCompanyBoolean.value = false
  }
  if (
    now === '/tv/connect' ||
    now === '/tv/channels' ||
    now === '/tv/price-list' ||
    now === '/tv/advertising'
  ) {
    tvBoolean.value = true
  } else {
    tvBoolean.value = false
  }
})
onMounted(() => {
  smooth.value.style.display = 'none'
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      smooth.value.style.display = 'block'
    } else {
      smooth.value.style.display = 'none'
    }
  })
  smooth.value.addEventListener('click', () =>
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  )
})
</script>

<template v-cloak>
  <link
    href="https://fonts.googleapis.com/css2?family=Prata&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <html class="!scroll-smooth">
    <body
      class="container mx-auto place-items-center max-w-2xl mt-6 lg:max-w-4xl grid-cols-4 border-0 xxx scroll-smooth"
    >
      <Menubar
        class="container mx-auto max-w-2xl mt-6 lg:max-w-4xl grid-cols-2 border-0 md:grid-cols-4 h-14 md:h-8 gap-x-5 mb-8 Menubar"
      >
        <MenubarMenu>
          <MenubarTrigger
            class="flex justify-center rounded-md cursor-pointer w-[140px] md:w-[140px] lg:w-[165px] h-10 text-white selection:text-black hover:bg-white hover:text-black"
            @click="$router.push('/news')"
            ><p class="text-inherit">НОВОСТИ</p></MenubarTrigger
          >
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            class="flex justify-center rounded-md cursor-pointer w-[140px] md:w-[140px] lg:w-[165px] h-10 text-white selection:text-black hover:bg-white hover:text-black"
            @click="$router.push('/contacts')"
            ><p class="text-inherit">КОНТАКТЫ</p></MenubarTrigger
          >
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            class="flex justify-center cursor-pointer rounded-md w-[140px] md:w-[140px] lg:w-[165px] h-10 p-0 text-white selection:text-black hover:bg-white hover:text-black"
            :class="{ active: tvBoolean }"
            id="box"
            ><div class="text-inherit">ТЕЛЕВИДЕНИЕ</div>
            <svg
              class="ml-[2px] fill-current"
              width="15px"
              height="24px"
              viewBox="0 0 24 24"
              id="magicoon-Filled"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
              />
            </svg>
          </MenubarTrigger>
          <MenubarContent alignOffset="5">
            <MenubarItem
              inset
              @click="router.push('/tv/connect')"
              class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            >
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 text-black hover:bg-teal-600 hover:text-white"
              >
                Как подключиться
              </p></MenubarItem
            >
            <MenubarSeparator />
            <MenubarItem inset class="p-0 w-[140px] md:w-[140px] lg:w-[165px]"
              ><p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer text-black hover:bg-teal-600 hover:text-white"
              >
                Оборудование
              </p>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              inset
              @click="$router.push('/tv/channels')"
              class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            >
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 text-black hover:bg-teal-600 hover:text-white"
              >
                Телеканалы
              </p>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset class="p-0 w-[140px] md:w-[140px] lg:w-[165px]"
              ><p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] pt-1 cursor-pointer h-12 lg:h-7 text-black hover:bg-teal-600 hover:text-white"
              >
                Настройка телеканалов
              </p>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              inset
              @click="$router.push('/tv/price-list')"
              class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            >
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-12 pt-1 lg:h-7 text-black hover:bg-teal-600 hover:text-white"
              >
                Прейскурант на услуги
              </p></MenubarItem
            >
            <MenubarSeparator />
            <MenubarItem
              inset
              @click="$router.push('/tv/advertising')"
              class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            >
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 text-black hover:bg-teal-600 hover:text-white"
              >
                Реклама на ТВ
              </p>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            class="flex justify-center cursor-pointer rounded-md w-[140px] md:w-[140px] lg:w-[165px] h-10 p-0 text-white selection:text-black hover:bg-white hover:text-black"
            :class="{ active: aboutCompanyBoolean }"
          >
            <div class="text-inherit">О КОМПАНИИ</div>
            <svg
              class="fill-current ml-[2px]"
              width="15px"
              height="24px"
              viewBox="0 0 24 24"
              id="magicoon-Filled"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
              />
            </svg>
          </MenubarTrigger>

          <MenubarContent alignOffset="5">
            <MenubarItem
              inset
              @click="$router.push(`/about/aboutUs`)"
              class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            >
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer p-0 text-black hover:bg-teal-600 hover:text-white"
              >
                О нас
              </p></MenubarItem
            >
            <MenubarSeparator />
            <MenubarItem inset class="p-0 w-[140px] md:w-[140px] lg:w-[165px]">
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer text-black hover:bg-teal-600 hover:text-white"
              >
                Лицензии
              </p></MenubarItem
            >
            <MenubarSeparator />
            <MenubarItem
              inset
              @click="$router.push('/about/services')"
              class="cursor p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            >
              <p
                class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer text-black hover:bg-teal-600 hover:text-white"
              >
                Услуги
              </p>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        class="fixed top-[85%] left-[80%] cursor-pointer sm:top-[90%] sm:left-[inherit] sm:ml-[560px] md:top-[90%] lg:top-[90%] md:left-[inherit] md:ml-[565px] lg:left-[inherit] lg:ml-[785px]"
        ref="smooth"
      >
        <svg
          width="44"
          height="44"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z"
          />
        </svg>
      </div>
      <RouterView></RouterView>
    </body>
  </html>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
.active {
  background-color: white;
  color: black;
}
</style>
