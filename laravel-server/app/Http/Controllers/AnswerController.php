<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Answer;

class AnswerController extends Controller
{
    //function that add awnsers of a question
    //takes arrays of objects(answers) as:
    //[
    //     {'answer':'---','question_id','3'},
    //     ...
    // ]
    public function addAnswers(Request $Request) {

        $a = json_decode($Request->answer);

        $answer = new Answer;
        $answer->answer = $a->value;
        $answer->question_id = $a->question_id;
        $answer->save();

        return response()->json([
           'answers' => $a->question_id
        ],200);
    }

    public function getAnswers(Request $Request) {

        $answers = Answer::all()->where('question_id',$Request->id);

        return response()->json([
            'answers' => $answers
        ],200);
    }
}
