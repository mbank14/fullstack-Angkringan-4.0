<template>
<div>
    <v-container>
        <h1>Details Toko</h1>
    </v-container>
    <v-container class="my-5">
        <v-row>
            <v-col v-for="detail in details" :key="detail.menuId" cols="12" md="3" sm="6">
                <v-card class="pa-2 rounded-xl card-hover" outlined>
                    <v-card-title class="text-item">
                        {{ detail.namaMenu }}
                    </v-card-title>
                    <v-img :src="detail.src" class="white--text align-end rounded-xl" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="180px">
                    </v-img>
                    <v-card-text>
                        Rp.
                        {{
                detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
              }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <v-btn class="rounded-xl text-capitalize" color="white--text orange darken-4" width="100%">Add to cart</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import axios from "axios";
// import {
//     mapActions,
//     mapGetters
// } from "vuex";
export default {
    data() {
        return {
            details: [],
        };
    },
    computed: {},
    methods: {
        async detailsProduct() {
            const response = await axios.get(
                `http://localhost:3000/toko/${this.$route.params.id}`
            );
            this.details = response.data.menu;
            console.log(response.data.menu);
        },
    },
    mounted() {
        this.detailsProduct();
    },
};
</script>

<style></style>
