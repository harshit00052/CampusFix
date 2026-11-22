import Navbar from "./components/navbar"
import Hero from "./components/hero.jsx"

const App = () => {
  return(
    <div className="parent">
      <div className="head ">
        <Navbar />
      </div>

      <main className="px-10 py-10">
        <Hero />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default App