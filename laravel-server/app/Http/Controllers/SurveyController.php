<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\JWTController;

use App\Models\Survey;
use App\Models\Question;
use App\Models\Value;

class SurveyController extends Controller
{
    //api to get the survey titles
    public function getSurveys() {
        $surveys = Survey::all();

        return response()->json([
            'surveys' => $surveys
        ],200);
    }

    //get a survey and it's questions by id
    public function getSurveyDetails(Request $Request) {
        $survey = Survey::find($Request->id);
        $questions = Survey::find($Request->id)->questions;

        return response()->json([
            'survey' => $survey,
            'questions' => $questions
        ],200);
    }

}
