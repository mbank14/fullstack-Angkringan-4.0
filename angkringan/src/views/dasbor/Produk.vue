<template>
  <div>
    <v-container class="fluid">
      <v-row> </v-row>
      <v-card class="mx-auto my-auto" flat app>
        <v-row>
          <v-col>
            <v-card-title>List Barang</v-card-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-card-actions>
              <v-btn text outlined class="mx-2 text-capitalize" to="/tambahmenu"
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
              <v-list-item-subtitle
                >Rp.
                {{
                  item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}</v-list-item-subtitle
              >
              <v-list-item-text>{{ item.deskp }}</v-list-item-text>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <!-- Btn Modal Edit -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-card-actions>
                  <v-btn
                    color="white--text green darken-1"
                    v-bind="attrs"
                    v-on="on"
                    @click="editBarang(item)"
                  >
                    Edit
                    <!-- <v-icon color="green darken-2">mdi-pencil</v-icon> -->
                  </v-btn>
                </v-card-actions>
              </template>
              <v-container class="fluid">
                <v-card app flat>
                  <v-card-title class="px-1 py-1">
                    <v-container class="fluid">
                      <span class="headline"> Edit Barang</span>
                    </v-container>
                  </v-card-title>
                  <v-container class="fluid">
                    <v-text-field
                      v-model="editName"
                      label="Nama Item"
                      dense
                      outlined
                    ></v-text-field>
                    <v-text-field
                      v-model="editPrice"
                      label="Harga"
                      dense
                      outlined
                    ></v-text-field>
                    <v-text-field
                      v-model="editDeskp"
                      label="Deskripsi"
                      dense
                      outlined
                    ></v-text-field>
                    <v-text-field
                      v-model="editImage"
                      label="Gambar"
                      dense
                      outlined
                    ></v-text-field>
                  </v-container>
                  <v-card-actions>
                    <v-btn
                      color="white--text green darken-1"
                      text
                      @click="updateBarang(item)"
                      >Update</v-btn
                    >
                    <v-btn
                      color="white--text green darken-1"
                      text
                      @click="dialog = false"
                      >Batal</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-dialog>
            <!-- End Btn Modal Edit -->

            <v-btn
              @click="delBarang(item.id)"
              color="white--text red darken-2"
              class="text-capitalize"
              >Hapus
              <!-- <v-icon color="red darken-2">mdi-trash-can</v-icon> -->
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
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
      api: "http://192.168.43.149:8000/",
      dialog: false,
      loading: false,
      items: [],
      editId: null,
      editName: "",
      editPrice: "",
      editDeskp: "",
      editImage: "",
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

    editBarang(item) {
      this.editId = item.id;
      this.editName = item.name;
      this.editPrice = item.price;
      this.editImage = item.image;
      this.editDeskp = item.deskp;
    },

    async updateBarang(item) {
      this.loading = true;
      try {
        const updateItem = {
          name: this.editName,
          price: this.editPrice,
          image: this.editImage,
          deskp: this.editDeskp,
        };
        await axios.put(`${this.api}products/${item.id}/update`, updateItem);
        this.loading = false;
        this.$toast.success("Berhasil Edit Data", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
        this.dialog = false;
        this.getBarang();
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("Gagal", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
      }
    },
    async delBarang(id) {
      // const token = localStorage.getItem("Bearer");
      const response = await axios.delete(`${this.api}products/${id}/delete`);
      // this.items = response.data.data;
      console.log(response);
      this.getBarang();
    },
  },
  mounted() {
    this.getBarang();
  },
};
</script>

<style></style>
