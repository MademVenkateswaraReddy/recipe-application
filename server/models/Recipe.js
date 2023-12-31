const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients: {type: String},
    description: {type: String},
    imageUrl: {type: String},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const RecipeModel = mongoose.model('recipes', RecipeSchema)
module.exports = RecipeModel;