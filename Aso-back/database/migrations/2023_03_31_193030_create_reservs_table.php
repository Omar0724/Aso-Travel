<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservs', function (Blueprint $table) {
            $table->id();
            $table->string("firstName");
            $table->string("lastName");
            $table->string("username");
            $table->string("nationality");
            $table->date("datebirthday");
            $table->string("gender");
            $table->string("wherefrom");
            $table->string("whereto");
            $table->date("dateD");
            $table->date("dateR");
            $table->string("passport");
            $table->string("class");
            $table->string("pmethode");
            $table->string("cardnumber")->nullable();
            $table->string("cvc")->nullable();
            $table->string("month")->nullable();
            $table->string("year")->nullable();
            $table->unsignedBigInteger("owner");
            $table->foreign("owner")->references("id")->on("accounts");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservs');
    }
};
