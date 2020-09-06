import React, { useState, useEffect } from 'react'

//numero random entre 10 y 5 para reiniciar el estado del componente
const ramdon = Math.round(Math.random() * (10 - 5) + 5);

export const Counter = ({statebutton, stateColor}) => {


    //contador para restar los segundos
   const [counter, setcounter] = useState(60)
    

    //intervalo para restar el estado (60) cada 1 segundo
    var nIntervId = setTimeout(() => {
        setcounter(counter - 1)
        if(counter < ramdon){
           
            setcounter(60)
        }
    },1000)
  

    //efecto para determinar el estado del boton si es true reinicia el contador a 60,su estado inicial y 
    //solo cambia si cambia el estado del boton
    useEffect(() => {
      
        if(statebutton){
          setcounter(60)
        }

         
    },[statebutton])

   
    //condicion para regresar el estado a 60 con un valor random diferente cada vez que carga el componente
    if(counter < ramdon){
       clearInterval(nIntervId)
       setcounter(60)
    }

  
    //condiciones de acuerdo a los segundos del estate para mandar por props al componente padre ButtonComponent
    // el color de acuerdo a los sg
    if(counter >= 52){
        stateColor('purple')
    }else if(counter >= 42){
        stateColor('blue')
    }else if(counter >= 32){
        stateColor('green')
    }else if(counter >= 22){
        stateColor('yellow')
    }else if(counter >= 12){
        stateColor('orange')
    }else if(counter >= 0){
        stateColor('red')
    }

    


    return (
       <>
        <div className="mb-4" style={{marginLeft: '200px'}}>
            <h1 className="text-center"> {counter} </h1>
        </div>
       </>
    )
}
