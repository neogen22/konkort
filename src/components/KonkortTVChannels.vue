<template>
  <h1 class="text-black text-3xl text-center mt-4">Список телеканалов</h1>

  <Tabs default-value="social" class="mt-4">
    <TabsList class="flex justify-center">
      <TabsTrigger value="social"> Социальный пакет </TabsTrigger>
      <TabsTrigger value="base"> Базовый пакет </TabsTrigger>
    </TabsList>

    <TabsContent value="social" class="">
      <h2 class="text-black text-xl text-center mt-4">СОЦИАЛЬНЫЙ ПАКЕТ</h2>
      <p class="text-black text-center">по состоянию на 30.01.2024</p>
      <div class="grid place-items-center border-l border-b mt-4 grid-cols-2 lg:grid-cols-3">
        <span
          v-for="channel in channelsSocial"
          class="w-full text-center min-h-7 border-r border-t"
        >
          {{ channel }}
        </span>
      </div>
    </TabsContent>
    <TabsContent value="base" class="">
      <h2 class="text-black text-xl text-center mt-4">БАЗОВЫЙ ПАКЕТ</h2>
      <p class="text-black text-center">по состоянию на 30.01.2024</p>
      <div class="grid place-items-center border-l border-b mt-4 grid-cols-2 lg:grid-cols-3">
        <span v-for="channel in channelsBase" class="w-full text-center min-h-7 border-r border-t">
          {{ channel }}
        </span>
      </div>
    </TabsContent>
  </Tabs>
</template>
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

let channelsSocial = [
  '2х2',
  'LEOMAX 24',
  'Shopping Live',
  'Беларусь 24',
  'Домашний',
  'Звезда',
  'История',
  'Карусель',
  'Красная линия',
  'КТВК',
  'ЛДПР ТВ',
  'МАМА',
  'Матч ТВ',
  'Мир',
  'МУЗ ТВ',
  'НТВ',
  'НТВ Хит',
  'Окино',
  'Открытый мир Здоровье',
  'ОТР',
  'Первый канал',
  'Пёс и Ко',
  'Пятница',
  'Пятый канал',
  'РБК',
  'РЕН',
  'Россия 1',
  'Россия 24',
  'Россия К',
  'Сампо 360',
  'Солнце',
  'СОЮЗ',
  'СПАС',
  'СТС',
  'СТС Love',
  'Суббота',
  'Тайна',
  'ТВ-3',
  'ТВЦ',
  'ТНТ',
  'ТНТ 4',
  'Точка ТВ',
  'Че',
  'Ювелирочка'
]
let channelsBase = [
  '1 HD',
  '2х2',
  '360 Новости',
  'AMEDIA HIT',
  'BLACK',
  'Bridge TV',
  'Bridge TV Classic',
  'Bridge TV Hits',
  'Bridge TV Русский Хит',
  'LEOMAX 24',
  'Luxury',
  'RT',
  'RT Doc',
  'RT HD',
  'Ru TV',
  'Russian Music Box',
  'Russian Travel Guide',
  'Shopping Live',
  'A1',
  'A2',
  'АВТО 24',
  'БЕЛАРУСЬ 24',
  'Большая Азия',
  'Ваш успех',
  'ВМЕСТЕ РФ',
  'Вопросы и ответы',
  'День победы',
  'Домашние животные',
  'Домашний',
  'Драйв',
  'Европа плюс TV',
  'Загородная жизнь',
  'Загородный ТВ',
  'Звезда',
  'Здоровое ТВ',
  'Зоо TV',
  'Известия',
  'История',
  'Калейдоскоп ТВ',
  'Карусель',
  'Кинопоказ',
  'Красная линия',
  'КТВК',
  'ЛДПР ТВ',
  'МАМА',
  'Матч ТВ',
  'Мир',
  'МИР 24',
  'МИР HD',
  'Моя планета',
  'Мужской',
  'Муз ТВ',
  'Мультиландия',
  'Мультимузыка',
  'НАНО ТВ',
  'Наука',
  'НТВ',
  'НТВ Хит',
  'О кино',
  'О2ТВ',
  'Открытый мир Здоровье',
  'ОТР',
  'Охота и рыбалка',
  'Охотник и рыболов',
  'Первый канал',
  'Пёс и Ко',
  'Психология 21',
  'Пятница',
  'Пятый канал',
  'Радио Вести FM',
  'Радио Маяк',
  'Радио России',
  'РБК',
  'РЕН',
  'Ретро',
  'Россия 1',
  'Россия 24',
  'Россия HD',
  'Россия К',
  'Русский иллюзион',
  'Русский роман',
  'Русский экстрим',
  'Рыжий',
  'Сампо 360',
  'Сарафан',
  'Солнце',
  'Союз',
  'СПАС',
  'СТС',
  'СТС Love',
  'Суббота',
  'Тайна',
  'ТВ 21',
  'ТВ 3',
  'ТВЦ',
  'Телеканал 360',
  'Телеканал Ю',
  'Телепутешествия',
  'ТНТ',
  'ТНТ 4',
  'ТНТ Music',
  'ТОНУС',
  'Точка ТВ',
  'Три ангела',
  'Уникум',
  'Усадьба',
  'Феникс плюс Кино',
  'ХИТ',
  'Че',
  'Ювелирочка'
]
if (channelsSocial.length % 3 !== 0) {
  while (channelsSocial.length % 3 !== 0) {
    channelsSocial.push('')
  }
}
if (channelsBase.length % 3 !== 0) {
  while (channelsBase.length % 3 !== 0) {
    channelsBase.push('')
  }
}
</script>
<style scoped></style>
