import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HexGrid from './components/HexGrid'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HexGrid />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
