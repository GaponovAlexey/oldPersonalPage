import Image from 'next/image'
import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
const Main = () => {
  return (
    <div className={s.main}>
      <motion.div
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          type: 'tween',
          ease: 'easeIn',
        }}
        animate={{ rotate: 0.1 }}
      >
        <Image src='/jpg/1.png' width='540%' height='720%' />
      </motion.div>

      <motion.p
        initial={{ x: +1000 }}
        animate={{ x: 0 }}
        // exit={{ x: -1000 }}

        transition={{
          type: 'spring',
          // duration: 0.4,
        }}
      >
        test
      </motion.p>
    </div>
  )
}

export default Main
