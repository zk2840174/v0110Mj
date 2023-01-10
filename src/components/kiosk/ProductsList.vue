<template>
  <h2>Products List </h2>

  <ul>
    <li v-for="product in data" :key="product.id" @click="() => addItem(product)" >
      {{product}}
    </li>
  </ul>

</template>

<script setup>

import axios from "axios";
import useCart from "@/store/useCart";

const res = await axios.get('http://localhost/products/')
const data = await res.data

const {addItem} = useCart()

</script>

<style scoped>

</style>
