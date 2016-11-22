
'use strict';

import { expect} from 'chai';
import { Connector } from '../../src/db/connector';
import Promise from 'bluebird';
import mongoose from 'mongoose';

describe('Check connector', function () {
    it('Look to get a connection', function (done) {
        var con = Promise.promisifyAll(new Connector());
        var prom = con.getConnection();
        prom.then(printit);
        expect(con).to.be.ok;
        done();
    });
    after(function(done){
            mongoose.connection.close();
            done();
    });
});


function printit(res) {
    console.log(res);
}

