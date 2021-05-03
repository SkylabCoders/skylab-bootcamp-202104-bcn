import actionTypes from  '../actions/actionTypes'

export default function loadGame(difficultySelection, typeSelection){
    const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficultySelection}&type=${typeSelection}`
    return async (dispatch) => {
        const {data} = await axios.get(url);      
        dispatch( {
        type: actionTypes.LOAD_GAME,
        game: data.results
    })
}
}