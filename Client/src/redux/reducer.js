import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions'


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.allCharacters, payload], allCharacters: [...state.allCharacters, payload]}
        
        case REMOVE_FAV:
            return {...state, myFavorites: [state.myFavorites.filter((favorite) => Number(payload) !== favorite.id)]}
        
        case FILTER:
            let copy = state.allCharacters.filter((char) => {return char.gender === payload})
            return {...state, myFavorites: copy}

        case ORDER:
            let copy2 = state.allCharacters;
            let ordenamiento = copy2.sort((a, b) => {
                return payload === 'A' ? a.id - b.id : b.id - a.id
            })

            return {...state, myFavorites: ordenamiento}

        default:
            return {...state};
    }
}

export default rootReducer
