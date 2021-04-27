import Store from './Store'
// import HeroList from './HeroList' 

function TopHeroes ({name}){
    // debugger
    return <li><button>{name}</button></li>
}

const Dashboard = () => {
    return  <div>
                <h1>DASHBOARD</h1>
                <ul>
                    <TopHeroes name={Store[0].name}/>
                    <TopHeroes name={Store[1].name}/>
                    <TopHeroes name={Store[2].name}/>
                    <TopHeroes name={Store[3].name}/>
                </ul>
                {/* <button onClick={HeroList()}>All heroes</button> */}
            </div>
}
export default Dashboard;

//  TODO: heroe list
// TODO: HEROE DETAILS