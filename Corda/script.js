window.onload = mobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}

var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");
var slider5 = document.getElementById("myRange5");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var output5 = document.getElementById("demo5");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;

slider1.oninput = function() {
  	output1.innerHTML = this.value;
		document.getElementById("myRange1").style.backgroundColor = "";
		document.getElementById("myRange2").style.backgroundColor = "";
		document.getElementById("myRange3").style.backgroundColor = "";
		document.getElementById("myRange4").style.backgroundColor = "";
		document.getElementById("myRange5").style.backgroundColor = "";
		document.getElementById("sliderHelp").innerHTML = "";
		range_check = true;
}
slider2.oninput = function() {
  	output2.innerHTML = this.value;
  		document.getElementById("myRange1").style.backgroundColor = "";
		document.getElementById("myRange2").style.backgroundColor = "";
		document.getElementById("myRange3").style.backgroundColor = "";
		document.getElementById("myRange4").style.backgroundColor = "";
		document.getElementById("myRange5").style.backgroundColor = "";
		document.getElementById("sliderHelp").innerHTML = "";
		range_check = true;

}
slider3.oninput = function() {
  	output3.innerHTML = this.value;
  		document.getElementById("myRange1").style.backgroundColor = "";
		document.getElementById("myRange2").style.backgroundColor = "";
		document.getElementById("myRange3").style.backgroundColor = "";
		document.getElementById("myRange4").style.backgroundColor = "";
		document.getElementById("myRange5").style.backgroundColor = "";
		document.getElementById("sliderHelp").innerHTML = "";
		range_check = true;
}
slider4.oninput = function() {
  	output4.innerHTML = this.value;
  		document.getElementById("myRange1").style.backgroundColor = "";
		document.getElementById("myRange2").style.backgroundColor = "";
		document.getElementById("myRange3").style.backgroundColor = "";
		document.getElementById("myRange4").style.backgroundColor = "";
		document.getElementById("myRange5").style.backgroundColor = "";
		document.getElementById("sliderHelp").innerHTML = "";
		range_check = true;

}
slider5.oninput = function() {
  	output5.innerHTML = this.value;
  		document.getElementById("myRange1").style.backgroundColor = "";
		document.getElementById("myRange2").style.backgroundColor = "";
		document.getElementById("myRange3").style.backgroundColor = "";
		document.getElementById("myRange4").style.backgroundColor = "";
		document.getElementById("myRange5").style.backgroundColor = "";
		document.getElementById("sliderHelp").innerHTML = "";
		range_check = true;
}

var input1;
var input2;
var input3;
var input4;
var input5;

function Calculate (){
	var MV = document.forms["nameForm"]["MV"].value;
	var naam = document.forms["nameForm"]["naam"].value;
	input1 = Number(slider1.value);
	input2 = Number(slider2.value);
	input3 = Number(slider3.value);
	input4 = Number(slider4.value);
	input5 = Number(slider5.value);

		var output1;
		var output2;
		var output3;
		var output4;
		var output5;
		var output1_result;
		var output2_result;
		var output3_result;
		var output4_result;
		var output5_result;
		switch(input1) {
			case 1:
				output1 = "heel streng";
				output1_result = -1;
				break;
			case 2:
				output1 = "streng";
				output1_result = -1;
				break;
			case 3:
				output1 = "";
				output1_result = 0;
				break;
			case 4:
				output1 = "flexibel";
				output1_result = 1;
				break;
			case 5:
				output1 = "heel flexibel";
				output1_result = 1;
				break;
		}
		switch(input2) {
			case 1:
				output2 = "verschrikkelijk saai";
				output2_result = -1;
				break;
			case 2:
				output2 = "saai";
				output2_result = -1;
				break;
			case 3:
				output2 = "";
				output2_result = 0;
				break;
			case 4:
				output2 = "entertainend";
				output2_result = 1;
				break;
			case 5:
				output2 = "heel entertainend";
				output2_result = 1;
				break;
		}
		switch(input3) {
			case 1:
				output3 = "super gemeen";
				output3_result = -1;
				break;
			case 2:
				output3 = "gemeen";
				output3_result = -1;
				break;
			case 3:
				output3 = "";
				output3_result = 0;
				break;
			case 4:
				output3 = "vriendelijk";
				output3_result = 1;
				break;
			case 5:
				output3 = "geweldig vriendelijk";
				output3_result = 1;
				break;
		}
		switch(input4) {
			case 1:
				output4 = "een nachtmerrie in lesgeven";
				output4_result = -1;
				break;
			case 2:
				output4 = "slecht in lesgeven";
				output4_result = -1;
				break;
			case 3:
				output4 = "";
				output4_result = 0;
				break;
			case 4:
				output4 = "goed in lesgeven";
				output4_result = 1;
				break;
			case 5:
				output4 = "een kei in lesgeven";
				output4_result = 1;
				break;
		}
		switch(input5) {
			case 1:
				output5 = "simpelweg idioot";
				output5_result = -1;
				break;
			case 2:
				output5 = "geen groot licht";
				output5_result = -1;
				break;
			case 3:
				output5 = "";
				output5_result = 0;
				break;
			case 4:
				output5 = "slim";
				output5_result = 1;
				break;
			case 5:
				output5 = "vat vol met kennis";
				output5_result = 1;
				break;
		}

		var ZH;
		var ZH2
		if (MV == "Meneer"){
			ZH = "hij ";
			ZH2 = "hem";
		}
		if(MV == "Mevrouw"){
			ZH = "ze ";
			ZH2 = "haar";
		}
		var NaamFull = MV + " " + naam + " "; 
		document.getElementById("result").innerHTML = "";
		var output = [output1_result, output2_result, output3_result, output4_result, output5_result];
		var outputBad = [];
		var outputMid = [];
		var outputGood = [];

		for (var i = 0; i < output.length; i++) {
			if(output[i] == -1){
				outputBad.push(i + 1);
			}
			else if(output[i] == 0){
				outputMid.push(i + 1);
			}
			else if(output[i] == 1){
				outputGood.push(i + 1);
			}
		}

		function Bad(){
			for (var i = 0; i < outputBad.length; i++) {
				if(outputBad[i] == 1){
					outputBad[i] = output1; 
				}
				else if(outputBad[i] == 2){
					outputBad[i] = output2;
				}
				else if(outputBad[i] == 3){
					outputBad[i] = output3;
				}
				else if(outputBad[i] == 4){
					outputBad[i] = output4;
				}
				else if(outputBad[i] == 5){
					outputBad[i] = output5;
				}
				if(outputBad.length - 2 == i){
					document.getElementById("result").innerHTML += outputBad[i] + " en ";
				}
				else {
					document.getElementById("result").innerHTML += outputBad[i] + ", ";
				}
			}
		}
		
		function Good(){
			for (var i = 0; i < outputGood.length; i++) {
				if(outputGood[i] == 1){
					outputGood[i] = output1; 
				}
				else if(outputGood[i] == 2){
					outputGood[i] = output2;
				}
				else if(outputGood[i] == 3){
					outputGood[i] = output3;
				}
				else if(outputGood[i] == 4){
					outputGood[i] = output4;
				}
				else if(outputGood[i] == 5){
					outputGood[i] = output5;
				}
				if(outputGood.length - 2 == i){
					document.getElementById("result").innerHTML += outputGood[i] + " en ";
				}
				else {
					document.getElementById("result").innerHTML += outputGood[i] + ", ";
				}
			}
		}

		if(outputBad.length == 5){
			document.getElementById("result").innerHTML = NaamFull + "is gewoon de slechtst mogelijke leerkracht die er is, ik wens je sterkte.";
		}
		else if(outputGood.length == 5) {
			document.getElementById("result").innerHTML = NaamFull + "is een geweldige leerkracht, er is simpelweg niks slecht aan " + NaamFull;
			document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -1);
			document.getElementById("result").innerHTML += ", dus wees maar blij met " + ZH2 + "!";
		}
		else if(outputMid.length == 5){
			document.getElementById("result").innerHTML = NaamFull + "is een heel gemiddelde leerkracht, wat kan ik nog meer zeggen?";
		}
		else if(outputMid.length > 2){
			document.getElementById("result").innerHTML = NaamFull + "is ";
			if(outputGood.length == 2){
				Good();
			}
			else if(outputBad.length == 2){
				Bad();
			}
			else if(outputMid.length == 3) {
				Good();
				document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -2);
				document.getElementById("result").innerHTML += " en ";
				Bad();
			}
			else{
				Good();
				Bad();
			}
			document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -2);
			document.getElementById("result").innerHTML += " maar voor de rest is " + ZH + " nogal gewoontjes.";
		}
		else if(outputGood.length >= outputBad.length){
			if(outputBad.length == 0){
				document.getElementById("result").innerHTML = NaamFull + "is ";
				Good();
				document.getElementById("result").innerHTML += "gewoon een heel goede leerkracht!";
			}
			else{
				document.getElementById("result").innerHTML = NaamFull + "is ";
				Good();
				document.getElementById("result").innerHTML += "maar ook ";
				Bad();
				document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -2);
				document.getElementById("result").innerHTML += ".";
			}
		}
		else if(outputBad.length >= outputGood.length){
			if(outputGood.length == 0){
				document.getElementById("result").innerHTML = NaamFull + "is ";
				Bad();
				document.getElementById("result").innerHTML += "echt een slechte leerkracht!"; 
			}
			else{
				document.getElementById("result").innerHTML = NaamFull + "is dan wel ";
				Bad();
				document.getElementById("result").innerHTML += ZH + "is ook ";
				Good();
				document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -2);
				document.getElementById("result").innerHTML += ".";
			}
		}
		else {
			document.getElementById("result").innerHTML = NaamFull + "is ";
			Good();
			document.getElementById("result").innerHTML += "maar jammergenoeg ook ";
			Bad();
			document.getElementById("result").innerHTML += "dit is een goed gebalanceerde leerkracht.";
		}
	var rate = (input1 + input2 + input3 + input4 + input5 - 5) * 5 - Math.ceil(naam.length/3);
	if (rate < 1){
		rate = 1;
	}
	var rate2 = rate + "/100";
	var rating = rate2.bold();
	document.getElementById("result").innerHTML += " Ik zou jouw leerkracht ";
	if (rate > 90){
		document.getElementById("result").innerHTML += "een bijna perfecte score van " + rating + " geven! :D";
	}
	else if (rate > 80){
		document.getElementById("result").innerHTML += "een geweldige score van " + rating + " geven! :D";
	}
	else if (rate > 70){
		document.getElementById("result").innerHTML += "een goede score van " + rating + " geven. :)";
	}
	else if (rate > 60){
		document.getElementById("result").innerHTML += "een redelijke score van " + rating + " geven. :)";
	}
	else if (rate > 40){
		document.getElementById("result").innerHTML += "een gemiddelde score van " + rating + " geven. :|";
	}
	else if (rate > 30){
		document.getElementById("result").innerHTML += "een mindere score van " + rating + " geven. :(";
	}
	else if (rate > 20){
		document.getElementById("result").innerHTML += "een slechte score van " + rating + " geven. :(";
	}
	else if (rate > 10){
		document.getElementById("result").innerHTML += "een verschrikkelijke score van " + rating + " geven. :'(";
	}
	else{
		document.getElementById("result").innerHTML += "een van de slechts mogelijke scores geven: " + rating + ". :'(";
	}
}


var range_check = false;
var screen_check = 1;
function screenNext() {
	var MV = document.forms["nameForm"]["MV"].value;
	var naam = document.forms["nameForm"]["naam"].value;
	var input1 = Number(slider1.value);
	var input2 = Number(slider2.value);
	var input3 = Number(slider3.value);
	var input4 = Number(slider4.value);
	var input5 = Number(slider5.value);

	if (screen_check == 1){
		if(MV == 0 || naam == ""){
			document.getElementById("topColor").style.backgroundColor = "red";
		}
		else {
			screen_check = 2;
			document.getElementById("topColor").style.backgroundColor = "";
			document.getElementById("text2").innerHTML = "Hoe zou jij  " + MV + " " + naam + " beschrijven?"
			document.getElementById("screen1").style.left = "-100%";
			document.getElementById("screen2").style.marginLeft = "0";
			document.getElementById("screen3").style.marginLeft = "100%";
		}
	}
	else if (screen_check == 2){
		if(input1 == 3 && input2 == 3 && input3 == 3 && input4 == 3 && input5 == 3 && range_check == false) {
			range_check = true;
			document.getElementById("myRange1").style.backgroundColor = "red";
			document.getElementById("myRange2").style.backgroundColor = "red";
			document.getElementById("myRange3").style.backgroundColor = "red";
			document.getElementById("myRange4").style.backgroundColor = "red";
			document.getElementById("myRange5").style.backgroundColor = "red";
			document.getElementById("sliderHelp").innerHTML = "Weet je zeker dat je niks wilt veranderen?";
		}
		else{
			screen_check = 3;
			document.getElementById("myRange1").style.backgroundColor = "";
			document.getElementById("myRange2").style.backgroundColor = "";
			document.getElementById("myRange3").style.backgroundColor = "";
			document.getElementById("myRange4").style.backgroundColor = "";
			document.getElementById("myRange5").style.backgroundColor = "";
			document.getElementById("sliderHelp").innerHTML = "";
			document.getElementById("screen1").style.left = "-200%";
			document.getElementById("screen2").style.marginLeft = "-100%";
			document.getElementById("screen3").style.marginLeft = "0%";
			Calculate();
		}
	}
}
function screenPrevious() {
	if (screen_check == 1){

	}
	else if (screen_check == 2){
		screen_check = 1;
		document.getElementById("screen1").style.left = "0";
		document.getElementById("screen2").style.marginLeft = "100%";
		document.getElementById("screen3").style.marginLeft = "200%";
	}
	else {
		screen_check = 2;
		document.getElementById("screen1").style.left = "-100%";
		document.getElementById("screen2").style.marginLeft = "0";
		document.getElementById("screen3").style.marginLeft = "100%";
	}
}
function Teachers() {
	var MV = document.forms["nameForm"]["MV"].value;
	var naam = document.forms["nameForm"]["naam"].value;
	if (MV == "Meneer"){
		document.getElementById("Teacher").style.display = "none";
		document.getElementById("TeacherM").style.display = "inline";
		document.getElementById("TeacherF").style.display = "none";
		document.getElementById("Teacher2").style.display = "none";
		document.getElementById("TeacherM2").style.display = "inline";
		document.getElementById("TeacherF2").style.display = "none";
	}
	if (MV == "Mevrouw"){
		document.getElementById("Teacher").style.display = "none";
		document.getElementById("TeacherM").style.display = "none";
		document.getElementById("TeacherF").style.display = "inline";
		document.getElementById("Teacher2").style.display = "none";
		document.getElementById("TeacherM2").style.display = "none";
		document.getElementById("TeacherF2").style.display = "inline";
	}
	if (MV == 0){
		document.getElementById("Teacher").style.display = "inline";
		document.getElementById("TeacherM").style.display = "none";
		document.getElementById("TeacherF").style.display = "none";
		document.getElementById("Teacher2").style.display = "inline";
		document.getElementById("TeacherM2").style.display = "none";
		document.getElementById("TeacherF2").style.display = "none";
	}
}

function mobile() {
    if (isMobile.any()) {
    	document.getElementById("topColor").style.width = "90%";
    	document.getElementById("top1").style.width = "47%";
    	document.getElementById("top1").style.marginLeft = "3%";
    	document.getElementById("top2").style.width = "46%";
    	document.getElementById("top2").style.marginRight = "4%";
    	document.getElementById("topColor").style.marginLeft = "5%";
    	document.getElementById("btnNext1").style.width = "12.5%";
    	document.getElementById("btnNext2").style.width = "12.5%";
    	document.getElementById("btnNext3").style.width = "12.5%";
    	document.getElementById("btnPrevious1").style.width = "12.5%";
    	document.getElementById("btnPrevious2").style.width = "12.5%";
    	document.getElementById("btnPrevious3").style.width = "12.5%";
    	document.getElementById("text2").style.fontSize = "100%";
    };
};
/*
function typing() {
	if (isMobile.any()) {
		$("#screen1Bot").css({"display": "none"});
	}
}
function notTyping() {
	if (isMobile.any()) {
		$("#screen1Bot").css({"display": "block"});
	}
}
*/
var keyboard_check = 0;
window.addEventListener('resize', function(event){
	if (isMobile.any()) {
		if(keyboard_check % 2 == 0){
			$("#screen1Bot").css({"display": "none"});
		}
		else {
			$("#screen1Bot").css({"display": "block"});
		}
	}
	keyboard_check++;
});