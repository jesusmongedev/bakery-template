import Cta from '../Cta/Cta'

const Challenge = ({ content }) => {
  const cssClass = 'Challenge'
  const uiConfig = {
    cta: 'cuaternary',
    icon: 'primary',
  }

  return (
    <div className={cssClass} id="promo">
      <h4 className={`${cssClass}-title`}>{content.title}</h4>
      <p className={`${cssClass}-content p--light`}>{content.subtitle}</p>
      <ul className={`${cssClass}-icons`}>
        {content.social.map((item, index) => (
          <li key={index} className={`${cssClass}-social-item`}>
            <Cta
              type={uiConfig.cta}
              icon={item.icon}
              iconType={uiConfig.icon}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Challenge
