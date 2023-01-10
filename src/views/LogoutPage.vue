<template>

  <h1>Logout Page</h1>
  <MenuNav></MenuNav>

  <v-btn @click="logout" >Logout</v-btn>

</template>

<script setup>

import MenuNav from "@/components/menu/MenuNav";
import useLogin from "@/store/useLogin";

const {logout} = useLogin()

</script>

<style scoped>

</style>
