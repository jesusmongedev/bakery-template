const Icon = ({ type, icon }) => {
  const cssClass = 'Icon'

  return (
    <img
      className={`${cssClass} ${cssClass}--${type}`}
      src={`images/${icon}`}
      alt={icon}
    />
  )
}

export default Icon
