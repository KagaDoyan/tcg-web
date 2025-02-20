// app/product/[name]/page.tsx
'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import AlsoBuy from "./also-buy/also-buy";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts"
import { fetchCardData as fetchYuGiOhData } from "@/app/api/yugioh/getall";
import { fetchCardData as fetchWeissData } from "@/app/api/weiss/getall";

const chartConfig = {
    averagePrice: {
        label: "Price",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

interface PageProps {
    name: string;
    category: string;
}

type DataItem = {
    seller: string;
    date: string;
    item_name: string;
    price: number;
};

const data: DataItem[] = [
    { seller: 'Alice Smith', date: '2025-02-18', item_name: 'Smartphone', price: 0.50 },
    { seller: 'Bob Johnson', date: '2025-02-18', item_name: 'Smartphone', price: 0.50 },
    { seller: 'Carol White', date: '2025-02-18', item_name: 'Smartphone', price: 0.59 },
    { seller: 'Alice Smith', date: '2025-02-19', item_name: 'Smartphone', price: 0.50 },
    { seller: 'Bob Johnson', date: '2025-02-19', item_name: 'Smartphone', price: 0.50 },
    { seller: 'Carol White', date: '2025-02-19', item_name: 'Smartphone', price: 0.45 },
    { seller: 'Alice Smith', date: '2025-02-20', item_name: 'Smartphone', price: 0.44 },
    { seller: 'Bob Johnson', date: '2025-02-20', item_name: 'Smartphone', price: 0.40 },
    { seller: 'Carol White', date: '2025-02-20', item_name: 'Smartphone', price: 0.40 },
    { seller: 'Alice Smith', date: '2025-02-21', item_name: 'Smartphone', price: 0.40 },
];


export default function ProductPage({ name, category }: PageProps) {
    const decode_name = decodeURIComponent(name);
    const [imgError, setImgError] = useState(false);

    const listingRef = useRef<HTMLDivElement>(null);

    // Function to scroll to footer
    const scrollToFooter = () => {
        listingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    //card info
    const [cardinfo, setCardInfo] = useState<any>()
    const fetchCardInfo = async () => {
        if (category === "YuGiOh") {
            try {
                const data = await fetchYuGiOhData();
                const card = data.filter((card: any) => card.name === decode_name)[0];

                // Update state with the fetched card information
                setCardInfo({
                    name: card.name,
                    image: card.card_images[0].image_url,
                    description: card.desc,
                    market_price: card.card_prices[0].cardmarket_price
                });
            } catch (error) {
                console.error("Failed to fetch card info:", error);
            }
        }

        if (category === "WeissSchwarz") {
            try {
                const data = await fetchWeissData();
                const card = data.filter((card: any) => card.name.toLowerCase().includes(decode_name.toLocaleLowerCase()))[0];
                setCardInfo({
                    name: card?.name,
                    image: card?.image,
                    description: card?.ability.join(" "),
                    market_price: card?.cardmarket_price
                });
            } catch (error) {
                console.error("Failed to fetch card info:", error);
            }
        }
    }

    useEffect(() => {
        fetchCardInfo()
    }, [])


    //listing

    //market history
    const averagePriceByDate = Object.values(
        data.reduce((acc, item) => {
            if (!acc[item.date]) {
                acc[item.date] = { date: item.date, total: 0, count: 0 };
            }
            acc[item.date].total += item.price;
            acc[item.date].count += 1;
            return acc;
        }, {} as Record<string, { date: string; total: number; count: number }>)
    ).map(entry => ({
        date: entry.date,
        averagePrice: entry.total / entry.count,
        sold: entry.count,
    }));

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:grid-rows-[auto,1fr]">

            <div className="order-1 sm:order-none col-span-4 sm:col-span-2 sm:col-start-2 sm:row-start-1">
                <h1 className="text-2xl font-bold">{decode_name}</h1>
            </div>

            <div className="order-2 p-10 pt-4 col-span-4 sm:order-none sm:row-span-2 sm:col-span-1 bg-muted rounded-lg">
                {!imgError ? (
                    <img
                        className="object-cover"
                        src={cardinfo?.image}
                        alt={decode_name}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="flex items-center justify-center bg-blue-500 h-64 w-64">
                        <span className="text-white">{decode_name}</span>
                    </div>
                )}
            </div>

            <div className="order-3 col-span-4 sm:order-none sm:col-span-2 sm:col-start-2 sm:row-start-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1">
                    <h6 className="text-lg font-bold">Product Details</h6>
                    <p className="text-justify p-1 sm:text-left leading-relaxed sm:leading-loose text-base sm:text-md tracking-wide">
                        {cardinfo?.description}
                    </p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <Card className="p-4 border rounded-lg shadow-sm">
                        <CardContent className="space-y-3">
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800">Pricing</h3>

                            {/* Price and Shipping */}
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-gray-900">$0.69</span>
                                <span className="text-[12px] text-gray-500">up to $3.99</span>
                            </div>

                            {/* Seller Info */}
                            <p className="text-sm text-gray-600">
                                Sold by <a href="#" className="text-blue-600 hover:underline">OjouKawaii</a>
                            </p>

                            {/* Quantity Selector and Add to Cart Button */}
                            <div className="flex items-center space-x-2">
                                {/* Add to Cart Button */}
                                <Button className="px-6 py-2 transition" onClick={scrollToFooter}>
                                    View 6 Listings
                                </Button>
                            </div>

                            {/* PayPal Info */}
                            <div className="flex items-center space-x-2 pt-2 border-t mt-3">

                                <p className="text-xs text-gray-500">
                                    about shipping or another extra payment please contact seller for more info.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Market Price History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <LineChart
                                    accessibilityLayer
                                    data={averagePriceByDate}
                                    margin={{
                                        left: 12,
                                        right: 12,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="date"
                                        tickLine={true}
                                        axisLine={true}
                                        tickMargin={8}
                                    // tickFormatter={(value) => value}
                                    />
                                    <YAxis dataKey="averagePrice" tickFormatter={(value) => value.toFixed(2)} />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Line
                                        dataKey="averagePrice"
                                        activeDot={{
                                            r: 6,
                                        }}
                                    >
                                        <LabelList
                                            dataKey="averagePrice"
                                            position="top"
                                            offset={12}
                                            className="fill-foreground"
                                            fontSize={12}
                                            formatter={(value: number) => value.toFixed(2)} // Format to 2 decimal places
                                        />
                                    </Line>
                                    {/* <Bar dataKey="sold" barSize={20} fill="#413ea0" /> */}
                                </LineChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Add ID to the Listing section to enable scrolling */}
            <div id="listing-section" className="order-4 sm:order-none col-span-4 p-4" ref={listingRef}>
                <h4 className="text-2xl font-bold">Listing</h4>
                <div className="pt-2 space-y-6">
                    {/* Listing Controls */}
                    <div className="p-4 rounded-lg shadow-sm space-y-4 w-full">
                        {/* Top Controls */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                            {/* Total Items */}
                            <span className="text-sm text-gray-600">
                                Total Items: <strong>150</strong>
                            </span>

                            {/* Sort By Option */}
                            <div className="flex items-center space-x-2">
                                <label htmlFor="sort" className="text-sm text-gray-600">
                                    Sort By:
                                </label>
                                <select id="sort" className="p-2 border rounded-md text-sm">
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="date">Newest</option>
                                    <option value="rating">Best Rated</option>
                                </select>
                            </div>

                            {/* Limit Items per Page */}
                            <div className="flex items-center space-x-2">
                                <label htmlFor="limit" className="text-sm text-gray-600">
                                    Items per Page:
                                </label>
                                <select id="limit" className="p-2 border rounded-md text-sm">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Example Item Row */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg shadow-sm">
                                {/* Seller Information */}
                                <div className="flex flex-col sm:w-1/3 mb-4 sm:mb-0">
                                    <span className="text-sm font-medium text-gray-800">
                                        Seller: <strong>John's Store</strong>
                                    </span>
                                    <span className="text-sm text-gray-500">Total Sold: 230 items</span>
                                </div>

                                {/* Item Details */}
                                <div className="flex flex-col sm:w-1/3 mb-4 sm:mb-0">
                                    <span className="text-sm text-gray-800">
                                        <strong>Condition:</strong> Near Mint
                                    </span>
                                    <span className="text-lg font-bold text-gray-900">$0.69</span>
                                    <span className="text-sm text-gray-500">+ $3.99 shipping</span>
                                </div>

                                {/* Add to Cart Button */}
                                <div className="sm:w-1/3 flex justify-end">
                                    <Button className="px-6 py-2 hover:bg-muted-foreground transition">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>

                            {/* Duplicate the above row for additional items */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg shadow-sm">
                                {/* Example for another item */}
                                <div className="flex flex-col sm:w-1/3 mb-4 sm:mb-0">
                                    <span className="text-sm font-medium text-gray-800">
                                        Seller: <strong>Jane's Emporium</strong>
                                    </span>
                                    <span className="text-sm text-gray-500">Total Sold: 150 items</span>
                                </div>
                                <div className="flex flex-col sm:w-1/3 mb-4 sm:mb-0">
                                    <span className="text-sm text-gray-800">
                                        <strong>Condition:</strong> Lightly Played
                                    </span>
                                    <span className="text-lg font-bold text-gray-900">$1.29</span>
                                    <span className="text-sm text-gray-500">+ $2.99 shipping</span>
                                </div>
                                <div className="sm:w-1/3 flex justify-end">
                                    <Button className="px-6 py-2 hover:bg-muted-foreground transition">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex items-center justify-between border-t pt-4">
                            {/* Previous Button */}
                            <Button variant='ghost' className="transition" // Add logic to enable/disable
                            >
                                Previous
                            </Button>

                            {/* Page Info */}
                            <span className="text-sm text-gray-600">Page 1 of 15</span>

                            {/* Next Button */}
                            <Button variant='ghost' className="transition">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-4 sm:order-none col-span-4 p-4">
                <h4 className="text-2xl font-bold">People also buy</h4>
                <AlsoBuy name={decode_name} category={category} />
            </div>
        </div >
    );
}
