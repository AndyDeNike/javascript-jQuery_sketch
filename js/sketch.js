$(document).ready(function() {

createGrid(16);
$('.square').hover(colorChange);


$('button').on('click', function(){
	$('.square').css({'opacity': '.1'});
	var numSquaresSide = prompt('How many squares per side would you like?', 16);

	if(numSquaresSide != null){
		if(numSquaresSide > 1 && numSquaresSide <=100){
			var sizeSquare = 800/numSquaresSide;

			createGrid(numSquaresSide);
			$('.square').css({'height': sizeSquare + 'px', 'width': sizeSquare + 'px'});
		} else {

			alert("Your selection must be greater than 1 and less than 101! Give it another whirl!");
		}
	}

	$('.square').hover(colorChange);

});



function colorChange(){
	var currentOpacity = +$(this).css('opacity');
	if(currentOpacity < 1){
		currentOpacity += .10;
		$(this).css({'opacity': currentOpacity})
	}
	
}


function createGrid(squareMeas){
	var totalSquares = squareMeas * squareMeas; 
	$('#container').empty();
	for (var i = 1; i <= totalSquares; i++){
		$('#container').append('<div class="square"></div>');
	}

}







});