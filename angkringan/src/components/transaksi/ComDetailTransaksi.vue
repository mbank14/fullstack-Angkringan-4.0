<template>
  <div>
    <h1>ini detail transaksi</h1> 
    <div v-for="kiki in detailTransaksion" :key="kiki.id">
        <div v-for="koko in kiki" :key="koko.id">
            {{ koko }}
        </div>
    </div>
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
                            harga: 1000,
                            qyt:3,
                            
                        },
                        {
                            id: "#31212",
                            nama: "sarung",
                            deskripsi: "sarung gajah duduk",
                            harga: 1000,
                            qyt:3,
                            
                        },
                        {
                            id: "#31212",
                            nama: "sarung",
                            deskripsi: "sarung gajah duduk",
                            harga: 1000,
                            qyt:3,
                            
                        },
                        {
                            id: "#31212",
                            nama: "sarung",
                            deskripsi: "sarung gajah duduk",
                            harga: 1000,
                            qyt:3,
                            
                        },
                    ]
                },
            ]
        }
    },
}
</script>

<style>

</style>