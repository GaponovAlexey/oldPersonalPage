import { Physics, usePlane } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense, useRef, useState } from 'react'

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Testing: NextPage = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Canvas>
          <Physics>
            <ambientLight intensity={0.1} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[+1.2, 0, 0]} />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Testing
