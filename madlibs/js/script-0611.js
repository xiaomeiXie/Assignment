$(document).ready(function() {
    $('#adjective').autocomplete({
        source: adjectives
    });

    
    $('#madlib').validate();

    $('#play').click(playGame);
	$("#reset").click(function(){
		location.reload();
	});			


});


function playGame(e) {
    e.preventDefault();
   
    doDate();

    $('span').each(function() {
        var word = $(this).find('.input').val();
        
         
					
						 if (word === ""){
					 
								word = prompt("Field can not be blank? "); 
								
								}
					 	
        
        $(this).html(word);
        
    });
    $('p').removeClass('obscure');
   
}

function doDate() {
    var date = new Date();
    var today = date.toLocaleDateString();
    $('#date').html(today);

}
