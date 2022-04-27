import Cta from '../Cta/Cta'

const Product = ({ content }) => {
  const cssClass = 'Product'
  const uiConfig = {
    cta: 'primary',
  }

  return (
    <div className={cssClass}>
      <h4 className={`${cssClass}-title h4--dark`}>{content.title}</h4>
      <p className={`${cssClass}-description`}>{content.subtitle}</p>
      <Cta type={uiConfig.cta} label={content.price} />
    </div>
  )
}

export default Product
