import { motion } from 'framer-motion'
import AutoDispose from '../components/animation/box'
import s from '../styles/Home.module.scss'
import { Data } from '../Types/Types'

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/data')
  const data = await response.json()
  return { props: { skills: JSON.parse(JSON.stringify(data)) } }
}

const Attainments = ({ skills }: Data) => {
  return (
    <div>
      <div className='fixed z-[1] bottom-0 left-0'>
        <AutoDispose />
      </div>
      <ul className={s.skillsStyle}>
        <div>
          <h2>Frontend</h2>
          {skills?.frontend.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>UX / UI</h2>
          {skills?.uiux.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>Backend</h2>
          {skills?.backend.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>Analytics</h2>
          {skills?.analytics.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>Other</h2>
          {skills?.Other.map((el: any, i: any) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Attainments
