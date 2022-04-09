import s from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
const Header = () => {
  return (
    <div className={s.componentHeader}>
      <h1>Personal</h1>
      <ul>
        <li>home</li>
        <li>workshop</li>
        <li>about me</li>
        <li>skills</li>
        <motion.li transition={{
          type: 'just',
          repeat: Infinity }} animate={{ rotate: 2 }}>
          contact me
        </motion.li>
      </ul>
    </div>
  )
}

export default Header
