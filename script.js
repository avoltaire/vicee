
//this function does everything
function randomizer(){
//generates two numbers b/t 1 and 6
var randomNumLeft =Math.floor(Math.random()*6)+1;
var randomNumRight =Math.floor(Math.random()*6)+1;
// For testing only
console.log(randomNumLeft,randomNumRight); 
//update the images. what if we have an array of images?
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumLeft+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumRight+".png");

//settle the winner with exact red flag position
if(randomNumLeft>randomNumRight){
document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumLeft<randomNumRight){
document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins! 🚩";
}
else if(randomNumLeft==randomNumRight){
document.getElementsByTagName("h1")[0].innerHTML="It's a Draw";
}

}

//This function reset the game to the initial stage
function reset(){
	document.getElementsByTagName("h1")[0].innerHTML="Welcome to Vicee!";
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
}

//Future Update
// could also add count to keep track on the number of winning for each player.
// could also play: a player vs the computer
// add a share button
// or invite friends to play
// well turn it ot a CRUD game:
// add log in page
// add social interaction among players 
// add a global leader board