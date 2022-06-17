<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Survey;
use App\Models\Question;
use App\Models\Value;

class AdminController extends Controller


//question structure --->
//{'question':'---',  the question text
//'type':'---',   the question type
//'values':[--,--,--]}  the values of the answers(are null by default in case of text input)


{
    
    //add survey to db
    public function createSurvey(Request $Request) { //pass token in header to get id of user

        $user = response()->json(auth()->user());
        //get id of logged in user
        // $id = $user->original->id;

        //add survey
        $survey = new Survey;
        $survey->title = $Request->title;
        $survey->user_id = 1;
        $survey->save();

        //get survey id and add questions
        $survey_id = $survey->id;

        

        return response()->json([
            'survey_id' => $survey_id,
            'message' => 'success'
        ],200);

    }

    public function addQuestions(Request $Request) {

        $survey_id = $Request->survey_id;
        $questions = json_decode($Request->questions);

        foreach ($questions as $question) {
            //add question to table questions
            $to_add = new Question;
            $to_add->question = $question->question;
            $to_add->type = $question->type;
            $to_add->survey_id = $survey_id;
            $to_add->save();
            //get question id added
            $question_id = $to_add->id;

            $values = $question->values;
            //add values of the question to values table
            foreach ($values as $value) {
                $value_to_add = new Value;
                $value_to_add->value = $value;
                $value_to_add->question_id = $question_id;
                $value_to_add->save();
            }
        }

        return response()->json([
            'Q' => $questions
        ],200);

    }
}

    // //function to add a question
    // public function addQuestions($array) {
    //     foreach ($questions as $question) {

    //         //add question to table questions
    //         $to_add = new Question;
    //         $to_add->question = $question->question;
    //         $to_add->type = $question->type;
    //         $to_add->survey_id = $survey_id;
    //         $to_add->save();

    //         // //get the question id and store the values in values table
    //         // $question_id = $to_add->id;
    //         // //get the array of values
    //         // $values = $question->values;

    //         // for ($j=0; $j<count($values);$j++) {
    //         //     $value = $values[j];

    //         //     $value_to_add = new Value;
    //         //     $value_to_add->value = $value;
    //         //     $value_to_add->question_id = $question_id;
    //         //     $value_to_add->save();
    //         // }



    //     }
    // }
