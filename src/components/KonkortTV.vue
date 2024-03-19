<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useRoute, useRouter } from 'vue-router'
const route = useRouter()
let activeButtonAdvertising = false
let activeButtonСonnect = false
let activeButtonChannels = false
let activeButtonPriceList = false
const activateAdvertising = () => {
  activeButtonAdvertising = true
  activeButtonСonnect = false
  activeButtonChannels = false
  activeButtonPriceList = false
  route.push({
    path: '/tv/advertising'
  })
}
const activateConnect = () => {
  activeButtonAdvertising = false
  activeButtonСonnect = true
  activeButtonChannels = false
  activeButtonPriceList = false
  route.push({
    path: '/tv/connect'
  })
}
const activateChannels = () => {
  activeButtonAdvertising = false
  activeButtonСonnect = false
  activeButtonChannels = true
  activeButtonPriceList = false
  route.push({
    path: '/tv/channels'
  })
}
const activatePriceList = () => {
  activeButtonAdvertising = false
  activeButtonСonnect = false
  activeButtonChannels = false
  activeButtonPriceList = true
  route.push({
    path: '/tv/price-list'
  })
}
</script>

<template>
  <div class="grid mt-4 grid-cols-2 gap-2 self-center md:grid-cols-3">
    <Button class="w-auto" :class="{ anime: activeButtonСonnect }" @click="activateConnect()"
      >Как подключиться</Button
    >
    <Button class="w-auto">Оборудование</Button>
    <Button class="w-auto" :class="{ anime: activeButtonChannels }" @click="activateChannels()"
      >Каналы</Button
    >
    <Button class="w-auto">Настройка телеканалов</Button>
    <Button class="w-auto" :class="{ anime: activeButtonPriceList }" @click="activatePriceList()"
      >Прейскурант на услуги</Button
    >
    <Button
      class="w-auto"
      :class="{ anime: activeButtonAdvertising }"
      @click="activateAdvertising()"
      >Реклама на ТВ</Button
    >
  </div>
  <RouterView></RouterView>

  <!--  <KonkortTVPodkluchenie></KonkortTVPodkluchenie> -->
  <!-- <h1 class="text-black text-3xl text-center mt-4">ТЕЛЕВИДЕНИЕ</h1>
  <p class="text-black text-base mt-4 text-justify">
    Услуга цифрового кабельного телевидения – выгодное предложение для зрителя, которого не
    устраивает качество или содержание обычных эфирных, аналоговых каналов.
  </p>
  <p class="text-black text-base mt-4 text-justify">
    Наша компания осуществляет прием цифрового телевизионного сигнала со спутника и с помощью
    кабельных сетей доставляет его до квартиры абонента. Трансляция телевизионного сигнала в
    цифровом формате обеспечивает полную помехозащищенность от различных воздействий. Поэтому, самое
    существенное преимущество цифрового кабельного ТВ – высокое качество телевизионной картинки и
    звука.
  </p>
  <p class="text-black text-base mt-4 text-justify">
    Основные преимущества цифрового кабельного телевидения:
  </p>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">большое количество каналов;</p>
  </div>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">высокое качество изображения;</p>
  </div>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">стереозвук;</p>
  </div>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">радио;</p>
  </div>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">телегид - программа передач на экране телевизора;</p>
  </div>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">субтитры;</p>
  </div>
  <div class="flex mt-2">
    <svg
      class="z-10 absolute"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
    <p class="indent-11 text-justify">телетекст;</p>
  </div>
  <p class="text-black text-base mt-4 text-justify">
    Для подключения услуги не требуется установка сложного оборудования, например - спутниковой
    тарелки. В целях защиты от несанкционированного просмотра и обеспечения приема сигнала клиенту
    устанавливается цифровой абонентский декодер - компактное устройство с пультом дистанционного
    управления, осуществляющее прием и раскодирование сигнала.
  </p>
  <p class="text-black text-base mt-4 text-justify">
    Уже сегодня мы предлагаем Вам подключиться к системе цифрового телевидения по нашей кабельной
    сети, без необходимости приобретения и установки спутниковой антенны и дорогостоящего комплекта
    спутникового оборудования для просмотра телевизионных каналов в цифровом формате вещания.
  </p> -->
</template>
<style>
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
