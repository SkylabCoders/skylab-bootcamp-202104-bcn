import store from './../store/store'

export const HeroList = () =>{
    let heroes = store
    return(
        <ul>
            {
                heroes.map(item => <li>{item.superhero}</li>)
            }
        </ul>
    )
}