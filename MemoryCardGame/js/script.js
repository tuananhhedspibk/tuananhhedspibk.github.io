var cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", 
"card15", "card16", "card17", "card18", "card19", "card20"];

var current = null; 
var flag = false;
var count = 0;
var remainingTime = 101;
var span = document.getElementsByClassName("playagain")[0];
var modal = document.getElementById('myModal');
var bg_music = new Audio("audio/bg-music.mp3");
var run = null;

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function flip(card){
	if(flag == false){
		if($(card).hasClass('flipped')){
			return ;
		}

		$(card).toggleClass('flipped');

		if(!current){
			current = $(card);
		}
		else{
			if(flag == false){
				flag = true;
			}

			if(current.attr('data-name') != $(card).attr('data-name')){
				setTimeout(function(){
					if(current != null){
						current.toggleClass('flipped');
					}
					$(card).toggleClass('flipped');
					current = null;
					flag = false;
				}, 400);
			}
			else{
				setTimeout(function(){
					var audio = new Audio('audio/bingo.Mp3');
					audio.play();
					count++;
					$(card).css('opacity', '0');
					current.css('opacity', '0');
					current = null;
					flag = false;

					if(count == 20){
						clearInterval(run);
						$('#progressbar').find('div').clearQueue().stop();
						setContentForDialog("You Win", "Woww Impressed, You Are The Best Player In The World");
						modal.style.display = "block";
						var audioWin = new Audio("audio/soundWin.mp3");
						audioWin.play();
						bg_music.pause();
					}
				}, 400);
			}
		}
	}
}

$(function() {
	cards = cards.concat(cards);

	cards = shuffle(cards);

	var html = '';
	for(var i = 0 ; i < cards.length; i++){ 
		if(i == 0 || i == 10 || i == 20 || i == 30){
			html += '<div class="row">';
		}
		html += '<div class="card" data-name="' + cards[i] + '" id="' + cards[i] +'" onclick="flip(this)">' +
		'<div class="front"><img src="img/backFace.png"></div>' +
		'<div class="back"';
		if(i >= 0 && i <= 9){
			html += ' style="top: 99px;"';
		}
		else if(i >= 10 && i <= 19){
			html += ' style="top: 232px;"';
		}
		else if(i >= 20 && i <= 29){
			html += ' style="top: 365px;"';
		}
		else{
			html += ' style="top: 500px;"';
		}
		html += '><img src="img/' + cards[i] + '.jpg">' + '</div></div>';
		if(i == 9 || i == 19 || i == 29|| i == 39){
			html += '</div>';
		}
	}
	$('.content').html(html);
	bg_music.play();

	run = setInterval(function(){
		remainingTime--;
		if(remainingTime == 0){
			clearInterval(run);
			if(count < 20){
				setContentForDialog("You Lose", "For You, Victory Is Not In The Card.");
				modal.style.display = "block";
				var audio = new Audio("audio/soundLose.mp3");
				audio.play();
				bg_music.pause();
			}
		}
	}, 1000);
});

function progress(timeleft, timetotal, $element) {
	var progressBarWidth = timeleft * $element.width() / timetotal;
	$element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
	if(timeleft > 0) {
		setTimeout(function() {
			progress(timeleft - 1, timetotal, $element);
		}, 0);
	}
}

function setContentForDialog(header, content){
	document.getElementById("header").innerHTML = header;
	document.getElementById("mess").innerHTML = content;
}

progress(100, 100, $('#progressbar'));

span.onclick = function() {
	location.reload();
}