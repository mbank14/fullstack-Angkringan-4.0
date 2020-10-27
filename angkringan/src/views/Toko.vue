<template>
  <div>
    <div style="height:40px; background-color: black;">
      
    </div>
    <div>
      <v-row>
        <v-col>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
        <v-col cols="9" >
          <section>
            <h6>toko bunga bunda</h6>
            <p>
              <span>
                <v-icon>
                  
                </v-icon>
              </span>
              alamat toko
            </p>
          </section>
        </v-col>
      </v-row>
    </div>
    <div style="background-color:green;">
      <v-container >
        <v-row dense >
          <v-col>
            <v-select :items="items" outlined label="Filter" dense></v-select>
          </v-col>
          <v-col>
            <v-text-field label="Search" single-line outlined dense></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <h1>ini daftar isi</h1>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 123,
          namaItem: "Tahu",
          harga: 2000,
          deskripsi: "tahu goreng buatan mang oleh",
          gambarUrl: "",
        },
        {
          id: 123,
          namaItem: "Tahu",
          harga: 2000,
          deskripsi: "tahu goreng buatan mang oleh",
          gambarUrl: "",
        },
        {
          id: 123,
          namaItem: "Tahu",
          harga: 2000,
          deskripsi: "tahu goreng buatan mang oleh",
          gambarUrl: "",
        },
        {
          id: 123,
          namaItem: "Tahu",
          harga: 2000,
          deskripsi: "tahu goreng buatan mang oleh",
          gambarUrl: "",
        },
        {
          id: 123,
          namaItem: "Tahu",
          harga: 2000,
          deskripsi: "tahu goreng buatan mang oleh",
          gambarUrl: "",
        },
      ],
    };
  },
};
</script>
<style></style>
