import React from "react";
import {
      BrowserRouter as Router,
       Switch,
       Route,
       }
       from "react-router-dom"
import ListOfSuperheros from "../src/Components/ListOfSuperheros";
import HeroDetail from "../src/Components/HeroDetailComponent"
import './App.css';

function App() {
  
  return (
   <header>
     <h1>SUPERHEROS</h1>
     <Router>
       <Switch>
         <Route exact path= {`/`} component={ListOfSuperheros}/>
         <Route exact path={`/heroes/:heroId`} component={HeroDetail} />
       </Switch>
     </Router>
      
   </header>
  );
}

export default App;