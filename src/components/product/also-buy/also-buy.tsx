import { useState, useEffect, useRef } from "react";
import { Products } from "@/app/(with-layout)/product_demo";

interface AlsoBuyProp {
    name: string;
}

export default function AlsoBuy({ name }: AlsoBuyProp) {

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null); // Container reference

    function getRandomProducts(products: any, count: number): any[] {
        const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle array randomly
        return shuffled.slice(0, count); // Return the first 'count' items
    }

    const randomProducts = getRandomProducts(Products, 12);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(4); // 3 items per page
            } else if (window.innerWidth >= 640) {
                setItemsPerPage(2); // 2 items per page
            } else {
                setItemsPerPage(1); // 1 item per page
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pages = Math.ceil(randomProducts.length / itemsPerPage);

    const handleDotClick = (index: number) => {
        setCurrentPage(index);
    };

    // Group items based on itemsPerPage
    const groupedItems = [];
    for (let i = 0; i < randomProducts.length; i += itemsPerPage) {
        groupedItems.push(randomProducts.slice(i, i + itemsPerPage));
    }

    // Calculate the width for the entire visible section (group of items)
    const sectionWidth = containerRef.current
        ? containerRef.current.offsetWidth
        : 0;

    return (
        <div className="p-4">
            {/* Cards Wrapper with banner-like sliding effect */}
            <div className="relative overflow-hidden">
                <div
                    ref={containerRef} // Reference for the container
                    className="flex transition-transform duration-500 ease-in-out pt-1 pb-1"
                    style={{
                        transform: `translateX(-${currentPage * sectionWidth}px)`, // Slide by the entire width of the section
                    }}
                >
                    {groupedItems.map((group, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                        >
                            {group.map((product) => (
                                <a
                                    href={`/product/YuGiOh/${product.name}`}
                                    key={product.name}
                                    className="h-full"
                                >
                                    <div className="border rounded-lg shadow-md flex flex-col md:flex-row h-full">
                                        <div className="md:w-1/3 w-full p-2">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full object-contain" // Removed h-48
                                            />
                                        </div>
                                        <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
                                            <p className="text-md font-semibold truncate">{product.name}</p>
                                            <p className="text-sm text-gray-600 flex-grow">{product.condition}</p>
                                            <span className="text-xl font-bold text-gray-900 mt-2">
                                                {product.price}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination and Next Button for smaller screens */}
            <div className="flex items-center justify-center mt-4">
                {/* Pagination Dots */}
                <div className="flex space-x-2">
                    {[...Array(pages)].map((_, index) => (
                        <span
                            key={index}
                            onClick={() => handleDotClick(index)} // Click handler for dot
                            className={`w-5 h-5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-colors duration-300 
                  ${index === currentPage ? 'bg-gray-950' : 'bg-gray-400 hover:bg-blue-300'}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
