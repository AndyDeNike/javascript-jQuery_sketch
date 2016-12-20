$(document).ready(function() {

createGrid(16);		//calls the createGrid function with a parameter of 16 
$('.square').hover(colorChange);	//when hovering on '.square' div, colorChange function is exectued 


$('#reset_grid').on('click', function(){		//when clicking on #reset_grid button the following function is exectued
	$('.square').css({'opacity': '.1'});	//targeting the '.square' object and converting all '.square' to specififed opacity 
	var newNumSquareSide = prompt('Choose a number to define the width/height of the sketch pad!', 16);		//storing prompted answer in var nSS
																						//this will be used to represent squares per side 
	if(newNumSquareSide != null){
		if(newNumSquareSide > 1 && newNumSquareSide <=100){

			createGrid(newNumSquareSide);	//uses createGrid function with parameter stored from user prompt 

			var sizeSquare = 800/newNumSquareSide;	//var sizeSquare created taking side length of container dividing it by users input
			$('.square').css({'height': sizeSquare + 'px', 'width': sizeSquare + 'px'});	//all .square now have height/width = sizeSquare

		} else {
			alert("Your selection must be greater than 1 and less than 101! Give it another whirl!");
		}
	}

	$('.square').hover(colorChange);	//this line is reintroduced allowing for hovor color function for '.square' divs 

});



$('#color').on('click', function(){		//when clicking on #color button, function code is executed 
	$('.square').hover(function(){		
      var r = Math.floor(Math.random() * 255);	
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("background-color", color);
  	})

});





function colorChange(){
	var currentOpacity = +$(this).css('opacity');	//the value of opacity assigned to (this) is stored in var currentOpacity
	if(currentOpacity < 1){		//if currentOpacity is less than one, execute the following lines:
		currentOpacity += .10;	//add .10
		$(this).css({'opacity': currentOpacity})	//the value of opacity assigned to (this) becomes currentOpacity
	}
	
}


function createGrid(numSquareSide){
	var totalSquares = numSquareSide * numSquareSide;	//numSquareSide parameter multipled by itself, value contained in totalSquares
	$('#container').empty();	//#container div is empty()'d of any elements 
	for (var i = 1; i <= totalSquares; i++){
		$('#container').append('<div class="square"></div>');	//a '.square' div is appended to '#container' in for loop 
	}															//until i<= totalSquares  

}





});