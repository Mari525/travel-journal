import './App.scss'
import Card from './components/Card'
import Header from './components/Header'
import data from './data'

export default function() {
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="cards">
        <ul className='cards__list'>
          { cards }
        </ul>
      </section>
    </div>
  )
}