<template>

  <MenuNav></MenuNav>

  <h3>{{cartItemCount}}</h3>
  <router-link to="/kiosk">KIOSK</router-link>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import {computed} from "vue";
  import useCart from "@/store/useCart";
  import MenuNav from "@/components/menu/MenuNav";

  const cartStore = useCart()

  const cartItemCount = computed(() => {

    return cartStore.items.length

  })

</script>
