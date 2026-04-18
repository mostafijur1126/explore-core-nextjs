'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const CategoryFilter = () => {
    const categoryParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();


    const handelCategory = (category) => {
        const params = new URLSearchParams(categoryParams);
        if(category){
            params.set("category" , category);
        } else {
            params.delete("category");
        }
        router.push(`${pathname}?${params}`);
        // console.log(category);
    }
    return (
        <select onChange={e => handelCategory(e.target.value)} className="px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300">
            <option value="">All Categories</option>
            <option value="dish">Main Dish</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drinks</option>
        </select>
    );
};

export default CategoryFilter;