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
        $answers_to_add = json_decode($Request->answers);
        
        // foreach ($answers_to_add as $answer_to_add) {
        //     $answer = new Answer;
        //     $answer->answer = $answer_to_add->answer;
        //     $answer->question_id = $answer_to_add->$question_id;
        //     $answer->save();
        // }

        return response()->json([
           'answers' => $answers_to_add
        ],200);
    }
}
