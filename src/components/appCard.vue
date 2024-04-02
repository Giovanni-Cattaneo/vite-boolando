<script>
import { state } from "../state.js"
// todo! importiamo state anche in questo componnte singolo per evitare le props, 

export default {
    name: 'appCard',
    props: ['brand', 'image', 'price', 'discount', 'model', 'altImage', 'originalimage', 'taglie', 'badges'],
    data() {
        return {
            reveal: false,
            state // solo state oppure state: state è equivalente
        }
    },
    methods: {
        showModal() {
            this.reveal = true
        },
        removeModal() {
            this.reveal = false
        },
        addFavourites() {
            // per adesso mettiamo solo dellos tile per farlo apparire rosso, aggiungeremo anche l'aggiunta ad un array esterna di preferiti
        }
    }
}


</script>

<template>
    <div>
        <!-- aggiungendoi emit qui l'immagine cambia solo se clicchiamo sull'immagine e 
            non su tutta la card, molto meglio ora -->
        <img :src="image" class="card-img-top" alt="..." @click="$emit('changeImage')">
        <div>
            <div class="card-body" @click="showModal()">
                <div class="heart" @click="$emit('addFavourites')">&hearts;</div>
                <!-- TODO per discount e sustenability cercare di usare il v-for -->
                <div v-for="badge in badges">
                    <div class="sustainability" v-if="badge.type === 'tag'">{{ badge.value }}</div>
                    <div class="discount" v-if="badge.type === 'discount'">{{ badge.value }}</div>
                </div>
                <!-- utiizziamo le props coem variabili per l'inserimento nelle card -->
                <h5>{{ brand }}</h5>
                <span class="price">{{ price }}$</span>
                <span class="realPrice" v-if="discount !== 0">{{ (price * discount).toFixed(2) }}$</span>

            </div>

        </div>
        <div id="modal" v-if="reveal">
            <div class="modal_head">
                <h4>Ecco i dettagli del prodotto</h4>
                <button class="close" @click="removeModal()">x</button>
            </div>
            <div class="modal_body">
                <p>Brand: {{ brand }}</p>
                <p>Modello: {{ model }}</p>
                <p>Prezzo Intero: {{ price }}$</p>
                <p>Prezzo scontato {{ (price * discount).toFixed(2) }}$</p>
                <p>Taglie disponibili: {{ taglie }}</p>
                <p>Per informazioni sulla spedizioni rifarsi alle nostre condizioni di utilizzo e spedizione
                    internazionali
                    cliccando <a href="">qui</a></p>
            </div>
        </div>
    </div>
</template>

<!-- Scoped vuol dire che il css scritto qua è limitato a questo componente, 
    ci serve perchè solo le immagini nelle card abbiano queste proprietà -->
<style scoped lang="scss">
.card {
    position: relative;

    img:hover {
        cursor: pointer;
    }

    .discount {
        position: absolute;
        background-color: red;
        padding: 3px 5px;
        color: white;
        bottom: 24%;
        left: 0;
    }

    .sustainability {
        position: absolute;
        background-color: green;
        color: white;
        padding: 3px 5px;
        bottom: 24%;
        left: 15%;
    }

    .price {
        text-decoration: line-through;
        margin-right: 1rem;
        color: red;
    }

    .realPrice {
        color: rgb(0, 161, 0);
    }

    .heart {
        position: absolute;
        background-color: lightgray;
        padding: 0.7rem;
        top: 2%;
        right: 0;
        font-size: 1.7rem;
    }

    .red {
        color: red;
    }

    #modal {

        & h4 {
            color: antiquewhite;
        }

        color: antiquewhite;
        position: absolute;
        width: 100%;
        top: 5rem;
        background-color: rgba(0, 0, 0, 0.685);
        padding: 0.8rem;
        border-radius: 1rem;

        .close {
            color: red;
            position: absolute;
            font-size: 1.2rem;
            top: 0.2rem;
            right: 0.2rem;
            border: none;
            padding: 0 0.2rem;
            border-radius: 2rem;
            background-color: transparent;
        }
    }


}

/* @use '../assets/scss/partials/_header.scss'; */
</style>
