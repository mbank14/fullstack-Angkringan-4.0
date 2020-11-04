<template>
  <v-app class="grey lighten-4">
    <Appbar />
    <v-main>
      <v-container fluid>
        <transition name="view">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    Appbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style></style>
