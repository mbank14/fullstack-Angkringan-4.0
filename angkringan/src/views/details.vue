<template>
  <div>
    <breadcrumbs />
    <Search class="d-flex justify-end mb-2" />
    <v-container>
      <v-row>
        <v-img
          :src="toko[0].gambar"
          max-height="102"
          max-width="116"
          style="
            width:120px;
            height: 120px;
          "
        >

        </v-img>
        <v-col>
          <h1>{{ toko[0].nama }}</h1>
          <h4>{{ toko[0].alamat }}</h4>
          <h6> {{ toko[0].telp}}</h6>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <!-- Cart Button -->
      <v-btn color="grey" large bottom right icon fab fixed to="/cart">
        <v-icon x-large>mdi-shopping-outline</v-icon>
        <v-badge color="#394867"></v-badge>
      </v-btn>
      <!-- Search Bar-->

      <!-- Store Name -->
      <!-- List Item  -->
      <v-row>
        <v-col
          v-for="detail in barang"
          :key="detail.id"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card class="mx-auto my-12" max-width="374">
            <v-img
              :src="detail.image"
              height="250"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
            </v-img>
            <v-card-title class="text-item">
              {{ detail.name }}
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
                class="white--text text-capitalize mb-4 "
                color="#394867"
                width="100%"
                >Pesan</v-btn
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
      api: "http://192.168.137.204:8000/",
      barang: [],
      toko: [],
      items: [],
    };
  },
  components: {
    breadcrumbs,
    Search,
  },
  computed: {},
  methods: {
    async detailsProduct() {
      const response = await axios.get(
        `${this.api}products/${this.$route.params.id}/show_b`
      );
      this.barang = response.data.data;
      console.log(this.barang);
    },
    async getToko() {
      const response = await axios.get(`${this.api}toko/${this.$route.params.id}/`);
      this.toko = response.data.toko;
      console.log(this.toko);
    },
  },
  mounted() {
    this.detailsProduct();
  },
  created() {
    this.getToko();

  },
};
</script>

<style scoped></style>
