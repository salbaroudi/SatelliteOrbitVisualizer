import {useEffect} from 'react';
//Notice that we can import display objects, to nest in our tsx code, which will
//be rendered in the browser window as HTML.
//Counter is a subcomponent in our App component.
import { Counter } from './features/counter/Counter';
import './App.css';

//Integrating React-Three-Fibre
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber'
import {Box, Earth, Equator, NSPole, Axes, Arrow} from "./threefibre"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Camera, Color } from 'three';

//Here we have our app itself - with its display structuring.
// This is defined as a function that is run and executes.
//Note: Canvas size is just whatever the parent container is.

/*
<Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
*/

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Counter />
      <div className="Canvas-Container">
        <Canvas camera={{position: [0, 0, 2]}}>
            <CameraController />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Earth position={[0,0,0]} />
            <Equator position={[0,0,0]} />
            <NSPole position={[0,0,0]} />
            <Axes />
          </Canvas>
      </div>
      </header>
    </div>
  );
}

export default App;
