const fs = require("fs");
const path = require("path");
let productos = []; //Aqui se almacenaran los productos
const filePath = path.join(__dirname, '..', 'data', 'products.json');

//Cargar productos desde el products.json
function cargarProductos(){
    try{
        
        const data = fs.readFileSync(filePath,"utf-8");
        productos = JSON.parse(data);
        //probando si cargan los productos pueden borrarlo si quieren
        console.log("Productos cargados con exito");
    }catch (error){
        //en caso de que no carguen productos acá saldra el error
        console.error("Error al cargar el producto",error);
    }
}

// Guardar productos en el archivo JSON
function guardarProductos() {
    try {
      const data = JSON.stringify(productos, null, 2);
      fs.writeFileSync(filePath, data);
      console.log("Productos guardados con éxito");
    } catch (error) {
      console.error("Error al guardar los productos", error);
    }
  }
/***********************Listar productos**************************************************/
function obtenerProductos(){
    return productos;
}


/********************************Cargar productos***********************************************/
function agregarProducto(producto) {
    productos.push(producto);
    guardarProductos();
  }

cargarProductos();

module.exports = {
    obtenerProductos,
    agregarProducto,
};