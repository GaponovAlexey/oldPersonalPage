import { motion } from 'framer-motion'
import Link from 'next/link'
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
  return (
    <div>
      <div>
        <h2>Frontend</h2>
        <h2>UX/UI</h2>
        <h2>Backend</h2>
        <h2>Analytics</h2>
        <h2>Other</h2>
      </div>
      <div>
        <ul className={s.skillsStyle}>
          <Frontend motion={motion} skills={skills} />
          <UiUx motion={motion} skills={skills} />
          <Backend motion={motion} skills={skills} />
          <Analytics motion={motion} skills={skills} />
          <Other motion={motion} skills={skills} />
        </ul>
      </div>
      <div className={s.animation}>
        <AutoDispose />
      </div>
    </div>
  )
}

export default Lore
