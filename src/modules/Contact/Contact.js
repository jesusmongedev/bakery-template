import ContactBox from '../../components/ContactBox/ContactBox'

const Contact = ({ content }) => {
  const cssClass = 'Contact'

  return (
    <div className={`${cssClass} grid`} id="contacto">
      <h3 className={`${cssClass}-title`}>{content.title}</h3>
      <div className={`${cssClass}-box`}>
        <ContactBox content={content.items} />
      </div>
    </div>
  )
}

export default Contact
