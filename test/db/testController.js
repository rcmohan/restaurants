'use strict';

import { expect} from 'chai';
import Restaurant from '../../src/db/schema';
import { Connector } from '../../src/db/connector';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import {Controller} from '../../src/db/restaurantController';


describe('Check restaurant controller', function () {
    it('Invoke some functions', function (done) {
        var conn = Promise.promisifyAll(new Connector());
        conn.getConnection().then((con, err) => {
            if(err) {
                console.log(err);
                done();
            } else {
                console.log("initialized db");
                var cont = Promise.promisifyAll(new Controller());
                cont.findById("40356018").then((res, err) => { 
                    if(err) console.log(err);
                    expect(res[0].name).to.equal('Riviera Caterer`');
                    done(); 
                });
            }
        });
        console.log('done');
        done();
    });
    after(function(done){
            mongoose.connection.close();
            done();
    });
});

