import { defineStore } from 'pinia'
import { userType } from '../utils/types'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
      isAuthenticated:false,
      user: {}, 
      lastVisitedRoute: '/' ,
      currentPath: null // 添加这个字段
    }
  },
  getters: {
    getAuthenticated: (state) => {
      console.log("state.isAuthenticated",state.isAuthenticated)
      state.isAuthenticated
    },
    getUser: (state) => {
      console.log("state.user",state.user)
      state.user
    },
  },
  actions: {
    setAuth(isAuth:boolean){
        if(isAuth){
            this.isAuthenticated = isAuth;
        }else {
            this.isAuthenticated = false;
        }
    },
    setUser(user: userType | null){
        console.log("Setting user to:", user);
        if(user){
            this.user = user;
        }else {
            this.user = null
            console.log("After setting, user is:", this.user); 
        }
    },
    setCurrentPath(path: string) {
      this.currentPath = path;
    }
  },
})