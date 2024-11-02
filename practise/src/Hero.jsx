import React from 'react';
import HeroImage from './Kung-Fu-Panda.jpg';

const Hero = () => {
  return (
    <>
      <main className="mt-14 sm:mt-0">
        <div className="min-h-[600px] container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            <div>
              <img src={HeroImage} alt="Kung Fu Panda" className="w-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-4">
                Hello Panda's World. I am eating 10 kg of bamboo daily. I really enjoy eating bamboo.
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsam consequuntur dignissimos unde
               
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod blanditiis inventore dolore adipisci
                
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border p-2 rounded w-full sm:w-auto"
                />
                <button className="bg-blue-500 text-white p-2 rounded">Click here</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
