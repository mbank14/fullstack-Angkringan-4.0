<template>
  <div>
    <Navigation />
    <v-container class="my-5">
      <v-row>
        <v-col
          v-for="product in allProducts"
          :key="product.id"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card class="pa-2 rounded-xl card-hover" outlined>
            <v-card-title class="text-item">{{ product.name }}</v-card-title>
            <v-img
              @click="addItemToCard(card)"
              :src="product.image"
              class="white--text align-end rounded-xl"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
            >
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title class="text-price"
                >Rp.
                {{
                  product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }}</v-card-title
              >
            </v-card-actions>
            <v-btn
              @click="addItemToCard(card)"
              class="rounded-xl text-capitalize"
              color="white--text orange darken-4"
              width="100%"
              >Pesan</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Navigation
  },
  computed: {
    ...mapGetters(["allProducts"])
  },
  methods: {
    ...mapActions(["getProduct"])
  },
  mounted() {
    this.getProduct();
  }
};
</script>
