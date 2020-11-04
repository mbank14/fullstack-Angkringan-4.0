<template>
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
          <v-card-title class="text-title">{{ items.nameToko }}</v-card-title>
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
              class="text-capitalize text-btn"
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
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
// import Search from "@/components/Search";

export default {
  name: "Home",
  data() {
    return {
      api: process.env.VUE_APP_API_URL,
      item: [],
      list: [],
    };
  },
  components: {
    // Search
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getProduct"]),
    setData(data) {
      this.item = data;
    },
    async getList() {
      const response = await axios.get(`${this.api}posts`);
      this.list = response.data;
      console.log(this.list);
    },
  },
  async mounted() {
    this.getProduct();
    this.getList();
    if (localStorage.getItem("Bearer")) {
      this.$router.push({ name: "Pedagang" });
    } else {
      scrollTo(0, 0);
    }
  },
};
</script>
