var question1 = {
	quest : "Where Is Paris ?",
	ans1 : "Norway",
	ans2 : "France",
	ans3 : "America",
	ans4 : "VietNam",
	answer : "2"
}

var question2 = {
	quest : "What Is Ruby On Rails ?",
	ans1 : "Programming Language",
	ans2 : "Game",
	ans3 : "Framework",
	ans4 : "Action Film",
	answer : "3"
}

var question3 = {
	quest : "Who Is The Thirth President Of America ?",
	ans1 : "Abraham Lincoln",
	ans2 : "Thomas Jefferson",
	ans3 : "Barack Obama",
	ans4 : "Bill Clinton",
	answer : "2"
}

var question4 = {
	quest : "The Winner Of World Cup 2006 ?",
	ans1 : "Brazil",
	ans2 : "France",
	ans3 : "Italia",
	ans4 : "Argentina",
	answer : "3"
}

var question5 = {
	quest : "The Player Which Is Called 'Alient' ?",
	ans1 : "Cristiano Ronaldo",
	ans2 : "Ronaldo De Lima",
	ans3 : "Lionel Messi",
	ans4 : "Pele",
	answer : "2"
}

var question6 = {
	quest : "Who Created Java Language ?",
	ans1 : "James Gosling",
	ans2 : "Jack Ma",
	ans3 : "Mark Zuckerberg",
	ans4 : "Steve Jobs",
	answer : "1"
}

var question7 = {
	quest : "Where Did Putin Was Born ?",
	ans1 : "Belorechensk",
	ans2 : "Sankt-Peterburg",
	ans3 : "Moscow",
	ans4 : "Borovsk",
	answer : "2"
}

var question8 = {
	quest : "The Player Which Is Called 'Angel'?",
	ans1 : "Kaka",
	ans2 : "Marco Reus",
	ans3 : "Andrea Pirlo",
	ans4 : "David Beckham",
	answer : "1"
}

var question9 = {
	quest : "Where Is Paraha ?",
	ans1 : "Czech Republic",
	ans2 : "England",
	ans3 : "Japan",
	ans4 : "China",
	answer : "1"
}

var question10 = {
	quest : "Compiler Of Assembly Language ?",
	ans1 : "C",
	ans2 : "Java",
	ans3 : "Assembler",
	ans4 : "Intepreter",
	answer : "3"
}

var list_quest = [];

list_quest.push(question1);
list_quest.push(question2);
list_quest.push(question3);
list_quest.push(question4);
list_quest.push(question5);
list_quest.push(question6);
list_quest.push(question7);
list_quest.push(question8);
list_quest.push(question9);
list_quest.push(question10);

var list_ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var list_btn_ans_id = ['ans_a', 'ans_b', 'ans_c', 'ans_d'];
var list_true_false_id = ['true_false_a', 'true_false_b', 'true_false_c', 'true_false_d'];
var flag = 0;

function press(button_id){
	var button = document.getElementById(button_id);
	button.style.backgroundColor = "#e94820";
	button.style.color = "white";

	var question = document.getElementById('question');
	var index_of_quest = 0;
	for(var i = 0 ; i < list_quest.length ; i++){
		if(question.innerText.localeCompare(list_quest[i].quest) == 0){
			index_of_quest = i;
			break;
		}
	}

	for(var i = 0 ; i < list_btn_ans_id.length ; i++){
		if(list_btn_ans_id[i] != button_id){
			var btnTemp = document.getElementById(list_btn_ans_id[i]);
			btnTemp.style.backgroundColor = "#b0e2ff";
			btnTemp.style.color = "black";
		}
		else{
			list_ans[index_of_quest] = i + 1;
		}
	}
}

function toNextQuest(){
	var current_quest = document.getElementById('question');
	var i;
		
	for(i = 0 ; i < list_quest.length ; i++){
		if(current_quest.innerText.localeCompare(list_quest[i].quest) == 0){
			break;
		}
	}

	if(i <= 8){
		if(flag == 1){
			for(var j = 0 ; j < list_true_false_id.length ; j++){
				var imgTemp = document.getElementById(list_true_false_id[j]);
				imgTemp.src = 'img/background.png';
			}
			checkTrueFalse(i + 1);
		}
		loadQuest(i + 1);
		
		refreshAnswer(list_btn_ans_id[j]);

		if(list_ans[i + 1] != 0){
			chooseAnswer(list_btn_ans_id[list_ans[i + 1] - 1]);
		}

		if(i == 0){
			enableBtn('previous');
		}

		if(i + 1 == 9){
			disableBtn('next');
		}
	}
}

function toPreviousQuest(){
	var current_quest = document.getElementById('question');
	var i;
	
	for(i = 0 ; i < list_quest.length ; i++){
		if(current_quest.innerText.localeCompare(list_quest[i].quest) == 0){
			break;
		}
	}

	if(i >= 1){
		if(flag == 1){
			for(var j = 0 ; j < list_true_false_id.length ; j++){
				var imgTemp = document.getElementById(list_true_false_id[j]);
				imgTemp.src = 'img/background.png';
			}
			checkTrueFalse(i - 1);
		}
		loadQuest(i - 1);

		refreshAnswer();

		if(list_ans[i - 1] != 0){
			chooseAnswer(list_btn_ans_id[list_ans[i - 1] - 1]);
		}

		if(i == 1){
			disableBtn('previous');
		}

		if(i == 9){
			enableBtn('next');
		}
	}
}

function submit(){
	if(flag == 0){
		for(var i = 0 ; i < list_ans.length ; i++){
			if(list_ans[i] == 0){
				alert("You Must Complete All Question !!");
				return;
			}
		}

		var count = 0;

		for(var i = 0 ; i < list_ans.length ; i++){
			if(list_ans[i] == Number(list_quest[i].answer)){
				count ++;
			}
		}
		if(count == 10){
			window.location.href = "congrat.html";
			return;
		}
		else{
			var list_btn = document.getElementsByClassName('answer');
			for(var i = 0 ; i < list_btn.length ; i++){
				list_btn[i].onclick = null;
			}
			loadQuest(0);
			if(btnIsEnable('next') == false){
				enableBtn('next');
			}
			if(btnIsEnable('previous') == true){
				disableBtn('previous');
			}
			calculateResult();
			checkTrueFalse(0);
			refreshAnswer();
			chooseAnswer(list_btn_ans_id[list_ans[0] - 1]);
			flag = 1;
		}
	}
}

function loadQuest(quest_id){
	var current_quest = document.getElementById('question');

	current_quest.innerText = list_quest[quest_id].quest;

	var ans = document.getElementById(list_btn_ans_id[0]);
	ans.innerText = 'A. ' + list_quest[quest_id].ans1;
	ans = document.getElementById(list_btn_ans_id[1]);
	ans.innerText = 'B. ' + list_quest[quest_id].ans2;
	ans = document.getElementById(list_btn_ans_id[2]);
	ans.innerText = 'C. ' + list_quest[quest_id].ans3;
	ans = document.getElementById(list_btn_ans_id[3]);
	ans.innerText = 'D. ' + list_quest[quest_id].ans4;
}

function disableBtn(btn_id){
	var btn = document.getElementById(btn_id);
	btn.style.backgroundColor = '#908784'; 
	btn.style.cursor = 'auto';
}

function enableBtn(btn_id){
	var btn = document.getElementById(btn_id);
	btn.style.backgroundColor = '#e94820';
	btn.style.cursor = 'pointer';
}

function refreshAnswer(){
	for(var i = 0 ; i < list_btn_ans_id.length ; i++){
		var btn = document.getElementById(list_btn_ans_id[i]);
		btn.style.backgroundColor = "#b0e2ff";
		btn.style.color = "black";
	}
}

function chooseAnswer(btn_id){
	var btn = document.getElementById(btn_id);
	btn.style.backgroundColor = "#e94820";
	btn.style.color = 'white';
}

function btnIsEnable(btn_id){
	var btn = document.getElementById(btn_id);
	if(btn.style.backgroundColor === "rgb(233, 72, 32)"){
		return true;
	}
	return false;
}

function calculateResult(){
	var point = 0;
	for(var i = 0 ; i < list_ans.length ; i++){
		if(list_ans[i] == Number(list_quest[i].answer)){
			point++;
		}
	}
	var result = document.getElementById('result');
	result.innerText += '  ' + point + ' / 10';
}

function checkTrueFalse(index){
	var true_img =  document.getElementById(list_true_false_id[Number(list_quest[index].answer) - 1]);
	true_img.src = "img/true.png";		
	if(list_ans[index] != Number(list_quest[index].answer)){
		var false_img = document.getElementById(list_true_false_id[list_ans[index] - 1]);
		false_img.src = "img/false.png";
	}
}