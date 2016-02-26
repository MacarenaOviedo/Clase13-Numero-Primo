
		//Tarea 
		var esPrimo = 5;
		if (esPrimo > 3){	
			console.log("true");
		}else if(esPrimo == 0){
			console.log("false");}


		var esPrimo = 0;
		if (esPrimo > 3){	
			console.log("mayor");
		}else if(esPrimo == 0){
			console.log("igual");
		}else if(esPrimo < 3){
			console.log("menor");
		}

//for (var i=0 ; i <= 10; i++)

		var esPrimo = 5;
		if (esPrimo == 4){	
			console.log("true");
		}else{
			console.log("false");}

		var esPrimo = 3;
		if (esPrimo == 3){	
			console.log("true");
		}else{
			console.log("false");}
		

		var chao = true
		while(chao){
			chao=false
			console.log ("chao");
		}


		function esPrimo (numero){
			for (var i=2 ; i < numero; i++){
			if(numero % i == 0){
				console.log ("No es primo");
				return false;
			}
		}
		return true;
		}


		function esPrimo (numero){
			for (var i=2 ; i < numero; i++){
			if(numero % i == 0){
				console.log ("No es primo");
				return false;
			}
		}
		return true;
		}
		
		


		
for (var i=2 ; i < 100 ; i++){
	if(i % i == 0){
				console.log (i);
			}			
		}


	
