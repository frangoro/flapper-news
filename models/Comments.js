var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	upvotes: {type:Number, default:0},
	author: String,
	body: String,
	post:{type: mongoose.Schema.Types.ObjectId, ref:'Post'}
});

mongoose.model('Comment', CommentSchema);