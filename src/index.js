import express from 'express';
import path from 'path';
import rutaProductos from '../routes/products.js'

const app = express();

const puerto = 3000 ;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use('/api', rutaProductos);
