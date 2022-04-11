import { motion, useTransform } from 'framer-motion'
const WorkList = ({ offsetY, scrollY }: any) => {
  const heightSize = [50, 250]
  const height = useTransform(scrollY, offsetY, heightSize)

  const fontSize = 30
  return (
    <div className='sticky  top-0 w-full overflow-hidden'>
      <motion.ul style={{ height, fontSize }}>
        <div className='grid grid-cols-3 p-2'>
          <div>
            <li>React</li>
            <li>NextJs</li>
          </div>
          <li>Design</li>
          <div>
            <li>SPA</li>
            <li>SRM</li>
            <li>e-commerce</li>
          </div>
        </div>
      </motion.ul>
    </div>
  )
}

export default WorkList
