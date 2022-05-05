import { useState, useEffect } from 'react'
import useScrollListener from '../../Hooks/useScrollListener'
import Cta from '../Cta/Cta'

const Nav = ({ content, type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()

  const cssClass = 'Nav'
  const uiConfig = {
    cta: 'cuaternary',
    icon: 'secondary',
  }

  const handleMenuButton = () => {
    setIsOpen((prevState) => !prevState)
  }

  // update classlist of nav on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('nav-hidden')

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  return (
    <div className={`${cssClass} ${navClassList}  ${cssClass}--${type}`}>
      <div>
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
