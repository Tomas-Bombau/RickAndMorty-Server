const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getChardById = async (req, res) => {
  let { id } = req.params;
  try{
  await axios(URL + id)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;
      const character = { id, status, name, species, origin, image, gender };

      return character.name
        ? res.json(character)
        : res.status(404).send("Character not fouund");
    })
  }
  catch(error){res.status(500).send((error.message = "error"))}
};

module.exports = getChardById;
