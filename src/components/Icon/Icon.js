import facebook from '../../images/facebook.svg'
import fries from '../../images/fries.svg'
import hamburger from '../../images/hamburger.svg'
import iceCream from '../../images/ice-cream.svg'
import instagram from '../../images/instagram.svg'
import lightHamburger from '../../images/light-hamburger.svg'
import nav from '../../images/nav.svg'
import soda from '../../images/soda.svg'
import tiktok from '../../images/tiktok.svg'

const Icon = ({ type, icon }) => {
  const cssClass = 'Icon'
  const icons = {
    instagram: instagram,
    facebook: facebook,
    tiktok: tiktok,
    hamburger: hamburger,
    lightHamburger: lightHamburger,
    soda: soda,
    fries: fries,
    iceCream: iceCream,
    nav: nav,
  }

  return (
    <img
      className={`${cssClass} ${cssClass}--${type}`}
      src={icons[icon]}
      alt={icon}
    />
  )
}

export default Icon
