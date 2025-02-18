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
        <Card className="flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow w-70 h-96 overflow-hidden">
            <img
                src={imageUrl}
                alt={item.title}
                className="w-[85px] h-[130px] object-stretch"
            />
            <CardContent className="flex-1 mt-4 text-center">
                <h2 className="text-[15px] font-semibold truncate">{item.title}</h2>
                <p className="text-gray-600 mt-2 text-[12px] truncate">{item.description}</p>
                {item.price && (
                    <p className="text-lg font-semibold mt-4">
                        Price: ${item.price}
                    </p>
                )}
                {/* more info at the bottom */}
            </CardContent>
            <CardFooter>
                <a className="w-full mt-4 hover:underline cursor-pointer" href={`/product/${item.name}`}>More Info</a>
            </CardFooter>
        </Card>
    );
};

export default ItemCard;
