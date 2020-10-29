<template>
  <v-app class="grey lighten-4">
    <!-- <Appbar /> -->
    <v-main>
      <v-container fluid>
        <transition name="view">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
// import Appbar from "./components/Appbar";
// import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    // Appbar,
    // Footer
  },

  data: () => ({
    //
  })
};
</script>
<style>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter,
.view-leave-to {
  opacity: 0;
  /* transform: translateX(-100px); */
}
.view-enter-to,
.view-leave {
  opacity: 1;
  /* transform: translateY(0px); */
}
</style>
