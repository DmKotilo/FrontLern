<template class="">
  <div class="container">
    <Header />
  </div>
  <main>
    <slot />
  </main>
  <Footer />
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>