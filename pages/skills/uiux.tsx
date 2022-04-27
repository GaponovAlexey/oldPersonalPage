
const UiUx = ({ motion, skills }) => {
  return (
    <div>
      <div>
        <h2>UX / UI</h2>
        {skills?.uiux.map((el, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: +20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {el.title}
          </motion.li>
        ))}
      </div>
    </div>
  )
}

export default UiUx
