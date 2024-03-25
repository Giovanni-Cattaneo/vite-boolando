<script>
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";
import appFooter from "./components/appFooter.vue";

export default {
  name: 'App',
  components: {
    appHeader,
    appMain,
    appFooter,
  }
}

</script>

<template>

  <appHeader />

  <main>

    <appMain />

  </main>


  <appFooter />


</template>

<style></style>
