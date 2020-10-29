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
    <v-card
    class="mx-auto overflow-hidden"
    height="200"
    max-width="500"
  >
    <v-bottom-navigation
      absolute
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="500"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-sheet
      id="scroll-threshold-example"
      class="overflow-y-auto pb-16"
      max-height="600"
    >
      <v-responsive height="1500"></v-responsive>
    </v-sheet>
  </v-card>
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
