import { motion, useTransform } from 'framer-motion'
import Link from 'next/link'

import s from '../styles/Home.module.scss'

const WorkList = ({ offsetY, scrollY }: any) => {
  const heightSize = [250, 50]
  const fontsSize = ['30px', '12px']
  // const
  const height = useTransform(scrollY, offsetY, heightSize)
  const fontSize = useTransform(scrollY, offsetY, fontsSize)
  const pOpasity = useTransform(scrollY, [40, 220], [1, 0])

  return (
    <motion.div style={{ height, fontSize, opacity: pOpasity }}>
      <ul className={s.workList}>
        <li>All designs &#8595;</li>
        <li>SPA</li>
        <li>SRM</li>
        <li>e-commerce</li>
        <Link href='/task'>
          <li>List Job</li>
        </Link>
      </ul>
    </motion.div>
  )
}

export default WorkList
