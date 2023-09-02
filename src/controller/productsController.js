const fs = require("fs");
const path = require("path");
let productos = []; //Aqui se almacenaran los productos

function cargarProductos(){
    try{
        const filePath = path.join(__dirname, '..', 'data', 'products.json');
        const data = fs.readFileSync(filePath,"utf-8");
        productos = JSON.parse(data);
        console.log("Productos cargados con exito");
    }catch (error){
        console.error("Error al cargar el producto",error);
    }
}

function obtenerProductos(){
    return productos;
}

cargarProductos();

module.exports = {
    obtenerProductos,
};