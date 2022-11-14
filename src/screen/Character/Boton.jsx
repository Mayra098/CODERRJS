import React, { useState } from 'react'
import './Boton.css'
const Boton = () => {
const handleSumar=()=>{
   
setContador(contador+1)

}
const handleRestar=()=>{
    if(contador>0){
    setContador(contador-1)
    }
}



    const [contador, setContador]= useState(0)
  return (
    <div>
        
  
  <article className='contador'>
        <button className='restarB' disabled={contador ===0 ? true:false} onClick={handleRestar}>-</button>
  <p className='conta'>{contador}</p>

        <button  className="sumarB"onClick={handleSumar}>+</button>
        </article>
    </div>
  )
}

export default Boton