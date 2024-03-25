<script>
export default {
    name: 'appCard',
    props: ['brand', 'image', 'price', 'altPrice', 'model', 'altImage', 'originalimage'],
    data() {
        return {
            activeImage: true,
            activeCard: null,
        }
    },
    methods: {
    }
}


</script>

<template>
    <div>
        <img :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="heart">&hearts;</div>
            <div class="discount">-50%</div>
            <div class="sustainability">Sostenibilità</div>
            <p class="card-title">{{ brand }}</p>
            <p class="card-text"><strong>{{ model }}</strong></p>
            <span>{{ price }}</span>
            <span>{{ altPrice }}</span>
        </div>
    </div>
</template>

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
