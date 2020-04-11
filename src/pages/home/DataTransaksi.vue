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
          <span class="text-h6 text-weight-black q-pa-md">
        <span class="text-black-14">DATA TRANSAKSI</span>
      </span>
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
          label: 'KODE TRANSAKSI',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'judulbuku', align: 'center', label: 'JUDUL BUKU', field: 'judulbuku', sortable: true },
        { name: 'hargabuku', label: 'HARGA BUKU', align: 'center', field: 'hargabuku' },
        { name: 'jumlahbeli', label: 'JUMLAH BELI', align: 'center', field: 'jumlahbeli' },
        { name: 'total', label: 'TOTAL ', align: 'center', field: 'total' }
      ],
      data: [
        {
          kodetransaksi: 'JNK0101',
          namapembeli: 'JESIKA MIFTAHUL',
          judulbuku: 'METODOLOGI PENELITIAN',
          hargabuku: '70.000',
          jumlahbeli: '1',
          total: '70.000'
        },
        {
          kodetransaksi: 'JNK0606',
          namapembeli: 'NAILA TALITA',
          judulbuku: 'INTERAKSI MANUSIA DAN KOMPUTER',
          hargabuku: '39.000',
          jumlahbeli: '3',
          total: '117.000'
        },
        {
          kodetransaksi: 'JNK0202',
          namapembeli: 'SADEK SETIAWAN',
          judulbuku: 'PEMOGRAMAN 3',
          hargabuku: '50.000',
          jumlahbeli: '2',
          total: '100.000'
        },
        {
          kodetransaksi: 'JNK0303',
          namapembeli: 'KURNIA SALSABILA',
          judulbuku: 'SISTEM OPERASI',
          hargabuku: '35.000',
          jumlahbeli: '5',
          total: '175.000'
        },
        {
          kodetransaksi: 'JNK0807',
          namapembeli: 'RISKI ARIPIN',
          judulbuku: 'BAHASA INGGRIS',
          hargabuku: '30.000',
          jumlahbeli: '3',
          total: '90.000'
        },
        {
          kodetransaksi: 'JNK0505',
          namapembeli: 'RIVKY YULIANSYAH',
          judulbuku: 'TEKNIK PERAMALAN',
          hargabuku: '42.000',
          jumlahbeli: '1',
          total: '42.000'
        },
        {
          kodetransaksi: 'JNK0409',
          namapembeli: 'DIAN PURNAMA SARI',
          judulbuku: 'MANAGEMEN RESIKO TI',
          hargabuku: '55.000',
          jumlahbeli: '4',
          total: '220.000'
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
