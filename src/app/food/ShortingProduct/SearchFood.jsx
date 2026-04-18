'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchFood = () => {

    const [searchInput , setSearchInput] = useState("");
    const searchParams = useSearchParams()
    const router = useRouter();
    const pathname = usePathname();
    // console.log(searchParams);


    const handelSearch = () => {
        const prams = new URLSearchParams(searchParams);
        if(searchInput){
            prams.set("search" ,searchInput)
        } else{
            prams.delete("search");
        }
        router.push(`${pathname}?${prams.toString()}`)
        console.log(prams);
    }

    return (
        <div className="flex-1 relative">
            <input
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                type="text"
                placeholder="Search for your favorite dish..."
                className="w-full px-4 py-3 pl-11 pr-4 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
            />
            <button onClick={handelSearch} className="btn px-4 py-6 pl-4 pr-4 bg-gray-800/80 border border-gray-700 rounded-xl text-white">Search</button>
            <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
    );
};

export default SearchFood;