// import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard'
import HeroList from './HeroList'
import HeroDetails from './HeroDetails'
import heroID from './HeroList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard/>
        <HeroList/>
        <HeroDetails callID={heroID}/>
      </header>
    </div>
  );
}

export default App;
