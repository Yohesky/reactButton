import React, { useState, useEffect } from 'react'

const ramdon = Math.round(Math.random() * (10 - 5) + 5);

export const Counter = ({statebutton, stateColor}) => {

   const [counter, setcounter] = useState(60)
    

   
    var nIntervId = setTimeout(() => {
        setcounter(counter - 1)
        if(counter < ramdon){
           
            setcounter(60)
        }
    },1000)
  
    useEffect(() => {
      
        if(statebutton){
          setcounter(60)
        }

         
    },[statebutton])

   

    if(counter < ramdon){
       clearInterval(nIntervId)
       setcounter(60)
    }

  

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
