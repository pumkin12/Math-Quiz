playerone_name=localStorage.getItem("player1_name");
playertwo_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=playerone_name+" : ";
document.getElementById("player2_name").innerHTML=playertwo_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn -"+playerone_name;
document.getElementById("player_answer").innerHTML="Answer turn -"+playertwo_name;

function send(){
    var number1=document.getElementById("Number1").value;
    console.log("first number- "+number1);

    var number2=document.getElementById("Number2").value;
    console.log("second number- "+number2);

    question="<h4 id='wordDisplay'>Q. "+number1+"x"+number2+"</h4>";
    answer="<br>Answer:<input type='number' id='inputbox'>";
    button="<br><br><button class='btn btn-succes' onclick='check()'>Check</button>";

    document.getElementById("output").innerHTML=question+answer+button;

}
