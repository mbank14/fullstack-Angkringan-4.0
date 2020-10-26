<template>
  <div>
    <!-- Mobile -->
    <v-container class="d-lg-none d-xl-flex">
      <v-app-bar elevate-on-scroll app flat color="white">
        <v-btn icon class="pink--text" @click="drawer = true">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          hide-details
          v-model="message"
          label="Nasi Kucing"
          dense
          outlined
        ></v-text-field>
        <v-spacer></v-spacer>
        <div>
          <v-btn icon class=" button-cart" color="grey" to="/cart">
            <v-icon right>mdi-shopping</v-icon>
            <!-- <v-badge color="#ED5575" :content="jumlah"></v-badge> -->
          </v-btn>
        </div>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group active-class="text--accent-4" color="#ED5575">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :to="link.route"
            >
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>

    <!-- Desktop -->
    <v-container class="d-none d-sm-flex d-md-none d-lg-flex">
      <v-app-bar elevation app flat color="white">
        <v-toolbar-title>
          <!-- <p>Pajak 4.0</p> -->
        </v-toolbar-title>
        <v-tabs centered color="orange darken-4">
          <v-tab
            class="text-capitalize"
            v-for="link in links"
            :key="link.text"
            :to="link.route"
          >
            {{ link.text }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      grow: true,
      drawer: false,
      // links: [
      //   { icon: "mdi-home", text: "Semua Menu", route: "/" },
      //   { icon: "mdi-food", text: "Makanan", route: "/makanan" },
      //   { icon: "mdi-coffee", text: "Minuman", route: "/minuman" }
      // ]
    };
  },
  computed: {
    ...mapGetters(["card"]),
    // jumlah() {
    //   return this.card.length;
    // },
    message: {
      get() {
        return this.$store.getters.searchQuery;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
  },
  methods: {
    // async findList() {
    //   const response = await axios.get(
    //     `http://localhost:3000/data?q=${this.find}`
    //   );
    //   this.produk = response.data;
    //   console.log(this.produk);
    // }
  },
};
</script>

<style scoped>
.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  width: 40px;
  height: 40px;
  font-size: 40px;
}

.v-application p {
  margin: auto;
  font-size: 30px;
  text-align: center;
  color: #1e304d;
}

.v-toolbar__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-bar {
  margin: auto;
}
</style>
