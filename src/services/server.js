import restify from 'restify';
import Promise from 'bluebird';
import { Controller } from '../db/restaurantController'
import { Connector } from '../db/connector';
import mongoose from 'mongoose';

class RESTServer {


  constructor() {
    this.initializeMongo();
    this._server = restify.createServer();
    this.controller = Promise.promisifyAll(new Controller());
    var restServer = this;
  }

  start() {
    this._server.get('/restaurant/:id', this.respondWithId);
    this._server.listen(8180, () => {
      console.log('Started %s', this._server.url);
    });
  }

  getController() {
    return this.controller;
  }
  
  respondWithId(req, res, next) {
    var id = req.params.id;
    restServer.controller.findById(id).then((rstrnt) => {
      console.log('%s: %s', id, rstrnt);
      res.send(rstrnt);
    })
    next();
  }
  initializeMongo() {
    mongoose.Promise = require('bluebird');
    var conn = Promise.promisifyAll(new Connector());
    console.log('Now connecting to mongo...')
    conn.getConnection();
  }

}


var restServer = new RESTServer();
restServer.start();