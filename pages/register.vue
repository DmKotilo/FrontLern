<template>
  <div class="container mt-4">
    <div class="grid grid-cols-2 gap-4">
      <LeftPanel />
      <RegisterForm />
    </div>
  </div>

</template>
<script setup lang="ts">
import LeftPanel from "~/components/Auth/LeftPanel.vue";
import Code from "~/components/SendCode/Code.vue";
import RegisterForm from "~/components/Auth/RegisterForm.vue";
</script>