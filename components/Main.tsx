import Image from 'next/image'
import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
const Main = () => {
  const text = [
    { title: 'Hello' },
    { title: 'I from Ukraine' },
    { title: 'I live in St.Petersburg' },
    { title: 'I web developer' },
    { title: 'I love my work' },
  ]
  const pVariants = {
    hidden: { x: +1000 },
    visible: { x: 0 },
    trans: {
      type: 'tween',
      duration: 0.3,
    },
  }

  return (
    <div className={s.main}>
      <motion.div
        transition={{ repeat: Infinity, repeatType: 'reverse', type: 'tween' }}
        animate={{ rotate: 0.1 }}
      >
        <Image src='/jpg/1.png' width='540%' height='720%' />
      </motion.div>

      <motion.span
        initial={pVariants.hidden}
        animate={pVariants.visible}
        transition={pVariants.trans}
      >
        About me
      </motion.span>

      <ul>
        {text.map((el, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: +1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', delay: i * 1 }}
          >
            {el.title}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Main
