import React from 'react';
import ResultChange from './ResultChange';

async function getData(searchParams) {
    const { region, foodType } = searchParams;
    console.log(`Region: ${region}, FoodType: ${foodType}`);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const encodedRegion = encodeURIComponent(region);
    const locationRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedRegion}&key=${apiKey}`, {
        next: {
            revalidate: 0
        }
    });

    if (!locationRes.ok) {
        console.error('Geocode request failed with status:', locationRes.status);
        console.error(await locationRes.text());
        throw new Error('Failed to fetch geocode data');
    }

    const locationData = await locationRes.json();
    console.log('Geocode response:', locationData);

    if (!locationData.results || locationData.results.length === 0) {
        throw new Error('No location data found');
    }

    const { lat, lng } = locationData.results[0].geometry.location;
    const radius = 1500;

    const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=restaurant&keyword=${encodeURIComponent(foodType)}&key=${apiKey}`,
        {
            next: {
                revalidate: 0
            }
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function RestaurantsPage({ searchParams }) {
    try {
        const data = await getData(searchParams);
        console.log('Places API response:', data);

        if (!data.results || data.results.length === 0) {
            return <p>No restaurants found for the given location and food type.</p>;
        }

        return (
            <>
            
                <div className='flex justify-center items-center'>
                  <ResultChange results={data.results} />
                </div>
            </>
        );
    } catch (error) {
        console.error('Error fetching restaurants:', error.message);
        return <p>Error fetching restaurants: {error.message}</p>;
    }
}

