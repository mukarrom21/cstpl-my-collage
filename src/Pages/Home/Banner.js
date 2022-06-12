import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
                <div className="absolute bottom-2 left-[10%] p-2 md:p-10">
                    <p class="lg:text-xl xl:text-2xl font-bold text-sm uppercase"><span className='text-white bg-gray-500 bg-opacity-30 rounded'>Services</span></p>
                    <h2 class="sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold"><span className='text-white bg-gray-500 bg-opacity-30 rounded'>Hello World</span></h2>
                    <h4 class="sm:text-lx md:text-2xl lg:text-3xl xl:text-4xl mb-10 leading-non px-1"><span className='text-white bg-gray-500 bg-opacity-30 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h4>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;