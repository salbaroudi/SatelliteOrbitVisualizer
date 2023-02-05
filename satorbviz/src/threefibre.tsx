import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'

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
  return (
    <mesh {...props} ref={mesh}>
      <sphereBufferGeometry args={[0.5, 128, 128]} />
      <meshStandardMaterial color="blue" />
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

