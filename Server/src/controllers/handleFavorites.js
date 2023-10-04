let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push( req.body)
  return res.json(myFavorites)
};

const deleteFav = (req, res) => {
    const {id} = req.params
    const favsFilteres  = myFavorites.filter(char => char.id !== id)
    myFavorites = favsFilteres
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
}