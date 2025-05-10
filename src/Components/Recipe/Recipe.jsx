import React from 'react';
import { CiClock1 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Recipe = ({recipe,handleToCook}) => {
    const {recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl hover:scale-105">
            <figure>
                <img
                src={recipe_image} className='p-4 w-full h-[250px] object-fill'
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-xl font-bold">{recipe_name}</h2>
                <p className='font-medium text-gray-600'>{short_description}</p>
                <div className='border border-dashed border-gray-300'></div>
                <p className='text-lg font-medium'>Ingredients: {ingredients.length}</p>
                <ul className='list-disc list-inside pl-2'>
                    {
                        ingredients.map((ingredient,idx) => <li key={idx}>{ingredient}</li>)
                    }
                </ul>
                <div className='border border-dashed border-gray-300'></div>
                <div className='flex gap-3'>
                    <p className='flex gap-2'>
                        <span><CiClock1 size={20} /></span>
                        <span>{preparing_time}</span>
                    </p>
                    <p className='flex gap-2'>
                        <span><FaFire size={20} /></span>
                        <span>{calories}</span>
                    </p>
                </div>
                <div className="card-actions justify-start">
                <button onClick={()=>handleToCook(recipe, recipe_id)} className="btn btn-success rounded-3xl">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;