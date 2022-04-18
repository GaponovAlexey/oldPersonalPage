import Image from 'next/image'
import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
import AutoDispose from '../components/animation/box'
const base = [
  { title: "Hi there 👋, I'm Alexey'" },
  { title: 'I am a Web Developer' },
  { title: 'I Work in React and Redux' },
  { title: 'I love my family and my work' },
  { title: 'Citizenship: Ukraine' },
]

const about = [
  { title: 'I have 2+ years of experience in general and,' },
  { title: 'one year of frontend development in particular.' },
  { title: 'I am sure I would be an excellent addition to your company.' },
  { title: "I'm keen on coding and actively seek out," },
  { title: 'new technologies and stay up-to-date,' },
  { title: 'on industry trends and advancements.' },
  { title: 'Ready to share my knowledge and experience' },
  { title: 'Like to challenge myself.' },
  { title: 'I can build good relationships with different people ' },
]
const Home = () => {
  return (
    <>
      <div className={s.main}>
        <strong>
          <motion.div
            initial={{ x: -200 }}
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
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image src='/jpg/1.png' width='455%' height='620%' />
          </motion.div>
          <div>
            <strong>
              <ul>
                {base.map((el, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: +50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'tween', delay: i * 0.04 }}
                  >
                    {el.title}
                  </motion.li>
                ))}
              </ul>
            </strong>
            <br />
            <br />
            <strong>
              <ul>
                {about.map((el, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: +50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', delay: i * 0.04 }}
                  >
                    {el.title}
                  </motion.li>
                ))}
              </ul>
            </strong>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
