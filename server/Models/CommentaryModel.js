
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentarySchema = new Schema({
	time : {
		 type : String,
		 required : true,
	},
	comID : {
		 type : String,
		 required : true,
	},
	commentary : {
		 type : String,
		 required : true,
	},
	pseudo : {
		 type : String,
		 required : true,
	},
	articleID : {
		 type : String,
		 required : true
	}
})
const CommentaryModel = mongoose.model("Commentaires", CommentarySchema);

module.exports = CommentaryModel;