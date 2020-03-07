//verificar ingreso de rut 19.250.369-8
// document.getElementById("trt").addEventListener("keydown", click);

//EJERCICIO IV
function laFunc(){
var textrut;
textrut=document.getElementById("trt").value;
alert(textrut);
}

function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890.-k';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
} 
//EJERCICIO VI
function elevarNum(){
    
    var numeA;
    numA=document.getElementById("numA").value;
    var numeB;
    numB=document.getElementById("numB").value;
    otraFun(numA,numB);
}
function otraFun(vs,sv){
    var resul=Math.pow(vs,sv)
    document.getElementById("pri").textContent=""+resul;
}

//EJERCICIO VIII

function compsL(){
    
    var teA;
    teA=document.getElementById("textA").value;
    var teB;
    teB=document.getElementById("textB").value;
    otramFun(teA,teB);
}
function otramFun(vs,sv){
    var nuA=vs.length;
    var nuB=sv.length;
    if(nuA<nuB){
        resT=sv;
    }else if(nuB<nuA){
        resT=vs;
    }else if(nuB==nuA){
        resT="Son iguales"
    }
    var resT;
    document.getElementById("pria").textContent=""+resT;
}


// function click(e){
//     if(e=="\n"){
//         laFunc();
//     }
// }

// var num ;var tet;var par;
// function lafunc(){    
//     for(var i=1;i<10;i++){
//         par=num*i;
//             tet=tet+"\n"+num+"*"+i+" = "+par+" , ";
//         }
//         document.getElementById("texto").textContent=tet;
// }
// function leerDato(){
//     num=document.getElementById("trt").value;
//     tet="";
    
// }