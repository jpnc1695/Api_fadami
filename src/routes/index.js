import express from 'express';
import usuarios from './UsuarioRoute.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: 'Requisição fetia'})
  })

  app.use(
    express.json(),
    usuarios
  )

}

export default routes