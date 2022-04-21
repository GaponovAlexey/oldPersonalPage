import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const Card = ({ myIMG, myURL, hueA, hueB }: any) => {
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`
  const background = `linear-gradient(601deg, ${hue(hueA)}, ${hue(hueB)})`
  return (
    <motion.div
      className='card-container'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className='splash' style={{ background }} />
      <motion.div className='card' variants={cardVariants}>
        <a href={myURL}>
          <img src={myIMG} alt='img' />
        </a>
      </motion.div>
    </motion.div>
  )
}

const food: any = [
  [
    '/jpg/portfolio/port1.png',
    'https://podiatry-victoria.vercel.app/',
    160,
    190,
  ],
  ['/jpg/portfolio/work4.png', 'https://portfolio-2502.vercel.app/', 22, 30],
  [
    '/jpg/portfolio/japan1.png',
    'https://gaponovalexey.github.io/learnwerska/',
    2,
    70,
  ],
  [
    '/jpg/portfolio/task2.png',
    'https://gaponovalexey.github.io/prod3/',
    200,
    170,
  ],
  [
    '/jpg/portfolio/task3.png',
    'https://gaponovalexey.github.io/react-demotwo/',
    390,
    190,
  ],
]

const CardWorks = () => {
  return food.map(([myIMG, myURL, hueA, hueB]: any) => (
    <Card myIMG={myIMG} myURL={myURL} key={myIMG} hueA={hueA} hueB={hueB} />
  ))
}

export default CardWorks
