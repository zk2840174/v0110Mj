import {defineStore} from "pinia";
import {ref} from "vue";


const useCart = defineStore('useCart',() => {

  const items = ref([])

  const addItem = (p) => {

    const target = items.value.find(item => item.product.id === p.id)

    if(!target){

      const cartItem = {product:p, qty:1}
      items.value.push(cartItem)
      return
    }

    target.qty += 1

  }

  const removeItem = (id) => {

    items.value = items.value.filter(item => item.product.id !== id)

  }

  const changeQty = (id, amount) => {

    const target = items.value.find(item => item.product.id === id)

    target.qty += amount

  }


  return {items, addItem, removeItem, changeQty}

})

export default useCart
