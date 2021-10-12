


var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);

var randomImage1="images/dice"+randomNumber1+".png";
var randomImage2="images/dice"+randomNumber2+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

var heading=document.querySelector("h1");

if(randomNumber1>randomNumber2)
{
  heading.innerHTML="Player 1 win";
}
else if (randomNumber1<randomNumber2) {
  heading.innerHTML="Player 2 win";
}
else{
  heading.innerHTML="Draw";
}
