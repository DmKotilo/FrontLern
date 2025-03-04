<template>
  <div class="">
    <div class="border border-gray rounded-[28px] gap-[10px] py-[40px] px-[24px]">
      <form @submit.prevent="sendCode">
        <div class="flex gap-[32px] flex-col">
          <h3 class="text-center">Введите ваш email или телефон</h3>


          <div class="flex flex-col gap-[16px]">
            <input v-model="formData.subject" @input="console.log(formData.subject)" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="text" placeholder="Телефон или почта">
          </div>


          <div class="flex items-center justify-between">
            <label>
              <input v-model="formData.type" type="radio" value="email"> Email
            </label>
            <label>
              <input v-model="formData.type" type="radio" value="phone"> Телефон
            </label>
          </div>


          <button type="submit" class="py-[16px] px-[24px] gap-[10px] rounded-[100px] bg-[#A4C8A7] w-full text-white">
            Получить код
          </button>

          <p v-if="errorMessage" class="text-red text-center">{{ errorMessage }}</p>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'nuxt/app'
import axios from 'axios'
import Code from "~/components/SendCode/Code.vue";

const router = useRouter()

//  Форма
const formData = ref({
  subject: '',
  type: 'phone',
  rule: 'dont_exist'
})

// Если запрос не прошел
const errorMessage = ref('')




console.log('Данные запроса1:', {
  rule: formData.value.rule,
  type: formData.value.type,
  subject: formData.value.subject
})

//  тправка запроса
const sendCode = async () => {
  try {
    const response = await axios.post('api/auth/code/send', {
      rule: formData.value.rule,
      type: formData.value.type,
      subject: formData.value.subject
    },)

    console.log('ответ :', response.data)
    const subject = response.data.data.code.confirmation_subject
    const code = response.data.data.code.code
    router.push({ path: '/confirmCode', query: { subject: subject, code: code } })

  } catch (error) {
    console.error('Ошибка авторизации:', error)
    errorMessage.value = error.response?.data?.message || 'Ошибка авторизации.'
  }
}


</script>