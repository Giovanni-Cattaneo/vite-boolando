<script>
import { state } from "../state.js"
// todo! importiamo state anche in questo componnte singolo per evitare le props, 

export default {
    name: 'appCard',
    props: ['brand', 'image', 'price', 'altPrice', 'model', 'altImage', 'originalimage'],
    data() {
        return {
            state // solo state oppure state: state è equivalente
        }
    },
    methods: {
    }
}


</script>

<template>
    <div>
        <!-- aggiungendoi emit qui l'immagine cambia solo se clicchiamo sull'immagine e 
            non su tutta la card, molto meglio ora -->
        <img :src="image" class="card-img-top" alt="..." @click="$emit('changeImage')">
        <div class="card-body">
            <div class="heart">&hearts;</div>
            <!-- TODO per discount e sustenability cercare di usare il v-for -->
            <div class="discount">50%</div>
            <div class="sustainability">Sostenibilità</div>
            <!-- utiizziamo le props coem variabili per l'inserimento nelle card -->
            <p class="card-title" @click="$emit('showModal')">{{ brand }}</p>
            <!-- Emettiamo verso app l'evento per far apparire la modale -->
            <p class="card-text"><strong>{{ model }}</strong></p>
            <span>{{ price }}</span>
            <span>{{ altPrice }}</span>
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



}

/* @use '../assets/scss/partials/_header.scss'; */
</style>
