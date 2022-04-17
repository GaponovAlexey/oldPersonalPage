import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, MutableRefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

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
]

function Word({ children, ...props }): any {
  const color = new THREE.Color()
  const fontProps = {
    font: '/Inter-Bold.woff',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef() as React.MutableRefObject<HTMLInputElement | any>
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  useEffect((): any => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  useFrame(({ camera }: any): void => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    )
  })
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}

function Cloud({ count = 4, radius = 20 }): void {
  const words = useMemo(() => {
    const temp = []
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
const Frontend = () => {
  return (
    <div>
      <h2>Frontend</h2>
      <div className='flex h-[500px]'>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach='fog' args={['#202025', 0, 80]} />
          <Cloud count={8} radius={20} />
          <TrackballControls />
        </Canvas>
      </div>
    </div>
  )
}

export default Frontend
