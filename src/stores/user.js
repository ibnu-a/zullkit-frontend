import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: false
    }),
    getters: {
        isLoggedIn: (state) => state.user !== false,
        getUser: (state) => state.user
    },
    actions: {
        async fetchUser(){
            try {
                const { data } = await axios.get('https://zullkit-backend.demo.belajarkoding.com/api/user', {
                    headers: {
                        Authorization: localStorage.getItem('token-type')+ ' ' + localStorage.getItem('access-token')
                    }
                })
                console.log(data)
                this.user = data
            } catch (error) {
                console.log(error)
                this.user = false
            }
        }
    }
})