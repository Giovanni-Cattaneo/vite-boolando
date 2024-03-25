<script>
import appCard from "./appCard.vue";
import { state } from "../state.js"

export default {
    name: 'appMain',
    components: {
        appCard
    },
    data() {
        return {
            products: [],
            state: state,
        }
    },
    methods: {
        updateImage(index) {
            if (state.products[index].image === state.products[index].originalImage) {
                state.products[index].image = state.products[index].altImage;
            } else {
                state.products[index].image = state.products[index].originalImage
            }
        },

    },
    mounted() {
        state.callApi()
    }

}
</script>

<template>
    <div class="container text-center">
        <div class="row">
            <div class="card col-12 col-lg-3 col-sm-4 m-3 p-0" v-for="(product, index) in state.products" :key="index">
                <appCard :brand="product.brand" :image="product.image" :price="product.price" :model="product.model"
                    :altImage="product.altImage" :originalImage="product.originalImage" :altPrice="product.altPrice"
                    :index="index" @click="updateImage(index)" />
            </div>
        </div>
    </div>
</template>


<style lang="scss">
main {
    display: flex;
    flex-wrap: wrap;

    .row {
        justify-content: center;
    }
}

/*@use '../assets/scss/partials/_header.scss';*/
</style>
