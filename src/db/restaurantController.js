'use strict';

import Restaurant from './schema';
import { Connector } from './connector';
import Promise from 'bluebird';
import mongoose from 'mongoose';


class Controller {
    constructor() {

    }

    findById(id) {
        return new Promise((resolve, reject) => {
            var res = Restaurant.find({ restaurant_id : id});
            resolve(res);
        });        
    }

}

module.exports = {Controller}