
import {useEffect, useState} from 'react';
import { Axios } from "axios";

function Calc()
{
    
let t,H1, quant1,quant2;
let Capacitor,Indutor;


const [f, setFreq] = useState([])
const [Local, setLocal] = useState([])
const [high, setHigh] = useState([])
const [low, setLow] = useState([])

function setdisp() {
      // var disp = id = "disp";
        var hd=document.getElementById('disp').value;
        var md=document.getElementById('disp').value;
        var sd=document.getElementById('disp').value;
        // add a zero in front of numbers<10
       // m=checkTime(m);
       // s=checkTime(s);
        document.getElementById('disp').innerHTML= hd + md + sd;
    }
   

function sum(){

quant1 = parseInt(document.getElementById('num1').value) ;
quant2 = parseInt(document.getElementById('num2').value); 

	let Z = (quant1 + quant2);
    console.log("Soma: " + Z);
	console.log("x= " + quant1 +"y= " + quant2);

document.getElementById("quant1").innerHTML = quant1  ;
document.getElementById("quant2").innerHTML = quant2  ;
document.getElementById("Z").innerHTML = Z  ;


console.log("a= " + quant1 +"b= " + quant2);
}

function freq(){

    Capacitor = parseInt(document.getElementById('cap').value) ;
    Indutor = parseInt(document.getElementById('ind').value);  


let RC = (Number(Capacitor)* Number(Indutor));
let raiz = Math.sqrt(RC);
let pi = (6.28*raiz);
let numer = (1/6.28*RC);
let Freq = (1/pi);
    

document.getElementById("cap").innerHTML = Capacitor ;
document.getElementById("ind").innerHTML = Indutor  ;
document.getElementById("RC").innerHTML = numer ;
document.getElementById("Freq").innerHTML = Freq ;

console.log(" raiz= " + raiz + "\n  RC = "+ numer + "\n  pi= " + pi)
console.log(" C= " + Capacitor +"  L= " + Indutor);
console.log("Freq: " + Freq)
}

function mult(){

    
var K = (quant1 * quant2);
}


function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        // add a zero in front of numbers<10
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('txt').innerHTML=h+":"+m+":"+s;
        t=setTimeout('startTime()',500);
    }
   
    function checkTime(i){
    if (i<10) {
        i="0" + i;
    }
        return i;
    }


return(

<>

<p id="RC"> </p>
<p id="quant1"> </p>
<p id="quant2"> </p>

<h2 hd="disp"></h2>


<H1 id="Z"></H1>

<H1 id="Freq"></H1>


<h1>Cálculadora Javascript</h1>
    <div class="img">
	    
            <div class="img">
		    <input type="image" src="ondas.jpg" onClick="this.form.submit()"> </input> 
            <input type="text"  name="local" size="5" onChange={(e)=> setLocal(e.target.value)}></input> 
            <input type="text" name ='freq' size ='5'onChange={(e)=> setFreq(e.target.value)}></input> 
 
            </div>
    </div>

<table>

<th><h1>Calculos</h1> <td><h2 id = "txt"> </h2></td></th> 

<tr> <td><input type="number" id="num1" onChange = "sum()"></input> </td></tr>
<tr> <td><input type="number" id="num2" onChange = "sum()"></input> </td></tr>

<tr><td><h2 id="quant1"></h2> </td><td><h2 id="quant2"> </h2></td></tr>

<tr> <td><input type="number" id="cap" onChange = "freq()"></input> </td></tr>
<tr> <td><input type="number" id="ind" onChange = "freq()"></input> </td></tr>

<tr><td><h1 id="Z"> </h1></td></tr>
<tr><h2> Result </h2> </tr>

<tr><h2> Frequency </h2> </tr>
<tr><td><h3 id="Freq"></h3></td></tr>

<tr><td><h3 id="K"></h3></td></tr>

<td>
<input type="button" class = "add" id="btnOn" value="Somar" onClick="sum()"></input>
<input type="button" id="btnOff" value="Freq " onClick="freq()"></input>
<input type="button" id="btndisp" value="X" onClick="mult()"></input>
</td>

</table>

</>

    )

} export default Calc
