//Hooks
import { useState } from 'react'

//Funciones
import {validarCampos} from './validation'

//Styles
import styles from './Form.module.css'

const Form = (props) => {
  const [userData, setData] = useState({
    email:'' ,
    password:'' ,
  })

  const [errors, setErrors] = useState({
    email:'',
    password:'',
  })
  
  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setData({...userData, [property]: value})
    validarCampos({...userData, [property]: value}, errors, setErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.logIn(userData)
  }

  return (
    <div>
      <form className={styles.form} action="">
        <img src="https://pngimg.com/uploads/rick_morty/rick_morty_PNG24.png" alt="" />

        <label htmlFor="email">EMAIL</label>
        <input 
          type="text"
          name='email' 
          value={userData.email} 
          onChange={handleChange} 
          />
        <span className={errors.email ? styles.error : styles.success}>{errors.email}</span>

        <label htmlFor="password">PASSWORD</label>
        <input 
          type="password" 
          name='password' 
          value={userData.password} 
          onChange={handleChange}
          className={errors.password ? styles.error : styles.success}/>
        <span className={errors.password ? styles.error : styles.success}>{errors.password}</span>

        <button className={styles.botonSubmit} type='submit' onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  )
}

export default Form