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
          <!-- <v-card-subtitle class="px-1 py-1">Upload KTP</v-card-subtitle>
          <input
            @change="handleImageKTP"
            class="custom-input"
            type="file"
            accept="image/*"
          /> -->
          <!-- <v-img :src="this.register.toko.gambar_ktp"></v-img> -->

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

          <!-- Gambar Toko -->
          <v-card-subtitle class="px-1 py-1">Upload Toko</v-card-subtitle>
          <input
            @change="handleImage"
            class="custom-input"
            type="file"
            accept="image/*"
          />
          <v-img
            class="mt-2"
            max-width="200px"
            :src="this.register.toko.gambar"
          ></v-img>

          <!-- Checkbox Terms and Conditions -->
          <v-checkbox v-model="checkbox" :rules="checkRules">
            <template v-slot:label>
              <div>
                Semua data yang saya kirimkan adalah data yang sebenar benarnya.
              </div>
            </template>
          </v-checkbox>
        </v-container>
        <!-- Button Action -->
        <v-card-actions>
          <v-btn
            class="white--text text-capitalize"
            :loading="loading"
            color="#5c6e91"
            @click="validate"
            >Daftar</v-btn
          >
          <v-btn
            class="white--text text-capitalize"
            color="#dd9866"
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
      api: "http://192.168.1.15:8000/",
      register: {
        user: {
          username: "",
          password: "",
        },
        toko: {
          nama: "",
          nomor_ktp: "",
          alamat: "",
          telp: "",
          gambar: "",
        },
      },
      // Rules Required
      valid: true,
      // Firstname
      firstName: "",
      firstnameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 10) || "Name must be less than 10 characters",
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
          (v && v.length >= 8) || "password must be less than 8 characters",
      ],
      // Nama Toko
      nama: "",
      namaTokoRules: [
        (v) => !!v || "Nama Toko is required",
        (v) =>
          (v && v.length >= 10) || "nama toko must be less than 10 characters",
      ],
      // No. KTP
      nomor_ktp: "",
      ktpRules: [
        (v) => !!v || "No. ktp is required",
        (v) =>
          /^((1[1-9])|(21)|([37][1-6])|(5[1-4])|(6[1-5])|([8-9][1-2]))[0-9]{2}[0-9]{2}(([0-6][0-9])|(7[0-1]))((0[1-9])|(1[0-2]))([0-9]{2})[0-9]{4}$/.test(v) 
          || "owner's ktp number must be less than 16 characters",
      ],
      // Alamat
      alamat: "",
      alamatTokoRules: [
        (v) => !!v || "Alamat Toko is required",
        (v) =>
          (v && v.length >= 15) ||
          "alamat toko must be less than 15 characters",
      ],
      // No. Telp
      telp: "",
      telpRules: [
        (v) => !!v || "No. HP is required",
        (v) =>
          /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/.test(v) ||
          "No. Hp must be valid",
      ],
      checkbox: false,
      checkRules: [
        (v) => !!v || "You must check it if want continue to register",
      ],
    };
  },
  methods: {
    // validasi Register
    async validate() {
      console.log(this.register);
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
      const selectedImage = e.target.files[0];
      this.createdBase64Image(selectedImage, (e) => {
        console.log(e.target);
        this.register.toko.gambar = e.target.result;
      });
    },
    // handleImageKTP(e) {
    //   const selectedImageKTP = e.target.files[0];
    //   this.createdBase64Image(selectedImageKTP, (e) => {
    //     console.log(e.target);
    //     this.register.toko.gambar_ktp = e.target.result;
    //   });
    // },
    createdBase64Image(fileObject, callback) {
      const reader = new FileReader();
      reader.onload = callback;
      reader.readAsDataURL(fileObject);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
