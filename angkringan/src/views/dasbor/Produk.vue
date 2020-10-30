<template>
  <div>
    <v-container>
      <v-btn >
        <router-link to="/tambahmenu">
        tambah
        </router-link>
      </v-btn>
    </v-container>
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap ">

              <v-avatar class="ma-0" size="100" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>

              <div style="width: 250px">
                <!-- <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title> -->
                <v-card-text class="pa-1 pl-3">
                  <h4>Bakso Pocong</h4>
                  <p>harga</p>
                    <h6>ini deskripsi tentang barang nya</h6>
                </v-card-text>
              </div>

              <div>
                <div>
                  <v-icon large color="green">mdi-cloud-upload </v-icon>
                </div>
                <v-spacer></v-spacer>
                <v-card-actions >
                  <v-btn class="ml-2 mt-5" outlined small>
                    edit
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav'
export default {
  components: {
    BottomNav
  },
  data() {
    return {
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Alat Cukur Kumis",
          artist: "Alat cukur kumis kucing",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Piring India",
          artist: "Piring bekas perang mahabarata",
        },
      ],
    };
  },
};
</script>

<style></style>
