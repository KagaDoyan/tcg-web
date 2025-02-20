'use client'
import { useEffect, useState } from "react";
import ItemCard from "../ui/item_card";
import { fetchCardData } from "@/app/api/yugioh/getall";

export default function Trending() {
    const [WitchCrafterCards, setWitchCraftCards] = useState<any>([]);
    const fetchCards = async () => {
        const cards = await fetchCardData();
        setWitchCraftCards(cards?.filter((card: any) => card?.name?.includes("Witchcrafter")));
        console.log(cards);
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Trending Listings</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {WitchCrafterCards?.map((card: any, index: number) => {
                    if (index > 11) return null;
                    return (
                        <ItemCard 
                            item={{
                                name: card.name, 
                                image: card?.card_images[0]?.image_url, 
                                description: "card in near mint condition", 
                                price: "$"+card.card_prices[0].cardmarket_price, 
                                title: card?.name
                            }} 
                        />
                    )
                })}
            </div>
        </div>
    );
}