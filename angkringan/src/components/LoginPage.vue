<template>
  <div>
    <v-container>
      <v-form ref="form" lazy-validation>
        <v-card class="mx-auto my-12 " max-width="450">
          <v-card-title>Login</v-card-title>
          <v-card-text
            >Silahkan masuk menggunakan akun anda yang telah
            terdaftar</v-card-text
          >
          <!-- username -->
          <v-container class="fluid">
            <v-card-subtitle class="px-1 py-1">Username</v-card-subtitle>
            <v-text-field
              flat
              type="text"
              placeholder="username"
              dense
              outlined
              v-model="login.username"
            >
            </v-text-field>
          </v-container>
          <!-- password -->
          <v-container class="fluid">
            <v-card-subtitle class="px-1 py-1 ">Password</v-card-subtitle>
            <v-text-field
              flat
              type="password"
              placeholder="password"
              dense
              outlined
              v-model="login.password"
            >
            </v-text-field>
          </v-container>
          <v-card-actions>
            <v-btn
              color="white--text green darken-1"
              :loading="loading"
              @click="loginItem()"
              @keypress.enter="loginItem()"
              >Login</v-btn
            >
            <v-btn color="white--black white" outlined to="/">Batal</v-btn>
          </v-card-actions>
          <v-card-subtitle>
            Belum punya akun?
            <router-link to="/daftar">Daftar Sekarang</router-link>
          </v-card-subtitle>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import api from "../../services/dataServices";
import axios from "axios";
export default {
  data: () => {
    return {
      loading: false,
      login: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async loginItem() {
      this.loading = true;
      try {
        const response = await axios.post(
          "http://192.168.1.25:8000/account/",
          this.login
        );
        this.loading = false;
        this.$toast.success("Login Berhasil", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissable: true
        });
        console.log(response.data);
        localStorage.setItem("Bearer", response.data.token);
        this.$router.push({ name: "Dasbor" });
      } catch (error) {
        this.loading = false;
        this.$toast.error("Username / Password Salah", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true
        });
      }
    }
  }
};
</script>

<style scoped></style>
