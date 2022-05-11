const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
	Question: String,
	Solution: String	
}) 

module.exports = mongoose.model('Question', questionSchema,"programming")