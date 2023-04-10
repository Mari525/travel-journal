import './card.scss'

export default function(props) {
  return (
    <li className="card">
      <img className='card__photo' src={ props.card.imageUrl } alt="" />
      <div className='card__location'>
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A"/>
        </svg>
        <span className="card__country">{ props.card.location }</span>
        <a className='card__map-link' href={ props.card.googleMapsUrl } target='_blank'>View on Google Maps</a>
      </div>
      <h2 className='card__heading'>{ props.card.title }</h2>
      <p className="card__date">
        { props.card.startDate } - { props.card.endDate }
      </p>
      <p className="card__text">{ props.card.description }</p>
    </li>
  )
}