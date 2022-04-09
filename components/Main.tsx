import Image from 'next/image'
import { useEffect } from 'react'

const Main = () => {
  const Images = (
    <Image className='h-50' src='/jpg/1.png' width='540%' height='720%' />
  )
  let newImage = null
  useEffect(() => {
    setInterval(() => {
      const newImage = Images
    }, 1000)
  }, [])

  return <div>{newImage}</div>
}

export default Main
