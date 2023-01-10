import {defineStore} from "pinia";
import {ref} from "vue";
import VueCookies from 'vue-cookies';

const useLogin = defineStore('useLogin',()=> {

  const loginInfo = ref({id:null})

  const checkLogin = () => {

    getLogin()

    return loginInfo.value.id !== null
  }


  const getLogin = () => {

    if(!loginInfo.value.id){
      //cookie check
      const cookieValue = VueCookies.get('loginCookie')

      console.log("----------------------")
      console.log(cookieValue)

      loginInfo.value.id = cookieValue
    }
    return loginInfo
  }

  const setLogin = (str) => {


    loginInfo.value.id = str

    VueCookies.set("loginCookie", str, '7d')

  }

  const logout = () => {
    loginInfo.value.id = null
    VueCookies.remove('loginCookie')
  }

  return {loginInfo, checkLogin, getLogin, setLogin,logout}

})

export default useLogin
