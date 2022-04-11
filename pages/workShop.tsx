import { NextPage } from 'next'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import WorkList from '../components/WorkList'

const WorkShop: NextPage = () => {
  const { scrollY } = useViewportScroll()
  const offsetY = [50, 300]

  return (
    <div>
      <WorkList offsetY={offsetY} scrollY={scrollY} />
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className='h-60 bg-slate-300'>block</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className='h-60 bg-slate-300'>block</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className='h-60 bg-slate-300'>block</div>
        </motion.div>
      </div>
      <div></div>
    </div>
  )
}

export default WorkShop
