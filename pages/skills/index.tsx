import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import AutoDispose from '../../components/animation/box'
import s from '../../styles/Home.module.scss'
import { Data } from '../../Types/Types'
import Analytics from './analytics'
import Backend from './backend'
import Frontend from './frontend'
import Other from './other'
import UiUx from './uiux'

export const getStaticProps = async () => {
  const response = await fetch('https://g-alexey.vercel.app/api/data')
  const data = await response.json()
  return { props: { skills: JSON.parse(JSON.stringify(data)) } }
}

const Lore = ({ skills }: Data) => {
  const [isOpenF, setIsOpenF] = useState(true)
  const [isOpenB, setIsOpenB] = useState(false)
  const [isOpenU, setIsOpenU] = useState(false)
  const [isOpenA, setIsOpenA] = useState(false)
  const [isOpenO, setIsOpenO] = useState(false)

  const funcOpenedFront = () => {
    setIsOpenF(!isOpenF)
    setIsOpenB(false)
    setIsOpenU(false)
    setIsOpenA(false)
    setIsOpenO(false)
  }
  const funcOpenedBack = () => {
    setIsOpenF(false)
    setIsOpenB(!isOpenB)
    setIsOpenU(false)
    setIsOpenA(false)
    setIsOpenO(false)
  }
  const funcOpenedUxui = () => {
    setIsOpenF(false)
    setIsOpenB(false)
    setIsOpenU(!isOpenU)
    setIsOpenA(false)
    setIsOpenO(false)
  }
  const funcOpenedAlog = () => {
    setIsOpenF(false)
    setIsOpenB(false)
    setIsOpenU(false)
    setIsOpenA(!isOpenA)
    setIsOpenO(false)
  }
  const funcOpenedOther = () => {
    setIsOpenF(false)
    setIsOpenB(false)
    setIsOpenU(false)
    setIsOpenA(false)
    setIsOpenO(!isOpenO)
  }

  return (
    <div className={s.Skills}>
      <div>
        <h2 onClick={funcOpenedFront}>Frontend</h2>
        <h2 onClick={funcOpenedBack}>Backend</h2>
        <h2 onClick={funcOpenedUxui}>UX/UI</h2>
        <h2 onClick={funcOpenedAlog}>Analytics</h2>
        <h2 onClick={funcOpenedOther}>Other</h2>
      </div>
      <ul className={s.skillsStyle}>
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
