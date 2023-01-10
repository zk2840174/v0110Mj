<template>

  <hr/>
  {{isLogin}}
  <hr/>

  <ul class="menuUL">
    <li v-for="m in showMenus" :key="m.path">
      <router-link :to="m.path">{{m.name}}</router-link>
    </li>
  </ul>
</template>

<script setup>

import useLogin from "@/store/useLogin";
import {computed} from "vue";

const {checkLogin} = useLogin()

console.log("checkLogin..................................")

const showMenus = computed(() => {

  if(checkLogin()){
    return menus
  }else {

    return menus.filter(m => m.unauthorize === true)
  }

})

const menus = [
  {path:'/', name:'Home', unauthorize: true },
  {path:'/login', name:'Login', unauthorize: true  },
  {path:'/logout', name:'Logout',},
  {path:'/m1', name:'M1', unauthorize: true },
  {path:'/m2', name:'M2',}
]


</script>

<style scoped>

.menuUL {
  list-style: none;
  display: flex;
  background-color: pink;
}

.menuUL li {
  margin-left: 4em;
}

</style>
