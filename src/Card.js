import { Link, useParams } from 'react-router-dom'
import './Card.css'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'


const Card =({ id, name, image, quote, category})=>{
  


    return(
      <div className='card'>
    <Link to={`hola/${name}`}>
 
          <img alt={`personaje ${name}`} src={image}/>
          <div className='descripcion'>
          <h3 >{name}</h3>
          <p>{`#${id}`}</p>
          <p>{quote}</p>

          <p>{category}</p>
          <button className='vermas' variant="primary">ver mas</button>

          </div>

          </Link>
          </div>
    )
    }

    export default Card


/*     //import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import simpsonApi  from './APIrest/simpsonApi';
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from './components/Container';
import { useEffect, useState } from 'react';
import Lol from './components/pokemonAPI';

/* function SuperForm(props){
  console.log(props)
  return(
    <>
    <h1>Hola</h1> */
{/*     {props.children}
 */}  /*   {props.buttoncomponent({buttonText: "jeje"})}
    </>
  )
} *//* 

function SuperButton({buttonText}){
  return(
   <button>{buttonText}</button>
 
  )
}


function App() {
const [characters, setCharacters]=useState([])
const[filter, setFilter]= useState("");
const [numberCount, setNumberCount]=useState(0);
const [numberCount_, setNumberCount_]=useState(0);
const [contador, setContador]=useState(0);

const getImages = ()=>{
 


setTimeout=(()=>{
  const characters=  simpsonApi;

  setCharacters(characters)
},0)
}
useEffect(()=>{
getImages();
},[])
 */

//const [date, setDate]=useState('');
/* 
function ClickCount(){
setNumberCount(numberCount+1);
//setDate(new Date().toString())
}
 *//* 
function ClickCount_(){
  setNumberCount(numberCount-1);

  
  //setDate(new Date().toString())
  }
   */


/* useEffect(()=>{
  setDate(new Date().toString()) //queda la fecha solo cundo se clickea
},[numberCount]
); */

/* 
  return (

    <>

  */
/* <div className='contenedor'>
   <ItemListContainer greeting="Bienvenidxs!"></ItemListContainer>
   </div> */
   /*    <div className='principalContainer'>
    <h1>Characters</h1>
    <input id="filter" name="filter" type="text" value={filter}
     onChange={(event)=>setFilter(event.target.value)}/>

    <div className='cardContainer'>
   {characters.filter(personaje=> personaje.character.includes(filter)).map((character,i)=>(
    <Card  key={i}
    name={character.character}
      image={character.image}
      quote={character.quote}
      
        />
    ))}    
     </div>

   </div> */
   /*    <SuperForm title="holis">
   <SuperButton/>
   </SuperForm>
    */
   /*     <SuperForm title="holis" buttoncomponent={SuperButton}>

   </SuperForm>
    */
 /*   <Container/>
   <Button variant="primary">Agregar al carrito</Button>
   <br/>

{numberCount}

{contador}
<br/> */
/* {date} *//* 
<br/>

   <button onClick={()=>ClickCount()}>+</button>
   <button onClick={()=>ClickCount_()}>-</button>
 
   <button onClick={()=>setContador(contador+1)}>+</button>
   <button onClick={()=>setContador(contador-1)}>-</button>
   <br/> <Lol/>
   </>
  );
}

export default App;
 */ 