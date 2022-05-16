import React, { useState } from 'react'

const View = () => {
    var [name,setName]=useState("")

    const changeName = () =>{
        setName(name='Reny')
    }
  return (
    <div> 
        Logged in as {name}
        <button onClick={changeName} className='btn btn-success'>changeName</button>
         </div>
  )
}

export default View