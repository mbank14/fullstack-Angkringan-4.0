<template>
  <div>
    <breadcrumbs />
    <v-container>
      <!-- Cart Button -->
      <v-btn color="grey" large bottom right icon fab fixed to="/cart">
        <v-icon x-large>mdi-shopping-outline</v-icon>
        <v-badge color="#6D4C41"></v-badge>
      </v-btn>
      <!-- Search Bar-->
      <Search class="d-flex justify-end mb-2" />

      <!-- Store Name -->
      <v-card class="mx-left " max-width="450" flat cols="12" sm="6">
        <v-list-item three-line>
          <v-list-item-avatar tile size="140" color="grey">
            <v-img
              :src="this.data.src"
              class="white--text align-end rounded-lg"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              {{ this.data.nameToko }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ this.data.address }}</v-list-item-subtitle>
            <div class="overline mb-4"></div>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <!-- List Item  -->
      <v-row>
        <v-col
          v-for="detail in data.menu"
          :key="detail.menuId"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card class="mx-auto my-12" max-width="374">
            <v-img
              :src="detail.src"
              height="250"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
            </v-img>
            <v-card-title class="text-item">
              {{ detail.namaMenu }}
            </v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0"></v-row>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                esse molestiae aperiam, perspiciatis asperiores dolorum omnis
                repellat libero deserunt nihil.
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title
              >Rp.
              {{
                detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
            </v-card-title>
            <v-card-actions>
              <v-btn
                class="text-capitalize mb-4 "
                color="white--text brown darken-1"
                width="100%"
                >Beli</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import breadcrumbs from "../components/Breadcrumbs.vue";
import Search from "@/components/Search";

export default {
  data() {
    return {
      data: []
    };
  },
  components: {
    breadcrumbs,
    Search
  },
  computed: {},
  methods: {
    async detailsProduct() {
      const response = await axios.get(
        `http://localhost:3000/toko/${this.$route.params.id}`
      );
      this.data = response.data;
      console.log(response.data);
    }
  },
  mounted() {
    this.detailsProduct();
  }
};
</script>

<style scoped>
</style>
