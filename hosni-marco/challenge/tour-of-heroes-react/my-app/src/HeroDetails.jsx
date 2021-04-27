import Store from './Store';
// import HeroList from './HeroList'
function HeroTitle(id){
    debugger
    console.log('----->', id.id.name)
    return <span>HERO: {id.id.name}</span>
}

 //TODO: RECIIR ID
const HeroDetails = () => {
    
    // console.log('herolist---->', HeroList)
    debugger

    return <div>
            <h3>Hero Details</h3>
            <HeroTitle id={Store[0]}/>
            </div>
}
export default HeroDetails;