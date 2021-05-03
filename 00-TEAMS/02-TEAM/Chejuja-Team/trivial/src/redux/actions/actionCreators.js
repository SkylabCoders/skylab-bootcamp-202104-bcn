import actionTypes from  '../actions/actionTypes'
export default function loadGame(){
    return async (dispatch) => {
        const {data} = await axios.get(url);      
        dispatch( {
        type: actionTypes.LOAD_GAME,
        game: data.results
    })
}
}