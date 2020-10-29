<template>
  <v-container>
    <v-form ref="form">
      <v-card class="mx-auto my-12 " max-width="450">
        <v-card-title>Registrasi</v-card-title>
        <v-card-text>
          Silahkan daftar akun kamu untuk mulai berdagang
        </v-card-text>

        <v-card-subtitle class="pb-1">Nama Depan</v-card-subtitle>
        <v-container class="fluid">
          <v-text-field
            type="text"
            placeholder="Nama Depan"
            dense
            outlined
            :rules="firstnameRules"
            required
            v-model="register.first_name"
          >
          </v-text-field>
        </v-container>

        <v-card-subtitle class="pb-1">Nama Belakang</v-card-subtitle>
        <v-container class="fluid">
          <v-text-field
            type="text"
            placeholder="Nama Belakang"
            dense
            outlined
            :rules="lastnameRules"
            required
            v-model="register.last_name"
          >
          </v-text-field>
        </v-container>

        <v-card-subtitle class="pb-1">Username</v-card-subtitle>
        <v-container class="fluid">
          <v-text-field
            type="text"
            placeholder="Username"
            dense
            outlined
            :rules="userNameRules"
            required
            v-model="register.username"
          >
          </v-text-field>
        </v-container>

        <v-card-subtitle class="pb-1">Password</v-card-subtitle>
        <v-container class="fluid">
          <v-text-field
            type="password"
            placeholder="Password"
            dense
            outlined
            :rules="passwordRules"
            required
            v-model="register.password"
          >
          </v-text-field>
        </v-container>

        <v-card-actions>
          <v-btn color="white--text green darken-1" @click="validate"
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
import axios from "axios";
export default {
  data() {
    return {
      register: {
        first_name: "",
        last_name: "",
        username: "",
        password: ""
      },

      valid: true,
      firstName: "",
      firstnameRules: [
        v => !!v || "First Name is required",
        v => (v && v.length >= 5) || "first name must be less than 5 characters"
      ],
      lastName: "",
      lastnameRules: [
        v => !!v || "Last Name is required",
        v => (v && v.length >= 5) || "last name must be less than 5 characters"
      ],
      userName: "",
      userNameRules: [
        v => !!v || "Username is required",
        v => (v && v.length >= 5) || "username must be less than 5 characters"
      ],
      password: "",
      passwordRules: [
        v => !!v || "password is required",
        v => (v && v.length >= 5) || "password must be less than 10 characters"
      ]
    };
  },
  methods: {
    async validate() {
      try {
        if (this.$refs.form.validate()) {
          const response = await axios.post(
            "http://192.168.1.22:8000/account/register/",
            this.register
          );
          this.$toast.success("Registrasi Berhasil", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissable: true
          });
          console.log(response.data);
          this.$router.push({ name: "Pedagang" });
        } else {
          this.$toast.error("Registrasi Gagal", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissable: true
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>