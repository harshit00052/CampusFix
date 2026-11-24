import Navbar from "./components/navbar"
import Hero from "./components/hero.jsx"
import Foot from "./components/footer.jsx"

const App = () => {
  return(
    <div className="parent">
      <div className="head ">
        <Navbar />
      </div>

      <main className="px-10 py-10">
        <section>
          <Hero />
        </section>
      </main>

      <footer>
        <Foot />
      </footer>
    </div>
  )
}

export default App