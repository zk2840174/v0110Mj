<template>
  <h1>M1 Page</h1>
  <MenuNav></MenuNav>

  <h3>{{userId}}</h3>

</template>

<script setup>
import MenuNav from "@/components/menu/MenuNav";
import useLogin from "@/store/useLogin";
import {computed} from "vue";

const {getLogin} = useLogin()

const userId = computed(() => {

  return getLogin().value.id
})

</script>

<style scoped>

</style>
