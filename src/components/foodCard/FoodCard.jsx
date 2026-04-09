import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    const { id, dish_name, category, main_ingredients
        , alternative_names, price, approximate_nutrition_per_serving, origin_and_popularity, image_link, rating, cuisine } = food;
    // console.log(food);
    return (
        <Link href={`/food/${id}`}>

            <div className="group relative bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-700">

                <figure className='relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-56'>

                    <Image
                        src={image_link}
                        alt={dish_name}
                        sizes="100vw"
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                    >
                    </Image>
                </figure>
                <div >
                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                        <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
                            ⭐{rating}
                        </div>
                        {category === "dish" && (
                            <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                Main Dish
                            </div>
                        )}
                    </div>
                    <div className="absolute bottom-3 right-3 z-10">
                        <div className="bg-gray-800/95 backdrop-blur-sm text-yellow-500 font-bold px-3 py-1.5 rounded-lg shadow-lg border border-gray-700">
                            ৳{price}
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs bg-gray-800 text-yellow-500 px-2 py-1 rounded-full border border-gray-700">
                                {cuisine.split(' ')[0].replace('-', ' ')}
                            </span>
                            <span className="text-xs bg-gray-800 text-green-500 px-2 py-1 rounded-full border border-gray-700">
                                Healthy Bowl
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-500 transition-colors min-h-[56px]">
                            {dish_name}
                        </h3>
                        <p className="text-xs text-gray-400 mb-3 line-clamp-1">
                            {alternative_names[0]}
                        </p>
                        <div className='mb-4'>
                            <p className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
                                <svg className="w-3 h-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                                Key Ingredients
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {main_ingredients.slice(0, 3).map((ingredient, indx) => (
                                    <span key={indx} className="text-xs text-gray-300 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                                        {ingredient.split(' ')[0]}
                                    </span>
                                ))}
                                {main_ingredients.length > 3 && (
                                    <span className="text-xs text-gray-500"> +{main_ingredients.length - 3}</span>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-xs font-semibold text-gray-300">
                                    {approximate_nutrition_per_serving.calories}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <span className="text-xs text-gray-300">
                                    {approximate_nutrition_per_serving.protein}
                                </span>
                            </div>
                            <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M18 13l1.5 6M9 21h6M12 18v3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default FoodCard;