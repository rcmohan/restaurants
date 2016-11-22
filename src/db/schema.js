import mongoose from 'mongoose';

const RestaurantSchema = mongoose.Schema({
        "address": {
        "building": String,
        "coord": [Number],
        "street": String,
        "zipcode": String
        },
        "borough": String,
        "cuisine": String,
        "grades":  [{ "date": Date, "grade": String, "score": Number }],
        "name": String,
        "restaurant_id": String
    });

export default mongoose.model('Restaurant', RestaurantSchema);

// module.exports = {RestaurantSchema};