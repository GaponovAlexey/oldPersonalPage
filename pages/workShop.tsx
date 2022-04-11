import { NextPage } from 'next'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import WorkList from '../components/WorkList'

const WorkShop: NextPage = () => {
  const { scrollY } = useViewportScroll()
  const offsetY = [0, 300]
  
  const marginTop = useTransform(scrollY, offsetY, offsetY)
  return (
    <div>
      <div className='sticky top-0 w-full '>
        <WorkList offsetY={offsetY} scrollY={scrollY} />
      </div>
      <motion.div style={{ marginTop }}>
        <div className='h-[560px] bg-slate-300'>block</div>
      </motion.div>
      <motion.div style={{ marginTop }}>
        <div className='h-[560px] bg-slate-300'>block</div>
      </motion.div>
      <motion.div style={{ marginTop }}>
        <div className='h-[560px] bg-slate-300'>block</div>
      </motion.div>
    </div>
  )
}

export default WorkShop
