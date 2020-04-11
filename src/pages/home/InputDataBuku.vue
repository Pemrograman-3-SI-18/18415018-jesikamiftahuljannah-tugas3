<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-black-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-14">Tambah Data Buku</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="KODE BUKU"
            lazy-rules
            color="black"
            v-model="kodebuku"
            :rules="[
           val => val !== null && val !== '' || 'KODE BUKU DI BUTUHKAN'
           ]">
            <template v-slot:append>
              <q-icon name="all_inclusive"/>
            </template>
          </q-input>
          <q-input
            label="JUDUL BUKU"
            lazy-rules
            color="black"
            v-model="judulbuku"
            :rules="[
           val => val !== null && val !== '' || 'JUDUL BUKU DI BUTUHKAN'
           ]">
            <template v-slot:append>
              <q-icon name="library_books"/>
            </template>
          </q-input>
          <q-input
            label="PENERBIT"
            lazy-rules
            color="black"
            v-model="penerbit"
            :rules="[
           val => val !== null && val !== '' || 'PENERBIT BUKU DI BUTUHKAN'
           ]">
            <template v-slot:append>
              <q-icon name="layers"/>
            </template>
          </q-input>
          <q-input
            label="PENGARANG"
            lazy-rules
            color="black"
            v-model="pengarang"
            :rules="[
           val => val !== null && val !== '' || 'PENGARANG BUKU DI BUTUHKAN'
           ]">
            <template v-slot:append>
              <q-icon name="portrait"/>
            </template>
          </q-input>
          <q-input
            label="TAHUN TERBIT BUKU"
            lazy-rules
            color="black"
            v-model="tahunterbit"
            :rules="[
           val => val !== null && val !== '' || 'TAHUN TERBIT BUKU DI BUTUHKAN'
           ]">
            <template v-slot:append>
              <q-icon name="today"/>
            </template>
          </q-input>
          <q-input
            label="HARGA BUKU"
            lazy-rules
            color="black"
            v-model="hargabuku"
            :rules="[
           val => val !== null && val !== '' || 'HARGA BUKU DI BUTUHKAN'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="TAMBAHKAN DATA"
              style="height: 50px"
              color="blue-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodebuku: null,
      judulbuku: null,
      penerbit: null,
      pengarang: null,
      tahunterbit: null,
      hargabuku: null
    }
  }
}
</script>

<style scoped>

</style>
