<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Question;
use App\Models\Value;

class QuestionController extends Controller
{
    //function that gets the question's values
    public function getValues(Request $Request) {
        $values = Question::find($Request->id)->values;

        return response()->json([
            'values' => $values
        ],200);
    }
}
