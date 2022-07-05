// Compra de productos de computacion

const productos = [];


class Producto{ 
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase();
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad
    }

    calcularPrecioCompra = () => this.precioCompra * this.cantidad;
    calcularPrecioVenta = () => this.precioVenta * this.cantidad;
}
    function calcularTotales(){
        let totalCompra = 0;
        let totalVenta = 0;

        totalCompra = productos.reduce((acumulador, elemento) => acumulador + elemento.calcularPrecioCompra(), 0);
        totalVenta = productos.reduce((acumulador, elemento) => acumulador + elemento.calcularPrecioVenta(), 0);

        let PrecioTotal = prompt("Su precio total es: ")
        PrecioTotal = totalCompra


    }
   

    function registrarProductos(){
        let numeroProductos = parseInt(prompt("Cuantos productos vas a agregar al carrito?"));

        for( const index = 0; index < numeroProductos; index++ ){
            let nombre = prompt("Ingrese el nombre del producto");
            let precioCompra = parseFloat(prompt("Ingrese precio de compra"));
            let precioVenta = parseFloat(prompt("Ingrese precio de venta"));
            let cantidad = parseFloat(prompt("Ingrese la cantidad"));

            productoARegistrar = new Producto(nombre, precioCompra, precioVenta, cantidad)

            productos.push(productoARegistrar)

        }
    }
    
    function main(){
        registrarProductos()
        calcularTotales()
    }
    main()
        
    