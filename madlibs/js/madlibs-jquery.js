 $.noConflict();
 $(document).ready(function() {
	//$('#play').click( function() {alert("you clicked my button");} );
	$('#play').click( function() {
		getWords();
	} );
	//document.getElementById('play').onclick = function(){
		//what to do when button is clicked	
		//document.getElementById('gameBoard').className += " hidden";
		//document.getElementById('gameBoard').className =document.getElementById('gameBoard').className + " hidden";
	$('#gameBoard').attr('class', 'hidden');
	$('#color').click(function() {
		changeColor();
	});
	$('#target').click(function() {
		changeSize();
	});
	$('#rmcolor').click(function() {
		removeColor();
	});
	
	$("#reset").click(function(){
		location.reload();
	});			
		
		
});
function changeSize(){
	document.getElementById('gameBoard').className = " big";
	}
function changeColor(){
	
	document.getElementById('gameBoard').className = " color";
	}
function removeColor(){
	
	document.getElementById('gameBoard').className = " rmcolor";
	}			
function getWords(){
	
	var neededWords = [];
	
	var answerObj = {};
	//neededWords = document.getElementsByTagName('span');
    neededWords = $('span');
	 for (var i = 0; i< neededWords.length; i++){
		 //ask for a word for each needed word and add it to neededWords array
		 //get the type of the word we want from the game
		 //alert the title of each span
		 var keyWord = neededWords[i].title;
		 // get word from user
		 if (keyWord === "date"){
			 var date = new Date();
			 //break;
			 var day = date.getDay();
			 rr = date.getDate();
			 var month = date.getMonth();
			 day = day.toString();
			 month = month.toString();
			 var year = date.getFullYear();
			 year = year.toString();
			 switch(day) {
				 case '0': 
				      day = "Sunday";
					  break;
				 case '1':
				       day = "Monday";
					   break;
				 case '2':
				       day = "Tuesday";
					   break;
				case '3':
				       day = "Wednesday";
					   break;
				case '4':
				       day = "Thurday";
					   break;		
				case '5':
				       day = "Friday";
					   break;		
				case '6':
				       day = "Saturday";
					   break;		
				 default: 
				       day = "Other";
					  break;
					  
				 }
			switch(month) {
				 
				 case '0':
				       month = "January";
					   break;
				 case '1':
				       month = "February";
					   break;
				case '2':
				       month = "March";
					   break;
				case '3':
				      month = "April";
					   break;		
				case '4':
				       month = "May";
					   break;		
				case '5':
				       month = "June";
					   break;
				case '6':
				       month = "July";
					   break;
				case '7':
				       month = "August";
					   break;
				case '8':
				       month = "September";
					   break;	
			    case '9':
				       month = "October";
					   break;	
			    case '10':
				       month = "November";
					   break;	
				case '11':
				       month = "December";
					   break;					
				 default: 
				       month = "Other";
					  break;
					  
				 }	 
			 answerObj[keyWord] =  day + ", " + month + " " + rr + ", " + year;
			 neededWords[i].innerHTML = answerObj[keyWord];
			 } else{
				  var neededWord = prompt("Give me a " + keyWord);
					  answerObj[keyWord] = neededWord;
					  neededWords[i].innerHTML = answerObj[keyWord];
					 if (keyWord === "signed"){//evaluate the "signed", can't be blank
					
						 if (neededWord === ""){
					 
								neededWord = prompt("Field can not be blank, Who are you? "); 
								answerObj[keyWord] = neededWord;
								neededWords[i].innerHTML = answerObj[keyWord];
								}
					 	}
				 
			 }
					
		   
	   }
  //$('#slider').attr('class', 'hidden');

//$('#slider').attr('class', 'visible');
   if ( $('#gameBoard').attr('class', 'hidden'))
   
   //$('#gameBoard').className.match(/(?:^|\s)hidden(?!\S)/ ) ) 
    {
	   // do something;
	  //document.getElementById('gameBoard').className = document.getElementById('gameBoard').className.replace(/(?:^|\s)hidden(?!\S)/g, "" );
	  //$('#gameBoard').className = $('#gameBoard').className.replace(/(?:^|\s)hidden(?!\S)/g, "" );
	  $('#gameBoard').attr('class', 'visible'); 
	  }
	
		 
	}