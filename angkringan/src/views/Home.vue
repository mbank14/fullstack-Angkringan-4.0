<template>
<div>
    <v-container class="fluid">
        <h1>Peken 4.0</h1>
    </v-container>
    <v-container class="my-5">
        <v-row>
            <v-col v-for="items in allProducts" :key="items.id" cols="12" md="3" sm="6">
                <v-card class="pa-2 rounded-xl card-hover" outlined>
                    <v-card-title class="text-item">{{ items.nameToko }}</v-card-title>
                    <v-img :src="items.src" class="white--text align-end rounded-xl" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="180px">
                    </v-img>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <router-link :to="`/details/${items.id}`">
                        <v-btn class="rounded-xl text-capitalize" color="white--text orange darken-4" width="100%">
                            Kunjungi Toko</v-btn>
                    </router-link>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    name: "Home",
    data() {
        return {};
    },
    components: {},
    computed: {
        ...mapGetters(["allProducts"]),
    },
    methods: {
        ...mapActions(["getProduct"]),
    },
    mounted() {
        this.getProduct();
    },
};
</script>
