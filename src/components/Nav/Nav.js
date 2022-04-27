import { useState } from 'react'
import Cta from '../Cta/Cta'

const Nav = ({ content, type }) => {
  const [isOpen, setIsOpen] = useState(false)

  const cssClass = 'Nav'
  const uiConfig = {
    cta: 'cuaternary',
    icon: 'secondary',
  }

  const handleMenuButton = () => {
    setIsOpen((prevState) => !prevState)
    console.log(isOpen)
  }

  return (
    <div className={`${cssClass} ${cssClass}--${type}`}>
      <div className="grid">
        <Cta
          type={uiConfig.cta}
          icon={content.icon}
          iconType={uiConfig.icon}
          handleMenuButton={handleMenuButton}
        />
        <ul className={`${cssClass}-list ${isOpen ? 'menu-open' : ''}`}>
          {content.items.map((item, i) => (
            <li
              key={i}
              className={`${cssClass}-item`}
              onClick={handleMenuButton}
            >
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav
