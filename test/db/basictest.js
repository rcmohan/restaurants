'use strict';

import { expect} from 'chai';
import { Connector } from '../../src/db/connector';
import Promise from 'bluebird';
import mongoose from 'mongoose';

describe('Check connector', function () {
    it('Look to get a connection', function (done) {
        var connector = Promise.promisifyAll(new Connector());
        connector.getConnection().then(conn => { 
            expect(conn).to.be.ok;
            done();
        });
    });
    after(function(done){
            mongoose.connection.close();
            done();
    });
});
