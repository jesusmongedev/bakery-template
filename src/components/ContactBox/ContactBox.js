// import './ContactBox.scss'

const ContactBox = ({ content }) => {
  const cssClass = 'ContactBox'

  const List = (() => {
    return content.map((item, index) => {
      return (
        <li key={index} className={`${cssClass}-block`}>
          <h4>{item.title}</h4>
          <p className={`${cssClass}-description`}>{item.subtitle1}</p>
          <p className={`${cssClass}-description`}>{item.subtitle2}</p>
        </li>
      )
    })
  })()

  return <ul className={cssClass}>{List}</ul>
}

export default ContactBox
