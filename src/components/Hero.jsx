import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tagline">
          SOLUCIONES 3D PARA TU NEGOCIO
        </p>
        <h1 className="hero__title">
          DESARROLLAMOS <strong>FABRICAMOS</strong>
          <span className="hero__subtitle">EN TRES DIMENSIONES</span>
        </h1>
        <a href="#servicios" className="hero__btn">
          DESCUBRIR MÁS
        </a>
      </div>
      <a href="#servicios" className="hero__scroll" aria-label="Scroll">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}
