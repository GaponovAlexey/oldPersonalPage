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
    hidden: { x: +1000 },
    visible: { x: 0 },
    trans: {
      type: 'tween',
      duration: 0.3,
    },
    trammpa: {
      duration: 0.2,
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
            initial={{ opacity: 0, x: +1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', delay: i * 0.5 }}
          >
            {el.title}
          </motion.h2>
        ))}
      </span>
    </div>
  )
}

export default Main
