import { NextPage } from 'next'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import WorkList from '../components/WorkList'
import CardWorks from '../components/CardWorks'

const WorkShop: NextPage = () => {
  const { scrollY } = useViewportScroll()
  const offsetY = [0, 300]

  const marginTop = useTransform(scrollY, [0, 300], offsetY)
  return (
    <div>
      <div>
        <WorkList offsetY={offsetY} scrollY={scrollY} />
      </div>
      <motion.div style={{ marginTop }}>
        <CardWorks />
      </motion.div>
    </div>
  )
}

export default WorkShop
