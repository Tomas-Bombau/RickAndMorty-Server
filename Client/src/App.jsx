//Components
import Cards from "./components/Cards/Cards"
import Nav from "./components/Nav/Nav"
import Favorites from "./components/Favorites/Favorites";

// Hooks
import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

//Views
import About from './views/About/About'
import Detail from './views/Detail/Detail'
import Form from "./views/Landing/Form";

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   const EMAIL = 'tomas.bombau@gmail.com'
   const PASSWORD = '123456'

   const logIn = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else{
         alert('El usuario o contraseña son incorrectos')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const [characters, setCharacters] = useState([])
   
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            const characterExists = characters.find(character => character.id === data.id);
            if (!characterExists) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert(`Character ${data.name} already exists in the list!`);
            }
         } 
         
         else {
            window.alert('¡No hay personajes con este ID!');
         } 
      });
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter(character => character.id !== id);
      setCharacters(filteredCharacters);
    }

   const location = useLocation();
  
   return (
      <div className='App'>
            {location.pathname === '/' ? null : <Nav onSearch={onSearch}/>}

            <Routes>
               <Route path="/" element={<Form logIn={logIn} />}></Route>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
               <Route path='/about' element={<About />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/favorites' element={<Favorites />}/>
            </Routes>
      </div>
   );
}

export default App;
