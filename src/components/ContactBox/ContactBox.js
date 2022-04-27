// import './ContactBox.scss'

const ContactBox = ({ content }) => {
  const cssClass = 'ContactBox'

  const List = (() => {
    return content.map((item, index) => {
      return (
        <li key={index} className={`${cssClass}-block`}>
          <h4 className="h4--dark">{item.title}</h4>
          <p className={`${cssClass}-description`}>{item.subtitle}</p>
        </li>
      )
    })
  })()

  return <ul className={cssClass}>{List}</ul>
}

export default ContactBox
