const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema({
    pokemon:{
        eletric:{
            name:String,
            avatarImage:String,
            price:Number
        },
        fire:{
            name:String,
            avatarImage:String,
            price:Number
        },
        water:{
            name:String,
            avatarImage:String,
            price:Number
        },
        grass:{
            name:String,
            avatarImage:String,
            price:Number
        },
        
    }
})