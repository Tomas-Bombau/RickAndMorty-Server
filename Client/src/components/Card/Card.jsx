import styles from './Card.module.css'
import {Link} from 'react-router-dom'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react'

const Card = (props) => {

   const {id, name, status, species, gender, origin, image, onClose } = props; 

   const dispatch = useDispatch()
   const myFavorites = useSelector ((state) => state.myFavorites)
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      setIsFav(!isFav)
      return isFav ? dispatch(removeFav(id)) : dispatch(addFav(props))
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className = {`${styles.cardContainer} ${styles.h2}`}>
         {isFav ? (
            <button className={styles.like} onClick={handleFavorite}> ❤️ </button>
         ) : (
            <button className={styles.like} onClick={handleFavorite}> 🤍 </button>
         )}
         <button onClick={() => {onClose(id)}} className={styles.boton} > X </button>
         <h2> {status} </h2>
         <h2> {species} </h2>
         <h2> {gender} </h2>
         <h2> {origin} </h2>
         <img className={styles.cardImage} src={image} alt='' />
         <Link to={`/detail/${id}`}> <h2 className ={styles.nombre}> {name} </h2> </Link>
      </div>
   );
}

export default Card