<template>
  <h2>Cart Item List</h2>

  <ul>
    <li v-for="cartItem in cartStore.items" :key="cartItem.product.id">
      {{cartItem}}
    </li>
  </ul>

  <hr/>
  {{total}}

</template>

<script setup>

import useCart from "@/store/useCart";
import {computed} from "vue";

const cartStore = useCart()

const total = computed(() => {

  let sum = 0

  for(let cartItem of cartStore.items){

    sum += (cartItem.product.price) * (cartItem.qty)

  }

  return sum
})

</script>

<style scoped>

</style>
