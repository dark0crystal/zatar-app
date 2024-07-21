'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImCross } from "react-icons/im";
import { Toaster, toast } from 'sonner'
export default  function ResultChange({ results }) {
    const getRandomIndex = () => Math.floor(Math.random() * results.length);
    console.log(results)
    const [result, setResult] = useState(results[getRandomIndex()]);
    const [isAnimating, setIsAnimating] = useState(false);
    const ChangeResult = () => {
        toast.info('إنتبه للمطاعم أو الكافيهات الداعمة للإحتلال...')

        setIsAnimating(true);
        setTimeout(() => {
            setResult(results[getRandomIndex()]);
            setIsAnimating(false);
        }, 500); // Duration of the animation in milliseconds
    };
    

    const isOpen = result.opening_hours?.open_now;
    const openStatusClass = isOpen ? 'bg-green' : 'bg-red-500';
    
    return (
        <motion.div 
            className='flex flex-col items-center border sm:w-[70%] md:w-[50%] rounded-3xl lg:w-[40%] h-[75vh] bg-white mt-4 relative'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: isAnimating ? 100 : 0, opacity: isAnimating ? 0 : 1 }}
            transition={{ duration: 0.5 }}
        >
             <h1 className={`text-black ${openStatusClass} py-1 px-2 text-xl rounded w-full text-center h-[5vh]`}>
                {isOpen ? 'مفتوح' : 'مغلق'}
            </h1>
            <div className='overflow-hidden h-[70%] w-[90%]'>
                {result.photos && result.photos.map((photo, photoIndex) => (
                 
                    <img
                        key={photoIndex}
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                        alt={result.name}
                        width="400"
                        height="300"
                        className="mt-2 aspect-square w-full rounded-2xl object-cover"
                        
                    />
                    
                ))}
            </div>
            <a  target="_blank" href={`https://www.google.com/maps/search/${result.name}`} className='absolute left-6 bottom-6'>
            <img src="/google-maps.svg" alt="Google Maps" className="w-10 h-10 mt-2" />
            </a>
            <h1> {result.rating}</h1>
            <h1> {result.name}</h1>
            <h1> {result.vicinity}</h1>
            <Toaster position="top-center"/>
            <div className='absolute bottom-6 right-6'>
                <button onClick={ChangeResult} >
                    <ImCross className='text-3xl' />
                </button>
            </div>
        </motion.div>
    );
}

