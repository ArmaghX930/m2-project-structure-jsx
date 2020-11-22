const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceSchema = new Schema (

    {	
    title: String,
    description: String,
    locationUrl: String,
    address: String,
    contactInfo: String,
    capacity: Number,
    providerID: [{type: Schema.Types.ObjectId, ref:"User"}],
    rating: Number,
    isActive: Boolean,
    imageUrl: [String],
    welcomePhrase: String,
    amenities: [{type: String, enum: ['WiFi', 'WC', 'Coffee machine', 'Refrigerator', 'Climate Control', 'Phone booth', 'Terrace', 'Indoor smoking patio', 'Ergonomic Equipment', 'Kitchen', 'Canteen']}],
    pricePerHour: Number,
    priceCurrency: String,
    discount: {type: Number, min:0, max:1, default:0},
    //reviews: [{reviewID: {type: Schema.Types.ObjectId, ref:"Review"}}]
    },
    {   timestamps:
        {created_at: "created_at",
         updated_at: "updated_at"}
    }
)

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;