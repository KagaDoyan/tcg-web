import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface itemprops {
    name: string;
    image: string;
    title: string;
    description: string;
    price: string;
}

const ItemCard = ({ item }: { item: itemprops }) => {
    const imageUrl = item.image.startsWith("http") ? item.image : `/path/to/images/${item.image}`;
    return (
        <a
            href={`/product/YuGiOh/${item.name}`}
            key={item.name}
            className="h-full"
        >
            <div className="border rounded-lg shadow-md flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 w-full p-2">
                    <img
                        src={imageUrl}
                        alt={item.name}
                        className="w-full object-contain" // Removed h-48
                    />
                </div>
                <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
                    <p className="text-md font-semibold truncate">{item.name}</p>
                    <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                    <span className="text-xl font-bold text-gray-900 mt-2">
                        {item.price}
                    </span>
                </div>
            </div>
        </a>
    );
};

export default ItemCard;
