import s from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={s.componentHeader}>
      <h1>Personal</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/workShop'>Workshop</Link>
        </li>
        <li>skills</li>
        <motion.li
          transition={{
            type: 'just',
            repeat: Infinity,
          }}
          animate={{ rotate: 2 }}
        >
          contact me
        </motion.li>
      </ul>
    </div>
  )
}

export default Header
