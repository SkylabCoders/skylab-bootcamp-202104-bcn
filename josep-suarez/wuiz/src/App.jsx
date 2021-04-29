import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import QuestionSite from './componentes/QuestionSite';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>QUIZ</h1>
        <Switch>
          <Route path="/" exact component={QuestionSite} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
