<template>
  <div>
    <v-container class="fluid">
      <!-- Cart Button -->
      <v-btn color="grey" large top right icon fab fixed to="/cart">
        <v-icon x-large>mdi-shopping-outline</v-icon>
        <v-badge color="#6D4C41"></v-badge>
      </v-btn>

      <v-form>
        <v-card class="mx-auto" max-width="450" outlined cols="12" sm="6">
          <v-card-title>Buat Toko</v-card-title>
          <v-card-text>Silahkan Buat Toko Kamu Untuk Berniaga</v-card-text>

          <v-container class="fluid">
            <v-card-subtitle class="pb-1">Nama Pemilik</v-card-subtitle>
            <v-text-field type="text" placeholder="Nama Pemilik" dense outlined>
            </v-text-field>

            <v-card-subtitle class="pb-1">Nama Toko</v-card-subtitle>
            <v-text-field type="text" placeholder="Nama Toko" dense outlined>
            </v-text-field>

            <v-card-subtitle class="pb-1">Alamat</v-card-subtitle>
            <v-text-field type="text" placeholder="Alamat" dense outlined>
            </v-text-field>

            <v-card-subtitle class="pb-1">No. Telepon</v-card-subtitle>
            <v-text-field type="text" placeholder="No. Telepon" dense outlined>
            </v-text-field>

            <v-card-subtitle class="pb-1">Foto Toko</v-card-subtitle>
            <v-file-input show-size label="File input"></v-file-input>
          </v-container>

          <v-card-actions>
            <v-btn color="white--text green darken-1">Daftar</v-btn>
          </v-card-actions>
          <v-btn @click="logout()">Logout</v-btn>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("Bearer");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style>
</style>