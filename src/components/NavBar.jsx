import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../screen/Character/Filter';
import CartWidget from './CartWidget';
import './././../components/NavBar.css'


const NavBar = () => {


  return (
    
        
    <div  className='Nav'>
<ul className='menu'>

<li>
<Link to={"/"}>   <a href="/">
<img  className='logo' src="./logo.png"/>
</a></Link>      </li>
<li><Link to={"/category/remeras"}>     <a href="/">Remeras</a></Link>      </li>
<li><Link to={"/category/zapas"}>     <a href="/">Zapatillas</a></Link>      </li>

<li><Link to={"/category/pantalones"}>     <a href="/">Pantalones</a></Link>      </li>

<li>  <CartWidget></CartWidget>
</li>
         

  
  </ul>
   </div>

      
    
        
  );
};

export default NavBar;
