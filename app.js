// Primera entrega -- Simulador interactivo: Nota final de alumnos ingresados.

let cantidadDeAlumnos = prompt (`Ingrese la cantidad númerica de alumnos que quiere registrar en el sistema academico llamado "Console.log". Una vez ingresado al sistema, los nombres de los estudiantes junto a las notas, se alojarán los mismos en este sitio y calculará la nota final de cada uno.`)
function CalculadorDePromedio(){
    for (i = 1; i <= cantidadDeAlumnos; i++){
    let alumno = prompt ("Inserte nombre del alumno")
    
    let primeraCalificacion = Number(prompt(`Ingrese la nota que obtuvo el alumno: "${alumno}" en su primera evaluación`))
    let segundaCalificacion = Number(prompt(`Ingrese la nota que obtuvo el alumno: "${alumno}" en su segunda evaluación`))
    let terceraCalificacion = Number(prompt(`Ingrese la nota que obtuvo el alumno: "${alumno}" en su tercera y última evaluación`))  
    const SUMA = primeraCalificacion + segundaCalificacion + terceraCalificacion
    let promedio = SUMA / 3
    
    if((promedio >= 9) || (promedio == 10) ){
     promedio=`${promedio} aprobado con excelencia.`
    }else if(promedio >= 6 ){
    promedio = `${promedio} aprobado.`  
    } else{
      promedio = `${promedio} desaprobado.` 
    }
    
    let calificación = alert(`El alumno: "${alumno}" tuvo una calificación de: ${promedio}`)
    let calificaciónSistema = console.log(`Alumno: "${alumno}" registrado en el sistema. Calificación final: ${promedio}`)   
  }}
  
  CalculadorDePromedio()