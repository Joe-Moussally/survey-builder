<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Answer;

class AnswerController extends Controller
{
    //function that add awnsers of a question
    public function addAnswers(Request $Request) {
        $answer_to_add = $Request->answer;
        $question_id = $Request->question_id;

        $answer = new Answer;
        $answer->answer = $answer_to_add;
        $answer->question_id = $question_id;
        $answer->save();

        return response()->json([
            'answer' => $answer,
            'message' => 'added'
        ],200);
    }
}
