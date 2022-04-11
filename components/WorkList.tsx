import { motion, useTransform } from 'framer-motion'
const WorkList = ({ offsetY, scrollY }: any) => {
  const heightSize = [250, 50]
  const fontsSize = ['30px', '12px']
  // const
  const height = useTransform(scrollY, offsetY, heightSize)
  const fontSize = useTransform(scrollY, offsetY, fontsSize)
  const pOpasity = useTransform(scrollY, [40, 220], [1, 0])

  return (
    <motion.div style={{ height, fontSize }}>
      <div className='grid grid-cols-3 p-2'>
        <div>
          <li>React</li>
          <li>NextJs</li>
        </div>
        <motion.li style={{ opacity: pOpasity }}>Design</motion.li>
        <div>
          <li>SPA</li>
          <li>SRM</li>
          <li>e-commerce</li>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkList
