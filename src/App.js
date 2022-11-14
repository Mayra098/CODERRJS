
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from './components/Container';
import { useEffect, useState } from 'react';
import Lol from './components/pokemonAPI';
import { useParams } from 'react-router-dom';
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'

function App() {
const [characters, setCharacters]=useState([])
const[filter, setFilter]= useState("");
const [numberCount, setNumberCount]=useState(0);
const [numberCount_, setNumberCount_]=useState(0);
const [contador, setContador]=useState(0);
const {categoryId}=useParams();
const [Product, setProduct]=useState("");

const getCharacters =()=>{
  setTimeout(()=>{

    setCharacters(characters)
  },0)

}



useEffect(()=>{
  /////////////////2
  const db=getFirestore();
/*   const gorroRef=doc(db, "items", "5v23RoBF1BNRizi7Kj4g")
getDoc(gorroRef).then((snapshot)=>{
if(snapshot.exists()){
  console.log(snapshot.data())//ya accedemos a la

}
})  */

const itemsCollectionRef = collection(db, "items")
getDocs(itemsCollectionRef).then(
  (snapshot)=>{
snapshot.docs.map(
  (doc)=>{
console.log(doc.data())
  }

)
  }
)
  ////////////////
  getCharacters()
;
},[])


//const [date, setDate]=useState('');

function ClickCount(){
setNumberCount(numberCount+1);
//setDate(new Date().toString())
}

function ClickCount_(){
  setNumberCount(numberCount-1);

  
  }
  




  return (

    <>

 


   <div className='principalContainer'>


 


    <div className='cardContainer'>
      {categoryId}
 
      
        
      
    {categoryId?
      characters.filter((personaje)=> personaje.categoryId===categoryId).map((character,i)=>(
      <Card  key={i}
      id={i}
    categoryId={character.character}
        description={character.image}
        imageId={character.quote}
     price={character.category}
  
        
          />
      )
      ) : characters.filter((personaje)=> personaje.character.includes(filter)).map((character,i)=>(
        <Card  key={i}
        id={i}
        name={character.character}
          image={character.image}
          quote={character.quote}
       category={character.category}
    
          
            />
        )
        )} 
     
     </div>

   </div>


   <Button variant="primary">Agregar al carrito</Button>
   <br/>

{numberCount}

{contador}
<br/>
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
