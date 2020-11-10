<template>
  <v-container>
    <v-form ref="form">
      <v-card class="mx-auto my-auto" max-width="550">
        <v-card-title>Registrasi</v-card-title>
        <v-card-text>
          Silahkan daftar akun kamu untuk mulai berdagang
        </v-card-text>

        <v-container class="fluid">
          <!-- Nama -->
          <v-card-subtitle class="px-1 py-1">Nama</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Nama"
            dense
            outlined
            :rules="firstnameRules"
            required
            v-model="register.user.first_name"
          >
          </v-text-field>
          <!-- Username -->
          <v-card-subtitle class="px-1 py-1">Username</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Username"
            dense
            outlined
            :rules="userNameRules"
            required
            v-model="register.user.username"
          >
          </v-text-field>
          <!-- Password -->
          <v-card-subtitle class="px-1 py-1">Password</v-card-subtitle>
          <v-text-field
            type="password"
            placeholder="Password"
            dense
            outlined
            :rules="passwordRules"
            required
            v-model="register.user.password"
          >
          </v-text-field>
          <!-- Nama Toko -->
          <v-card-subtitle class="px-1 py-1">Nama Toko</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Nama Toko"
            dense
            outlined
            :rules="namaTokoRules"
            required
            v-model="register.toko.nama"
          >
          </v-text-field>
          <!-- Alamat Toko -->
          <v-card-subtitle class="px-1 py-1">Alamat Toko</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Alamat Toko"
            dense
            outlined
            :rules="alamatTokoRules"
            required
            v-model="register.toko.alamat"
          >
          </v-text-field>
          <!-- No Telp -->
          <v-card-subtitle class="px-1 py-1">No. Telp</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="No. Telp"
            dense
            outlined
            :rules="telpRules"
            required
            v-model="register.toko.telp"
          >
          </v-text-field>
          <!-- No Ktp -->
          <v-card-subtitle class="px-1 py-1">No. KTP</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="No. KTP"
            dense
            outlined
            :rules="ktpRules"
            required
            v-model="register.toko.nomor_ktp"
          >
          </v-text-field>
          <!-- Gambar KTP -->
          <v-card-subtitle class="px-1 py-1">Upload KTP</v-card-subtitle>
          <input
            @change="handleImage"
            class="custom-input"
            type="file"
            accept="image/*"
          />
          <v-img :src="this.register.toko.gambarKTP"></v-img>

          <!-- Gambar Toko -->
          <v-card-subtitle class="px-1 py-1">Upload Toko</v-card-subtitle>
          <input
            @change="handleImage"
            class="custom-input"
            type="file"
            accept="image/*"
          />
          <v-img :src="this.register.toko.gambar"></v-img>
        </v-container>
        <!-- Button Action -->
        <v-card-actions>
          <v-btn
            class="text-capitalize"
            :loading="loading"
            color="white--text green darken-1"
            @click="validate"
            >Daftar</v-btn
          >
          <v-btn
            class="text-capitalize"
            color="white--text secondary"
            @click="reset"
            >Reset</v-btn
          >
          <v-btn
            class="text-capitalize"
            color="white--black white"
            outlined
            to="/"
            >Batal</v-btn
          >
        </v-card-actions>

        <v-card-subtitle>
          Sudah punya akun? <router-link to="/login">Login</router-link>
        </v-card-subtitle>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
// import url from "../../services/dataServices";
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      api: "http://192.168.43.149:8000/",
      image: "",
      register: {
        user: {
          username: "",
          password: "",
        },
        toko: {
          nama: "",
          alamat: "",
          telp: "",
          nomor_ktp: "",
          gambar: "",
          gambarKTP: "",
        },
      },
      // Rules Required
      valid: true,
      // Firstname
      firstName: "",
      firstnameRules: [
        (v) => !!v || "First Name is required",
        (v) =>
          (v && v.length >= 5) || "first name must be less than 5 characters",
      ],
      // Username
      userName: "",
      userNameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 5) || "username must be less than 5 characters",
      ],
      // Password
      password: "",
      passwordRules: [
        (v) => !!v || "password is required",
        (v) =>
          (v && v.length >= 5) || "password must be less than 10 characters",
      ],
      // Nama Toko
      nama: "",
      namaTokoRules: [
        (v) => !!v || "Nama Toko is required",
        (v) =>
          (v && v.length >= 5) || "nama toko must be less than 5 characters",
      ],
      // Alamat
      alamat: "",
      alamatTokoRules: [
        (v) => !!v || "Alamat Toko is required",
        (v) =>
          (v && v.length >= 5) || "alamat toko must be less than 5 characters",
      ],
      // No. Telp
      telp: "",
      telpRules: [
        (v) => !!v || "No. Telp is required",
        (v) =>
          (v && v.length >= 5) ||
          "no. telp toko must be less than 5 characters",
      ],

      // No. KTP
      NoKtp: "",
      ktpRules: [
        (v) => !!v || "No. ktp is required",
        (v) =>
          (v && v.length >= 5) ||
          "no. telp toko must be less than 16 characters",
      ],
    };
  },
  methods: {
    // validasi login
    async validate() {
      this.loading = true;
      try {
        if (this.$refs.form.validate()) {
          const response = await axios.post(
            `${this.api}account/register/`,
            this.register
          );
          this.loading = false;
          this.$toast.success("Registrasi Berhasil", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissable: true,
          });
          console.log(response.data);
          this.$router.push({ name: "Login" });
        } else {
          this.$toast.error("Registrasi Gagal", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissable: true,
          });
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("Registrasi Gagal", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
      }
    },

    // Upload Image
    // upload image TOKO
    handleImage(e) {
      console.log(e);
      const selectedImage = e.target.files[0];
      this.createdBase64Image(selectedImage);
    },
    createdBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target);
        this.register.toko.gambar = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
