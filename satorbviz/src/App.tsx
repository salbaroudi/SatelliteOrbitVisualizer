import React from 'react';
//Notice that we can import display objects, to nest in our tsx code, which will
//be rendered in the browser window as HTML.
import logo from './logo.svg';
//Counter is a subcomponent in our App component.
import { Counter } from './features/counter/Counter';
import './App.css';

//Integrating React-Three-Fibre
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import Box from "./threefibre"

//Here we have our app itself - with its display structuring.
// This is defined as a function that is run and executes.
function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Counter />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </header>
    </div>
  );
}

export default App;
