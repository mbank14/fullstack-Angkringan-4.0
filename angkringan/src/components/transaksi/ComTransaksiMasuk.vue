<template>
  <div>
      <v-toolbar>
          <v-toolbar-title>

      transaksi masuk
          </v-toolbar-title>
      </v-toolbar>


      <v-container>
          <v-row style="flex-direction: column;">
              <v-col v-for="koko in id" :key="koko.id">
                  <v-card height="auto">
                  
                       <v-card-text>
                           <h3>{{koko.idku}}</h3>
                           <v-spacer></v-spacer>
                           <h3>{{koko.tgl}}</h3>
                        </v-card-text> 
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            transaksiIn: [
                {
                    idTransaksi: "#123131",
                    itemsTransaksi: [
                        {
                            id:122,
                            produk: "hijab",
                            harga: 23333,
                            jumlah: 2
                        },
                        {
                            id:1212,
                            produk: "Baju",
                            harga: 223333,
                            jumlah: 2
                        },
                        {
                            id:122,
                            produk: "hijab",
                            harga: 23333,
                            jumlah: 2
                        },
                    ]
                }
            ],
            id: [
                {
                idku: "#31321",
                tgl: "14-desember-2019"
            },
                {
                idku: "#43242",
                tgl: "14-desember-2011"
            },
                {
                idku: "#23432",
                tgl: "14-desember-2029"
            },
            ]
        }
    },
}
</script>

<style>

</style>