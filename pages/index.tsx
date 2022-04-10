import Image from 'next/image'
import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
const Home = () => {
  const text = [
    { title: "Hi there 👋, I'm Alexey'" },
    { title: 'I Web Developer' },
    { title: 'I Work in React and Redux' },
    { title: 'I love my family and my work' },
    { title: 'Citizenship: Ukraine' },
    { title: 'I have 3+ years of experience in general and ' },
    { title: 'one years of frontend development in particular' },
  ]

  return (
    <div className={s.main}>
      <strong>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            type: 'tween',
            duration: 0.3,
          }}
        >
          About me
        </motion.div>
      </strong>

      <div className={s.about}>
        <motion.div
          transition={{ type: 'tween' }}
          initial={{ opacity: 0, x: -300 }}
          animate={{ rotate: 0.1, opacity: 1, x: 0 }}
        >
          <Image src='/jpg/1.png' width='540%' height='720%' />
        </motion.div>

        <strong>
          <ol>
            {text.map((el, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: +300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'tween', delay: i * 0.08 }}
              >
                {el.title}
              </motion.li>
            ))}
          </ol>
        </strong>
      </div>
    </div>
  )
}

export default Home
