<template>
  <div>
      <h4>transaksi masuk</h4>
      <v-container>
          <v-row>
              <v-col>
                  <v-card height="120">
                       <v-card-title>
                           {{ id }}
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
            id: "#123131"
        }
    },
}
</script>

<style>

</style>