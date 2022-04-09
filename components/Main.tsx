import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
const Main = () => {
  const x = useMotionValue(0)
  const scaleZ = useTransform(x, (v) => v / 100)
  return (
    <div className='flex'>
      <Image src='/jpg/1.png' width='540%' height='720%' />
      <div className='flex-wrap pl-40 ml-20 '>
        test
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </div>
    </div>
  )
}

export default Main
