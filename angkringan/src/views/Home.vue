<template>
  <div>
    <v-container class="fluid">
      <h1>Peken 4.0</h1>
    </v-container>

    <v-container>
      <v-card flat>
        <v-card-actions>
          <v-btn
            flat
            outlined
            class="text-capitalize"
            color="white--black white"
            to="/login"
            >Login/Daftar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>

    <v-container>
      <!-- <Search class="d-flex justify-end" /> -->
      <v-row>
        <v-col
          v-for="items in allProducts"
          :key="items.id"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card class="pa-2 card-hover" outlined>
            <v-card-title class="text-item">{{ items.nameToko }}</v-card-title>
            <v-img
              :src="items.src"
              class="white--text align-end rounded-xl"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
            >
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
            <router-link :to="`/details/${items.id}`">
              <v-btn
                class="text-capitalize"
                color="white--text brown darken-1"
                width="100%"
              >
                Kunjungi Toko</v-btn
              >
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Search from "@/components/Search";
export default {
  name: "Home",
  data() {
    return {
      item: []
    };
  },
  components: {
    // Search
  },
  computed: {
    ...mapGetters(["allProducts"])
  },
  methods: {
    ...mapActions(["getProduct"]),
    setData(data) {
      this.item = data;
    }
  },
  async mounted() {
    this.getProduct();
    if (!localStorage.getItem("Bearer")) {
      this.$router.push({ name: "Pedagang" });
    } else {
      scrollTo(0, 0);
    }
  }
};
</script>
