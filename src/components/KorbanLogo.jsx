import './KorbanLogo.css'

export default function KorbanLogo({ height = 44, className = '' }) {
  return (
    <img
      src="/logo-korban.png"
      alt="Korban"
      className={`korban-logo ${className}`.trim()}
      style={{ height }}
      loading="eager"
      decoding="async"
      draggable="false"
    />
  )
}
