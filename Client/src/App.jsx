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

   async function login(userData) {
      try {
         const { email, password } = userData
         const URL = 'http://localhost:3001/rickandmorty/login/'
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const {access} = data
         setAccess(data);
         access && navigate('/home')
      } catch (error) {
         console.log(error)
      }

      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/rickandmorty/login/';
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      // });
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
               <Route path="/" element={<Form logIn={login} />}></Route>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
               <Route path='/about' element={<About />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/favorites' element={<Favorites />}/>
            </Routes>
      </div>
   );
}

export default App;
