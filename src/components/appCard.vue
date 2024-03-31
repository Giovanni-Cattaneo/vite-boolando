<script>
import { state } from "../state.js"
// todo! importiamo state anche in questo componnte singolo per evitare le props, 

export default {
    name: 'appCard',
    props: ['brand', 'image', 'price', 'altPrice', 'model', 'altImage', 'originalimage'],
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
        }
    }
}


</script>

<template>
    <div>
        <!-- aggiungendoi emit qui l'immagine cambia solo se clicchiamo sull'immagine e 
            non su tutta la card, molto meglio ora -->
        <img :src="image" class="card-img-top" alt="..." @click="$emit('changeImage')">
        <div class="card-body" @click="showModal()">
            <div class="heart">&hearts;</div>
            <!-- TODO per discount e sustenability cercare di usare il v-for -->
            <div class="discount">50%</div>
            <div class="sustainability">Sostenibilità</div>
            <!-- utiizziamo le props coem variabili per l'inserimento nelle card -->
            <p class="card-title">{{ brand }}</p>
            <!-- Emettiamo verso app l'evento per far apparire la modale -->
            <p class="card-text"><strong>{{ model }}</strong></p>
            <span>{{ price }}</span>
            <span>{{ altPrice }}</span>
        </div>
        <div id="modal" v-if="reveal">
            <div class="modal_head">
                <h4>Ecco i dettagli del prodotto</h4>
                <button class="close" @click="removeModal()">x</button>
            </div>
            <div class="modal_body">
                <p>{{ brand }}</p>
                <p>{{ model }}</p>
                <p>{{ price }}</p>
                <p>{{ altPrice }}</p>
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

    .heart:hover {
        color: red;
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

    .heart {
        position: absolute;
        background-color: lightgray;
        padding: 0.7rem;
        top: 2%;
        right: 0;
        font-size: 1.7rem;
    }

    #modal {

        & h4 {
            color: black;
        }

        color: white;
        position: absolute;
        left: 0.5rem;
        top: 7rem;
        background-color: rgba(128, 128, 128, 0.473);
        padding: 0.8rem;

        .close {
            color: red;
            position: absolute;
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
