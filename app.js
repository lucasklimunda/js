// Segunda entrega 

// -- Arrays de Objetos---
const PRODUCTOS =[
  {nombre:"Remera Nike",precio: 10000},
  {nombre:"Remera Adidas",precio: 7500},
  {nombre:"Remera Puma",precio: 6500},
  {nombre:"Remera Nacional",precio: 5000},
  {nombre:"Remera Oferta",precio: 2500}]
 
  //-- Funciones y métodos de búsqueda/filtrado del array---
  function encontrar (){
  let busqueda = prompt(`Hola bienviend@ a la sección de marcas y precios, digite opción númerica que desea consultar:
  1: Nike
  2: Adidas
  3: Puma
  4: Nacional
  5: Oferta
  6: precio >= 6500
  7: precio <= 6500
  
  Las consultas se visualizaran en la parte de la consola.
  `)
  
  switch (busqueda){
      case "1":
          let resultado1 = PRODUCTOS.find ((producto)=> producto.nombre === "Remera Nike")
          console.log(resultado1)
          break
      case "2":
          let resultado2 = PRODUCTOS.find ((producto)=> producto.nombre === "Remera Adidas")
          console.log(resultado2)
          break       
      case "3":
          let resultado3 = PRODUCTOS.find ((producto)=> producto.nombre === "Remera Puma")
          console.log(resultado3)
          break   
      case "4":
          let resultado4 = PRODUCTOS.find ((producto)=> producto.nombre === "Remera Nacional")
          console.log(resultado4)
          break
      case "5":
          let resultado5 = PRODUCTOS.find ((producto)=> producto.nombre === "Remera Oferta")
          console.log(resultado5)
          break
      case "6":
          let resultado6 = PRODUCTOS.filter ((producto)=> producto.precio >= 6500)
          console.log(resultado6)
          break
      case "7":
          let resultado7 = PRODUCTOS.filter ((producto)=> producto.precio <= 6500)
          console.log(resultado7)
          break
      default:
          console.log ("No digito ninguna opción de búsqueda") 
          break       
  }
  }
  
  function repetir (){
      let repeticion = prompt (`¿Desea realizar otra búsqueda? Para efectuar una nueva consulta en el sitio apriete cualquier tecla o ingrese la palabra "no" para finalizar.`).toLowerCase()
      while (repeticion !== "no" ){
          
        encontrar ()
        repeticion = prompt (`¿Desea realizar otra búsqueda? Para efectuar una nueva consulta en el sitio apriete cualquier tecla o ingrese la palabra "no" para finalizar.`).toLowerCase()
        
      }
      return repeticion
  }
//--Funciones Ejecutadas/llamadas--  
  encontrar ()
  repetir ()