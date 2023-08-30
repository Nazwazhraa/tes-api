const router = require('express').Router();
const { kategori } = require('../controllers');

// GET localhost:8080/kategori => Ambil data semua kategori
router.get('/', kategori.getDataKategori);

// // POST localhost:8080/kategori/add => Tambah data kategori ke database
router.post('/add', kategori.addDataKategori);

// // PUT localhost:8080/Kategori/2 => Edit data kategori
router.put('/edit/:id', kategori.editDataKategori);

// // DELETE localhost:8080/Kategori/delete => Delete data kategori
router.delete('/delete/:id', kategori.deleteDataKategori)

module.exports = router;