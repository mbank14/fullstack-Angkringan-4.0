<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12">
          <v-card flat color="pink">
            <div class="d-flex flex-no-wrap ">
              <!-- ini image -->
              <v-avatar class="ma-1" size="125" tile>
                <v-img :src="item.image" :alt="item.image"></v-img>
              </v-avatar>

              <v-card-text style="padding: 5px;">
                <h4>{{ item.name }}</h4>
                <p>Rp. {{ item.price }}</p>
                <p>{{ item.deskp }}</p>
              </v-card-text>

              <v-card-actions class="flex-column">
                <v-btn small>edit</v-btn>
                <v-btn small @click="delBarang(item.id)">hapus</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
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
      api: "http://192.168.137.163:8000/",
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
    async delBarang(id) {
      // const token = localStorage.getItem("Bearer");
      const response = await axios.delete(`${this.api}products/${id}/delete`);
      // this.items = response.data.data;
      console.log(response);
    },
  },
  mounted() {
    this.getBarang();
  },
};
</script>

<style></style>
