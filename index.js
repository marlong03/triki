let computerPlay = false
function preguntarJugadores(){
    Swal.fire({
        title: '¿Contra quien jugaras?',
        showDenyButton: true,
        confirmButtonText: 'Computer',
        denyButtonText: 'Player 2',
      }).then((result) => {
        if(result.isConfirmed) {
            computerPlay = true
            Swal.fire('Player 1 vs Computer')
        } else if(result.isDenied) {
            computerPlay = false
            Swal.fire('Player 1 vs Player 2')
        }
      })
}
preguntarJugadores()
let btnReset = document.getElementById("btnReset")

btnReset.addEventListener("click",(x)=>{

    Swal.fire({
        title: '¿Seguro quieres reiniciar la partida?',
        text: "Recuerda que perderas el puntaje de los Jugadores",
        showDenyButton: true,
        confirmButtonText: 'Reiniciar partida',
        confirmButtonColor: "#004a45",
        denyButtonText: 'Cancelar',
    }).then((result) => {
        if(result.isConfirmed) {
            window.location.reload()
        } else if(result.isDenied) {
            return
        }
    }) 

   
   
})

//-----------------------------------------------------
const cuadrado1 = document.getElementById("cuadrado1")
const cuadrado2 = document.getElementById("cuadrado2")
const cuadrado3 = document.getElementById("cuadrado3")
const cuadrado4 = document.getElementById("cuadrado4")
const cuadrado5 = document.getElementById("cuadrado5")
const cuadrado6 = document.getElementById("cuadrado6")
const cuadrado7 = document.getElementById("cuadrado7")
const cuadrado8 = document.getElementById("cuadrado8")
const cuadrado9 = document.getElementById("cuadrado9")


let objComparador = {
    fila1:{
        cuadrado1:cuadrado1.innerText,
        cuadrado2:cuadrado2.innerText,
        cuadrado3:cuadrado3.innerText,
    },
    fila2:{
        cuadrado4:cuadrado4.innerText,
        cuadrado5:cuadrado5.innerText,
        cuadrado6:cuadrado6.innerText,
    },
    fila3:{
        cuadrado7:cuadrado7.innerText,
        cuadrado8:cuadrado8.innerText,
        cuadrado9:cuadrado9.innerText,
    }
}
let objComparador2 = {
    fila1:{
        cuadrado1:cuadrado1.innerText,
        cuadrado2:cuadrado2.innerText,
        cuadrado3:cuadrado3.innerText,
    },
    fila2:{
        cuadrado4:cuadrado4.innerText,
        cuadrado5:cuadrado5.innerText,
        cuadrado6:cuadrado6.innerText,
    },
    fila3:{
        cuadrado7:cuadrado7.innerText,
        cuadrado8:cuadrado8.innerText,
        cuadrado9:cuadrado9.innerText,
    }
}
function resetCuadrados(){
    cuadrado1.innerText = ""
    cuadrado2.innerText = ""
    cuadrado3.innerText = ""
    cuadrado4.innerText = ""
    cuadrado5.innerText = ""
    cuadrado6.innerText = ""
    cuadrado7.innerText = ""
    cuadrado8.innerText = ""
    cuadrado9.innerText = ""
    cantidadCuadrosRellenos = 0
    ganadorPartida = ""
}
//--------------------------------------
var cCuadrados = document.getElementById("containerCuadrados")
var juegaText = document.getElementById("juega")
let juega = "X"
let cantidadCuadrosRellenos = 0

cCuadrados.addEventListener("click",function(x){
    if(x.srcElement.className == "cuadrado" && x.target.innerText == ""){
        if(computerPlay == false){
        if(juega == "X"){
            let sonido1 = new Audio()
            sonido1.src = 'audios/tic.mp3'
            sonido1.play()
            x.target.innerText = "X"
            juegaText.innerText = juega
            juega = "O"
            cantidadCuadrosRellenos += 1
        }
        
          else  if(juega == "O"){
            if(computerPlay == false){
                let sonido1 = new Audio()
                sonido1.src = 'audios/tictic.mp3'
                sonido1.play()
                console.log(computerPlay , cantidadCuadrosRellenos);
                x.target.innerText = "O"
                juegaText.innerText = juega
                cantidadCuadrosRellenos += 1
                juega = "X"
             
            }
             if(computerPlay == true){
               

              
                let sonido1 = new Audio()
                sonido1.src = 'audios/tictic.mp3'
                sonido1.play()

                    jugarComputer(objComparador, juegaText,x)
                    juegaText.innerText = juega
                    cantidadCuadrosRellenos += 1
                    juega = "X"
                
            }
        }
          
        objComparador = {
            fila1:{
                cuadrado1:cuadrado1.innerText,
                cuadrado2:cuadrado2.innerText,
                cuadrado3:cuadrado3.innerText,
            },
            fila2:{
                cuadrado4:cuadrado4.innerText,
                cuadrado5:cuadrado5.innerText,
                cuadrado6:cuadrado6.innerText,
            },
            fila3:{
                cuadrado7:cuadrado7.innerText,
                cuadrado8:cuadrado8.innerText,
                cuadrado9:cuadrado9.innerText,
            }
        }
    }else if(computerPlay == true){
        
        if(juega == "X"){
            let sonido1 = new Audio()
            sonido1.src = 'audios/tic.mp3'
            sonido1.play()
            x.target.innerText = "X"
            juegaText.innerText = juega
            juega = "O"
            cantidadCuadrosRellenos += 1
        }
           
        objComparador = {
            fila1:{
                cuadrado1:cuadrado1.innerText,
                cuadrado2:cuadrado2.innerText,
                cuadrado3:cuadrado3.innerText,
            },
            fila2:{
                cuadrado4:cuadrado4.innerText,
                cuadrado5:cuadrado5.innerText,
                cuadrado6:cuadrado6.innerText,
            },
            fila3:{
                cuadrado7:cuadrado7.innerText,
                cuadrado8:cuadrado8.innerText,
                cuadrado9:cuadrado9.innerText,
            }
        }
        if(juega == "O"){
            console.log(objComparador);
            if(computerPlay == false){
                let sonido1 = new Audio()
                sonido1.src = 'audios/tictic.mp3'
                sonido1.play()
               
                x.target.innerText = "O"
                juegaText.innerText = juega
                cantidadCuadrosRellenos += 1
                juega = "X"
             
            }
             if(computerPlay == true){
                
                let sonido1 = new Audio()
                sonido1.src = 'audios/tictic.mp3'
                sonido1.play()
                jugarComputer(objComparador, juegaText,x)
                juegaText.innerText = juega
                cantidadCuadrosRellenos += 1
                juega = "X"
                console.log(cantidadCuadrosRellenos);
            }
        }
          
        /* objComparador = {
            fila1:{
                cuadrado1:cuadrado1.innerText,
                cuadrado2:cuadrado2.innerText,
                cuadrado3:cuadrado3.innerText,
            },
            fila2:{
                cuadrado4:cuadrado4.innerText,
                cuadrado5:cuadrado5.innerText,
                cuadrado6:cuadrado6.innerText,
            },
            fila3:{
                cuadrado7:cuadrado7.innerText,
                cuadrado8:cuadrado8.innerText,
                cuadrado9:cuadrado9.innerText,
            }
        } */ //sOBRE ESCRIBIA EL OBJ COMPARADOR Y NO SE VEIA EL ULTIMO MOVIMIENTO
    }
       
       
       
        if(computerPlay == false){
            comparar(objComparador) 
        }
        else if(computerPlay == true){
            
            jugarComputer(objComparador, juegaText)
            setTimeout(() => {
                comparar(objComparador)
            }, 300);
        }

    }
})

const puntajeXId = document.getElementById("puntajeXId")
const puntajeOId = document.getElementById("puntajeOId")
const puntajeXIdR = document.getElementById("puntajeXIdR")
const puntajeOIdR = document.getElementById("puntajeOIdR")
let puntajeX = 0
let puntajeO = 0
let ganadorPartida = ""
function comparar(obj){
    console.log( cantidadCuadrosRellenos);
   
//X EN FILAS
if(cantidadCuadrosRellenos <= 10){

    if( obj.fila1.cuadrado1 == "X" &&
        obj.fila1.cuadrado2 == "X" &&
        obj.fila1.cuadrado3 == "X"  )
    {ganaPartida("X")}
    else if( obj.fila2.cuadrado4 == "X" &&
        obj.fila2.cuadrado5 == "X" &&
        obj.fila2.cuadrado6 == "X"  )
    {ganaPartida("X")}
    else if( obj.fila3.cuadrado7 == "X" &&
        obj.fila3.cuadrado8 == "X" &&
        obj.fila3.cuadrado9 == "X"  )
    {ganaPartida("X")}
    //X EN filaS
    if( obj.fila1.cuadrado1 == "X" &&
        obj.fila2.cuadrado4 == "X" &&
        obj.fila3.cuadrado7 == "X"  )
    {ganaPartida("X")}
    else if( obj.fila1.cuadrado2 == "X" &&
        obj.fila2.cuadrado5 == "X" &&
        obj.fila3.cuadrado8 == "X"  )
    {ganaPartida("X")}
    else if( obj.fila1.cuadrado3 == "X" &&
        obj.fila2.cuadrado6 == "X" &&
        obj.fila3.cuadrado9 == "X"  )
        {ganaPartida("X")}
    //X EN DIAGONALES
    if( obj.fila1.cuadrado1 == "X" &&
        obj.fila2.cuadrado5 == "X" &&
        obj.fila3.cuadrado9 == "X"  )
        {ganaPartida("X")}
    else if( obj.fila1.cuadrado3 == "X" &&
        obj.fila2.cuadrado5 == "X" &&
        obj.fila3.cuadrado7 == "X"  )
        {ganaPartida("X")}
        
        else{

    //--------------------------------------


    //O EN FILAS
        if( obj.fila1.cuadrado1 == "O" &&
            obj.fila1.cuadrado2 == "O" &&
            obj.fila1.cuadrado3 == "O"  )
            {ganaPartida("O")}
        else if( obj.fila2.cuadrado4 == "O" &&
            obj.fila2.cuadrado5 == "O" &&
            obj.fila2.cuadrado6 == "O"  )
            {ganaPartida("O")}
        else if( obj.fila3.cuadrado7 == "O" &&
            obj.fila3.cuadrado8 == "O" &&
            obj.fila3.cuadrado9 == "O"  )
            {ganaPartida("O")}
        //O EN filaS
        if( obj.fila1.cuadrado1 == "O" &&
            obj.fila2.cuadrado4 == "O" &&
            obj.fila3.cuadrado7 == "O"  )
            {ganaPartida("O")}
        else if( obj.fila1.cuadrado2 == "O" &&
            obj.fila2.cuadrado5 == "O" &&
            obj.fila3.cuadrado8 == "O"  )
            {ganaPartida("O")}
        else if( obj.fila1.cuadrado3 == "O" &&
            obj.fila2.cuadrado6 == "O" &&
            obj.fila3.cuadrado9 == "O"  )
            {ganaPartida("O")}
        //O EN DIAGONALES
        if( obj.fila1.cuadrado1 == "O" &&
            obj.fila2.cuadrado5 == "O" &&
            obj.fila3.cuadrado9 == "O"  )
            {ganaPartida("O")}
        else if( obj.fila1.cuadrado3 == "O" &&
            obj.fila2.cuadrado5 == "O" &&
            obj.fila3.cuadrado7 == "O"  )
            {ganaPartida("O")}
        /* else{
            if(cantidadCuadrosRellenos == 10){

                Swal.fire(
                    'Woow, ha sido un empate! 😵',
                    'Clic para la siguiente partida',
                    'success'
                    )
                    cantidadCuadrosRellenos = 0
                }
            resetCuadrados()
        } */
        }
        if(ganadorPartida == "" && cantidadCuadrosRellenos == 9 || cantidadCuadrosRellenos == 10){
            Swal.fire(
                'Tenemos un empate',
                'Pulsa OK para continuar',
                'success'
            ).then(x=>{

                resetCuadrados()
                
                
            })
           
        }
    }
}


function ganaPartida(ganador){
    ganadorPartida = ganador
    let sonido1 = new Audio()
    sonido1.src = 'audios/guitarra.mp3'
    sonido1.play()
    if(ganador == "X"){
        puntajeX += 1
    }
    else if(ganador == "O"){
        puntajeO += 1
    }
    puntajeXId.innerText = puntajeX
    puntajeOId.innerText = puntajeO
    puntajeXIdR.innerText = puntajeX
    puntajeOIdR.innerText = puntajeO
    cantidadCuadrosRellenos = 0
    Swal.fire(
        'User ' + ganador + ' ¡Eres el ganador! 🏆',
        'Clic para la siguiente partida',
        'success'
      )
    resetCuadrados()
   
}
function jugarComputer(objComparador,juegaText,x){
    let coordenadasBusquedaFinal 
    if(juega == "O"){
        
            if(cantidadCuadrosRellenos <= 8){

                let coordenadasBusqueda = buscarEspaciosVaciosParaJugar(objComparador)
                if(coordenadasBusqueda[0] == ""){
                    coordenadasBusquedaFinal = coordenadasBusqueda
                }else{
                    while(coordenadasBusqueda != ""){
                        let busqueda =  buscarEspaciosVaciosParaJugar(objComparador);
                        coordenadasBusqueda = busqueda[0]
                       /*  console.log(coordenadasBusqueda); */
                        if(coordenadasBusqueda == ""){
                            /* console.log(busqueda); */
                            coordenadasBusquedaFinal = busqueda
                           
                            break
                        }
                    }
                }

               setTimeout(() => {
                console.log("JUGO 0 CON 2MILISEGUNDOS");
                objComparador[coordenadasBusquedaFinal[1]][coordenadasBusquedaFinal[2]] = "O"
                //FILA 1
                if(x.view.cCuadrados.childNodes[1].childNodes[1].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[1].childNodes[1].innerText = "O"
                }
                else if(x.view.cCuadrados.childNodes[1].childNodes[3].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[1].childNodes[3].innerText = "O"
                }
                else if(x.view.cCuadrados.childNodes[1].childNodes[5].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[1].childNodes[5].innerText = "O"
                }
                //FILA 2
                else if(x.view.cCuadrados.childNodes[3].childNodes[1].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[3].childNodes[1].innerText = "O"
                }
                else if(x.view.cCuadrados.childNodes[3].childNodes[3].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[3].childNodes[3].innerText = "O"
                }
                else if(x.view.cCuadrados.childNodes[3].childNodes[5].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[3].childNodes[5].innerText = "O"
                }
                  //FILA 3
                else if(x.view.cCuadrados.childNodes[5].childNodes[1].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[5].childNodes[1].innerText = "O"
                }
                else if(x.view.cCuadrados.childNodes[5].childNodes[3].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[5].childNodes[3].innerText = "O"
                    
                }
                else if(x.view.cCuadrados.childNodes[5].childNodes[5].id == coordenadasBusquedaFinal[2]){
                    x.view.cCuadrados.childNodes[5].childNodes[5].innerText = "O"
                }
                
            }, 200);
              }
    }
    

}
function buscarEspaciosVaciosParaJugar(objComparador){
   
        let columnaIndice = Math.round(Math.random()*2 + 1)
        let columnaIndiceText = ""
        if(columnaIndice == 1){ columnaIndiceText = 'fila1'}
        else if(columnaIndice == 2){ columnaIndiceText = 'fila2'}
        else if(columnaIndice == 3){ columnaIndiceText = 'fila3'}
        
        //-------------------------------------
        let cuadradoIndice = Math.round(Math.random()*2)
        let cuadradoIndiceText = Object.keys(objComparador[columnaIndiceText])[cuadradoIndice]
        
   
   //COORDENADAS
  
 /*   console.log(columnaIndiceText);
   console.log(cuadradoIndiceText); */
   return resultadoCuadradoDisponible = [objComparador[columnaIndiceText][cuadradoIndiceText],columnaIndiceText,cuadradoIndiceText]
   /* console.log(resultadoCuadradoDisponible); */


   
}
