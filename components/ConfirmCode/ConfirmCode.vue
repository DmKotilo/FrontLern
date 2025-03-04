<template>
  <div class="">
    <div class="border border-gray rounded-[28px] gap-[10px] py-[40px] px-[24px]">
      <form >
        <div class="flex gap-[32px] flex-col">
          <h3 class="text-center">Введите код</h3>

          <div class="flex flex-col gap-[16px]">
            <input v-model="confirmationCode" class="bg-[#F6F6F6] rounded-[8px] p-[16px]" type="text" placeholder="Код из смс">
          </div>


          <button @click.prevent="confirmCode" type="submit" class="py-[16px] px-[24px] gap-[10px] rounded-[100px] bg-[#A4C8A7] w-full text-white">
            Отправить
          </button>


        </div>
        <div v-if="errorMessage">{{errorMessage}}</div>
      </form>

    </div>
  </div>
</template>
<script setup lang="ts">
import Code from "~/components/SendCode/Code.vue";
import { ref } from 'vue'
import { useRoute,useRouter } from "nuxt/app"
import axios from "axios";

const router = useRouter()
const route = useRoute()
const confirmationCode  = ref('')
const errorMessage = ref('')
const subject = route.query.subject
const code = route.query.code

const confirmCode = async () => {
  errorMessage.value = ''
  console.log('subject:', subject)
  console.log('code:', confirmationCode.value)

  if (!subject) {
    errorMessage.value = 'Ошибка: subject пустой!'
    return
  }

  try {
    const response = await axios.post('api/auth/code/confirm', {
      subject: String(subject),
      code: String(confirmationCode.value)
    })

    console.log('успешно:', response.data)
    router.push({ path: '/register', query: { code: code, subject: subject } })
  } catch (error) {
    console.log('ошибка:', error.response?.data)
    errorMessage.value = error.response?.data?.message || 'Неверный код'
  }
}

</script>