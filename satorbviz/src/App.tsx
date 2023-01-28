import React from 'react';
//Notice that we can import display objects, to nest in our tsx code, which will
//be rendered in the browser window as HTML.
import logo from './logo.svg';
//Counter is a subcomponent in our App component.
import { Counter } from './features/counter/Counter';
import './App.css';

//Here we have our app itself - with its display structuring.
// This is defined as a function that is run and executes.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
