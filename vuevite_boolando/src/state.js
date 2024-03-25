import { reactive } from 'vue';
import axios from '@jridgewell/axios';

export const state = reactive({
    message: "This is a test",
    products: [],
    api_product_url: 'http://localhost:3000/products',
    callApi() {
        axios.get(this.api_product_url).then(response => {
            console.log(response)
            state.products = response.data
        })
    },

})