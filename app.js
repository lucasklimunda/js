// Tercera pre-entrega (en desarrollo)


const CARDSPRODUCTOS = document.querySelector(".container-cards")
const PRODUCTOS = [
    { consola:"Super Nintendo", precio: 7500, marca:"Nintendo"},
    {consola:"Nintendo Wii", precio: 8000, marca:"Nintendo"},
    {consola:"Nintendo Switch", precio: 120000, marca:"Nintendo"},
    { consola:"Playstation 1", precio: 11000, marca:"Playstation"},
    { consola:"Playstation 2", precio: 15000, marca:"Playstation"},
    { consola:"Playstation 3", precio: 40000, marca:"Playstation"},
    { consola:"Playstation 4", precio: 70000, marca:"Playstation"},
    { consola:"Playstation 5", precio: 200000, marca:"Playstation"},
    { consola:"Xbox-one", precio: 100000, marca:"Xbox"}

]

function cargarProductos (){
 
    for(let producto of PRODUCTOS ){
    let contenedor = document.createElement ("div")
    contenedor.innerHTML=
    `
    <div class="card border-dark mb-3" style="max-width: 20rem;">
    <div class="card-header">${producto.consola} </div>
    <div class="card-body">
        <p class="card-text"> $${producto.precio}</p>
            <button type="button" class="btn btn-success ">Agregar al carrito</button>
            <button type="button" class="btn btn-primary">Eliminar</button>
        </div>
    </div>
    `
    CARDSPRODUCTOS.appendChild (contenedor)
}  }

cargarProductos()

const CATEGORIAS = document.querySelectorAll(".form-select")



CATEGORIAS.forEach(categoria =>{
    categoria.addEventListener("click", (e)=>{
        if (e.currentTarget.id =! "catalogo"){
            const PRODUCTOSELEGIDOS = PRODUCTOS.filter(producto=> producto.marca === e.currentTarget.id)
            cargarProductos(PRODUCTOSELEGIDOS)
        }else{cargarProductos()}
    })
})
