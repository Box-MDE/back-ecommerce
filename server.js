import Express, { response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import Cors from 'cors';
import jwt_decode from 'jwt-decode';
import dotenv from 'dotenv';

import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

dotenv.config({path: './.env'});

const stringConexion = process.env.DATABASE_URL;

const client = new MongoClient(stringConexion, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let baseDeDatos;

const app = Express();

app.use(Express.json());
app.use(Cors());


app.get('/productos', (req, res) => {
  console.log('alguien hizo get en la ruta /productos');
  baseDeDatos
    .collection('Productos')
    .find()
    .limit(50)
    .toArray((err, result) => {
      if (err) {
        res.status(500).send('Error consultando los usuarios');
      } else {
        res.json(result);
      }
    });
});

app.post('/producto/nuevo', (req, res) => {
  console.log(req);
  const datosProducto = req.body;
  console.log('llaves: ', Object.keys(datosProducto));
  try {
    if (
      Object.keys(datosProducto).includes('titulo') &&
      Object.keys(datosProducto).includes('precio') &&
      Object.keys(datosProducto).includes('descripcion') &&
      Object.keys(datosProducto).includes('url')
    ) {
      // implementar código para crear vehículo en la BD
      baseDeDatos.collection('Productos').insertOne(datosProducto, (err, result) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          console.log(result);
          res.sendStatus(200);
        }
      });
    } else {
      res.sendStatus(500);
    }
  } catch {
    res.sendStatus(500);
  }
});


const main = () => {
  const port = process.env.PORT || 5000;
  client.connect((err, db) => {
    if (err) {
      console.error('Error conectando a la base de datos');
      return 'error';
    }
    baseDeDatos = db.db('ecommerce');
    console.log('baseDeDatos exitosa');
    return app.listen(port, () => {
      console.log(`escuchando puerto ${port}`);
    });
  });
};

main();
