const router = require('express').Router();
const routeKategori = require('./kategori');
const routeArtikel = require('./artikel');

// GET localhost:8080/kategori => Ambil data semua kategori
router.use('/kategori', routeKategori);
router.use('/artikel', routeArtikel)

module.exports = router;