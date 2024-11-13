// hacer uyn algoritmo que sume dos numeros 
function suma(){
    
    let A;
    let B;

    A= parseint(prompt("ingrese el primer numero que desea sumar"))
    B= parseint(prompt("ingrese el segundonumero que desea sumar"))

    suma=A+B

    alert("el resultado de la suma es de" + suma )

}







//1. algoritmo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuario

function opBasicas(){  
    let A;
    let B;
    let multiplicacion;
    let division;
    let suma;
    let resta;

    A = parseInt(prompt ('ingresa el primer valor'));
    B = parseInt(prompt(' ingresa el segundo valor'));
    //realizar operacion
    resta = A - B;
    multiplicacion = A * B
    division= A / B
    suma= A + B

    //mostrar resultado


    alert('La resta de los numeros es de: ' + resta)

    alert(' el producto de los numeros es de: ' + multiplicacion)

    alert('La division es de: ' + division)

    alert('La suma es de ' + suma)
}


//2. realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario 
function Ncuadrado(){

    let A;

    A = parseInt(prompt ('ingresa el primer valor'));

    cuadrado = A * A

    console.log('el numero del cuadrado es ' + cuadrado );
    alert('El resultado es: ' + cuadrado);

}

//3. realizar un algoritmo que determine un triangulo a partir de la base y altura ingresadas por el usuario
function triangulo(){
     
    let base 
    let altura

    base = parseInt(prompt ('ingresa la base del triangulo'));
    altura = parseInt(prompt(' ingresa la altura del triangulo'));

    let area =(base * altura) / 2;

    console.log( ' el area del triangulo es: ' + area );
    alert('el resultado es: ' + area);

}
//4. realizar un algoritmo que determine los kilometros, pulgadas y metros de un valor dado en cm 
function distancia(){

    let CM;

    CM = parseInt(prompt ('ingresa el valor en cm: '));

    KM = CM * 0.0001
    IN = CM * 0.393701
    M = CM * 0.01

    console.log ( ' el valor dado en cm es: ' + KM);
    console.log ( ' el valor dado en cm es: ' + IN);
    console.log ( ' el valor dado en cm es: ' + M);
    alert('el resultado es: ' + KM);
    alert('el resultado es: ' + IN);
    alert('el resultado es: ' + M);

}

//5. algoritmo que determine si el numero ingresado por el usuario es par o impar
function ParOimpar() {


    let = 0
    let prueba = 0

    a = parseInt(prompt ("Ingrese un numero"))
    prueba = a % 2

    if (prueba == 0){
            alert("su numero es par")
}
    else{
            alert("Su numero es impar")
}
}

//7. algoritmo que determine el mayor de dos numeros ingresados por el usuario
function Nmayor (){
    let A = 0
    let B = 0

    A = parseInt(prompt("Ingrese un numeros"))
    B = parseInt(prompt("Ingrese un numeros"))
    
    if (A > B){
        alert("Su numero es mayor" + A )
    }
    else{
        alert("su numero es mayor" + B)
    }   
    
    

}

//8. algoritmo que determine el menor de tres numeros ingresado por el usuario
function Nmenor() {
    let A = 0
    let B = 0
    let C = 0

    A = parseInt(prompt("Ingrese un numeros"))
    B = parseInt(prompt("Ingrese unnumeros"))
    C = parseInt(prompt("Ingrese un numeros"))

    if ((A < B) && (A < C)){
        alert("el  numero" + A + ' es menor a' + B + 'y a'+ C)
    }
    else if((A < B) && (B < C)){
        alert(" el numero " + B + 'es menor a ' + A +' y a' + C)
    }
    else if((C == A ) && (A == C) && (C )){
        alert(" el numero " + A + 'es igual a' + B +' e igual a' + C)
    }
    else{
        alert("el numero"+ C +"es menor a" + B +' y a'+ A)
    }
}

//8. el colegio ABC requiere un sistema que capture el nombre del estudiante, materia y 7 calificaciones entre el uno y diez, con esta informacion determinar si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.1
function estudiante(){
    let nombre= 0
    let materia= 0
    let nota1=0
    let nota2=0
    let nota3=0
    let nota4=0
    let nota5=0
    let nota6=0
    let nota7=0

    nombre = parseint(prompt("escriba el nombre del estudiante"))
    matria = parseint(prompt("escriba la materia del resulktado  que va a consultar "))

    nota1 = parseint(prompt("introdusca la mota numero 1  nota"))
    nota2 = parseint(prompt("introdusca la mota numero 2  nota"))
    nota3 = parseint(prompt("introdusca la mota numero 3  nota"))
    nota4 = parseint(prompt("introdusca la mota numero 4  nota"))
    nota5 = parseint(prompt("introdusca la mota numero 5  nota"))
    nota6 = parseint(prompt("introdusca la mota numero 6  nota"))
    nota7 = parseint(prompt("introdusca la mota numero 7  nota"))

    resultado = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 
    resultado_final = resultado / 7

    if( resultado_final < 6 ){
        alert("usted ha reprobado" + materia)
    }
    else{
        alert("usted aprobo" + materia)
    }


    


    

    
    
}
//9. un individuo decide invetir su capital en un banco, y requiere saber cuanto dinero ganara despues de N numero de anos teniendo en cuenta que el banco paga un interes mensual del 0.7% 

function inversion() {
    let capital, tiempo, interesGanancia, totalGanancia 

    capital= parseInt(prompt("Por favor ingrese el capital a invertir"));
    tiempo= parseInt(prompt("Por favor ingrese el tiempo"));
    

    interesGanancia = (capital * 0.084) * tiempo;
    totalGanancia = capital + interesGanancia; 

    alert("Señor cachon su ganancia es de: " + interesGanancia);

    alert("Señor cachon su ganancia total es de" + totalGanancia);

}