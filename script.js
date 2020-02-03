/*Find The Penguins Game JS file
	James Volino
	1/23/20*/

//Event listener for page load which runs the newGame() function
window.addEventListener("load", newGame);

//Event Listener for the Play Again Button
document.getElementById("button").addEventListener("click", function(){
	window.location.reload();
});

//This function will generate a random number between 1-9
//That number represents the DIV the yeti will hide in
//That Div will gain an ID of "yeti" and click event listener

function newGame() {
	var randNum = Math.floor(Math.random() * 9) + 2;
	document.getElementsByTagName("div")[randNum].setAttribute("id","yeti");
	document.getElementById("yeti").addEventListener("click", function(){
		window.alert("ROWRRRR!!! You have been spotted by the yeti along your travels, YOU DIE AND ARE A DEFEATED MAN");
		document.getElementById("audio").play();
	});
}