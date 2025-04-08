import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import SideBar from '../SideBar/SideBar';

const Recipes = ({handleToCook, toCook}) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(()=>{
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data =>setRecipe(data.recipes))
    },[])

    return (
        <div className='mt-20'>
            <div className='max-w-3xl mx-auto text-center space-y-3'>
            <h3 className='text-2xl font-medium'>Our Recipes</h3>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
            <div className='flex items-start justify-between mt-10'>
                <div className='w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
                    {
                        recipe.map(recipe => 
                        <Recipe key={recipe.recipe_id} 
                        recipe={recipe}
                        handleToCook={handleToCook}
                        />)
                    }
                </div>
                <div className='w-2/5 border shadow-lg rounded-2xl'>
                 <SideBar toCook={toCook} />
                </div>
            </div>
        </div>
    );
};

export default Recipes;