import React, { useState, useEffect } from 'react'


export const Grafic = () => {
    //url de jsonplaceholder
    const url = 'https://jsonplaceholder.typicode.com/users?_limit=6'


    //estado para almacenar los usuarios obtenidos de la API
    const [users, setusers] = useState([])


    //hook que ejecuta 1 sola vez la funcion loadData() que trae los datos de la API
    useEffect(() =>{
        loadData()
    },[])

    //funcion loadData para cargar y posteriormente setear el estado con la data obtenida
    const loadData = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data, 'data');
        setusers(data)

    }

    

    return (
        <div className="mx-auto animate__animated animate__fadeInUp" style={{width: '100%', height:'500px'}}>
            <h3 className="text-center">Last participants</h3>
           <ol className="mt-5">

            {/* recorriendo y mostrando cada usuario */}
           {users && users.map((u,i) => (
                <li className="text-white" style={{background: `${u.id > 3 && 'purple' || u.id > 2 && 'blue' || u.id > 1 && 'orange' || u.id >= 1 && 'red'}`, borderRadius: '15px'}} key={i}> <p>{u.name}</p> </li>
            ))}
           </ol>

           <p className="text-center ml-5 alert alert-info"> <strong>Note:</strong> The background color of those cards are the chose color by each of them</p>
        </div>
    )
}
