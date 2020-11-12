<template>
  <div>
    <h1>ini detail transaksi</h1>
    <!-- <div v-for="kiki in detailTransaksion" :key="kiki.id">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              {{ kiki.id }}
            </v-card-title>

            <v-row style="flex-direction:column;">
              <v-col>
                <v-card-text v-for="koko in kiki.items" :key="koko.id">
                  {{ koko.nama }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div> -->

    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Item</th>
            <th>Harga</th>
            <th>Jumlah Pesanan</th>
            <th>Harga Total</th>
            <th>Keterangan</th>
            <th>Tanggal Transaksi</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in detailTransaksion" :key="item.id">
          <tr v-for="koo in item.items" :key="koo.id">
            <td>{{ index + 1 }}</td>
            <td>{{ koo.nama }}</td>
            <td>Rp. {{ koo.harga }}</td>
            <td>{{ koo.qyt }}</td>
            <td>Rp. {{ koo.qyt * koo.harga }}</td>
            <td>{{ koo.keterangan }}</td>
            <td>{{ koo.tgl }}</td>
          </tr>
          <tr>
            <td colspan="2">Total Pesanan</td>
            <td></td>
            <td>{{ jml }}</td>
          </tr>
          <tr>
            <td colspan="4">Harga Total :</td>
            <td>Rp. {{ jumlahTot }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailTransaksion: [
        {
          id: "1231",
          items: [
            {
              id: "#31212",
              nama: "sarung",
              deskripsi: "sarung gajah duduk",
              harga: 4000,
              qyt: 3,
            },
            {
              id: "#31212",
              nama: "pedang",
              deskripsi: "sarung gajah duduk",
              harga: 1000,
              qyt: 2,
            },
            {
              id: "#31212",
              nama: "merah",
              deskripsi: "sarung gajah duduk",
              harga: 1000,
              qyt: 1,
            },
            {
              id: "#31212",
              nama: "oden kozuki",
              deskripsi: "sarung gajah duduk",
              harga: 1000,
              qyt: 11,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
