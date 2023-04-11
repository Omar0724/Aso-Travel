<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reservs;

class Controll_reservs extends Controller
{
    public function reserv(Request $req){
        $reserv = new reservs();
        $reserv->firstName = $req->input("firstName");
        $reserv->lastName = $req->input("lastName");
        $reserv->username = $req->input("username");
        $reserv->nationality = $req->input("nationality");
        $reserv->datebirthday = $req->input("datebirthday");
        $reserv->gender = $req->input("gender");
        $reserv->wherefrom = $req->input("wherefrom");
        $reserv->whereto = $req->input("whereto");
        $reserv->dateD = $req->input("dateD");
        $reserv->dateR = $req->input("dateR");
        $reserv->passport = $req->input("passport");
        $reserv->class = $req->input("class");
        $reserv->pmethode = $req->input("pmethode");
        $reserv->cardnumber = $req->input("cardnumber");
        $reserv->cvc = $req->input("cvc");
        $reserv->month = $req->input("month");
        $reserv->year = $req->input("year");
        $reserv->save();
        return response()->json(["status"=>"Success"]);
    }
}
