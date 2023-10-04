const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getChardById = async (req, res) => {
  try {
      let { id } = req.params;
      const {name, gender, species, origin, image, status} = (await axios(URL + id)).data
      const character = {id, name, gender, species, origin, image, status}
      
      // const response = await axios(URL + ID)
      // const data = response.data;
      // const character = { 
      //   id: data.id,
      //   status: data.status,
      //   name: data.name,
      //   species: data.species,
      //   origin: data.origin,
      //   image: data.image,
      //   gender: data.gender
      // }; 

      return character.name
        ? res.json(character)
        : res.status(404).send("Character not found");
  }
  catch(error){
    return res.status(500).send(error.message = "Character not found")
  }
};

module.exports = getChardById;
