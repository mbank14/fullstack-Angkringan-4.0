<template>
  <div>
    <v-container class="fluid">
      <v-card app flat class="mx-auto my-12" max-width="544">
        <v-card-title class="px-1 py-1 ">Tambah Barang</v-card-title>
        <v-text-field
          v-model="tambah.kode"
          label="Kode"
          dense
          outlined
        ></v-text-field>
        <v-text-field
          v-model="tambah.name"
          label="Nama Item"
          dense
          outlined
        ></v-text-field>
        <v-text-field
          v-model="tambah.price"
          label="Harga"
          dense
          outlined
        ></v-text-field>
        <v-text-field
          v-model="tambah.deskp"
          label="Deskripsi"
          dense
          outlined
        ></v-text-field>
        <!-- <v-file-input
          v-model="tambah.image"
          @change="handleImage"
          label="Gambar"
          accept="image/png, image/jpeg, image/bmp"
          counter
          dense
          outlined
        ></v-file-input> -->
        <input
          @change="handleImage"
          class="custom-input"
          type="file"
          accept="image/*"
        />
        <v-img max-width="200px" :src="this.tambah.image"></v-img>
        <v-row>
          <v-col>
            <v-select
              :items="items"
              v-model="tambah.cate"
              label="Category"
              dense
              outlined
              item-value="id"
              item-text="name_c"
            >
            </v-select>
          </v-col>
          <v-col>
            <addCategory :afterInput="getCategory" />
          </v-col>
        </v-row>

        <v-card-actions class="px-1 py-1">
          <v-btn
            class="text-capitalize"
            color="white--text green darken-1"
            @click="addData()"
          >
            Tambah
          </v-btn>
          <v-btn class="text-capitalize" outlined to="/dasbor">Batal</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import addCategory from "../views/dasbor/category/AddCategory";
import axios from "axios";
export default {
  data() {
    return {
      api: "http://192.168.1.15:8000/",
      loading: false,
      dialog: false,
      // image: "",
      items: [],
      tambah: {
        cate: "",
        kode: "",
        name: "",
        price: "",
        deskp: "",
        image: "",
      },
    };
  },
  components: {
    addCategory,
  },
  methods: {
    // Get category
    async getCategory() {
      const token = localStorage.getItem("Bearer");
      console.log(token);
      const response = await axios.get(`${this.api}products/category/`, {
        headers: { Authorization: token },
      });
      this.items = response.data.data;
      console.log(response.data.data);
    },

    // Add data
    async addData() {
      this.loading = true;
      const token = localStorage.getItem("Bearer");
      console.log(token, this.tambah);
      try {
        this.loading = false;
        const response = await axios.post(
          `${this.api}products/input_products/`,
          this.tambah,
          { headers: { Authorization: token } }
        );
        this.$toast.success("Berhasil Tambah Barang", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
        console.log(response.data);
        this.$router.push({ path: "/dasbor" });
      } catch (error) {
        this.$toast.error("Gagal Tambah Barang", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
        this.loading = false;
        console.log(error);
      }
    },

    // Upload Image
    handleImage(e) {
      console.log(e);
      const selectedImage = e.target.files[0];
      this.createdBase64Image(selectedImage);
    },
    createdBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target);
        this.tambah.image = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style></style>
