const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema (

    {
        clientID: {type: Schema.Types.ObjectId, ref:"User"},
        spaceID: {type: Schema.Types.ObjectId, ref:"Space"},
        startDate: String,
        startTime: String,
        pricePerHour: Number,
        discount: Number,
        priceWithDiscount: Number,
        isCancelled: {type: Boolean, default: false},
        cancelled: {
            date: String, 
            cancelledBy: {type: Schema.Types.ObjectId, ref:"User"}, 
            refund: {type:Number, default: 0}
        },
        //review: {type: Schema.Types.ObjectId, ref:"Review"}
    },
    {   timestamps:
        {created_at: "created_at",
         updated_at: "updated_at"}
    }

)

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

