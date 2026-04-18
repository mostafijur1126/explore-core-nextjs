import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { HiBookOpen, HiOutlineHeart, HiOutlineShieldCheck, HiOutlineShoppingCart } from 'react-icons/hi';

const FoodDetails = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    if (!food) {
        notFound();
    }
    const { id, dish_name, category, main_ingredients
        , alternative_names,cooking_steps, price, approximate_nutrition_per_serving, possible_price_in_dhaka, origin_and_popularity, image_link, rating, cuisine } = food;
    console.log(food);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-12 px-3 sm:px-4">
    <div className="container mx-auto max-w-6xl">
        <Link
            href="/food"
            className='inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 mb-6 sm:mb-8 transition-colors group text-sm sm:text-base'
        >
            <FaArrowLeftLong className='w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform' />
            Back to Menu
        </Link>
        
        <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 lg:p-10">
                
                {/* ইমেজ সেকশন */}
                <div className="lg:w-2/5">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={image_link}
                                alt={dish_name}
                                width={500}
                                height={500}
                                className='w-full h-auto object-cover'
                            />
                        </div>
                    </div>
                </div>

                {/* কন্টেন্ট সেকশন */}
                <div className="lg:w-3/5 space-y-4 sm:space-y-5 md:space-y-6">
                    
                    {/* ব্যাজেস */}
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="flex items-center gap-1 bg-gray-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700">
                            <span className='text-yellow-500 text-base sm:text-lg'>★</span>
                            <span className="font-bold text-white">{rating}</span>
                            <span className="text-gray-400">/5</span>
                        </div>
                        <div className="bg-green-900/50 text-green-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-green-800">
                            {category}
                        </div>
                        <div className="bg-purple-900/50 text-purple-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-purple-800">
                            {cuisine}
                        </div>
                    </div>

                    {/* টাইটেল */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {dish_name}
                    </h1>

                    {/* অল্টারনেটিভ নাম */}
                    <div className='flex flex-wrap gap-2'>
                        {alternative_names.map((name, ind) => (
                            <span key={ind} className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-2 sm:px-3 py-1 rounded-full border border-gray-700">
                                {name}
                            </span>
                        ))}
                    </div>

                    {/* প্রাইস সেকশন */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-400 mb-1">Current Price</p>
                                <p className="text-3xl sm:text-4xl font-bold text-yellow-500">৳{price}</p>
                            </div>
                            <div className="h-12 w-px bg-gray-700 hidden sm:block"></div>
                            <div className='flex-1 w-full'>
                                <p className="text-xs sm:text-sm text-gray-400 mb-2">Price Range in Dhaka</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                                    <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                                        <p className="font-semibold text-gray-300">Home Cooked</p>
                                        <p className="text-yellow-500">{possible_price_in_dhaka.street_food_or_small_restaurant}</p>
                                    </div>
                                    <div className="bg-gray-800/70 rounded-lg p-2 text-center border border-gray-700">
                                        <p className="font-semibold text-gray-300">Cafe/Eatery</p>
                                        <p className="text-yellow-500">{possible_price_in_dhaka.cafe_or_healthy_eatery}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* মেইন ইং্রিডিয়েন্টস */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                            <HiBookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                            Main Ingredients
                        </h3>
                        <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                            {main_ingredients.map((ingredient, idx) => (
                                <span key={idx} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700">
                                    {ingredient}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* নিউট্রিশন ফ্যাক্টস */}
                    <div className='border-t border-gray-800 pt-4 sm:pt-6'>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                            <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                            Nutrition Facts (Per Serving)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
                            <div className="text-center p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <p className="text-xs text-gray-400">Calories</p>
                                <p className="text-sm sm:text-base font-bold text-white">{approximate_nutrition_per_serving.calories}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <p className="text-xs text-gray-400">Protein</p>
                                <p className="text-sm sm:text-base font-bold text-white">{approximate_nutrition_per_serving.protein}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <p className="text-xs text-gray-400">Carbs</p>
                                <p className="text-sm sm:text-base font-bold text-white">{approximate_nutrition_per_serving.carbohydrates}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <p className="text-xs text-gray-400">Fat</p>
                                <p className="text-sm sm:text-base font-bold text-white">{approximate_nutrition_per_serving.fat}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <p className="text-xs text-gray-400">Fiber</p>
                                <p className="text-sm sm:text-base font-bold text-white">{approximate_nutrition_per_serving.fiber}</p>
                            </div>
                        </div>
                    </div>

                    {/* অরিজিন */}
                    <div className="bg-gray-800 rounded-xl p-3 sm:p-4 border border-gray-700">
                        <p className="text-xs sm:text-sm text-gray-300">
                            <span className="font-semibold text-white">Origin & Popularity:</span> {origin_and_popularity}
                        </p>
                    </div>

                    {/* অ্যাকশন বাটন */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <button className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <HiOutlineShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                            Order Now
                        </button>
                        <button className="flex-1 py-2.5 sm:py-3 bg-gray-800 border-2 border-yellow-600 text-yellow-500 font-semibold rounded-xl hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <HiOutlineHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                            Save to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* কুকিং স্টেপস সেকশন */}
        <div className="mt-8 sm:mt-12 bg-gray-900 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-800">
            <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">👨‍🍳</span>
                    Cooking Steps
                </h2>
                <div className="space-y-3 sm:space-y-4">
                    {cooking_steps.map((step, idx) => (
                        <div key={idx} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors group border border-gray-700">
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base group-hover:scale-110 transition-transform">
                                {idx + 1}
                            </div>
                            <p className="text-gray-300 leading-relaxed flex-1 text-sm sm:text-base">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default FoodDetails;