import { defineStore } from 'pinia'
import axios from "axios"

const API_URL = 'https://api.apilayer.com/currency_data/convert'
const API_KEY = 'v27HSx4rOUfw5ClwrLqNwRo4NEGXV0R6';

export const MainStore = defineStore("MainStore", {
    state: () => ({
        exchange: null,
        error_message: null,
    }),
    actions: {
        async fetchExchange() {
            try {
                this.error_message = null
                console.log(API_URL)
                const response = await axios({
                    method: "GET",
                    url: `${API_URL}?to=RUB&from=USD&amount=${1}`,
                    headers: {
                        'Accept': 'application/json',
                        'apikey': API_KEY,
                    },
                })
                this.exchange = response.data.result
            }
            catch (error) {
                console.log(error)
                this.error_message = error.response.data
            }
        },

    },
})


