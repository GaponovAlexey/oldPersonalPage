import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
// export const getStaticProps = async () => {
//   const response = await fetch()
//   const data = await response.json()
//   if(!data) {return {notFound:true}
//   return {props: { contacts: data },}
// }

const Skills = ({ skills }: any) => {
  return (
    <div>
      <ul className={s.skills}>
        <div>
          <h2>Frontend</h2>
          {skills.frontend.map((el, i) => (
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
          {skills.uiux.map((el, i) => (
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
          {skills.backend.map((el, i) => (
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
          {skills.analytics.map((el, i) => (
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
          {skills.Other.map((el, i) => (
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

export default Skills
