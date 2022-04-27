import './Quote.scss'

const Quote = ({ content }) => {
  const cssClass = 'Quote'

  return (
    <div className={cssClass} id="nosotros">
      <h4>{content.title}</h4>
    </div>
  )
}

export default Quote
