var arrayOfNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arrayOfOpe = ['+', '-', '/', '*', '^', '\u221A'];

function rFact(num){
	if (num === 0){ 
		return 1; 
	}
	else{ 
		return num * rFact( num - 1 ); 
	}
}

function press(id){
	var screen = $('#screen');
	if(id == 'btn_reset'){
		screen.val('');
		return null;
	}
	if(id == 'btn_square'){
		screen.val(screen.val() + '^2');
		return null;
	}
	var button = document.getElementById(id);
	var text = button.innerText;
	screen.val(screen.val() + text);
}

function result(){
	var screen = $('#screen');
	var expression = screen.val();
	if(expression.indexOf("!") >= 0){
		if(expression.indexOf("!") == 0){
			screen.val("Syntax Error");
			return null;
		}
		var index = expression.indexOf("!");
		if(arrayOfNum.indexOf(expression.charAt(index + 1)) >= 0){
			screen.val("Syntax Error");
			return null;
		}
		while(index != -1){
			var factor = "";
			var num = "";
			var i;
			for(i = index - 1; i >= 0 ; i--){
				if(arrayOfOpe.indexOf(expression.charAt(i)) >= 0){
					break;
				}
			}
			for(var j = i + 1 ; j < index ; j++){
				num += expression.substring(j, j + 1);
			}
			factor = num + "!";
			num = rFact(Number(num));
			expression = expression.replace(factor, num);
			index = expression.indexOf("!");
		}
		screen.val(expression);
	}

	if(expression.indexOf('\u221A') >= 0){
		var numBeforeText = "";
		var numBefore = 1;
		var numArr = [];
		var index = expression.indexOf('\u221A');
		var pivot;
		var factor = "";
		for(pivot = index - 1 ; pivot >= 0 ; pivot--){
			if(arrayOfOpe.indexOf(expression.charAt(pivot)) >= 0){
				break;
			}
		}
		for(var j = pivot + 1 ; j < index ; j++){
			numBeforeText += expression.charAt(j);
		}
		if(numBeforeText.localeCompare('') == 0){
			numBefore = 1;
		}
		else{
			numBefore = Number(numBeforeText);
		}
		for(var i = 0 ; i < expression.length ; i++){
			if(expression.charAt(i) == '\u221A'){
				var temp = "";
				for(var j = i + 1 ; j < expression.length ; j++){
					if(arrayOfNum.indexOf(expression.charAt(j)) >= 0){
						temp += expression.charAt(j);
						if(j == expression.length - 1){
							numArr.push(temp);
						}
					}
					else {
						numArr.push(temp);
						temp = "";
						break;
					}
				}
			}
		}
		pivot = 1;
		factor += numBeforeText;
		pivot *= numBefore;
		for(var i = 0 ; i < numArr.length ; i++){
			factor += '\u221A' + numArr[i];
			pivot *= Math.sqrt(Number(numArr[i]));
		}
		expression = expression.replace(factor, pivot);
		screen.val(expression);
	}

	if(expression.indexOf("^") >= 0){
		if(expression.indexOf("^") == 0){
			screen.val("Syntax Error");
			return null;
		}
		var index = expression.indexOf("^");
		if(arrayOfNum.indexOf(expression.charAt(index + 2)) >= 0){
			screen.val("Syntax Error");
			return null;
		}
		while(index != -1){
			var factor = "";
			var num = "";
			var i;
			for(i = index - 1; i >= 0 ; i--){
				if(arrayOfOpe.indexOf(expression.charAt(i)) >= 0){
					if(expression.charAt(i) == '^' || expression.charAt(i) == '!'){
						screen.val("Syntax Error");
						return null;
					}
				}
			}
			for(var j = i + 1 ; j < index ; j++){
				num += expression.substring(j, j + 1);
			}
			factor = num + "^2";
			num = Math.pow(Number(num), 2);
			expression = expression.replace(factor, num);
			index = expression.indexOf("^");
		}
		screen.val(expression);
	}
	if(expression.indexOf("!") == -1 && expression.indexOf('\u221A') && expression.indexOf("^") == -1){
		var result = eval(expression);
		screen.val(result);
	}	
}