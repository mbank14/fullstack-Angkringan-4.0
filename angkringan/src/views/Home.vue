<template>
  <div>
    <v-container class="fluid">
      <h1>Peken 4.0</h1>
    </v-container>
    <v-container class="my-5">
      <v-row>
        <v-col v-for="item in data" :key="item.id" cols="12" md="3" sm="6">
          <v-card class="pa-2 rounded-xl card-hover" outlined>
            <v-card-title class="text-item">{{ item.text }}</v-card-title>
            <v-img
              :src="item.image"
              class="white--text align-end rounded-xl"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
            >
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
            <!-- <v-btn
              @click="addItemToCard(card)"
              class="rounded-xl text-capitalize"
              color="white--text orange darken-4"
              width="100%"
              >Pesan</v-btn
            > -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      data: [
        {
          image:
            "https://images.unsplash.com/photo-1551018612-9715965c6742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80",
          text: "Pasar Beringharjo",
        },
        {
          image:
            "https://www.portonews.com/wp-content/uploads/2019/12/basuka2.jpg",
          text: "Pasar Prawirotaman",
        },
        {
          image:
            "https://www.yogyes.com/en/yogyakarta-tourism-object/shopping/gabusan/1.jpg",
          text: "Pasar Seni Gabusan",
        },
        {
          image:
            "https://kabarhandayani.com/wp-content/uploads/2016/02/Pasar-semin.jpg",
          text: "Pasar Seni Gabusan",
        },
        {
          image:
            "https://images.unsplash.com/photo-1551018612-9715965c6742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80",
          text: "Pasar Beringharjo",
        },
        {
          image:
            "https://www.portonews.com/wp-content/uploads/2019/12/basuka2.jpg",
          text: "Pasar Prawirotaman",
        },
        {
          image:
            "https://www.yogyes.com/en/yogyakarta-tourism-object/shopping/gabusan/1.jpg",
          text: "Pasar Seni Gabusan",
        },
        {
          image:
            "https://kabarhandayani.com/wp-content/uploads/2016/02/Pasar-semin.jpg",
          text: "Pasar Seni Gabusan",
        },
      ],
    };
  },
  components: {},
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getProduct"]),
  },
  mounted() {
    this.getProduct();
  },
};
</script>
