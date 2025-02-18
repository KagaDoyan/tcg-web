import { useState, useEffect, useRef } from "react";

interface AlsoBuyProp {
    name: string;
}

export default function AlsoBuy({ name }: AlsoBuyProp) {
    const items = [
        { id: 1, name: 'Item 1', description: 'Description for item 1.' },
        { id: 2, name: 'Item 2', description: 'Description for item 2.' },
        { id: 3, name: 'Item 3', description: 'Description for item 3.' },
        { id: 4, name: 'Item 4', description: 'Description for item 4.' },
        { id: 5, name: 'Item 5', description: 'Description for item 5.' },
        { id: 6, name: 'Item 6', description: 'Description for item 6.' },
        { id: 7, name: 'Item 7', description: 'Description for item 7.' },
        { id: 8, name: 'Item 8', description: 'Description for item 8.' },
        { id: 9, name: 'Item 9', description: 'Description for item 9.' },
        { id: 10, name: 'Item 10', description: 'Description for item 10.' },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null); // Container reference

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

    const pages = Math.ceil(items.length / itemsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % pages);
    };

    const handleDotClick = (index: number) => {
        setCurrentPage(index);
    };

    // Group items based on itemsPerPage
    const groupedItems = [];
    for (let i = 0; i < items.length; i += itemsPerPage) {
        groupedItems.push(items.slice(i, i + itemsPerPage));
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
                        <div key={index} className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Loop through each group and render the items */}
                            {group.map((item) => (
                                <a href={`/product/${item.name}`} key={item.id}>
                                    <div className="border rounded-lg shadow-md flex flex-wrap">
                                        <div className="w-1/3 p-2">
                                            <img
                                                src="https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg"
                                                alt={`Product ${item.name}`}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        <div className="w-2/3 p-4 flex flex-col justify-between">
                                            <h5 className="text-lg font-semibold">{item.name}</h5>
                                            <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                                            <span className="text-xl font-bold text-gray-900 mt-auto">$0.40</span>
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
