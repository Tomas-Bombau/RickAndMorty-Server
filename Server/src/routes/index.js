const express = require('express');
const router = express.Router();

//Controllers
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handleFavorites')


// Configura las rutas con los paths especificados
router.get('/character/:id', getCharById); // Ruta para obtener un personaje por ID
router.get('/login', login); // Ruta para mostrar el formulario de inicio de sesión
router.post('/fav', postFav); // Ruta para agregar un favorito
router.delete('/fav/:id', deleteFav); // Ruta para eliminar un favorito por ID

// Exporta el router
module.exports = router;