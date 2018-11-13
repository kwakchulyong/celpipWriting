
function setQuestion(no) {
	if(no == null || no == 'undefined') {
		no = 0;
	}

	if(no == 0) {
	  var inputValue =  '{ "QUESTION" : [' +
 '{ "TESTNUMBER" : "0",  "TASKNUMBER" : "0", "QUESTIONLEFT" : "You will get information about the situation in here.",  "QUESTIONRIGHT" : "Write an email to the ____ in about 150-200 words. ", "QUESTIONDETAIL" : "You will get the writing options in here. You have to insert these options to your contents.", "RADIOSELECTONE" : "null",  "RADIOSELECTTWO" : "null" },'  	+
 '{ "TESTNUMBER" : "0",  "TASKNUMBER" : "1", "QUESTIONLEFT" : "You will get information about the situation in here.",  "QUESTIONRIGHT" : "Choose the option that you prefer. Why do you prefer your choice? Explain the reasons for your choice. Write about 150-200 words.", "QUESTIONDETAIL" : "null", "RADIOSELECTONE" : "Option A: ",  "RADIOSELECTTWO" : "Option B: " }'  	+
']}';
	} 

	var objQuestion = JSON.parse(inputValue);
	return objQuestion;
}