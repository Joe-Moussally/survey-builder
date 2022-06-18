<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\JWTController;

use App\Models\Survey;

class SurveyController extends Controller
{
    //api to get the survey titles
    public function getSurveys() {
        $surveys = Survey::all();

        return response()->json([
            'surveys' => $surveys
        ],200);
    }

    //get surveys published by admin
    public function getMySurveys(Request $Request) {
        $surveys = Survey::where('user_id',$Request->user_id)->get();

        return response()->json([
            'surveys' => $surveys
        ],200);
    }
}
