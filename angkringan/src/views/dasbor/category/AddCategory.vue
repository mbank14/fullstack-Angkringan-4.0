<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="text-capitalize" text v-bind="attrs" v-on="on">
          Tambah Kategori ?
        </v-btn>
      </template>

      <v-container class="fluid">
        <v-card app flat>
          <v-card-title class="px-1 py-1">Tambah Kategori</v-card-title>
          <v-card-text>
            <v-text-field
              dense
              outlined
              label="Category"
              v-model="tambahCategory.name_c"
            />
            <v-card-actions class="px-1 py-1">
              <v-btn
                color="white--text green darken-1"
                text
                @click="addCategory()"
                >Tambah</v-btn
              >
              <v-btn
                color="white--text green darken-1"
                text
                @click="dialog = false"
                >Cancel</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-container>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  props: { afterInput: Function },
  data() {
    return {
      dialog: false,
      api: "http://192.168.137.8:8000/",
      listCategory: [],
      tambahCategory: {
        name_c: "",
      },
    };
  },
  methods: {
    async addCategory() {
      const token = localStorage.getItem("Bearer");
      try {
        const response = await axios.post(
          `${this.api}products/category/input_category/`,
          this.tambahCategory,
          { headers: { Authorization: token } }
        );
        console.log(response.data);
        this.$router.push({ path: "/tambahmenu" });
        await this.afterInput();
        this.dialog = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    console.log(this.afterInput);
  },
};
</script>

<style></style>
