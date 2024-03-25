<script>
export default {
    name: 'appFooter',

    data() {
        return {
            infos: [
                {
                    name: 'Informazioni legali',
                },
                {
                    name: 'Diritto di recesso',
                },
                {
                    name: 'Informativa sulla privacy',
                },

            ]
        }
    }
}

</script>

<template>

    <footer>

        <div class="container d-flex">
            <div>
                <h3><strong>Boolando Srl</strong></h3>
                <div>
                    <a v-for="info in infos" href="">{{ info.name }}</a>

                </div>
            </div>
            <div>
                <p id="bottom-text">Trovaci anche su</p>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a>
                <a href=""><i class="fa fa-youtube-play"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
            </div>
        </div>
    </footer>


</template>

<style lang="scss">
footer {
    background-color: #1a1a1a;
    color: white;
    padding: 0.5rem;

    & a {
        color: white;
        text-decoration: none;
        margin: 3px;
    }

    .container {
        justify-content: space-between;
    }
}

/* @use '../assets/scss/partials/_header.scss'; */
</style>
