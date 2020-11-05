<template>
  <div>
    <v-container class="fluid">
      <v-row>
        <v-card class="mx-auto" max-width="900">
          <v-row>
            <v-col>
              <v-card-title>List Barang</v-card-title>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-card-actions>
                <v-btn
                  text
                  outlined
                  class="mx-2 text-capitalize"
                  to="/tambahmenu"
                  >Tambah Menu</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>
          </v-row>
          <div v-for="item in items" :key="item.id">
            <v-list-item three-line>
              <v-list-item-avatar tile size="100" color="grey">
                <img
                  :src="item.image"
                  :alt="item.image"
                  class="white--text align-end rounded-lg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ item.name }}</v-list-item-title
                >
                <v-list-item-subtitle>{{ item.price }}</v-list-item-subtitle>
                <v-list-item-text>{{ item.deskp }}</v-list-item-text>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn icon>
                <v-icon color="green darken-2">mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="delBarang(item.id)">
                <v-icon color="red darken-2">mdi-trash-can</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-row>
    </v-container>
    <BottomNav />
  </div>
</template>

<script>
import axios from "axios";
import BottomNav from "@/components/BottomNav";
export default {
  components: {
    BottomNav,
  },
  data() {
    return {
      api: "http://192.168.137.227:8000/",
      items: [],
    };
  },
  methods: {
    async getBarang() {
      const token = localStorage.getItem("Bearer");
      const response = await axios.get(`${this.api}products/`, {
        headers: { Authorization: token },
      });
      this.items = response.data.data;
      console.log(this.items);
    },
    async delBarang(id){
      // const token = localStorage.getItem("Bearer");
      const response = await axios.delete(`${this.api}products/${id}/delete`);
      // this.items = response.data.data;
      console.log(response);
    }
  },
  mounted() {
    this.getBarang();
  },
};
</script>

<style></style>
