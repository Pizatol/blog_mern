const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },
    date : {
        type : String,
        required: true
    }, 
    author : {
        type : String,
        required : true
    },
    image : {
        type : Array,
        required : false
    }
});
const ArticleModel = mongoose.model("Articles", ArticleSchema);
module.exports = ArticleModel;
