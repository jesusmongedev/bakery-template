import Cta from '../Cta/Cta'

const Product = ({ content }) => {
  const cssClass = 'Product'
  const uiConfig = {
    cta: 'primary',
  }

  return (
    <div className={cssClass}>
      <img src={`images/${content.image}`} alt={content.title} />
      <h4 className={`${cssClass}-title h4--dark`}>{content.title}</h4>
      <p className={`${cssClass}-description`}>{content.subtitle}</p>
      {/* <div className={`${cssClass}__right`}>
        <span>{content.price}</span>
        <p>{content.title}</p>
      </div>
      <div className={`${cssClass}__right`}>
        <p>{content.weight}g</p>
      </div> */}
      <Cta type={uiConfig.cta} label={content.label} />
    </div>
  )
}

export default Product
