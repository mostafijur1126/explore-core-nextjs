import Image from 'next/image';
import React from 'react';

const FoodDetails = async({params}) => {
    const {foodId} = await params;
    // console.log(foodId);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    const {dish_name,image_link,price,rating} = food;
    console.log(food);
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-7xl mx-auto text-center'>
                <Image 
                src={image_link}
                width={300}
                height={300}
                alt={dish_name}
                ></Image>
                <h1>{dish_name}</h1>
                <p>{price}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default FoodDetails;