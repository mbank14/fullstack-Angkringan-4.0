<template>
  <v-container>
    <v-form ref="form">
      <v-card class="mx-auto my-auto" max-width="550">
        <v-card-title>Registrasi</v-card-title>
        <v-card-text>
          Silahkan daftar akun kamu untuk mulai berdagang
        </v-card-text>

        <v-container class="fluid">
          <v-card-subtitle class="px-1 py-1">Nama Depan</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Nama Depan"
            dense
            outlined
            :rules="firstnameRules"
            required
            v-model="register.user.first_name"
          >
          </v-text-field>
        </v-container>

        <v-container class="fluid">
          <v-card-subtitle class="px-1 py-1">Nama Belakang</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Nama Belakang"
            dense
            outlined
            :rules="lastnameRules"
            required
            v-model="register.user.last_name"
          >
          </v-text-field>
        </v-container>

        <v-container class="fluid">
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
        </v-container>

        <v-container class="fluid">
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
        </v-container>

        <v-container class="fluid">
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
        </v-container>
        <v-container class="fluid">
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
        </v-container>
        <v-container class="fluid">
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
        </v-container>
        <v-container class="fluid">
          <v-card-subtitle class="px-1 py-1">Gambar Toko</v-card-subtitle>
          <v-text-field
            type="text"
            placeholder="Link Gambar"
            dense
            outlined
            :rules="gambarRules"
            required
            v-model="register.toko.gambar"
          >
          </v-text-field>
        </v-container>

        <v-card-actions>
          <v-btn
            :loading="loading"
            color="white--text green darken-1"
            @click="validate"
            >Daftar</v-btn
          >
          <v-btn color="white--text secondary" @click="reset">Reset</v-btn>
          <v-btn color="white--black white" outlined to="/">Batal</v-btn>
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
      api: "http://192.168.137.16:8000/",
      register: {
        user: {
          username: "",
          password: "",
        },
        toko: {
          nama: "",
          alamat: "",
          telp: "",
          gambar: "",
        },
      },

      valid: true,
      firstName: "",
      firstnameRules: [
        (v) => !!v || "First Name is required",
        (v) =>
          (v && v.length >= 5) || "first name must be less than 5 characters",
      ],
      lastName: "",
      lastnameRules: [
        (v) => !!v || "Last Name is required",
        (v) =>
          (v && v.length >= 5) || "last name must be less than 5 characters",
      ],
      userName: "",
      userNameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 5) || "username must be less than 5 characters",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "password is required",
        (v) =>
          (v && v.length >= 5) || "password must be less than 10 characters",
      ],
      nama: "",
      namaTokoRules: [
        (v) => !!v || "Nama Toko is required",
        (v) =>
          (v && v.length >= 5) || "nama toko must be less than 5 characters",
      ],
      alamat: "",
      alamatTokoRules: [
        (v) => !!v || "Alamat Toko is required",
        (v) =>
          (v && v.length >= 5) || "alamat toko must be less than 5 characters",
      ],
      telp: "",
      telpRules: [
        (v) => !!v || "No. Telp is required",
        (v) =>
          (v && v.length >= 5) ||
          "no. telp toko must be less than 5 characters",
      ],
      gambar: "",
      gambarRules: [
        (v) => !!v || "gambar is required",
        (v) =>
          (v && v.length >= 5) || "gambar toko must be less than 5 characters",
      ],
    };
  },
  methods: {
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
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
