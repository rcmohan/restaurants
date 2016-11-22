import mongoose from 'mongoose';
import Promise from 'bluebird';

class Connector {

    constructor() {
        mongoose.connect('mongodb://localhost/restaurant');
    }

    getConnection() {
        return new Promise((resolve, reject) => {
            var conn = mongoose.connection;
            conn.on('connected', function() {
                resolve(conn);
            });
            conn.on('error', function(e) {
                console.log(e);
                reject();
            });
        });
    }

}

module.exports = {Connector};
