<template>
  <div>
    <v-container>
      <!-- <v-toolbar flat class="black--text">
        <v-toolbar-title>Produk</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar> -->
      <DetailToko />
      <v-card class="mx-auto my-auto" flat app>
        <v-row>
          <v-col>
            <v-card-title>List Barang</v-card-title>
          </v-col>
          <v-col>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn
                right
                class="mx-2 white--text text-capitalize"
                color="#5c6e91"
                to="/tambahmenu"
                >Tambah Barang</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-col>
        </v-row>
        <div v-for="item in items" :key="item.id">
          <v-list-item three-line>
            <v-list-item-avatar tile size="180" color="grey">
              <img
                :src="item.image"
                class="white--text align-end rounded-lg"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
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
            <v-card-actions>
              <v-btn
                class="white--text"
                color="#5c6e91"
                @click="editBarang(item)"
              >
                Edit
              </v-btn>
            </v-card-actions>

            <v-btn
              @click="delBarang(item.id)"
              color="#dd9866"
              class="white--text text-capitalize"
              >Hapus
              <!-- <v-icon color="red darken-2">mdi-trash-can</v-icon> -->
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-container>
    <BottomNav />
    <!-- Modal Button Edit -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-container class="fluid">
        <v-card app flat>
          <v-card-title class="px-1 py-1">
            <v-container class="fluid">
              <span class="headline"> Edit Barang</span>
            </v-container>
          </v-card-title>
          <v-container class="fluid">
            <v-text-field
              label="Nama Item"
              v-model="editName"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              label="Harga"
              v-model="editPrice"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              label="Deskripsi"
              v-model="editDeskp"
              dense
              outlined
            ></v-text-field>
            <!-- Gambar -->
            <!-- <input
              @change="handleImage"
              class="custom-input"
              type="file"
              accept="image/*"
            />
            <v-img :src="this.tambah.image"></v-img> -->
          </v-container>
          <v-card-actions>
            <v-btn
              text
              color="white--text green darken-1"
              @click="updateBarang(item)"
              >Update</v-btn
            >
            <v-btn text color="white--text green darken-1" @click="cancel"
              >Batal</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!-- End Btn Modal Edit -->
  </div>
</template>

<script>
import axios from "axios";
import BottomNav from "@/components/BottomNav";
import DetailToko from "@/components/Toko/DetailToko";
export default {
  components: {
    BottomNav,
    DetailToko,
  },
  data() {
    return {
      api: "http://192.168.137.8:8000/",
      dialog: false,
      loading: false,
      items: [],
      id: "",
      editId: null,
      editName: "",
      editPrice: "",
      editDeskp: "",
    };
  },
  methods: {
    // Cancel Modal
    cancel: function() {
      this.dialog = false;
      this.editName = "";
      this.editPrice = "";
      this.editDeskp = "";
    },
    // Get Barang
    async getBarang() {
      const token = localStorage.getItem("Bearer");
      const response = await axios.get(`${this.api}products/`, {
        headers: { Authorization: token },
      });
      this.items = response.data.data;
      console.log(this.items);
    },

    // Select Edit Barang
    editBarang(item) {
      this.dialog = true;
      this.editId = item.id;
      this.editName = item.name;
      this.editPrice = item.price;
      this.editDeskp = item.deskp;
    },
    // Update Barang
    async updateBarang() {
      this.loading = true;
      try {
        const updateItem = {
          id: this.editId,
          name: this.editName,
          price: this.editPrice,
          deskp: this.editDeskp,
        };
        console.log(updateItem);
        await axios.put(
          `${this.api}products/${this.editId}/update`,
          updateItem
        );
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
    // Upload image
    // handleImage(e) {
    //   console.log(e);
    //   const selectedImage = e.target.files[0];
    //   this.createdBase64Image(selectedImage);
    // },
    // createdBase64Image(fileObject) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     console.log(e.target);
    //     this.tambah.image = e.target.result;
    //   };
    //   reader.readAsDataURL(fileObject);
    // },
    // Delete Barang
    async delBarang(id) {
      try {
        const response = await axios.delete(`${this.api}products/${id}/delete`);
        console.log(response);
        this.$toast.success("Berhasil Hapus Data", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
        this.getBarang();
      } catch (error) {
        this.$toast.error("Gagal Hapus Data", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
      }
    },
  },
  mounted() {
    this.getBarang();
  },
};
</script>

<style></style>
