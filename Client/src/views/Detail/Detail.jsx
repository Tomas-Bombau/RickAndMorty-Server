import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './Detail.module.css'

const Detail = () => {
  const [character, setCharacter] = useState({})

  const {id} = useParams()

  useEffect(() => {
    axios(`"http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div className={styles.posicionamientoDetail}>

      <div className={styles.info}>
        <h1 className={styles.titulo}> {character?.name} </h1>
        <h2 > Status - {character?.status} </h2>
        <h2 > Species - {character?.species} </h2>
        <h2 > Gender - {character?.gender} </h2>
        <h2 > Origin - {character.origin?.name} </h2>
      </div>

      <div className={styles.imagenContainer}>
        <img className={styles.imagen} src={character?.image} alt='' />
      </div>
    </div>
  )
}

export default Detail