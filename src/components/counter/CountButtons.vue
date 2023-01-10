<template>
  <h2>Count Buttons</h2>
  <div>
    <v-btn variant="outlined" @click="()=> changeCount(1) ">INC</v-btn>
    <v-btn variant="outlined" @click="()=> changeCount(-1) ">DEC</v-btn>
  </div>
</template>

<script setup>

import useCounter from "@/store/useCounter";

const {changeCount} = useCounter()

</script>

<style scoped>

</style>
