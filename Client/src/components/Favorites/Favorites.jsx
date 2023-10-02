import { useSelector, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions' 
import { useState } from 'react'
import styles from './Favorites.module.css'
import Card from '../Card/Card'

const Favorites = () => {
    const myFavorites = useSelector ((state) => state.myFavorites)
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux) // sino no renderiza
    }

    
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
            <h1 className={styles.titulo}> My Favorites</h1>

            <div className={styles.filters}>
                <select className={styles.selectOne} onChange={handleOrder}>
                        <option value="A"> Ascendente</option>
                        <option value="D"> Descendente</option>
                </select>

                <select className={styles.selectTwo} onChange={handleFilter}>
                        <option value="Male"> Male</option>
                        <option value="Female"> Female</option>
                        <option value="Genderless"> Genderless</option>
                        <option value="unknown"> Unknown</option>
                </select>
            </div>

            <div className={styles.cardsContainer}>
            {myFavorites.map((favorite) => {
                return (
                    <Card           
                        key={favorite.id} 
                        id={favorite.id}
                        name={favorite.name} 
                        status={favorite.status} 
                        species={favorite.species} 
                        gender={favorite.gender} 
                        origin={favorite.origin.name} 
                        image={favorite.image} 
                    />
                    );
                })}
            </div>
        </>
    )
}



export default Favorites