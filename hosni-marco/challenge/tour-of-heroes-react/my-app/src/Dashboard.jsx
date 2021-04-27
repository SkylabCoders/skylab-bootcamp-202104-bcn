import Store from './Store'

function TopHeroes ({name}){
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
                </ul>git
            </div>
}
export default Dashboard;
