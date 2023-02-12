import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, ThreeElements, useLoader, useThree } from '@react-three/fiber'

export function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export function Earth(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const earthSurface = useLoader(THREE.TextureLoader, "earthsurface.jpg")
  return (
    <mesh {...props} ref={mesh}>
      <sphereBufferGeometry args={[0.5, 128, 128]} />
      <meshStandardMaterial map={earthSurface} roughness={1.0}  />
    </mesh>
  )
}

export function Equator(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
 
  return (
    <mesh {...props} ref={mesh} rotation={[0, 0, -0.42]}>
      <cylinderGeometry args={[0.6, 0.6, 0.02, 64]} />
      <meshStandardMaterial color="red"/>
    </mesh>
  )
}

export function NSPole(props: ThreeElements['mesh'] ) {
  const mesh = useRef<THREE.Mesh>(null!)
  return (
    <mesh {...props} ref={mesh} rotation={[0, 0, -0.42]}>
      <cylinderGeometry args={[0.01, 0.01, 2, 16]} />
      <meshStandardMaterial color="orange"/>
    </mesh>
  )
}

/*
export function Axes(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!)
  return (
    <group position={[0,0,0]}>
      <mesh {...props} ref={mesh} position={[0.5,0,0]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.01, 0.01, 1, 16]} />
        <meshStandardMaterial color="green"/>
      </mesh>
      <mesh {...props} ref={mesh} position={[0,0.5,0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1, 16]} />
        <meshStandardMaterial color="green"/>
      </mesh>
      <mesh {...props} ref={mesh} position={[0,0,0.5]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1, 16]} />
        <meshStandardMaterial color="green"/>
      </mesh>    
    </group>
  )
}
    <Arrow name="y-axis"  mesh-position={[0,0.5,0]} mesh-rotation={[0,0,0]} />
    <Arrow name="z-axis"  mesh-position={[0,0,0.5]} mesh-rotation={[Math.PI/2,0,0]}/>


*/

export function Axes(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!)
  return (
      <Arrow name="x-axis" position-x={[0.5,0,0]} rotation-z={Math.PI/2} />
  )
}


export function Arrow(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!) 
  return (
    <group>
      <mesh {...props} ref={mesh} position={[0,0,0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 2, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh {...props} ref={mesh} position={[0,1,0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.025, 0.1, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  )
}
