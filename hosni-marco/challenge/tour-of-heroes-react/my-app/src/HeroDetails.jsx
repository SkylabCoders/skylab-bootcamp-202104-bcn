import Store from './Store';

function HeroTitle({name}){
    debugger
    console.log('----->', name)
    return <span>HERO: {name}</span>
}

 //TODO: RECIIR ID
const HeroDetails = (id) => {
    debugger
    console.log('-herolist---->', Store[id].name)

    return <div>
            <h3>Hero Details</h3>
            <HeroTitle name={Store[id].name}/>
            </div>
}
export default HeroDetails;