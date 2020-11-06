<template>
  <div>
      <h4>transaksi masuk</h4>
      <v-container>
          <v-row>
              <v-col v-for="koko in id" :key="koko.id">
                  <v-card height="120">
                       <v-card-title>
                           {{ koko.idku }}
                       </v-card-title>
                       <v-card-text>
                           
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
            },
                {
                idku: "#43242",
            },
                {
                idku: "#23432",
            },
            ]
        }
    },
}
</script>

<style>

</style>