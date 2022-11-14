import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
/* import { obtenerObjetoByID } from '../../APIrest/simpsonApi';
 */
const Character = () => {

const {idCharacter}=useParams()
/*   const{name}=useParams();
 */  const [character,setCharacter]=useState({})

/* useEffect(()=>{
setCharacter(obtenerObjetoByID(idCharacter));
})
 */


  return (
    <div>{character.character}</div>
/*     <div>{name}</div>
 */    
  )
}

export default Character