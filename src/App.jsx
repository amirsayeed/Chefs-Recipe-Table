import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner';
import Recipes from './Components/Recipes/Recipes';
import { useState } from 'react';
function App() {
  const [toCook, setToCook] = useState([]);

  const handleToCook = (recipe,id) =>{
    const recipeExists = toCook.find(item=> item.recipe_id === id);
    if(!recipeExists){
      setToCook([...toCook,recipe]);
    }else{
      alert("Recipe already in process!");
    }
  }


  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main>
        <Recipes handleToCook={handleToCook} toCook={toCook} />
      </main>
    </div>
  )
}

export default App
