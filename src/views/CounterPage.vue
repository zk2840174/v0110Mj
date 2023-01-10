<template>
  <h1>Counter Page </h1>
  <CountDisplay></CountDisplay>
  <CountButtons></CountButtons>
  <hr/>
  <h1>{{count}}</h1>
</template>

<script setup>
import CountDisplay from "@/components/counter/CountDisplay";
import CountButtons from "@/components/counter/CountButtons";
import useCounter from "@/store/useCounter";
import {computed} from "vue";

const  countStore =  useCounter()

const count = computed(() => {
  return countStore.count
})

</script>

<style scoped>

</style>
