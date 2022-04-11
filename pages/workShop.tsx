import { motion, useViewportScroll, useTransform } from 'framer-motion'

const WorkShop = () => {
  const {scrollY } = useViewportScroll()
  const offsetY = [0, 300];

  return (
    <div>
      <h1>shop</h1>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className='h-60 bg-slate-300'>block</div>
        </motion.div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default WorkShop
