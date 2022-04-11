const WorkList = ({ offsetY }) => {
  const height = 250
  const fontSize = 30
  return (
    <div>
      <ul style={{ height, fontSize }}>
        <div className='grid grid-cols-3 '>
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
      </ul>
    </div>
  )
}

export default WorkList
