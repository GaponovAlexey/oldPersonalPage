import Image from 'next/image'
import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
const Main = () => {
  const text = [
    { title: 'text1' },
    { title: 'text2' },
    { title: 'text3' },
    { title: 'text4' },
    { title: 'text5' },
  ]
  const pVariants = {
    hidden: { x: +1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    trans: {
      type: 'tween',
      duration: 0.3,
    },
    trammpa: {
      duration: 0.2,
    },
  }
  const ListVariants = {
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { x: +1000, opacity: 0 },
  }

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
        initial={pVariants.hidden}
        animate={pVariants.visible}
        transition={pVariants.trans}
      >
        test
      </motion.p>

      <div>
        <motion.div
          initial={pVariants.hidden}
          animate={pVariants.visible}
          transition={pVariants.trans}
          whileHover={{
            scale: 1.3,
            color: 'pink',
          }}
        >
          Hover
        </motion.div>
      </div>
      <span className='pt-10'>
        {text.map((el, i) => (
          <motion.h2
            initial={ListVariants.hidden}
            animate={ListVariants.visible(i)}
          >
            {el.title}
          </motion.h2>
        ))}
      </span>
    </div>
  )
}

export default Main
