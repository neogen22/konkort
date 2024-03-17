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
  <h1 class="text-black text-3xl text-center mt-4">Реклама на телеканале "КтвК"</h1>
  <p class="text-black text-base mt-4 text-justify">
    Реклама на ТВ – самая демократичная, т.к. отличается высочайшими рейтингами среди целевой
    аудитории и достигает широкого охвата за короткий период времени.
  </p>
  <p>Почему реклама на телевидении эффективна?</p>
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
    <p class="indent-11 text-justify">наибольшая возможность удерживать внимание;</p>
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
    <p class="indent-11 text-justify">
      множество рекламных раздражителей: одновременно задействованы изображение, цвет, движение,
      печатный и устный текст;
    </p>
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
    <p class="indent-11 text-justify">запоминаемость;</p>
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
    <p class="indent-11 text-justify">безграничные варианты подачи;</p>
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
    <p class="indent-11 text-justify">
      возможность размещения в различные временные интервалы (утро, день, вечер, ночь).
    </p>
  </div>
  <p class="text-black text-base mt-4 text-justify">
    Реклама на ТВ - лучший инструмент для механического и фонового восприятия. Даже если телезритель
    отвел взор от видеоряда, рекламный контакт не прерывается и коммуникация продолжается на
    акустическом уровне.
  </p>
  <p class="text-black text-base mt-4 text-justify">
    Предлагаем Вам расширить круг Ваших клиентов и повысить объем продаж, воздействуя на ваших
    потенциальных потребителей с помощью проверенного, доказавшего свою эффективность тысячами
    успешных рекламных кампаний средства – размещения рекламы на ТВ.
  </p>
  <p class="text-black text-base mt-4 text-justify">
    Мы предоставляем следующий комплекс услуг при размещении ТВ рекламы:
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
    <p class="indent-11 text-justify">
      разработка концепции кампании (рекомендации по объемам размещения и формирование бюджета,
      стратегии рекламного обращения);
    </p>
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
    <p class="indent-11 text-justify">
      разработка сценария и изготовление видеоролика. Составление медиа-плана (графика размещения)
      вашего ролика на телеканале "КтвК".
    </p>
  </div>
  <h2 class="text-black text-xl text-center mt-4 font-semibold">
    Расценки на изготовление и размещение рекламных и информационных материалов с 01.03.2019.*
  </h2>
  <Table class="mt-4"
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
</template>
<style scoped></style>
