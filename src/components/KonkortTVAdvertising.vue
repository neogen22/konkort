<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
</script>

<template>
  <h1 class="!text-orange-400 text-2xl text-center mt-6 fade-text">Реклама на телеканале "КтвК"</h1>
  <p class="text-white text-base mt-6 text-justify fade-text">
    Реклама на телевидении – самая демократичная, так как отличается высочайшими рейтингами среди
    целевой аудитории и достигает широкого охвата за короткий период времени.
  </p>
  <p class="text-justify mt-4 text-white fade-text">Почему реклама на телевидении эффективна?</p>
  <div class="mt-2 smartphone-table">
    <svg
      class="float-left fill-orange-400 svg-1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
      />
    </svg>
    <p class="text-justify text-orange-400 indent-1 mt-2 p-for-animation-1">
      наибольшая возможность удерживать внимание;
    </p>
    <svg
      class="float-left mt-2 fill-orange-400 svg-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
      />
    </svg>
    <p class="text-justify text-orange-400 indent-1 mt-2 p-for-animation-2">
      множество рекламных раздражителей: задействованы изображение, цвет, движение, печатный и
      устный текст;
    </p>

    <svg
      class="float-left mt-2 fill-orange-400 svg-3"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
      />
    </svg>
    <p class="text-justify text-orange-400 indent-1 mt-2 p-for-animation-3">запоминаемость;</p>
    <svg
      class="float-left mt-2 fill-orange-400 svg-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
      />
    </svg>
    <p class="text-justify text-orange-400 indent-1 mt-2 p-for-animation-4">
      безграничные варианты подачи;
    </p>
    <svg
      class="float-left mt-2 fill-orange-400 svg-5"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
      />
    </svg>
    <p class="text-justify text-orange-400 indent-1 mt-2 p-for-animation-5">
      возможность размещения в различные временные интервалы: утро, день, вечер, ночь.
    </p>
  </div>
  <table class="mt-2 non-smartphone-table">
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-1">
          наибольшая возможность удерживать внимание;
        </p>
      </td>
    </tr>
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-2">
          множество рекламных раздражителей: одновременно задействованы изображение, цвет, движение,
          печатный и устный текст;
        </p>
      </td>
    </tr>
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-3">запоминаемость;</p>
      </td>
    </tr>
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-4">безграничные варианты подачи;</p>
      </td>
    </tr>
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-5">
          возможность размещения в различные временные интервалы (утро, день, вечер, ночь).
        </p>
      </td>
    </tr>
  </table>

  <p class="text-white text-base mt-4 text-justify fade-text-3">
    Реклама на телевидении - лучший инструмент для механического и фонового восприятия. Даже если
    телезритель отвел взор от видеоряда, рекламный контакт не прерывается и коммуникация
    продолжается на акустическом уровне.
  </p>
  <p class="text-white text-base mt-4 text-justify fade-text-3">
    Предлагаем Вам расширить круг Ваших клиентов и повысить объем продаж, воздействуя на ваших
    потенциальных потребителей с помощью проверенного, доказавшего свою эффективность тысячами
    успешных рекламных кампаний средства – размещения рекламы на телевидении.
  </p>
  <p class="text-white text-base mt-4 text-justify fade-text-3">
    Мы предоставляем следующий комплекс услуг при размещении телевизионной рекламы:
  </p>
  <div class="smartphone-table">
    <div class="flex mt-2">
      <svg
        class="float-left absolute fill-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
        />
      </svg>
      <p class="indent-7 text-justify text-orange-400">
        разработка концепции кампании (рекомендации по объемам размещения и формирование бюджета,
        стратегии рекламного обращения);
      </p>
    </div>
    <div class="flex mt-2">
      <svg
        class="float-left absolute fill-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
        />
      </svg>
      <p class="indent-7 text-justify text-orange-400">
        разработка сценария и изготовление видеоролика. Составление медиа-плана (графика размещения)
        вашего ролика на телеканале "КтвК".
      </p>
    </div>
  </div>
  <table class="mt-4 non-smartphone-table">
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-6">
          разработка концепции кампании (рекомендации по объемам размещения и формирование бюджета,
          стратегии рекламного обращения);
        </p>
      </td>
    </tr>
    <tr>
      <td width="39px" class="align-top">
        <svg
          class="fill-orange-400 svg-7"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
          />
        </svg>
      </td>
      <td class="align-top">
        <p class="text-justify text-orange-400 p-for-animation-7">
          разработка сценария и изготовление видеоролика. Составление медиа-плана (графика
          размещения) вашего ролика на телеканале "КтвК".
        </p>
      </td>
    </tr>
  </table>

  <h2 class="text-white text-xl text-center mt-4 font-semibold">
    Расценки на изготовление и размещение рекламных и информационных материалов
  </h2>
  <h2 class="text-white text-xl text-center font-semibold">(с 01.03.2019 года)</h2>

  <Table class="mt-4 [&>*]:text-white"
    ><TableHeader>
      <TableRow>
        <TableHead class="text-left w-[20px] p-0 lg:p-2">1.</TableHead>
        <TableHead class="text-left w-[720px] p-0 lg:p-2">Телетекст (один день)</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify">Фон (цветовой, музыкальный)</TableCell>
        <TableCell class="text-center"> 400=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify"
          >Для юридических лиц за 1 слово 7 раз в день</TableCell
        >
        <TableCell class="text-center"> 80=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="border-b"></TableCell>
        <TableCell class="border-b p-0 lg:p-2 text-justify"
          >Для физических лиц за 1 слово 7 раз в день</TableCell
        >
        <TableCell class="text-center border-b"> 40=00 </TableCell>
      </TableRow>
    </TableBody>
    <TableHeader>
      <TableRow>
        <TableHead class="text-left p-0 lg:p-2">2.</TableHead>
        <TableHead class="text-left w-[720px] p-0 lg:p-2">Видеоролик</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify">
          Изготовление рекламного видеоролика до 30 секунд</TableCell
        >
        <TableCell class="text-center"> от 10000=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify"
          >Размещение видеоролика до 30 секунд 7 раз в день, за 1 день</TableCell
        >
        <TableCell class="text-center"> 1000=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify">Разработка сценария</TableCell>
        <TableCell class="text-center"> 1000=00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify">
          Съемка дополнительного объекта (1 объект)</TableCell
        >
        <TableCell class="text-center"> 2500=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify">
          Работа съемочной группы в выходные и праздничные дни (в час)</TableCell
        >
        <TableCell class="text-center"> 2500=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify"> Работа другого персонала (дикторы)</TableCell>
        <TableCell class="text-center"> 1500=00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="border-b p-0 lg:p-2 text-justify">
          Адаптация видеоролика, предоставленного заказчиком (текст)</TableCell
        >
        <TableCell class="text-center"> от 1000=00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="border-b p-0 lg:p-2 text-justify">+</TableCell>
        <TableCell class="border-b p-0 lg:p-2 text-justify"> Дикторский голос, музыка</TableCell>
        <TableCell class="text-center border-b p-0 lg:p-2"> до 2000=00</TableCell>
      </TableRow>
    </TableBody>
    <TableHeader>
      <TableRow>
        <TableHead class="text-left p-0 lg:p-2">3.</TableHead>
        <TableHead class="text-justify w-[720px] p-0 lg:p-2">
          Размещение готовых видеофильмов, видеороликов и собственных передач заказчика до 2х минут
          7 раз в день, за 1 день.
        </TableHead>
        <TableCell class="text-center">8000=00</TableCell>
      </TableRow>
    </TableHeader>
    <TableHeader>
      <TableRow>
        <TableHead class="text-left p-0 lg:p-2">4.</TableHead>
        <TableHead class="text-justify w-[720px] p-0 lg:p-2">
          Запись видеосюжета на носитель информации, предоставленный заказчиком (при наличии
          технической возможности таковой записи в ООО «Конкорт-1»)
        </TableHead>
        <TableCell class="text-center"></TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="text-justify p-0 lg:p-2">
          для физического лица для использования в личных целях (без цели распространения данного
          видеосюжета или материалов из него в любом виде)
        </TableCell>
        <TableCell class="text-center"> 700=00 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="text-justify p-0 lg:p-2">
          для физического лица с целью распространения данного видеосюжета или материалов из него с
          передачей авторских прав
        </TableCell>
        <TableCell class="text-center"> договорная </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="text-justify p-0 lg:p-2">
          для юридического лица для использования без целей распространения данного видеосюжета или
          отдельных материалов из него в любом виде
        </TableCell>
        <TableCell class="text-center"> договорная</TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="text-justify p-0 lg:p-2">
          для юридического лица для использования с целью распространения данного видеосюжета или
          отдельных материалов из него в любом виде</TableCell
        >
        <TableCell class="text-center p-0 lg:p-2"> договорная </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="text-justify p-0 lg:p-2">
          для юридического лица для использования без целей распространения данного видеосюжета или
          отдельных материалов из него в любом виде с предоставлением исходного
          видеоматериала</TableCell
        >
        <TableCell class="text-center"> договорная </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="border-b"></TableCell>
        <TableCell class="text-justify border-b p-0 lg:p-2">
          для юридического лица для использования с целью распространения данного видеосюжета или
          отдельных материалов из него в любом виде с предоставлением исходного видеоматериала с
          передачей авторских прав
        </TableCell>
        <TableCell class="text-center border-b"> договорная</TableCell>
      </TableRow>
    </TableBody>
    <TableHeader>
      <TableRow>
        <TableHead class="text-left p-0 lg:p-2">5.</TableHead>
        <TableHead class="text-justify w-[720px] p-0 lg:p-2">
          Изготовление информационного видеоролика до 2х минут 12000=00 (в стоимость включены: выезд
          съемочной группы (1 объект), монтаж, озвучивание, написание текста и прокат
          информационного видеосюжета согласно плана выхода информационных материалов (Приложение
          №1))
        </TableHead>
        <TableCell class="text-center">12000=00</TableCell>
      </TableRow>
    </TableHeader>
    <TableHeader>
      <TableRow>
        <TableHead class="text-left p-0 lg:p-2">6.</TableHead>
        <TableHead class="text-justify w-[720px] p-0 lg:p-2">
          Прокат информационного видеоролика, изготовленного ООО «Конкорт-1» 7 раз в день за 1 день
        </TableHead>
        <TableCell class="text-center">12000=00</TableCell>
      </TableRow>
    </TableHeader>
    <TableHeader>
      <TableRow>
        <TableHead class="text-left p-0 lg:p-2">7.</TableHead>
        <TableHead class="text-justify w-[720px] p-0 lg:p-2">
          Срочность изготовления и размещения материала
        </TableHead>
        <TableCell class="text-center"></TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="p-0 lg:p-2 text-justify"
          >за срочность изготовления и размещения материала в течение 24 часов</TableCell
        >
        <TableCell class="text-center"> дополнительная плата в трехкратном размере </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="border-b"></TableCell>
        <TableCell class="border-b p-0 lg:p-2 text-justify"
          >заявка на размещение в течение 24 часов</TableCell
        >
        <TableCell class="text-center border-b">
          дополнительная плата в трехкратном размере
        </TableCell>
      </TableRow>
    </TableBody>
    <TableHeader>
      <TableRow>
        <TableHead class="border-b text-left p-0 lg:p-2">8.</TableHead>
        <TableHead class="border-b text-justify w-[720px] p-0 lg:p-2">
          Передача неисключительных авторских прав на видеоматериал
        </TableHead>
        <TableCell class="border-b text-center">8000=00</TableCell>
      </TableRow>
    </TableHeader>
  </Table>
  <h2 class="text-white text-xl text-center mt-6 font-semibold">
    Размещение рекламных видеороликов
  </h2>
  <Table class="mt-4 [&>*]:text-white"
    ><TableHeader>
      <TableRow>
        <TableHead class="text-center">Ролик</TableHead>
        <TableHead class="text-center">1 неделя<br />7 дней</TableHead>
        <TableHead class="text-center">2 недели <br />14 дней</TableHead>
        <TableHead class="text-center"
          >3 недели<br />
          21 день</TableHead
        >
        <TableHead class="text-center">4 недели <br />28 дней</TableHead>
        <TableHead class="text-center"
          >5 недель<br />
          35 дней</TableHead
        >
        <TableHead class="text-center"
          >6 недель<br />
          42 дня</TableHead
        >
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="text-center"></TableCell>
        <TableCell class="text-center"></TableCell>
        <TableCell class="text-center">Скидка 10%</TableCell>
        <TableCell class="text-center">Скидка 15%</TableCell>
        <TableCell class="text-center">Скидка 20%</TableCell>
        <TableCell class="text-center">Скидка 25%</TableCell>
        <TableCell class="text-center">Скидка 30%</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center">5 секунд</TableCell>
        <TableCell class="text-center">1170</TableCell>
        <TableCell class="text-center">2100</TableCell>
        <TableCell class="text-center">2980</TableCell>
        <TableCell class="text-center">3700</TableCell>
        <TableCell class="text-center">4380</TableCell>
        <TableCell class="text-center">4900</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center">10 секунд</TableCell>
        <TableCell class="text-center">2300</TableCell>
        <TableCell class="text-center">4100</TableCell>
        <TableCell class="text-center">5860</TableCell>
        <TableCell class="text-center">7360</TableCell>
        <TableCell class="text-center">8600</TableCell>
        <TableCell class="text-center">9660</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center">15 секунд</TableCell>
        <TableCell class="text-center">3500</TableCell>
        <TableCell class="text-center">6300</TableCell>
        <TableCell class="text-center">8900</TableCell>
        <TableCell class="text-center">11200</TableCell>
        <TableCell class="text-center">13100</TableCell>
        <TableCell class="text-center">14700</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center">20 секунд</TableCell>
        <TableCell class="text-center">4600</TableCell>
        <TableCell class="text-center">8280</TableCell>
        <TableCell class="text-center">11700</TableCell>
        <TableCell class="text-center">14700</TableCell>
        <TableCell class="text-center">17250</TableCell>
        <TableCell class="text-center">19300</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center">25 секунд</TableCell>
        <TableCell class="text-center">5800</TableCell>
        <TableCell class="text-center">10400</TableCell>
        <TableCell class="text-center">14800</TableCell>
        <TableCell class="text-center">18500</TableCell>
        <TableCell class="text-center">21750</TableCell>
        <TableCell class="text-center">24360</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center">25 секунд</TableCell>
        <TableCell class="text-center">7000</TableCell>
        <TableCell class="text-center">12600</TableCell>
        <TableCell class="text-center">17850</TableCell>
        <TableCell class="text-center">22400</TableCell>
        <TableCell class="text-center">26250</TableCell>
        <TableCell class="text-center">29400</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  <p class="mt-2 text-justify text-white">
    Минимальная оплата за однодневную рекламу - 1000 рублей.
  </p>
  <p class="mt-2 text-justify text-white">
    Время размещения: со вторника по пятницу; с пятницы по вторник; 07:00; 10:00; 13:00; 17:00;
    19:00; 22:00; 00:00.
  </p>
  <h2 class="text-white text-xl text-center mt-6 font-semibold">
    Размещение объявлений для физических и юридических лиц на телеканале "КТВК"
  </h2>
  <Table class="mt-4 [&>*]:text-white"
    ><TableHeader>
      <TableRow>
        <TableHead class="text-center">№ п/п</TableHead>
        <TableHead class="text-center">Наименование услуги</TableHead>
        <TableHead class="text-center">Кол-во, доп условия</TableHead>
        <TableHead class="text-center">Цена</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="text-center w-[80px]">1</TableCell>
        <TableCell class="text-center w-[600px]"
          >Размещение рекламы от физических и юридических лиц в офисе ООО «Конкорт-1» в виде
          листовок, визитных карточек, календарей и т.д.
        </TableCell>
        <TableCell class="text-center w-[200px]"
          >до формата листа А5,<br />
          до 500 экземпляров</TableCell
        >
        <TableCell class="text-center">500 рублей</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center w-[80px]">2</TableCell>
        <TableCell class="text-center w-[600px]"
          >Размещение рекламы от физических и юридических лиц в офисе ООО «Конкорт-1» в виде
          баннеров, плакатов на стенах и дверях офиса
        </TableCell>
        <TableCell class="text-center"
          >до формата листа А3,<br />
          1 экземпляр</TableCell
        >
        <TableCell class="text-center">1000 рублей в месяц</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center w-[80px]">3</TableCell>
        <TableCell class="text-center w-[600px]">Ксерокопии документов, формат листа А4 </TableCell>
        <TableCell class="text-center">1 сторона листа</TableCell>
        <TableCell class="text-center">5 рублей</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center w-[80px]">4</TableCell>
        <TableCell class="text-center w-[600px]"
          >Размещение объявлений для физических лиц на телеканале «КТВК» (за 1 объявление) –
          объявление от физического лица для физического лица без упоминания организаций</TableCell
        >
        <TableCell class="text-center"
          >до 15 слов, 7 дней<br />до 15 слов, 11 дней<br />до 15 слов, 7 дней с фотографией<br />до
          15 слов, 11 дней с фотографией</TableCell
        >
        <TableCell class="text-center align-top"
          >безвозмездно <br />30 рублей<br />50 рублей<br /><br />70 рублей</TableCell
        >
      </TableRow>
    </TableBody>
  </Table>
  <h1 class="!text-orange-400 text-justify mt-4">
    <span class="underline underline-offset-4">Реклама на телевидении</span> - идеальное средство
    для демонстрации имиджа, продукта и услуг Вашей компании. Наибольшую эффективность рекламы на ТВ
    обеспечивает комплексное решение. Мы сделаем так, чтобы Вас обязательно увидели!
  </h1>
</template>
<style scoped>
@media (width >= 500px) {
  .non-smartphone-table {
    display: block;
  }
  .smartphone-table {
    display: none;
  }
}
@media (width < 500px) {
  .non-smartphone-table {
    display: none;
  }
  .smartphone-table {
    display: block;
  }
}
svg {
  min-width: 24px;
  min-height: 24px;
}
.fade-text {
  animation: fade-in 500ms;
}
.fade-text-2 {
  animation: fade-in 1s;
}
.fade-text-3 {
  animation: fade-in 1400ms;
}
tr,
h2 {
  animation: fade-in 1500ms;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes start {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes end {
  from {
    transform: translateX(800px);
  }
  to {
    transform: translateX(0px);
  }
}
.svg-1 {
  animation: start 1000ms;
}
.svg-2 {
  animation: start 1100ms;
}
.svg-3 {
  animation: start 1200ms;
}
.svg-4 {
  animation: start 1300ms;
}
.svg-5 {
  animation: start 1400ms;
}
.svg-6 {
  animation: start 1500ms;
}
.svg-7 {
  animation: start 1600ms;
}
.p-for-animation-1 {
  animation: end 1000ms;
}
.p-for-animation-2 {
  animation: end 1100ms;
}
.p-for-animation-3 {
  animation: end 1150ms;
}
.p-for-animation-4 {
  animation: end 1200ms;
}
.p-for-animation-5 {
  animation: end 1270ms;
}
.p-for-animation-6 {
  animation: end 1300ms;
}
.p-for-animation-7 {
  animation: end 1350ms;
}

p {
  text-shadow: rgba(250, 250, 250, 0.25) 0px 0px 3px;
}
</style>
