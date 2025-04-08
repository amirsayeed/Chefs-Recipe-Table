import React, { useState } from 'react';

const SideBar = ({toCook}) => {
    // console.log(toCook);
    const [cooking, setCooking] = useState([]);

    const handleCooking = recipe =>{
        setCooking([...cooking,recipe]);
    }

    return (
        <div>
            <div className='p-3 space-y-2'>
            <h3 className='text-xl text-center'>Want to Cook:{toCook.length}</h3>
            <div className='border border-gray-500 border-dashed mx-4'></div>
            <div className='flex items-start justify-evenly text-center font-medium'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p>Status</p>
            </div>
            <div>
                {
                    toCook.map((item,idx)=><div key={idx} className='flex items-center justify-evenly text-center mb-2 bg-gray-100'>
                        <p>{idx+1}</p>
                        <p className='max-w-28'>{item.recipe_name}</p>
                        <p>{item.preparing_time}</p>
                        <p>{item.calories}</p>
                        <button onClick={()=>handleCooking(item)} className='btn btn-success rounded-3xl'>Preparing</button>
                    </div>)
                }
            </div>
            
            </div>
            <div className='mt-10'>
                    <h3 className='text-xl text-center'>Currently Cooking: {cooking.length}</h3>
                    <div className='border border-gray-500 border-dashed mx-4 my-4'></div>
                    <div className='flex items-start justify-evenly text-center font-medium'>
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                    <div className='mb-5'>
                        {
                            cooking.map((item,idx)=> <div key={idx} className='flex items-center justify-around text-center mb-2 bg-gray-100'>
                                <p>{idx+1}</p>
                                <p className='max-w-28'>{item.recipe_name}</p>
                                <p>{item.preparing_time}</p>
                                <p>{item.calories}</p>
                            </div>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default SideBar;