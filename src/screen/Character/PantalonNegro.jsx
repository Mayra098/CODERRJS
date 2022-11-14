import React from 'react'
import '../../screen/Character/PantalonNegro.css'
import Boton from '../Character/Boton'
const PantalonNegro = () => {
  return (
    <>
    <section>
      <article>{<img className='imagen' src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwd7fbfa7f/HF6086_031_24.jpg?imwidth=795&impolicy=product" />} 
</article>

 <article>
 <div> <p className='text'>Jean Negro Brooksfield Jane
Vendido y entregado por tiendas asociadas
</p>
<br/>
<label id='label' for="so">Talle</label> <br/>
<select id="so" name="so">
  <option value="" selected="selected">M</option>
  <option value="windows">S</option>
  <option value="mac">L</option>
  <option value="linux">XL</option>
  <option value="otro">XXL</option>
</select>


<p>cantidad</p>

<Boton></Boton>


<button className='comprar'>comprar</button>
</div> 
 </article>

</section></>
    
  )
}

export default PantalonNegro