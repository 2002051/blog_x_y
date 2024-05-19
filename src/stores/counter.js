import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useCookies} from "vue3-cookies";

// const cookies = useCookies()
const {cookies} = useCookies()
export const userInfoStore = defineStore('counter', () => {
    const userinfo = ref(cookies.get("info"))
    const token = ref(cookies.get("token"))

    function doSaveInfo(info) {
        cookies.set("info", JSON.stringify(info), 60 * 60 * 24)  // 用户信息只保存1天
        userinfo.value = info // 手动更新info
    }

    function doSaveToken(token) {
        cookies.set("token", token, 60 * 60 * 24)  // token只保存1天
        token.value = token // 手动更新info
    }

    function doLogout() {
        userinfo.value = null
        cookies.remove("info");
        cookies.remove("token");

    }


    // const count = ref(0)
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //   count.value++
    // }

    // return { count, doubleCount, increment }


    return {userinfo, token,doSaveInfo, doSaveToken,doLogout}
})
