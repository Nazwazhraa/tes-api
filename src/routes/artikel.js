const router = require('express').Router();
const { artikel } = require('../controllers');

// GET localhost:8080/artikel => Ambil data semua artikel
router.get('/', artikel.getDataArtikel);

// // POST localhost:8080/artikel/add => Tambah data kategori ke database
router.post('/add', artikel.addDataArtikel);

// // PUT localhost:8080/artikel/2 => Edit data artikel
router.put('/edit/:id', artikel.editDataArtikel);

// // DELETE localhost:8080/artikel/delete => Delete data artikel
router.delete('/delete/:id', artikel.deleteDataArtikel)

module.exports = router;