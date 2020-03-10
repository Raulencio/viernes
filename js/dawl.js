//verificar ingreso de rut 19.250.369-8
// document.getElementById("trt").addEventListener("keydown", click);

//EJERCICIO IV
function laFunc() {
    var textrut;
    textrut = document.getElementById("trt").value;
    alert(textrut);
}

function Numeros(string) {//Solo numeros
    var out = '';
    var filtro = '1234567890.-k';//Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            //Se añaden a la salida los caracteres validos
            out += string.charAt(i);

    //Retornar valor filtrado
    return out;
}
//EJERCICIO VI
function elevarNum() {

    var numeA;
    numA = document.getElementById("numA").value;
    var numeB;
    numB = document.getElementById("numB").value;
    otraFun(numA, numB);
}
function otraFun(vs, sv) {
    var resul = Math.pow(vs, sv)
    document.getElementById("pri").textContent = "" + resul;
}

//EJERCICIO VIII

function compsL() {

    var teA;
    teA = document.getElementById("textA").value;
    var teB;
    teB = document.getElementById("textB").value;
    otramFun(teA, teB);
}
function otramFun(vs, sv) {
    var nuA = vs.length;
    var nuB = sv.length;
    if (nuA < nuB) {
        resT = sv;
    } else if (nuB < nuA) {
        resT = vs;
    } else if (nuB == nuA) {
        resT = "Son iguales"
    }
    var resT;
    document.getElementById("pria").textContent = "" + resT;
}

//EJERCICIO IX

//ax2+bx+c=0 resultado de x


function funCuad() {

    var nmA, nmB, nmC;

    nmA = document.getElementById("nmA").value;
    nmB = document.getElementById("nmB").value;
    nmC = document.getElementById("nmC").value;

    unaMas(nmA, nmB, nmC);
}
function unaMas(nma, nmb, nmc) {
    var resl;
    var ids = (((nmb * nmb) - (4 * nma * nmc)));
    resl = ((-1 * (nmb)) + (Math.sqrt(((nmb * nmb) - (4 * nma * nmc))))) / 2 * nma;
    reslo = ((-1 * (nmb)) - (Math.sqrt(((nmb * nmb) - (4 * nma * nmc))))) / 2 * nma;
    if (ids < 0) {
        document.getElementById("pris").textContent = "no tiene soluciones";
    } else {
        document.getElementById("pris").textContent = resl + "  " + reslo;
    }
}
function funRan() {
    var num = Math.random();
    num *= 100;
    num = Math.round(num);
    num++;
    document.getElementById("prisa").textContent = num;
}
function funLoto() {

    var mum; var arr = [];
    var texts = "";

    for (var i = 0; i < 6; i++) {
        do {
            mum = Math.random();
            mum *= 100;
            mum = Math.round(mum);
            mum++;

            for (var e = 0; e < 6; e++) {

                if (mum == arr[e]) {
                    mum = Math.random();
                    mum *= 100;
                    mum = Math.round(mum);
                    mum++;
                }
            }
        } while (mum > 41);

        arr[i] = mum;
    }
    document.getElementById("prima").textContent = arr;
}
function comunes(){
var divisores1=[];
var divisores2=[];
var divisoresC=[];
var num1=document.getElementById("numeA").value;
var num2=document.getElementById("numeB").value;

for(var i=1;i<num1;i++){
    if(num1%i==0){
        divisores1.push(i);
    }
}
for(var i=1;i<num2;i++){
    if(num2%i==0){
        divisores2.push(i);
    }
}
for(var i=0;i<divisores1.length;i++){
    for(var j=0;j<divisores2.length;j++){
        if(divisores1[i]==divisores2[j]){
            divisoresC.push(divisores1[i]);
        }
    }
}
document.getElementById("prif").textContent = divisoresC;
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