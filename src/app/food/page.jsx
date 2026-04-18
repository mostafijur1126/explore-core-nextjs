import FoodCard from "@/components/foodCard/FoodCard";
import SearchFood from "./ShortingProduct/SearchFood";
import CategoryFilter from "./ShortingProduct/CategoryFilter";

const getFoods = async(category="",search="") => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`);
    const data = await res.json();
    return data.data;

}

const FoodPage = async ({searchParams}) => {
    const sp = await searchParams;
    // console.log(sp);
    const foods =await getFoods(sp.category,sp.search)
    // স্ট্যাটিস্টিক্স ক্যালকুলেশন
    const totalItems = foods.length;
    const avgRating = (foods.reduce((sum, food) => sum + food.rating, 0) / foods.length).toFixed(1);
    const categories = [...new Set(foods.map(food => food.category))];

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

                    {/* স্ট্যাটিস্টিক্স কার্ড */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                                <span className="text-2xl font-bold text-white">{totalItems}+</span>
                            </div>
                            <p className="text-sm text-gray-400">Food Items</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                                <span className="text-2xl font-bold text-white">{avgRating}</span>
                            </div>
                            <p className="text-sm text-gray-400">Average Rating</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span className="text-2xl font-bold text-white">30-40</span>
                            </div>
                            <p className="text-sm text-gray-400">Min Delivery Time</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                                </svg>
                                <span className="text-2xl font-bold text-white">{categories.length}</span>
                            </div>
                            <p className="text-sm text-gray-400">Food Categories</p>
                        </div>
                    </div>

                    {/* সার্চ ও ফিল্টার বার */}
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <SearchFood></SearchFood>
                            <CategoryFilter></CategoryFilter>
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
                            Showing {totalItems} delicious items
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {foods.map(food => (
                        <FoodCard key={food.id} food={food} />
                    ))}
                </div>

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

export default FoodPage;