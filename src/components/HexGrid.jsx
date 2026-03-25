import './HexGrid.css'

const hexItems = [
  {
    id: 1,
    title: 'PRODUCTOS',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75',
    href: '#productos',
  },
  {
    id: 2,
    title: 'MERCADOS',
    image: '',
    href: '#servicios',
    outlineOnly: true,
  },
  {
    id: 3,
    title: 'SERVICIOS',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=75',
    href: '#mercados',
  },
  {
    id: 4,
    title: 'CASOS DE ÉXITO',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=75',
    href: '#casos',
  },
  {
    id: 5,
    title: 'NOTICIAS',
    image: '',
    href: '#noticias',
    outlineOnly: true,
  },
  {
    id: 6,
    title: 'IMPRESIÓN 3D',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=75',
    href: '#impresion-3d',
  },
]

export default function HexGrid() {
  return (
    <section className="hexgrid" id="servicios">
      <div className="hexgrid__container">
        <div className="hexgrid__row hexgrid__row--top">
          {hexItems.slice(0, 3).map((item) => (
            <HexCard key={item.id} item={item} />
          ))}
        </div>
        <div className="hexgrid__row hexgrid__row--middle">
          {hexItems.slice(3, 5).map((item) => (
            <HexCard key={item.id} item={item} />
          ))}
        </div>
        <div className="hexgrid__row hexgrid__row--bottom">
          {hexItems.slice(5, 6).map((item) => (
            <HexCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HexCard({ item }) {
  if (item.outlineOnly) {
    return (
      <div className="hex-card hex-card--outline" aria-hidden="true">
        <div className="hex-card__clip hex-card__clip--outline">
          <svg
            className="hex-card__outline-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              className="hex-card__outline-polygon"
              points="50,1 99,25 99,75 50,99 1,75 1,25"
            />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <a href={item.href} className="hex-card">
      <div className="hex-card__clip">
        <div
          className="hex-card__bg"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="hex-card__overlay" />
        <div className="hex-card__content">
          <h3 className="hex-card__title">{item.title}</h3>
          <span className="hex-card__btn">VER MÁS</span>
        </div>
      </div>
    </a>
  )
}
