  $(document).ready(function() {
    $('#myButton').click( function() {alert("you clicked my button");} );

$('#addcolor').click(function(){
	addColor();
	});
	
$('#rmcolor').click(function(){
	removeColor();
	});	

$('#changesize').click(function(){
	changeSize();
	});
	
$("#btn1").click(function(){
    $("p").fadeOut()
  });
 // $(".btn2").click(function(){ // "btn2" is class 
  $("#btn2").click(function(){//"btn2" is id:
	   $("p").fadeIn();
  });

$("#btn3").click(function(){
  $("p").fadeTo(1000,0.4);
  });
$("#reset").click(function(){
	location.reload();
});			

});


function changeSize(){
	document.getElementById('myColor').className = " big";
	}
function addColor(){
	
	document.getElementById('myColor').className = " color";
	}
function removeColor(){
	
	document.getElementById('myColor').className = " rmcolor";
	}			

