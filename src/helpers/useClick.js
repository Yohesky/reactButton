import {useState,useEffect} from 'react'

export const useClick = () => {
    const [stateButton, setButton]  =  useState(null)

    // useEffect(() => {
    //         changeState()
    // },[stateButton])

    const changeState = (stateb) => {
        setButton(stateb)
    }


    return [stateButton, changeState]
}
