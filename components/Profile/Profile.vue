<template>
  <div class="container mt-4">
    <div class="grid grid-cols-3 gap-[40px]">
      <div class="h-fit border border-gray-300 rounded-[28px] gap-[24px] p-[16px]">
        <div class="flex flex-col">
          <div class="flex gap-[16px] rounded-[8px] p-[16px]">
            <p>Профиль</p>
          </div>
          <div class="flex gap-[16px] rounded-[8px] p-[16px]">
            <p>Мои лиги</p>
          </div>
          <div class="flex gap-[16px] rounded-[8px] p-[16px]">
            <p>Настройки</p>
          </div>
          <div class="flex gap-[16px] rounded-[8px] p-[16px]">
            <p>Выход</p>
          </div>

        </div>
      </div>
      <div class="col-span-2 border border-gray-300 rounded-[28px] gap-[16px] p-[24px]">
        <div class="grid grid-cols-3 gap-[24px]">
          <div class="flex col-span-3 items-center gap-[24px]">
            <div class="w-fit">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="120" height="120" rx="60" fill="url(#pattern0_11559_57712)"/>
                <defs>
                  <pattern id="pattern0_11559_57712" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_11559_57712" transform="scale(0.00510204)"/>
                  </pattern>
                  <image id="image0_11559_57712" width="196" height="196" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>

            </div>
            <div class="col-span-2 flex gap-[24px] justify-between w-full">
              <h3 class="text-dark">Иванов иван иваныч</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5183 0.747708L22.243 2.47319C23.2523 3.47013 23.2523 5.09336 22.243 6.0903L5.34037 23H0V17.6574L13.287 4.35204L16.9027 0.747708C17.8992 -0.249236 19.5217 -0.249236 20.5183 0.747708ZM2.5552 20.4437L4.35662 20.5204L16.9027 7.95638L15.1012 6.15421L2.5552 18.7055V20.4437Z" fill="#B4A485"/>
              </svg>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-[40px] col-span-2">
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[8px]">
                <p>Возраст</p>
                <p class="text-accentuation">не указан</p>
              </div>
              <div class="flex flex-col gap-[8px]">
                <p>Номер телефона</p>
                <p class="">+ 7 999 999-99-99</p>
              </div>
            </div>
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[8px]">
                <p>Город</p>
                <p class="text-accentuation">не указан</p>
              </div>
              <div class="flex flex-col gap-[8px]">
                <p>E-mail</p>
                <p class="text-accentuation">не указан</p>
              </div>
            </div>
            <div class="col-span-2">
              <div class="flex flex-col gap-[8px]">
                <p>Соц. сети</p>
                <p class="text-accentuation">не указан</p>
              </div>
            </div>
          </div>
        </div>






      </div>
    </div>

  </div>

</template>