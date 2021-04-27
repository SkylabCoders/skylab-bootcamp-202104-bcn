// import logo from './logo.svg';
// import './App.css';
import HeaderTitle from './components/headerComponent';
import ButtonUp from './components/buttonCountUpComponent';
import UpButton from './components/counterUp';
import Counter from './components/show-counter-component'
import CountDown from './components/counterDown-Components'

function App() {
  
  return (
    <div className="App" id ='root'>

      <HeaderTitle />
      <Counter/>
      <UpButton/>
      <ButtonUp />
      <CountDown />
      
    </div>
  );
}

export default App;
