import { motion, Variants } from 'framer-motion'

interface Props {
  emoji: string
  hueA: number
  hueB: number
}

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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

const Card = ({ emoji, hueA, hueB }: Props) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`
  return (
    <motion.div
      className='card-container'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className='splash' style={{ background }} />
      <motion.div className='card' variants={cardVariants}>
        <img src={emoji} alt='img' />
      </motion.div>
    </motion.div>
  )
}

const food: any = [
  ['/jpg/portfolio/port1.png', 170, 299],
  ['/jpg/portfolio/task2.png', 20, 40],
  ['/jpg/portfolio/task3.png', 60, 90],
  // ['🍐', 80, 120],
  // ['🍏', 100, 140],
  // ['🫐', 205, 245],
  // ['🍆', 260, 290],
  // ['🍇', 290, 320],
]

const CardWorks = () => {
  return food.map(([emoji, hueA, hueB]: any) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ))
}

export default CardWorks
