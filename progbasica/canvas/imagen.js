var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "orange";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(50,10);
lienzo.lineTo(250,2);
lienzo.stroke();
lienzo.closePath();

var d = document.getElementById("dibujito");
var lienzo =d.getContext("2d");

dibujarLinea("pink", 10, 300,220,10);
dibujarLinea("green", 100, 30,22,110);

function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();   
}



