
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "Iphone is one of the most expensive cellphones of the world") {
		correct++;
}
	if (question2 == "Terrifed of being") {
		correct++;
}	
	if (question3 == "O estudas") {
		correct++;
}
	if (question4 == "Just") {
		correct++;
}
	if (question5 == "Amanda read the whole list off and she didn't see her name there.") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.gif", "img/nm.gif", "img/almost.gif", "img/lose.gif"];
	var messages = ["Parabéns, você completou o quiz, continue praticando seu ingles com conversas e via chat também. Muito obrigado por participar! :)", "ok?", "tá indo bem hein", "Por pouco, tenta de novo!", "Tente as outros quiz antes de vir aqui"];
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct > 3 && correct < 5) {
		score = 3;
	}

	if (correct > 1 && correct < 4) {
		score = 2;
	}

	if (correct > 0 && correct < 2) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "você acertou " + correct + "! ";
	document.getElementById("picture").src = pictures[score];
	}


	
