






let CARRITO = []
let total = 0
let subtotal = 0
function sumar(precio,producto) {
        CARRITO.push(producto)
        document.getElementById("cantidad").innerHTML = "Cantidad de productos: " + CARRITO.length;
        subtotal = subtotal + precio
    if (CARRITO.length > 5){
        descuento = (10/100)*subtotal
        total = subtotal - descuento
        
    }else{
        total = subtotal
        descuento = 0
    }
    document.getElementById("subtotal").innerHTML = "SUBTOTAL: " + "$" + subtotal;
    document.getElementById("descuento").innerHTML = "DESCUENTO: " + "$" + descuento;
    document.getElementById("total").innerHTML = "TOTAL: " + "$" + total; 
    
    }
    
function vaciarCarrito() {
    CARRITO = []
    total=0
    subtotal=0
    descuento=0
    document.getElementById("cantidad").innerHTML = "Cantidad de productos: " + 0;
    document.getElementById("subtotal").innerHTML = "SUBTOTAL: " + "$" + subtotal;
    document.getElementById("descuento").innerHTML = "DESCUENTO: " + "$" + descuento;
    document.getElementById("total").innerHTML = "TOTAL: " + "$" + total; }


function comprar(){
    vaciarCarrito()
    alert("¡La compra se ha realizado con éxito!")
}


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})
