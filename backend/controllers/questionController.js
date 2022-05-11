const asyncHandler = require('express-async-handler')
const Question = require('../models/programmingModel')
const Behavioral = require('../models/behavioralModel')

//@desc Get Programming Question
//@route GET /api/programming-question
//@access Public
const getProgrammingQuestion = asyncHandler( async (request, response) => {
	const questions = await Question.findOne() 
	response.json(questions)
})

//@desc Get Programming Question
//@route GET /api/programming-question
//@access Public
const getProgrammingQuestions = asyncHandler( async (request, response) => {
	const questions = await Question.find() 
	response.json(questions)})

//@desc Get Star Question
//@route GET /api/star-question
//@access Public
const getStarQuestion = asyncHandler( async (request, response) => {
	const questions = await Behavioral.findOne() 
	response.json(questions)})

//@desc Get Star Questions
//@route GET /api/star-questions
//@access Public
const getStarQuestions = asyncHandler( async (request, response) => {
	const questions = await Behavioral.find() 
	response.json(questions)})

module.exports =  {
	getProgrammingQuestion,
	getProgrammingQuestions,
	getStarQuestion,
	getStarQuestions,
}