<script>
import { state } from "../state.js"

export default {
    name: 'appModal',
    data() {
        return {
            state,
        }
    }
}

</script>

<template>
    <div id="modal" v-for="(product, index) in state.products">
        <div class="modal_head">
            <h4>Ecco i dettagli del prodotto</h4>
        </div>
        <div class="modal_body">
            <p>{{ product.model[index] }}</p>
        </div>

    </div>


</template>


<style scoped lang="scss">
appModal {
    border: 1px solid;
}

/* @use '../assets/scss/partials/_header.scss'; */
</style>
