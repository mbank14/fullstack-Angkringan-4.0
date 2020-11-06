<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12">
          <v-card flat color="pink">
            <div class="d-flex flex-no-wrap justify-space-between">

            <!-- ini image -->
            <v-avatar class="ma-1" size="125" tile>
              <v-img :src="item.image" :alt="item.image">img</v-img>
            </v-avatar>

            <v-card-text>
                <p>{{ item.name }}</p>
                <p>{{ item.price}}</p>
                <p>{{ item.deskp }}</p>
            </v-card-text>

            <v-card-action >
                <v-btn small="true">hapus</v-btn>
                <v-btn small="true">edit</v-btn>
            </v-card-action>
            
            </div>
          </v-card>
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
