<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="primary" :disable="loading" label="TAMBAH DATA BUKU" to="/InputDataBuku/"/>
<!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="pageview" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'KODE BUKU',
          align: 'left',
          field: row => row.kodebuku,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'judulBuku', align: 'center', label: 'JUDUL BUKU', field: 'judulbuku', sortable: true },
        { name: 'penerbit', align: 'center', label: 'PENERBIT', field: 'penerbit', sortable: true },
        { name: 'pengarang', label: 'PENGARANG', align: 'center', field: 'pengarang' },
        { name: 'tahunterbit', label: 'TAHUN TERBIT', align: 'center', field: 'tahunterbit' },
        { name: 'hargabuku', label: 'HARGA BUKU', align: 'center', field: 'hargabuku' }
      ],
      data: [
        {
          kodebuku: 'J001',
          judulbuku: 'PEMOGRAMAN 3',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'DWI ROMADHON S.KOM',
          tahunterbit: '2020',
          hargabuku: '50.000'
        },
        {
          kodebuku: 'J002',
          judulbuku: 'TEKNIK PERAMALAN',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'AHMAD CUCUS S.KOM , M.KOM',
          tahunterbit: '2020',
          hargabuku: '42.000'
        },
        {
          kodebuku: 'J003',
          judulbuku: 'SISTEM OPERASI',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'ADI WIJAYA S.KOM , M.HAN',
          tahunterbit: '2019',
          hargabuku: '35.000'
        },
        {
          kodebuku: 'J004',
          judulbuku: 'MANAGEMENT RESIKO TI',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'AYU KARTIKA PUSPA S.KOM , M.TI',
          tahunterbit: '2018',
          hargabuku: '55.000'
        },
        {
          kodebuku: 'J005',
          judulbuku: 'BAHASA INGGRIS',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'MISS SELVIE',
          tahunterbit: '2018',
          hargabuku: '30.000'
        },
        {
          kodebuku: 'J006',
          judulbuku: 'INTERAKSI MANUSIA DAN KOMPUTER',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'WIWIN SUSANTY S.KOM , M.KOM',
          tahunterbit: '2020',
          hargabuku: '39.000'
        },
        {
          kodebuku: 'J007',
          judulbuku: 'MEDOTOLOGI PENELITIAN',
          penerbit: 'FAKULTAS ILMU KOMPUTER',
          pengarang: 'TAQWAN ST M.SC',
          tahunterbit: '2020',
          hargabuku: '70.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
