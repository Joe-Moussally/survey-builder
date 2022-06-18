<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\SurveyController;

/*JWT TOKEN*/
Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});


//admin middleware
// Route::group(['middleware' => 'admin.role'], function(){
    Route::post('/add_survey', [AdminController::class, 'createSurvey']);
    Route::post('/add_questions', [AdminController::class, 'addQuestions']);
// });

//surveys api
Route::post('/get_surveys', [SurveyController::class, 'getSurveys']);


//non-admin apis
Route::post('/add_answers', [AnswerController::class, 'addAnswers']);