/*
Clase 4/10
Ejercicios para practicar:
1) Pedir un numero y mostrar su doble, su mitad, el siguiente y el anterior
2) Pedir nombre y apellido y mostrar la siguiente frase: "Su nombre es (Nombre) y su apellido es (apellido)"
3) Pedir al usuario 2 numeros y mostrar true si el primero es mayor al segundo y false si el segundo es mayor
4) Pedir al usuario un numero y mostrar 0 si es par y 1 si es impar.
*/


let n = prompt("Ingrese un número: ")
let doble = n*2
let mitad = n/2
let siguiente = parseInt(n)+1
let anterior = n-1

alert("El doble del número es "+ (doble))
alert("La mitad del número es "+ (mitad))
alert("El siguiente número es "+ (siguiente))
alert("El número anterior es "+ (anterior))


let nombre = prompt("Ingrese nombre: ")
let apellido = prompt("Ingrese apellido: ")
alert("Su nombre es "+nombre+" y su apellido es "+apellido)


let num1 = prompt("Ingrese un número: ")
let num2 = prompt("Ingrese otro número: ")
alert(num1>num2)

/*
let numero = prompt("Ingrese un número: ")
let resultado = (numero%2)!=0 ¿Cómo hacerlo sin IF?
alert(resultado)
*/

/*
Clase 11/10
Objetos literales

let profesor1 = {
    nombre: "Esteban",
    apellido: "Piazza",
    rol: "Docente",
    edad: 29,
    enActividad: true
}

console.log(profesor1)
console.log(profesor1.nombre)

Par clave:valor,

Arrays

const NOMBRES = ["Esteban","Valentina","Valentín","Guadalupe"]
console.log(NOMBRES)
console.log(NOMBRES[1])

const CARRITO = []
CARRITO.push("Hola")  AGREGAR ELEMENTO AL FINAL
CARRITO.pop() ELIMINAR EL ÚLTIMO ELEMENTO
LAST IN - LAST OUT (LIFO) (PILA)

CARRITO.unshift("Unshift") AGREGAR UN ELEMENTO AL PRINCIPIO
CARRITO.shift() ELIMINAR EL PRIMER ELEMENTO
FIRST IN - FIRST OUT (FIFO) (COLA)

console.log(CARRITO.length)

const MESES =["Enero","Marzo","Abril","Junio"]
MESES.splice(0,5,"Febrero") A PARTIR DE LA POSICIÓN 0, BORRAR 5 ELEMNTOS Y AGREGAR "Febrero"

const NOMBRES = ["Rita","Pedro","Miguel","Ana","Vanesa"]
var masculinos = NOMBRES.slice(1,3) TOMAR LOS ELEMENTOS DESDE LA POSICIÓN 1 HASTA LA 2 (3 NO PORQUE NO ES INCLUSIVO)

const APELLIDOSUSUARIOS = ["Perez","Dominguez","Gutierrez"]
console.log(APELLIDOSUSUARIOS.indexOf("Perez"))
console.log(APELLIDOSUSUARIOS.includes("Perez"))

const ELEMENTOS = ["Fuego","Aire","Agua","Tierra"]
console.log(ELEMENTOS.join()) DEVOLVER STRING DE ELEMENTOS

const EQUIPOS = ["Boquita","Riber","Boquita"]
console.log(EQUIPOS.indexOf("Boquita")) DEVUELVE 0
console.log(EQUIPOS.lastIndexOf("Boquita")) DEVUELVE 2

let nombre = "Esteban"
console.log(nombre[0])

/*
Clase 18/10

function saludar(){
    console.log("Hola")
}
Declaración de una función


saludar()
Invocación de una función

function sumar(num1,num2){
    console.log(num1+num2)
}

sumar(1,2)

function restar(num1,num2){
    return num1 - num2
}

restar(10,5)

function mostrarPorConsola(string,dato){
    console.log(string + dato)
}

mostrarPorConsola("El resultado es: ",restar(10,5))  // Callback

function multiplicar(a,b){
    return `El resultado de la multiplicación entre ${a} y ${b} es ${a*b}`
    // Template Literal
}

mostrarPorConsola(multiplicar(2,2))

let sumarFlecha = (a,b) => a + b + 100;

mostrarPorConsola(sumarFlecha(1,2))

let saludarFlecha = () => console.log("Hola en felcha")

saludarFlecha()

let sumarenFlecha = (a,b) => {
    let c = a + b
    return c
}

let producto = {
    id: "1",
    nombre: "Chipá",
    precioPorCuarto: 800,
    incluirIva: function(){
        return this.precioPorCuarto * 1.21
    }
}

console.log(producto.incluirIva())



1) Crear una calculadora con las siguientes operaciones:
    a) sumar
    b) restar
    c) multiplicar
    d) dividir
    e) potencia
    f) modulo
2) Crear una calculadora del IMC (indice de masa corportal)
3) Crear una función que informe el primer valor de un array (pasado por parametro)
4) Crear una función que salude al nombre de un objeto literal(pasado por parametro)
*/

let calculadora = {
    sumar: function(n1,n2){
        return n1 + n2
    },

    restar: function(n1,n2){
        return n1 - n2
    },

    multiplicar: function(n1,n2){
        return n1*n2
    },

    dividir: function(n1,n2){
        return n1/n2
    },

    potencia: function(n1,n2){
        return n1**n2
    },

    modulo: function(n1,n2){
        return n1%n2
    }
}


function IMC(peso,altura){
    return `El Índice de Masa Corporal es ${peso/(altura)**2}`
}

function devolverPrimerElemento(array){
    return `El primer elemento del Array es ${array[0]}`
}


function saludar(nombre){
    return `¡Hola ${nombre}!`
}

let objeto = {
    id: "1",
    nombre: "Florencia",
    apellido: "Polo"
}

console.log(saludar(objeto.nombre))


/*
Clase 25/10

let edad = parseInt(prompt("Ingrese su edad: "))


function condicional(parametro){
    if (parametro > 18){
        alert("Puede ingresar.")
    }else{
        alert("No puede ingresar.")
    }
}

condicional(edad)

edad > 18 ? console.log("Puede ingresar.") : console.log("No puede ingresar.")

function queHagoDias(dia){
    switch(dia){
        case "Monday":
            console.log("Party (Lunes)")
            break;
        case "Tuesday":
            console.log("Party (Martes)")
            break;
        case "Saturday":
            console.log("Weekend Party (Sábado)")
            break;
        default:
            console.log("Error en el ingreso.")
            break;
    }
}



1) Dados 3 números por parámetros, determinar cuál es el mayor.
2) Dado un número, determinar si es par o impar.
3) Dada una serie de 6 números, mostrar los que son pares y los que son impares (deben estar en dos arrays distintos).
4) Dado un número, determinar si es primo o no.
5) Dado un número aleatorio, pedirle al usuario un número y decirle si es mayor o menor o si adivinó el número.
6) Dado un año confirmar si fue biciesto o no. 

Plus:
1) Dada una palabra, calcular la cantidad de letras.

*/



/*
Clase 1/11

let numero = 0
let x = 11
while (x < 10){
    console.log(numero)
    numero ++
    x ++
}

do {
    console.log("Hola")
} while (x < 10); 


for ( let i = 0; i<10; i++ ){
    console.log(i)
}

let nombre = "Esteban"
for ( let i = 0; i < nombre.length; i++ ){
    console.log(nombre[i])
}


let mail = "asd@asd.com"

for ( let = i; i < mail.length; i++ ){
    if (mail[i] === "@"){
        console.log("Hay un arroba")
    }else{
        console.log("El string no tiene arroba")
    }
}


for ( let = i; i < mail.length; i++ ){
    if (mail[i] === "@"){
        return console.log("Hay un arroba")
    }
}

let estudiantes = [
    {nombre: "Valentín",apellido: "Beltramo",},{nombre: "Valentina",apellido: "Pardiñas",},{nombre: "Stefanía",apellido: "Ranucci",}
]

for ( let i = 0 ; i < estudiantes.length; i++){
    console.log(estudiantes[i].nombre)
}

let frutas = ["Manzana","Naranja","Pera"]
for ( let fruta in frutas){
    console.log(frutas[fruta])
}

frutas.forEach(fruta => console.log(fruta))


1) Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.

2) Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

3) Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.

4) Validar si un string es un email.
A TENER EN CUENTA:
a) debe tener un @
b) no puede tener mas de un @
c) debe haber un punto luego del arroba, no instantaneamente
d) no debe haber caracteres especiales no validos ( ñ , etc)
*/

/*
Clase 8/11
*/