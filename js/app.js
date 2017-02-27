var Calculadora = function(){
	//Declaracion del objeto y de variables de control
	var _api = {};
	var n1 = null;
	var n2 = null;
	var op = null;
	var totalizar = null;
	var enc = 0;
 
 //funcion para inicializar las teclas y asignar listeners
	function init(){
		document.getElementById('mas').addEventListener('click', _api.sumar);
		document.getElementById('menos').addEventListener('click', _api.restar);
		document.getElementById('por').addEventListener('click', _api.multiplicar);
		document.getElementById('dividido').addEventListener('click', _api.dividir);
		document.getElementById('punto').addEventListener('click', _api.punto);
		document.getElementById('igual').addEventListener('click', _api.total);
		document.getElementById('on').addEventListener('click', _api.limpiar);
		document.getElementById('0').addEventListener('click', _api.adNumero);
		document.getElementById('1').addEventListener('click', _api.adNumero);
		document.getElementById('2').addEventListener('click', _api.adNumero);
		document.getElementById('3').addEventListener('click', _api.adNumero);
		document.getElementById('4').addEventListener('click', _api.adNumero);
		document.getElementById('5').addEventListener('click', _api.adNumero);
		document.getElementById('6').addEventListener('click', _api.adNumero);
		document.getElementById('7').addEventListener('click', _api.adNumero);
		document.getElementById('8').addEventListener('click', _api.adNumero);
		document.getElementById('9').addEventListener('click', _api.adNumero);
		document.getElementById('sign').addEventListener('click', _api.signo);
	}

//funcion que limpia la pantalla de calculadora
	_api.limpiar = function(){
		estilo(document.getElementById('on'));
		var limpia = document.getElementById('display');
		limpia.innerHTML= '0';
		n1 = null;
		n2 =null;

		
	}
 
 //funcion para sumar 
	_api.sumar = function(){
		estilo(document.getElementById('mas'));
		if(op == null){
			op = 1;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				totalizar = 1;
				actualizardisplay(n1, n2);
				op = 1;

			}else{
				totalizar = null;
				op= null;
				actualizardisplay(1, n1);
				op = 1;
			}
		}
		
	}

// funcion para restar
	_api.restar = function(){
		estilo(document.getElementById('menos'));
		if(op == null){
			op = 2;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				totalizar = 1;
				actualizardisplay(n1, n2);
				op = 2;

			}else{
				totalizar = null;
				op= null;
				actualizardisplay(1, n1);
				op = 2;
			}
		}
	}

//funcion para multiplicar
	_api.multiplicar = function(){
		estilo(document.getElementById('por'));
		if(op == null){
			op = 3;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				totalizar = 1;
				actualizardisplay(n1, n2);
				op = 3;

			}else{
				totalizar = null;
				op= null;
				actualizardisplay(1, n1);
				op = 3;
			}
		}
	}

//funcion para dividir
	_api.dividir = function(){
		estilo(document.getElementById('dividido'));
		if(op == null){
			op = 4;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				totalizar = 1;
				actualizardisplay(n1, n2);
				op = 4;

			}else{
				totalizar = null;
				op= null;
				actualizardisplay(1, n1);
				op = 4;
			}
		}
	}

//funcion que verifica si existe un punto en la pantalla y sino lo agrega
	_api.punto = function(){
		estilo(document.getElementById('punto'));
		var dp = document.getElementById('display').innerHTML.split("");
		for(var i =0; i < dp.length; i++){
			if(dp[i] == '.'){
				enc = 1;
			}
		}

		if(enc == 0 && dp.length < 8){
			actualizardisplay(3, '.');
			enc =2;
		}

	}

//funcion para cambiar de signo del numero en pantalla
	_api.signo = function(){
		estilo(document.getElementById('sign'));
		var operar = document.getElementById('display');
		operando = parseFloat(operar.innerHTML)*(-1);
		operar.innerHTML = String(operando);
		if(n1 != null && n2 == null){
			n1 = String(operando);
		}else{
			n2 = String(operando);
		}


	}

//funcion que totaliza con la tecla '='
	_api.total = function(){
		estilo(document.getElementById('igual'));
		totalizar = 1;
		actualizardisplay(n1, n2);
	}

//funcion que evalua las condiciones de la calculadora y agrega un numero nuevo en l pantalla
	_api.adNumero = function(e){
		
		estilo(document.getElementById(e.target.id));
		if(n1==null && op == null){
			if(String(e.target.id) != '0'){
				n1 = String(e.target.id);
				actualizardisplay(1, n1);
			}
		}else{
			//console.log(n1.length);	
			if(n1.toString().length < 8 && op == null){
				if(enc==2){
					n1 = String(n1)+'.'+String(e.target.id);
					actualizardisplay(1, n1);
					enc = 0;
				}else{
					n1 = String(n1)+String(e.target.id);
					actualizardisplay(1, n1);
				}
	
			}else{

				if(n2==null && (op == 1 || op == 2 || op == 3 || op == 4)){
					if(String(e.target.id) != '0'){
						n2 = String(e.target.id);
						actualizardisplay(1, n2);
					}
					
				}else{
					if((n2 != null && n2.toString().length < 8) && (op == 1 || op == 2 || op == 3 || op == 4)){
						if(enc==2){
							n2 = String(n2)+'.'+String(e.target.id);
							actualizardisplay(1, n2);
							enc = 0;
						}else{
							n2 = String(n2)+String(e.target.id);
							actualizardisplay(1, n2);
						}
			}
			
		}

			}
			
		}

	}
 
 //funcion que anima la tecla que se presiona
	function estilo(tecla){
		tecla.style.transform="scale(0.9)";
		setTimeout(function() {tecla.style.transform="scale(1)";}, 200);
	}
 

 //funcion que opera y actualiza la pantalla con el resultado obtenido
	function actualizardisplay(a, b){

		var pantalla = document.getElementById('display');
		if(a ==3 && n1 == null){
			pantalla.innerHTML= String(pantalla.innerHTML)+'.';
			n1 = parseFloat(pantalla.innerHTML);
			
		}else if(a ==3 && n1 != null && n2 == null){

			pantalla.innerHTML= String(pantalla.innerHTML)+'.';
			n2 = parseFloat(pantalla.innerHTML);
			
		}else{
			pantalla.innerHTML= String(b).substring(0, 8);
		}


		if(op == 1 && n2 != null && totalizar != null){
			pantalla.innerHTML = String(parseFloat(a)+parseFloat(b)).substring(0, 8);
			n1 = Number(a)+Number(b);
			n2 = null;
			totalizar = null;
		}
		if(op == 2 && n2 != null && totalizar != null){
			pantalla.innerHTML = String(Number(a)-Number(b)).substring(0, 8);
			n1 = Number(a)-Number(b);
			n2 = null;
			totalizar = null;

		}
		if(op == 3 && n2 != null && totalizar != null){
			pantalla.innerHTML = String(Number(a)*Number(b)).substring(0, 8);
			n1 = Number(a)*Number(b);
			n2 = null;
			totalizar = null;

		}
		if(op == 4 && n2 != null && totalizar != null){
			pantalla.innerHTML = String(Number(a)/Number(b)).substring(0, 8);
			n1 = Number(a)/Number(b);
			n2 = null;
			totalizar = null;

		}
		
	}

//inicializacion de la calculadora
	init();
	return _api;
};

//creacion del objeto calculadora
var cal = new Calculadora();


