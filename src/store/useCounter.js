import {defineStore} from "pinia";
import {ref} from "vue";


const useCounter = defineStore('useCounter',() => {

  const count = ref(10)

  const changeCount = (amount) => {

    count.value += amount
  }

  return {count, changeCount}
})

export default useCounter
