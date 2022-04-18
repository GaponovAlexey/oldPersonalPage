import { motion } from 'framer-motion'
import { useState } from 'react'
import s from '../../styles/Home.module.scss'
import { Data } from '../../Types/Types'
import Analytics from './analytics'
import Backend from './backend'
import Frontend from './frontend'
import MyGlobus from './MyGlobus'
import Other from './other'
import UiUx from './uiux'

export const getStaticProps = async () => {
  const response = await fetch('https://g-alexey.vercel.app/api/data')
  const data = await response.json()
  return { props: { skills: JSON.parse(JSON.stringify(data)) } }
}

const Lore = ({ skills }: Data) => {
  const [isOpenGlob, setIsOpenGlob] = useState(true)
  const [isOpenF, setIsOpenF] = useState(false)
  const [isOpenB, setIsOpenB] = useState(false)
  const [isOpenU, setIsOpenU] = useState(false)
  const [isOpenA, setIsOpenA] = useState(false)
  const [isOpenO, setIsOpenO] = useState(false)

  const funcOpenedFront = () => {
    if (isOpenGlob) {
      setIsOpenF(!isOpenF)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenA(false)
      setIsOpenO(false)
      setIsOpenGlob(false)
    } else {
      setIsOpenGlob(!isOpenGlob)
      setIsOpenA(false)
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenO(false)
    }
  }
  const funcOpenedBack = () => {
    if (isOpenGlob) {
      setIsOpenF(false)
      setIsOpenB(!isOpenB)
      setIsOpenU(false)
      setIsOpenA(false)
      setIsOpenO(false)
      setIsOpenGlob(false)
    } else {
      setIsOpenGlob(!isOpenGlob)
      setIsOpenA(false)
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenO(false)
    }
  }
  const funcOpenedUxui = () => {
    if (isOpenGlob) {
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(!isOpenU)
      setIsOpenA(false)
      setIsOpenO(false)
      setIsOpenGlob(false)
    } else {
      setIsOpenGlob(!isOpenGlob)
      setIsOpenA(false)
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenO(false)
    }
  }
  const funcOpenedAlog = () => {
    if (isOpenGlob) {
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenA(!isOpenA)
      setIsOpenO(false)
      setIsOpenGlob(false)
    } else {
      setIsOpenGlob(!isOpenGlob)
      setIsOpenA(false)
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenO(false)
    }
  }
  const funcOpenedOther = () => {
    if (isOpenGlob) {
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenA(false)
      setIsOpenO(!isOpenO)
      setIsOpenGlob(false)
    } else {
      setIsOpenGlob(!isOpenGlob)
      setIsOpenO(false)
      setIsOpenF(false)
      setIsOpenB(false)
      setIsOpenU(false)
      setIsOpenA(false)
    }
  }
  const IsOpenGlob = () => {
    setIsOpenF(false)
    setIsOpenB(false)
    setIsOpenU(false)
    setIsOpenA(false)
    setIsOpenO(!isOpenO)
  }

  return (
    <div>

      <div className={s.Skills}>
        <strong>
          <h2 onClick={funcOpenedFront}>Frontend</h2>
          <h2 onClick={funcOpenedBack}>Backend</h2>
        </strong>
        <strong>
          <h2 onClick={funcOpenedUxui}>UX/UI</h2>
        </strong>
        <strong>
          <h2 onClick={funcOpenedAlog}>Analytics</h2>
          <h2 onClick={funcOpenedOther}>Other</h2>
        </strong>
      </div>
      <ul>
        <div>{isOpenGlob && <MyGlobus props={'noZoom'} />}</div>
        <div>{isOpenF && <Frontend motion={motion} skills={skills} />}</div>
        <div>{isOpenB && <Backend motion={motion} skills={skills} />}</div>
        <div>{isOpenU && <UiUx motion={motion} skills={skills} />}</div>
        <div>{isOpenA && <Analytics motion={motion} skills={skills} />}</div>
        <div>{isOpenO && <Other motion={motion} skills={skills} />}</div>
      </ul>
      {/* <div className={s.animation}>
        <AutoDispose />
      </div> */}
    </div>
  )
}

export default Lore
