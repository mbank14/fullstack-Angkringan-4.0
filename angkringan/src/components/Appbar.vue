<template>
  <div>
    <!-- desktop -->
    <v-container class="pa-1 d-none d-sm-flex d-md-none d-lg-flex">
      <v-app-bar app flat color="white">
        <v-toolbar-title class="grey--text text-uppercase mx-15">
          <h1 class="mx-5 font-weight-black">Peken 4.0</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <p class="grey--text my-4">
          Ingin berdagang? <router-link to="/login">Login/Daftar</router-link>
        </p> -->
      </v-app-bar>
    </v-container>

    <!-- mobile -->
    <v-container class="d-lg-none d-xl-flex">
      <v-app-bar app flat color="white">
        <v-app-bar-nav-icon
          class="green--text"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="grey--text text-uppercase">
          <p class="pt-4 ml-9 subtitle-2 font-weight-black">Peken 4.0</p>
        </v-toolbar-title>
      </v-app-bar>
      <!-- drawer -->
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group active-class="text--accent-4" color="#ED5575">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :to="link.route"
            >
              <v-list-item-icon class="mx-2">
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="font-weight-light">{{
                link.text
              }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "mdi-help",
          text: "Bantuan",
        },
        {
          icon: "mdi-information",
          text: "Tentang Kami",
        },
        {
          icon: "mdi-store",
          text: "Dagang di Peken 4.0",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-application h1 {
  font-size: 1.5em;
}
</style>
