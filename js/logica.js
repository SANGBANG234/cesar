// q:)-+-<

var cesar= cesar|| (function(){
    

    var doStaff = function(txt, desp, action){
        var replace = (function(){
            //alfabeto
            var abc = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x',  'y', 'z'];
            var l = abc.length;

            //cifrar
            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                //verificar si esta vacio
                if(i != -1){
                    var pos = i;
                    if(action){
                        //cifrando
                        pos += desp;
                        if(pos>26){
                            pos -=27;
                        }
                        if(pos < 0){
                            pos +=27;
                        }
                    }else{
                        //Descifrando
                        pos -= desp;
                        if(pos < 0){
                            pos +=27;
                        }
                        if(pos>26){
                            pos -=27;
                        }
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        // match
        var re = (/[a-zñ]/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });

    };
    // enviar si se cifra o se decifra
    return{

        encode : function(txt, desp){
            return doStaff(txt, desp, true);
            
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();
function desplazar(test){
    //var desplaz = document.getElementById("desplazar").value;;
    var cadena = "";
    toString(test);
    //if(desplaz.length>0){
        for (i=0; i<test.length; i++){
            if(cadena.length==0){
                if(test.charAt(i)=='-'){
                    cadena += test.charAt(i);
                    console.log("algo paso");
                }
            }
            cadena+= test.charAt(i);
        }
        cadena = parseInt(cadena, 10);
        cadena= cadena%27;
        return(cadena);
        
    
    //}else{
        //alert("pon los lugares que quieres que se recorra");
        //console.log("no se por que sale undefined :/");
    //}
}

//crear las funciones codificar y decodificar
function codificar(){
    var desplaz = document.getElementById("desplazar").value;;
    var cadena = document.getElementById("cadena").value;
    var posf = "";
    for (i=0; i<cadena.length; i++){
        for(j=i; j<cadena.length; j++){
            posf+= cadena.charAt(j);
        }break;


    }
    
    
    //f(posf.length>0){
    if(desplaz.length>0){
        
        if(desplaz>=0 && desplaz<=99999999999999999999999999999999999){
            document.getElementById("resultado").innerHTML=
            cesar.encode(posf, desplazar(document.getElementById("desplazar").value));
        }else{
            alert("pon puros numeros o intetnta con un numero menor (solo acepta hasta 35 digitos)");
        }
    }else{
        alert("pon los lugares que quieres que se recorra");
        //console.log("ya no sale undefined :)");
    }
    //}else alert("pon algun mensaje");
}
function decodificar(){
    var desplaz = document.getElementById("desplazar").value;;
    var cadena = document.getElementById("cadena").value;
    var posf = "";
    for (i=0; i<cadena.length; i++){
        for(j=i; j<cadena.length; j++){
            posf+= cadena.charAt(j);
        }break;

    }
    
    //if(posf.length>0){
    
    if(desplaz.length>0){
        
        if(desplaz>=0 && desplaz<=99999999999999999999999999999999999){
            document.getElementById("resultado").innerHTML=
            cesar.decode(posf, desplazar(document.getElementById("desplazar").value));
        }else{
            alert("pon puros numeros o intetnta con un numero menor (solo acepta hasta 35 digitos)");
        }
    }else{
        alert("pon los lugares que quieres que se recorra");
        //console.log("ya no sale undefined :)");
    }
    
    
    //}else alert("pon algun mensaje");
}

