<template>
  <div>
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
        <tbody>
          <tr v-for="(item, index) in card" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.item }}</td>
            <td>Rp. {{ item.harga }}</td>
            <td>{{ item.qty }}</td>
            <td>Rp. {{ item.qty * item.harga }}</td>
            <td>{{ item.keterangan }}</td>
            <td>{{ tgl }}</td>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["card"]),
    jumlahTot() {
      return this.card.reduce((a, b) => a + b.qty * b.harga, 0);
    },
    jml() {
      return this.card.reduce((a, b) => a + b.qty, 0);
    },
    tgl() {
      let date = new Date();
      return date.toDateString();
    }
  },
  mounted() {
    this.card;
  }
};
</script>

<style>
</style>