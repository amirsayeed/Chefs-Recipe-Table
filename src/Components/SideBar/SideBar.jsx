import React from 'react';

const SideBar = () => {
    return (
        <div className='p-3 space-y-2'>
            <h3 className='text-xl text-center'>Want to Cook:</h3>
            <div className='border border-gray-500 border-dashed'></div>
            <div className='flex items-center justify-around'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
        </div>
    );
};

export default SideBar;