const Frontend = ({ motion, skills }) => {
  return (
    <div>
      <div>
        <h2>Frontend</h2>
        {skills?.frontend.map((el, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <text>{el.title}</text>
          </motion.li>
        ))}
      </div>
    </div>
  )
}

export default Frontend
