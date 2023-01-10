<template>
  <h2>Count Display </h2>
  <h2>{{useCount.count}}</h2>
</template>

<script setup>

import useCounter from "@/store/useCounter";

const useCount = useCounter()


</script>

<style scoped>

</style>
