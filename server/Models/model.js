const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    description: {
        type: String,
        // required: true,
    },
    title: {
        type: String,
        // required: true,
    },

    text: {
        type: String,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        // required: true,
    },
    author: {
        type: String,
        // required: true,
    },
    image: {
        type: Array,
        // required: true,
    },
    commentaryID: {
        type: String,
    },
});

const CommentarySchema = new Schema({
    time: {
        type: String,
      
        // required: true,
    },
    comID: {
        type: String,
        // required: true,
    },
    commentaryText: {
        type: String,
        // required: true,
    },
    pseudo: {
        type: String,
        // required: true,
    },
    articleID: {
        type: String,
        // required: true,
    },
    commentaryIndex : {
        type : Number
    }
});

const ArticleModel = mongoose.model("Articles", ArticleSchema);
const CommentaryModel = mongoose.model("Commentaires", CommentarySchema);

module.exports = {
    ArticleModel,
    CommentaryModel,
};
