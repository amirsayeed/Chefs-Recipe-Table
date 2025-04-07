import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner';
import Recipes from './Components/Recipes/Recipes';
function App() {
  

  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main>
        <Recipes/>
      </main>
    </div>
  )
}

export default App
