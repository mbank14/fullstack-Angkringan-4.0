 <template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="makanan in allProducts"
          :key="makanan.id"
          cols="12"
          md="3"
        >
          <v-card class="pa-2 rounded-xl card-hover" outlined>
            <v-card-title class="text-item">{{ makanan.name }}</v-card-title>
            <v-img
              @click="addItemToCard(makanan), notification()"
              :src="makanan.src"
              class="white--text align-end rounded-xl"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
            >
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title class="text-price"
                >Rp. {{ makanan.price }}</v-card-title
              >
            </v-card-actions>

            <v-btn
              @click="addItemToCard(makanan), notification()"
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
import { mapActions, mapGetters } from "vuex";
// import { mapActions } from "vuex";
export default {
  name: "Makanan",
  components: {},
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapGetters(["allProducts"])
    // makanans() {
    //   return this.$store.getters.getData;
    // },
    // searchQuery() {
    //   return this.$store.getters.searchQuery;
    // },
    // idr() {
    //   return this.$store.getters.idr;
    // }
  },
  methods: {
    ...mapActions(["getProduct"])
    // ...mapActions(["addItemToCard"]),
    // filteredResources() {
    //   if (this.searchQuery) {
    //     // console.log(this.searchQuery)
    //     return this.makanans.filter(items => {
    //       return this.searchQuery
    //         .toLowerCase()
    //         .split(" ")
    //         .every(v => items.item.toLowerCase().includes(v));
    //     });
    //   } else {
    //     return this.makanans;
    //   }
    // },
    // notification() {
    //   return this.$toast.success("Item ditambahkan ke keranjang", {
    //     position: "top-right",
    //     type: "success",
    //     duration: 2000,
    //     dismissable: true
    //   });
    // }
  },
  mounted() {
    this.getProduct();
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
