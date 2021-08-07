import express from 'express'
import Productos from '../src/classes.js'

const router = express.Router();

let MisProductos = new Productos;


router.get('/productos/listar',(req,res) =>{

  if(MisProductos.leer().length == 0) {
    res.status(400).json({error : 'no hay productos cargados'})
  } else {
    res.json(MisProductos.leer());
  }

})

router.get('/productos/listar/:id',(req,res) => {
  const idProducto = req.params.id;
  if (MisProductos.getProducto(idProducto) == undefined) {
    res.status(400).json({error : 'producto no encontrado'});
  } else {
    res.json(MisProductos.getProducto(idProducto));
  };
});

router.put('/productos/actualizar/:id', (req,res) => {
    const idUpdate = req.params.id;
    const body = req.body;

    let productoUpdate = MisProductos.getProducto(idUpdate);

    productoUpdate.nombre = body.nombre;
    productoUpdate.precio = body.precio;
    productoUpdate.thumbnail = body.thumbnail;

    res.json(productoUpdate);
})

router.post('/productos/guardar',(req,res) => {
  const newProduct = req.body;
  console.log(newProduct);
   const nuevoProducto = {
      id : MisProductos.leer().length + 1,
      nombre : newProduct.nombre,
      precio : newProduct.precio,
      thumbnail : newProduct.thumbnail
    };

    MisProductos.guardar(nuevoProducto);

    res.json(nuevoProducto);
})

router.delete('/productos/borrar/:id', (req,res) => {
    const idDelete = req.params.id;
    if (idDelete > MisProductos.leer().length || idDelete < 1) { res.status(400).json({error : 'parametro invalido'})}
    res.json(MisProductos.getProducto(idDelete));
    MisProductos.delete(idDelete);
})


export default router;