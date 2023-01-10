<template>
  <h1>Login Page</h1>
  <MenuNav></MenuNav>

  <v-btn variant="outlined" @click="() => setLogin('A'+Date.now())" >Login</v-btn>

</template>

<script setup>
import MenuNav from "@/components/menu/MenuNav";
import useLogin from "@/store/useLogin";

const {setLogin} = useLogin()

</script>

<style scoped>

</style>
