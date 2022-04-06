import s from '../../styles/Home.module.scss'
const Header = () => {
  return (
    <div className={s.componentHeader}>
      <h1>Personal</h1>
      <ul>
        <li>home</li>
        <li>workshop</li>
        <li>about me</li>
        <li>skills</li>
        <li>contact me</li>
      </ul>
    </div>
  )
}

export default Header
