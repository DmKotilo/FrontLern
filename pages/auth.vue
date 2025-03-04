<template>
  <div class="container mt-4">
    <div class="grid grid-cols-2 gap-4">
       <LeftPanel />
       <Code />
    </div>
  </div>

</template>

<script setup lang="ts">

import Code from "~/components/SendCode/Code.vue";
import LeftPanel from "~/components/Auth/LeftPanel.vue";
</script>
