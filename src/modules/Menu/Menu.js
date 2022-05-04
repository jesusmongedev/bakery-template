import Cta from '../../components/Cta/Cta'
import Product from '../../components/Product/Product'

const Menu = ({ content }) => {
  const cssClass = 'Menu'
  const uiConfig = {
    ctaTab: 'terciary',
    ctaIcon: 'primary',
    cta: 'secondary',
  }

  return (
    <div className={cssClass} id="menu">
      <h3>{content.title}</h3>
      <ul className={`${cssClass}-tabs`}>
        {content.items.map((item, index) => (
          <li key={index} className={`${cssClass}-item`}>
            <Cta
              type={uiConfig.ctaTab}
              icon={item.icon}
              iconType={uiConfig.ctaIcon}
            />
          </li>
        ))}
      </ul>
      <ul className={`${cssClass}-products grid`}>
        {content.products.map((product, index) => (
          <li key={index} className={`${cssClass}-product`}>
            <Product content={product} />
          </li>
        ))}
      </ul>
      <Cta type={uiConfig.cta} label={content.cta} />
    </div>
  )
}

export default Menu
