const express = require('express');
const router = express.Router()
const path = require('path')
const {getProgrammingQuestion,getProgrammingQuestions,
	 		getStarQuestion, getStarQuestions} = require('../controllers/questionController');



router.get("/", getIndex);		   // Get endpoint for index.html
function getIndex(request, response){	//callback function for request
	response.sendFile(path.resolve(__dirname + '/../../index.html')); //send index.html file
}

router.get('/api/programming-question', getProgrammingQuestion);

router.get('/api/programming-questions', getProgrammingQuestions);

router.get('/api/star-question', getStarQuestion);

router.get('/api/star-questions', getStarQuestions);


module.exports = router