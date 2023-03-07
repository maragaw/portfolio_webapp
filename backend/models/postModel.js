const mongoose = require('mongoose')
//mongodb alone is schema-less, mongoose is needed for creating data schemas

const Schema = mongoose.Schema
//enforce these properties of a post
const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, { timestamps: true })

//create a model from this Schema
module.exports = mongoose.model('Post', postSchema)


