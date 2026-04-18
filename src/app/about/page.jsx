'use client'
import FoodCard from "@/components/foodCard/FoodCard";
import { useEffect, useState } from "react";


const AboutPage = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("");
    const [searching, setSearching] =useState("");
    const [search, setSearch] = useState("");
    // console.log(search);

    const fatchFoods = async(category="",search='') => {
        setLoading(true);
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`)
        const data = await res.json();
        setFoods(data.data);
        setLoading(false);
    };

    useEffect(()=>{
        fatchFoods(category,search);
    },[category,search])

    const handelCategory = (e)=>{
        const value = e.target.value;
        setCategory(value);
        // console.log(value);
    }
    const handelSearch = () => {
        setSearch(searching);
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* হিরো সেকশন / হেডার */}
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black border-b border-gray-800">
                {/* ডেকোরেটিভ ব্লার ইফেক্ট */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
                    {/* ব্যাজ */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-yellow-500">Live Menu</span>
                        </div>
                    </div>

                    {/* টাইটেল */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                        <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            Discover & Enjoy
                        </span>
                        <br />
                        <span className="text-white">Delicious Food Collection</span>
                    </h1>

                    {/* ডেস্ক্রিপশন */}
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 text-base md:text-lg">
                        Explore our curated selection of mouth-watering dishes prepared with love and expertise.
                        From healthy bowls to gourmet delights, find your perfect meal.
                    </p>



                    {/* সার্চ ও ফিল্টার বার */}
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex relative">
                                <input
                                    value={searching}
                                    onChange={e=>setSearching(e.target.value)}
                                    type="text"
                                    placeholder="Search for your favorite dish..."
                                    className="w-full px-4 py-3 pl-11 pr-4 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                                />
                                <button onClick={handelSearch} className="btn px-4 py-6 pl-4 pr-4 bg-gray-800/80 border border-gray-700 rounded-xl text-white">Search</button>
                                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <select onChange={handelCategory} className="px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300">
                                <option value="">All Categories</option>
                                <option value="burger">Burger</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="beverage">Beverage</option>
                                <option value="rice">Rice</option>
                                <option value="dish">Dish</option>
                            </select>
                            <select className="px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300">
                                <option value="">Sort by Rating</option>
                                <option value="high">Highest Rated</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* ফুড আইটেমস সেকশন */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* সেকশন হেডার */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            All Food Items
                        </h2>
                        <p className="text-gray-400 mt-1">
                            Showing delicious items
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                            Grid View
                        </button>
                        <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                            List View
                        </button>
                    </div>
                </div>

                {/* ফুড গ্রিড */}
                {loading ? (
                    <div>
                        <p>Loading foods...</p>
                    </div>
                ) : foods.length === 0 ? (
                <div>NoFood</div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {foods.map(food => (
                        <FoodCard key={food.id} food={food} />
                    ))}
                </div>

                )}

                {/* লোড মোর বাটন */}
                <div className="text-center mt-12">
                    <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Load More Items
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;