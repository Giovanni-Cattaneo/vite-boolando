<script>
export default {
    name: 'appHeader',

    data() {
        return {
            genderAge: [
                {
                    name: 'Donna',
                },
                {
                    name: 'Uomo',
                },
                {
                    name: 'Bambino',
                },

            ],

            icons: [
                {
                    symbol: '<i class="fa-solid fa-user-plus"></i>',
                },
                {
                    symbol: '<i class="fa-regular fa-heart"></i>',
                },
                {
                    symbol: '<i class="fa-solid fa-cart-shopping"></i>',
                },
            ]
        }
    }
}

</script>

<template>

    <header>
        <div class="container d-flex">
            <div class="gender-categories">
                <a v-for="gender in genderAge" href="">{{ gender.name }}</a>
            </div>
            <div class="logo">
                <img src="../assets/boolean-logo.png" alt="" width="25%">
            </div>
            <div>
                <a href=""><i class="fa-solid fa-user-plus"></i></a>
                <a href=""><i class="fa-regular fa-heart"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </header>


</template>

<style lang="scss">
header {
    background-color: #ff6900;
    text-align: center;
    box-shadow: 0 0 10px;

    & a {
        color: white;
        text-decoration: none;
        margin: 3px;
    }

    .container {
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem;
    }
}

/* @use '../assets/scss/partials/header.scss'; */
</style>
