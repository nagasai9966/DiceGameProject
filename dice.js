var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var image1=a+"dice"+".png";
var image2=b+"dice"+".png";
document.querySelectorAll(".b")[0].setAttribute("src",image1);
document.querySelectorAll(".b")[1].setAttribute("src",image2);
if (a>b){
    document.querySelector("h1").textContent="Player1 Won";
}
else if(a==b)
{
    document.querySelector("h1").textContent="Draw Match"; 
}
else{
    document.querySelector("h1").textContent="Player2 won";
}

