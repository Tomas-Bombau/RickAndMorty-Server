import React, { useState } from "react";
import style from './SearchBar.module.css';

const SearchBar = (props) => {

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const randomNum = Math.ceil(Math.random() * 826);

   return (
      <div className={style.encabezado}>
         <input onChange={handleChange} placeholder='Introduzca su personaje' className={style.barraDeBusqueda} type='search' />
         <button className={style.botonAgregar} onClick={() => props.onSearch(parseInt(id))}> Agregar </button>
         <button className={style.boton} onClick={() => props.onSearch(randomNum)}> <img src="https://jewelrybrands.shop/cdn/shop/collections/cartoon-network-fart_large.png?v=1588605133" alt="" /> </button>
      </div>
   );
}

export default SearchBar