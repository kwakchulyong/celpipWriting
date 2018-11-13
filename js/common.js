var questionNumber = 0;
var taskNumber = 0;// 0:Task1, 1:Task2
var cnt = 0;
var globalMin = 0;
var myVar;
var objQuestion = setQuestion(); //questions



function onload() {
	setupPage(taskNumber);
}

function restart() {
	reset();
	setupPage(taskNumber);
}


function before() {
	reset();
	if(taskNumber > 0) {
		setupPage(--taskNumber);
	}
}

function next() {
	reset();
	if(taskNumber < 1) {
		taskNumber++;	
		setupPage(taskNumber);
	} else {
		if (confirm("Will you try again?")) {
			changeQuestion();
		} else {
			alert("Finish");
			self.close();
		}
	}
}

function reset() {
	cnt = 0;
	globalMin = 0;
	document.getElementById("inputAnswer").value = "";
	document.getElementById("countWords").innerHTML = "";
}

function changeQuestion(no) {
	reset();
	objQuestion = setQuestion(no);
	taskNumber = 0;
	setupPage(taskNumber);
}

function setupPage(task) {	

	if(task == 0) {
		document.getElementById("questionTitle").innerText = "Writing Task 1: Writing an Email";
		globalMin = 27;
		document.getElementById("questionLeft").innerHTML = objQuestion.QUESTION[task].QUESTIONLEFT;
		var questionrighttext = objQuestion.QUESTION[task].QUESTIONRIGHT + " Your email should do the following things:";
		document.getElementById("questionRight").innerText = questionrighttext;
		
		var questionDetail = objQuestion.QUESTION[task].QUESTIONDETAIL;
		if(questionDetail != 'null') {
			document.getElementById("questionDetail").innerHTML = questionDetail;
		}
	} if(task == 1) {
		document.getElementById("questionTitle").innerText = "Writing Task 2: Responding to Survey Questions";
		globalMin = 26;
		document.getElementById("questionLeft").innerHTML = objQuestion.QUESTION[task].QUESTIONLEFT;
		document.getElementById("questionRight").innerText = objQuestion.QUESTION[task].QUESTIONRIGHT;
		
		var radioButton = "<form action=''>";
		radioButton += "<input type='radio' name='selectOption' value=1>";
		radioButton += objQuestion.QUESTION[task].RADIOSELECTONE;
		radioButton += "<br>";
		radioButton += "<input type='radio' name='selectOption' value=2>";
		radioButton += objQuestion.QUESTION[task].RADIOSELECTTWO;
		radioButton += "<br>";
		radioButton += "</form>";
		document.getElementById("questionDetail").innerHTML = radioButton;
	
	}
	
	run();

}

function run() {
	cnt = globalMin;
	document.getElementById("timeRemaining").innerText = cnt;
	
	myVar = setInterval("countdown()", 60000);
}

function countdown() {
	var view=document.getElementById("timeRemaining");

	if(cnt > 0) {
		cnt--;
		view.innerText = cnt;
	} else {
		clearInterval(myVar);
		download();
	}
	
}

	function len_chk(){  
		var val = document.insertFrm.inputAnswer.value;
		var wordsCount = countWords(val);
		document.getElementById("countWords").innerText = wordsCount;
	} 

	function countWords(s){
		s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
		s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
		s = s.replace(/\n/g, ' '); //Enter Key -> replace Space
		return s.split(' ').filter(function(str){return str!="";}).length;
	}
	
	function download() {
		var resultText = document.getElementById("inputAnswer").value;
		var hiddenElement = document.createElement('a');
		hiddenElement.href = 'data:attachment/text,' + encodeURI(resultText);
		hiddenElement.target = '_blank';
		hiddenElement.download = 'Writing_Question_'+questionNumber+'_Task'+(taskNumber+1)+'_'+new Date().toISOString()+'.txt';
		hiddenElement.click();
	}