import Image from 'next/image'
import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
const Home = () => {
  const text = [
    { title: "Hi there 👋, I'm Alexey'" },
    { title: 'I from Ukraine' },
    { title: 'I live in St.Petersburg' },
    { title: 'I web developer' },
    { title: 'I love my work' },
  ]

  return (
    <div className={s.main}>
      <motion.div
        transition={{ type: 'tween' }}
        initial={{ opacity: 0, x: -300 }}
        animate={{ rotate: 0.1, opacity: 1, x: 0 }}
      >
        <Image src='/jpg/1.png' width='540%' height='720%' />
      </motion.div>

      <strong>
        <motion.div
          initial={{ x: +300 }}
          animate={{ x: 0 }}
          transition={{
            type: 'tween',
            duration: 0.3,
          }}
        >
          About me
        </motion.div>
      </strong>
      <strong>
        <ol>
          {text.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: +300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'tween', delay: i * 1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </ol>
      </strong>
    </div>
  )
}

export default Home
