const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());

/**
 * Rotas /routes
 */

 /**
  * Metodos HTTP
  * GET: Acessar conteudos
  * POST: Criar uma nova informação
  * PUT: Alterar informação
  * DELETE: Deletar
  */

  /**
   * Parametros
   * Query: Parametros nomeados enviados na rota e servem para filtros e paginação.
   * Route: Parametros para identificar recursos (sem nome)
   * Body: Corpo da requisição
   */

   /**
    * Banco de Dados
    * SQL: MySql, SQLite
    * NoSQL: MongoDB
    */

app.use(routes);

app.listen(3333);

