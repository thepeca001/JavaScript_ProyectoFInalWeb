	
	//COlocar numeros en la pantalla
	var teclaCero=document.getElementById("0");

	teclaCero.addEventListener('click', Cero);

	function Cero(argument){
		document.getElementById("display").innerHTML+=0;
		
	}		


	var teclaUno=document.getElementById("1");

	teclaUno.addEventListener('click', Uno);

	function Uno(argument){
		document.getElementById("display").innerHTML+=1;
	}


	var teclaDos=document.getElementById("2");

	teclaDos.addEventListener('click', Dos);

	function Dos(argument){
		document.getElementById("display").innerHTML+=2;
	}


	var teclaTres=document.getElementById("3");

	teclaTres.addEventListener('click', Tres);

	function Tres(argument){
		document.getElementById("display").innerHTML+=3;
		
	}

	var teclaCuatro=document.getElementById("4");

	teclaCuatro.addEventListener('click', Cuatro);

	function Cuatro(argument){
		document.getElementById("display").innerHTML+=4;
		
	}				


	var teclaCinco=document.getElementById("5");

	teclaCinco.addEventListener('click', Cinco);

	function Cinco(argument){
		document.getElementById("display").innerHTML+=5;
		
	}		

	var teclaSeis=document.getElementById("6");

	teclaSeis.addEventListener('click', Seis);

	function Seis(argument){
		document.getElementById("display").innerHTML+=6;
		
	}		


	var teclaSiete=document.getElementById("7");

	teclaSiete.addEventListener('click', Siete);

	function Siete(argument){
		document.getElementById("display").innerHTML+=7;
		
	}		

	var teclaOcho=document.getElementById("8");

	teclaOcho.addEventListener('click', Ocho);

	function Ocho(argument){
		document.getElementById("display").innerHTML+=8;
		
	}		

	var teclaNueve=document.getElementById("9");

	teclaNueve.addEventListener('click', Nueve);

	function Nueve(argument){
		document.getElementById("display").innerHTML+=9;
		
	}	

	var teclaOn=document.getElementById("on");

	teclaOn.addEventListener('click', On);

	function On(argument){
		document.getElementById("display").innerHTML=0;
		
	}		




	//Capturar operacion

	var teclaMas=document.getElementById("mas");
	
	teclaMas.addEventListener('click', Mas);

	function Mas(argument){
		document.getElementById("display").innerHTML+= "+";
		
	}

	var teclaMenos=document.getElementById("menos");
	
	teclaMenos.addEventListener('click', Menos);

	function Menos(argument){
		document.getElementById("display").innerHTML+= "-";
		
	}	

	var teclaPor=document.getElementById("por");
	
	teclaPor.addEventListener('click', Por);

	function Por(argument){
		document.getElementById("display").innerHTML+= "*";
		
	}		

	var teclaDiv=document.getElementById("dividido");
	
	teclaDiv.addEventListener('click', Div);

	function Div(argument){
		document.getElementById("display").innerHTML+= "/";
		
	}


	//Realizar operacion

	var igual= document.getElementById("igual");
	
	igual.addEventListener('click', operaciones);

	var resultado

	function operaciones(argument)
{
	
	
	if(resultado=="" || resultado=="0")
	{
		document.getElementById("display").innerHTML="Error";
	}
	else{
	resultado= eval(document.getElementById("display").value);

	document.getElementById("display").innerHTML=resultado;
}



}

	
/*
	
//Tecla borrar 
var teclaOn=document.getElementById("on");

	teclaOn.addEventListener('click', On);

	function On(argument){
		document.getElementById("display").innerHTML=0;
		
	}	

	//Asegurarse de que solo acepta numeros
	function soloNumeros(){
		key=e.keyCode || e.which
		teclado=String.fromCharCode(key);
		numeros="0123456789";
		especiales="8-37-39-46";
		tecla_especial=false;

		for(var i in especiales){
			if(key==especiales[i]){
				tecla_especial=true;
			}
		}

		if(numeros.indexOf(teclado)==-1 && !tecla_especial){

			return false;
		}
	
}

//var anterior = document.fo.valores.value;

function comprobar(num){ 

var anterior = document.getElementById("display").value;
if(anterior=="0"){
document.getElementById("display")="";
}else{    
    var anterior = document.getElementById("display").value;
    document.getElementById("valores").value=anterior+num;
    esto=document.getElementById("display");

    record=0; 
    igual=1; 
    var letraRecord 
    var b=0 
    var letra="" 

    for (a=1;a<esto.length;a++){      
    if (esto.value=="+" || esto.value=="-" || esto.value=="*" || esto.value=="/" || esto.value=="."){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        var anterior = esto;
        var nuevovalor = anterior.substring(0, anterior.length-1);
        document.getElementById("display").value=nuevovalor;
        record=0;b=0;igual=1;letra="";letraRecord="";
    }     
} 

}


//realizar las operacionesmatematicas


function calcular(){
    var resultado=eval(document.getElementById("display").value);

    if(resultado=="Infinity"){
        document.getElementById("display").value="0";

    }else{
        document.getElementById("display").value=resultado;
    }
    
}
*/