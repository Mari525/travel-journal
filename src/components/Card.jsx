import './card.scss'

export default function(props) {
  console.log(props)
  return (
    <li className="card">
      <img src={ props.imageUrl } alt="" />
      <span className="card__location">{ props.card.location }</span>
      <a href={ props.card.googleMapsUrl }>View on Google Maps</a>
      <h2 className='card__heading'>{ props.card.title }</h2>
      <p className="card__date">
        { props.card.startDate } - { props.card.endDate }
      </p>
      <p className="card__text">{ props.card.description }</p>
    </li>
  )
}