const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    description: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: false,
    },
});
const ArticleModel = mongoose.model("Articles", ArticleSchema);
module.exports = ArticleModel;
