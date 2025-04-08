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

  const handleRemove = id =>{
    const remaining = toCook.filter(cook => cook.recipe_id !== id);
    setToCook(remaining);
  }


  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main>
        <Recipes handleToCook={handleToCook} toCook={toCook} handleRemove={handleRemove} />
      </main>
    </div>
  )
}

export default App
