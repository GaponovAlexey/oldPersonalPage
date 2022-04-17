import { Text, TrackballControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const data = [
  'JS | TS',
  'HTML | CSS | Sass',
  'React | NextJs',
  'React Hooks',
  'React Context API',
  'Redux Toolkit',
  'Redux Saga',
  'Redux Persist',
  'RTK Query',
  'React Router6',
  'React Transition Group',
  'React Hook Form',
  'Slick',
  'PassportJs',
  'TailwindCSS',
  'Styled-Components',
  'Emotion',
  'JS | TS',
  'HTML | CSS | Sass',
  'React | NextJs',
  'React Hooks',
  'React Context API',
  'Redux Toolkit',
  'Redux Saga',
  'Redux Persist',
  'RTK Query',
  'React Router6',
  'React Transition Group',
  'React Hook Form',
  'Slick',
  'PassportJs',
  'TailwindCSS',
  'Styled-Components',
  'Emotion',
  'JS | TS',
  'HTML | CSS | Sass',
  'React | NextJs',
  'React Hooks',
  'React Context API',
  'Redux Toolkit',
  'Redux Saga',
  'Redux Persist',
  'RTK Query',
  'React Router6',
  'React Transition Group',
  'React Hook Form',
  'Slick',
  'PassportJs',
  'TailwindCSS',
  'Styled-Components',
  'Emotion',
]

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    font: '/Inter-Bold.woff',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef() as any
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  useEffect((): any => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(
      color.set(hovered ? '#e02f82' : 'white'),
      0.1
    )
  })
  return (
    <Text
      {...(props as any)}
      {...(fontProps as any)}
      ref={ref as any}
      onPointerOver={over as any}
      onPointerOut={out as any}
      children={children as any}
    />
  )
}

function Cloud({ count = 4, radius = 20 }) {
  const words = useMemo(() => {
    const temp = [] as any
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          data[Math.floor(Math.random() * data.length)],
        ])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ))
}
const Globus = () => {
  return (
    <div className='h-[700px]'>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach='fog' args={['#1010de', 0, 80]} />
        <Cloud count={8} radius={20} />
        <TrackballControls />
      </Canvas>
    </div>
  )
}

export default Globus
