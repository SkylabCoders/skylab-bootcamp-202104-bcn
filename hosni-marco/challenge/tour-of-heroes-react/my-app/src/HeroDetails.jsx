import Store from './Store';

function HeroTitle(id){
    debugger
    console.log('----->', id.id.name)
    return <span>HERO: {id.id.name}</span>
}

const HeroDetails = () => {
    return <div>
            <h3>Hero Details</h3>
            <HeroTitle id={Store[0]}/>
            </div>
}

export default HeroDetails;