<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\accounts;

class Controll_accs extends Controller
{
    public function signup(Request $req){
        $checkEmail = accounts::where('email',$req->input("email"))->get();
        if (count($checkEmail)){
            return response()->json(["status"=>"Failed"]);
        }
        $newAcc = new accounts();
        $newAcc->email = $req->input("email");
        $newAcc->password = $req->input("password");
        $newAcc->save();
        return response()->json(["status"=>"Success"]);
    }
    public function login(Request $req){
        $Account = accounts::where([['email','=',$req->input("email")],['password','=',$req->input("password")]])->get();
        if (!count($Account)){
            return response()->json(["status"=>"Failed"]);
        }
        return response()->json(["status"=>"Success","AccountId"=>$Account[0]->id]);
    }
}
