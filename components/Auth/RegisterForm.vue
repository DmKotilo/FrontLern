<template>
  <div class="">
    <div class="border border-gray rounded-[28px] gap-[10px] py-[40px] px-[24px]">
      <form>
        <div class="flex gap-[32px] flex-col">
          <h3 class="text-center">Регистрация</h3>

          <div class="flex flex-col gap-[16px]">
            <input v-model="formData.middle_name" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="text" placeholder="Фамилия">
            <input v-model="formData.first_name" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="text" placeholder="Имя">
            <input v-model="formData.last_name" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="text" placeholder="Отчество">
            <input v-model="formData.password" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="password" placeholder="Пароль">
            <input v-model="formData.password_confirmation" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="password" placeholder="Подтверждение пароля">
            <input hidden="" v-model="formData.phone" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="password" placeholder="Телефон">
            <input hidden="" v-model="formData.email" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="password" placeholder="почта">
            <input hidden="" v-model="formData.code" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="password" placeholder="Код">

          </div>

          <button @click.prevent="sendForm" class="py-[16px] px-[24px] gap-[10px] rounded-[100px] bg-[#A4C8A7] w-full text-white">
            Завершить регистрацию
          </button>

        </div>
      </form>
      <div v-if="errorMessage">{{errorMessage}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FormInputs from "~/components/Auth/FormInputs.vue";

import { ref } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const errorMessage = ref('')

const subject = route.query.subject;

let email = '';
let phone = '';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

if (emailRegex.test(subject)) {
  email = subject;
} else if (phoneRegex.test(subject)) {
  phone = subject;
}
const code = route.query.code;



const formData = ref({
  first_name: '',
  middle_name: '',
  phone: '',
  email: '',
  last_name: '',
  password: '',
  password_confirmation: '',
  code: '',
})

const sendForm = async () => {
  errorMessage.value = ''

  try {
    const response = await axios.post('api/auth/register',{
          first_name: formData.value.first_name,
          middle_name: formData.value.middle_name,
          last_name: formData.value.last_name,
          password: formData.value.password,
          password_confirmation: formData.value.password_confirmation,
          subject: subject,
          phone: phone,
          email: email,
          code: code
    })
    router.push({ path: '/profile', query: {subject: subject } })
  }catch (error){
    errorMessage.value = error.response?.data?.message || 'ошибка авторизации'
  }
}


</script>