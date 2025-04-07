import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
            className="hero min-h-screen mt-10 max-w-7xl"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/PnTXgt8/Rectangle-1.png)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="max-w-3xl space-y-4 text-neutral-content text-center">
                <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
                <div className="flex justify-center gap-10"> 
                    <button className="btn btn-success">Explore Now</button>
                    <button className="btn btn-primary">Our Feedback</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;