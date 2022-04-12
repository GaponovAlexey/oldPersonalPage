import { NextPage } from 'next'

const TaskJob: NextPage = () => {
  const works = [
    {
      id: 1,
      title: 'album - jsonplaceholder',
      urlSite: 'https://gaponovalexey.github.io/album-homework/',
      urlRepo: 'https://github.com/GaponovAlexey/album-homework',
    },
    {
      id: 2,
      title: 'kulinar - recepte',
      urlSite: 'https://gaponovalexey.github.io/prod3/',
      urlRepo: 'https://github.com/GaponovAlexey/prod3/',
    },
    {
      id: 3,
      title: 'shop - fortnite',
      urlSite: 'https://gaponovalexey.github.io/react-demotwo/',
      urlRepo: 'https://github.com/gaponovalexey/react-demotwo/',
    },
  ]

  return (
    <div className='text-gray-500'>
      {works.map((el) => (
        <nav key={el.id} className='flex justify-between max-w-[400px] m-left '>
          <strong>
            {el.id}.{el.title}
          </strong>
          <div>
            <a href={el.urlSite}>site</a>
            <a className='ml-2' href={el.urlRepo}>
              Repo
            </a>
          </div>
        </nav>
      ))}
    </div>
  )
}

export default TaskJob
