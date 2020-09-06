import React, { useState, useEffect } from 'react'
import { Counter } from './Counter'
import { Grafic } from './Grafic'


export const ButtonComponent = () => {

    const token = "pressed"
    var colorPressed = localStorage.getItem("colorBtn")
    
    const [button, setbutton] = useState(false)
    const [color, setcolor] = useState('')

    useEffect(() => {
        if(localStorage.getItem("press")){
            console.log('item existe');
            setbutton(true)
        }
     
    }, [button])


    

    const handleClick = (e) => {

        e.preventDefault()

        console.log('click');

        if(!localStorage.getItem("press")){
            localStorage.setItem("press", token)
            setbutton(true)
        }

        if(color === 'purple'){
            document.getElementById("btn").style.background = 'purple'
            localStorage.setItem('colorBtn','purple')
        }

        if(color === 'blue'){
            document.getElementById("btn").style.background = 'blue'
            localStorage.setItem('colorBtn','blue')
        }

        if(color === 'green'){
            document.getElementById("btn").style.background = 'green'
            localStorage.setItem('colorBtn','green')
        }

        if(color === 'yellow'){
            document.getElementById("btn").style.background = 'yellow'
            localStorage.setItem('colorBtn','yellow')
        }

        if(color === 'orange'){
            document.getElementById("btn").style.background = 'orange'
            localStorage.setItem('colorBtn','orange')
        }

        if(color === 'red'){
            document.getElementById("btn").style.background = 'red'
            localStorage.setItem('colorBtn','red')
        }

        
    }



    return (
       <>
        <div className="mt-5 row ">
    
            <button 
                id="btn"
                disabled={button}
                style={{border: '1px solid black'}}
                className="btn btn-outline-light col-md-6"
                onClick={handleClick}
            >
               <p className="text-dark"> <strong>Click</strong> </p>
            </button>

            <div className="col-md-6">
                <Counter stateColor={setcolor} statebutton={button} />
            </div>

            <hr/>

        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="mt-5">
                    {button && <Grafic />}
                </div>
            </div>

            <div className="col-md-6">
                {colorPressed && <h1 className="text-white mt-5 animate__animated animate__bounceIn" style={{background:`${colorPressed}`, borderRadius: '15px'}}> Your color was {colorPressed} </h1>}
            </div>

          
        </div>

     
       </>
    )
}
