<template>
  <h1>Kiosk Page </h1>

  <Suspense>
    <template #fallback>
       <h1>Loading....</h1>
    </template>
    <template #default>
      <ProductsList></ProductsList>
    </template>
  </Suspense>

  <CartItemList></CartItemList>

</template>

<script setup>
import ProductsList from "@/components/kiosk/ProductsList";
import CartItemList from "@/components/kiosk/CartItemList";
</script>

<style scoped>

</style>
