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
const router = Express();

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

//producto elegido
app.get('/productos/id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Productos')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//producto elegido accesorios
app.get('/productos/accesorios%20%id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Accesorios')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//producto elegido hogar
app.get('/productos/hogar%20%id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Hogar')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//producto elegido mascotas
app.get('/productos/mascotas%20%id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Mascotas')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//producto elegido tecnologia
app.get('/productos/tecnologia%20%id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Tecnologia')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//producto elegido vestuario
app.get('/productos/vestuario%20%id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Vestuario')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//producto elegido deportes
app.get('/productos/deportes%20%id=:id', (req, res, next) => {
  const id = req.params.id;
  console.log('ID:', id);
  console.log('alguien hizo get en la ruta', `/producto/${id}`);
  baseDeDatos
  .collection('Deportes')
  .findOne(new ObjectId(id), (err, result) => {
    if (err){
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  })
});

//consultar hogar
app.get('/productos/hogar', (req, res) => {
  console.log('alguien hizo get en la ruta /productos/hogar');
  baseDeDatos
    .collection('Hogar')
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

//consultar deportes
app.get('/productos/deportes', (req, res) => {
  console.log('alguien hizo get en la ruta /productos/deportes');
  baseDeDatos
    .collection('Deportes')
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

//consultar tecnologia
app.get('/productos/tecnologia', (req, res) => {
  console.log('alguien hizo get en la ruta /productos/tecnologia');
  baseDeDatos
    .collection('Tecnologia')
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

//consultar mascotas
app.get('/productos/mascotas', (req, res) => {
  console.log('alguien hizo get en la ruta /productos/mascotas');
  baseDeDatos
    .collection('Mascotas')
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

//consultar accesorios
app.get('/productos/accesorios', (req, res) => {
  console.log('alguien hizo get en la ruta /productos/accesorios');
  baseDeDatos
    .collection('Accesorios')
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

//consultar vestuario
app.get('/productos/vestuario', (req, res) => {
  console.log('alguien hizo get en la ruta /productos/vestuario');
  baseDeDatos
    .collection('Vestuario')
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

//agregar hogar y jardin
app.post('/producto/nuevo/hogar', (req, res) => {
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
      baseDeDatos.collection('Hogar').insertOne(datosProducto, (err, result) => {
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

//agregar deportes
app.post('/producto/nuevo/deportes', (req, res) => {
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
      baseDeDatos.collection('Deportes').insertOne(datosProducto, (err, result) => {
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

//agregar tecnologia
app.post('/producto/nuevo/tecnologia', (req, res) => {
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
      baseDeDatos.collection('Tecnologia').insertOne(datosProducto, (err, result) => {
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

//agregar mascotas
app.post('/producto/nuevo/mascotas', (req, res) => {
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
      baseDeDatos.collection('Mascotas').insertOne(datosProducto, (err, result) => {
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

//agregar accesorios
app.post('/producto/nuevo/accesorios', (req, res) => {
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
      baseDeDatos.collection('Accesorios').insertOne(datosProducto, (err, result) => {
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

//agregar vestuario
app.post('/producto/nuevo/vestuario', (req, res) => {
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
      baseDeDatos.collection('Vestuario').insertOne(datosProducto, (err, result) => {
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
