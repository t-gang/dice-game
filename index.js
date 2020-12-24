var num1=Math.floor(Math.random()*6);
num1++;
var num2=Math.floor(Math.random()*6);
num2++;
document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");
if(num1>num2)
{
document.querySelector("h1").innerHTML="Player 1 wins!!!";
}
else if(num1<num2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!!!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}