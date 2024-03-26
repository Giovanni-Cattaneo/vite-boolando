<script>
import appCard from "./appCard.vue";
import { state } from "../state.js"
import appModal from "./appModal.vue";

export default {
    name: 'appMain', // main è un componente che contiene un componente, apporofondire!
    components: {
        appCard,
        appModal
    },
    data() {
        return {
            reveal: false,
            products: [],
            state: state,
        }
    },
    methods: {
        updateImage(index) { //usiamo l'immagine originale ocme backup di ritorno cosi da cambiare le immagini all'infinito se necessario
            if (state.products[index].image === state.products[index].originalImage) {
                state.products[index].image = state.products[index].altImage;
            } else {
                state.products[index].image = state.products[index].originalImage
            }
        },
        showModal() {
            console.log("Hello world")
            this.reveal = true
        }

    },
    mounted() {
        state.callApi() //facciamo la chiamata api al caricmaneto della pagina
    }

}
</script>

<template>
    <div class="container text-center">
        <div class="row">
            <div class="card col-12 col-lg-3 col-sm-4 m-3 p-0" v-for="(product, index) in state.products" :key="index">
                <appCard :brand="product.brand" :image="product.image" :price="product.price" :model="product.model"
                    :altImage="product.altImage" :originalImage="product.originalImage" :altPrice="product.altPrice"
                    :index="index" @changeImage="updateImage(index)" @showModal="showModal()" />
                <!-- Usiamo le props con product.props, ora con state da rimuovere, TODO! -->
            </div>
            <appModal v-if="this.reveal" />
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
