<template>
  <div>
    <v-container>
      <v-card-title class="headline">Transaksi Kamu</v-card-title>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="struk"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="1000px"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <v-simple-table height="300px" id="test">
            <template v-slot:default>
              <thead>
                <tr>
                  <td>ID Transaksi : #{{ idPesan }}</td>
                  <td>Tanggal Transaksi : {{ tgl }}</td>
                </tr>
                <tr>
                  <th>Nama Item</th>
                  <th>Keterangan</th>
                  <th>Harga</th>
                  <th>Jumlah Pesanan</th>
                  <th>Harga Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in card" :key="item.id">
                  <td>{{ item.item }}</td>
                  <td>{{ item.keterangan }}</td>
                  <td>Rp. {{ item.harga }}</td>
                  <td>{{ item.qty }}</td>
                  <td>Rp. {{ item.qty * item.harga }}</td>
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
        </section>
      </vue-html2pdf>
      <v-container>
        <v-card-actions>
          <v-btn
            class="orange darken-4 white--text text-capitalize"
            @click="printBill"
            >Cetak Pembayaran</v-btn
          >

          <!-- <v-btn class="primary white--t  ext text-capitalize" to="/cart"
            >Batal</v-btn
          > -->
        </v-card-actions>
      </v-container>
      <v-container fluid>
        <h1>Pembayaran</h1>
        <img v-bind:src="qrcodeCoba" alt="qr-code" />
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueHtml2pdf from "vue-html2pdf";

export default {
  data() {
    return {
      baseURL: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=`
    };
  },
  components: {
    VueHtml2pdf
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
    },
    idPesan() {
      // return Math.floor(Math.random() * 300);
      let a = 0;
      a += `00${1}`;
      return a;
    },
    qrcodeCoba() {
      return this.baseURL + this.jml;
    }
  },
  methods: {
    printBill() {
      this.$refs.html2Pdf.generatePdf();
    }
  },
  mounted() {
    this.card;
    scrollTo(0, 0);
  }
};
</script>

<style></style>
