import Cta from '../Cta/Cta'

const Product = ({ content }) => {
  const cssClass = 'Product'
  const uiConfig = {
    cta: 'primary',
  }

  return (
    <div className={cssClass}>
      <img src={`images/${content.image}`} alt={content.title} />
      {/* <h4 className={`${cssClass}-title h4--dark`}>{content.title}</h4> */}
      {/* <p className={`${cssClass}-description`}>{content.subtitle}</p> */}
      <div className={`${cssClass}-description`}>
        <div className={`${cssClass}-description__left`}>
          <p>{content.price}</p>
          <h4 className={`${cssClass}-title h4--dark`}>{content.title}</h4>
        </div>
        <div className={`${cssClass}-description__right`}>
          <img
            src={`images/${content.info}`}
            alt="Más información"
            title="Más información"
          />
          <p>{content.weight}g</p>
        </div>
      </div>
      <Cta type={uiConfig.cta} label={content.label} />
      <Cta type={uiConfig.cta} label={content.labelSecondary} />
    </div>
  )
}

export default Product
