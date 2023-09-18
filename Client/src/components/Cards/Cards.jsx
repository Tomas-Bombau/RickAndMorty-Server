import Card from '../Card/Card';
import styles from './Cards.module.css'

const Cards = (props) => {
   const {characters, onClose} = props
   
   return (
   <div className={styles.cardsContainer}>
      {characters.map((personaje) => {
         return (
            <Card
               id={personaje.id}
               key={personaje.id} 
               name={personaje.name} 
               status={personaje.status} 
               species={personaje.species} 
               gender={personaje.gender} 
               origin={personaje.origin.name} 
               image={personaje.image} 
               onClose = {onClose} 
            />)
         })}
   </div>
   )
}

export default Cards