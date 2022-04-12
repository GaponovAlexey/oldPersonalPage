import { NextPage } from 'next'

const TaskJob: NextPage = () => {
  return (
    <div className='text-teal-600'>
      <div>
        <a href='https://gaponovalexey.github.io/album-homework/'>
          1 - Album/jsonplaceholder
        </a>/
        <a
          className='text-red-400'
          href='https://github.com/GaponovAlexey/album-homework'
        >
          repo
        </a>
      </div>
      <div>
        <a href='https://gaponovalexey.github.io/react-demotwo/'>
          2 - Shop/fortnite
        </a>/
        <a
          className='text-red-400'
          // href='https://github.com/GaponovAlexey/album-homework'
          href='https://github.com/gaponovalexey/react-demotwo/'
        >
          repo
        </a>
      </div>
      <div>
        <a href='https://gaponovalexey.github.io/prod3/'>
          3 - Food/recepte
        </a>/
        <a
          className='text-red-400'
          // href='https://github.com/GaponovAlexey/album-homework'
          href='https://github.com/gaponovalexey/prod3/'
        >
          repo
        </a>
      </div>
    </div>
  )
}

export default TaskJob
