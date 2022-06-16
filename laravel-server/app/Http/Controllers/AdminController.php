<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    
    public function createSurvey() { //pass token in header to get id of user

        $user = response()->json(auth()->user());
        $id = $user->original->id;


        return response()->json([
            'user' => $user
        ],200);
    }

}
