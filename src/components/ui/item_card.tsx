import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

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
    <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={item.title}
        className="w-24 h-25 object-cover"
      />
      <CardContent className="ml-4 flex-grow">
        <h2 className="text-[15px] font-semibold truncate">{item.title}</h2>
        <p className="text-gray-600 mt-2 text-[12px]">{item.description}</p>
        {item.price && (
          <p className="text-lg font-semibold mt-4">
            Price: ${item.price}
          </p>
        )}
        <a href={`/item/${item.name}`} className="justify-self-end">
          View Item
        </a>
      </CardContent>
    </Card>
  );
};

export default ItemCard;

// Example Usage:
// <ItemCard item={{ id: "1", image: "/path/to/image.jpg", title: "Sample Item", description: "Short item description", price: "99.99" }} />
