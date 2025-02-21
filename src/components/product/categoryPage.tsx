'use client'

import { useState, useRef } from 'react';
import { Products } from '@/app/product_demo'
import image from '@/static/404.png'
import Image from 'next/image';
import { Button } from '../ui/button';
import { Categories } from '../card-category/card-categorylist';

interface PageProps {
    name: string;
}


export default function CategoryPage({ name }: PageProps) {

    const newRef = useRef<HTMLDivElement>(null);
    const BuyRef = useRef<HTMLDivElement>(null);
    const DeckRef = useRef<HTMLDivElement>(null);

    const handleScroll = (ref: any) => {
        if (ref.current) {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [orderBy, setOrderBy] = useState<'name' | 'price'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const product_category = Products.find(category => category.category === name)

    // Sort and paginate the products
    const sortedProducts = product_category?.products ? [...product_category?.products].sort((a, b) => {
        const orderFactor = sortOrder === 'asc' ? 1 : -1;

        if (orderBy === 'name') {
            return a.name.localeCompare(b.name) * orderFactor;
        } else if (orderBy === 'price') {
            // Remove the "$" sign and parse the price as a float
            const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, '')); // Remove non-numeric characters
            const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));

            return (priceA - priceB) * orderFactor;
        }

        return 0; // Default return (just in case)
    }) : [];

    const Category = Categories.find(category => category.name === name)


    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(Products.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSortChange = (newOrderBy: 'name' | 'price', sortDirection: 'asc' | 'desc') => {
        setOrderBy(newOrderBy);
        setSortOrder(sortDirection);
    };

    return (
        <div className="">
            <div className='flex flex-row gap-4 order-1 sm:order-none border-b-2 p-4 text-center justify-center col-span-4'>
                <p className="text-sm font-semibold cursor-pointer underline" onClick={() => handleScroll(newRef!)}>Forum</p>
                <p className="text-sm font-semibold cursor-pointer underline" onClick={() => handleScroll(BuyRef!)}>Buy Cards</p>
                <p className="text-sm font-semibold cursor-pointer underline" onClick={() => handleScroll(DeckRef!)}>Deck template</p>
            </div>
            <div className="order-4 sm:order-none col-span-4 p-4 space-x-1">
                <h4 className="text-2xl font-bold">Buy {Category?.name} Cards</h4>
                <p>{Category?.motto}</p>
            </div>
            <div ref={newRef} className="order-4 sm:order-none col-span-4 p-4 space-y-4">
                <h5 className="text-2xl font-bold">News & Updates</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
                    <a href={`/new/sample`} className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <Image src={image} alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Why WitchCrafter is the best?</h5>
                                <p className="text-sm text-gray-600">I'm going to tell you why come see for yourself.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                    <a href={`/new/sample`} className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <img src="https://pbs.twimg.com/media/FxPpZiNWcAA2uKo?format=jpg&name=4096x4096" alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Dark Dragon, Blue-eyes Magician</h5>
                                <p className="text-sm text-gray-600">this is just nonsense are they even real cards, come find out.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                    <a href={`/new/sample`} className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <img src="https://i.ytimg.com/vi/Kwcj0GY8WVQ/mqdefault.jpg" alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Who need meta? You need waifu!</h5>
                                <p className="text-sm text-gray-600">list of waifu cards you might interested come see.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                    <a href={`/new/sample`} className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <img src="https://preview.redd.it/gacrjhyggv4e1.jpeg?auto=webp&s=c41fd34afb415e84dead14e1658da7fa47f88519" alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Yet another cute deck you might want to try.</h5>
                                <p className="text-sm text-gray-600">come check out this deck you will love it.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex justify-end mt-4">
                    <a href={`/news/${name}`} className="text-sm font-semibold cursor-pointer underline">See more</a>
                </div>
            </div>
            <div ref={BuyRef} className="order-4 sm:order-none col-span-4 p-4 space-y-4">
                <h5 className="text-2xl font-bold">Latest list in {name}</h5>
                <div className="flex justify-end mb-4">
                    <div className="flex gap-4">
                        <select onChange={(e) => handleSortChange(e.target.value.split(',')[0] as 'name' | 'price', e.target.value.split(',')[1] as 'asc' | 'desc')}>
                            <option value="name,asc">Sort by Name (A-Z)</option>
                            <option value="price,asc">Price: Low-High</option>
                            <option value="price,desc">Price: High-Low</option>
                        </select>
                    </div>
                </div>

                {paginatedProducts?.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {paginatedProducts?.map((product) => (
                            <a href={`/product/${Category?.name}/${product.id || product.name}`} key={product.name}>
                                <div className="border rounded-lg shadow-md min-h-96 sm:min-h-0 md:min-h-36 flex flex-col md:flex-row">
                                    <div className="md:w-1/3 w-full p-2">
                                        <img
                                            src={product.image}
                                            alt={`${product.name}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
                                        <p className="text-md font-semibold truncate">{product.name}</p>
                                        <p className="text-sm text-gray-600 flex-grow">{product.condition}</p>
                                        <span className="text-xl font-bold text-gray-900 mt-2">{product.price}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="h-screen flex flex-col items-center text-center pt-10">
                        <Image
                            src={image}
                            alt="Not found"
                            className="mb-4 object-contain rounded-full"
                            width={150}
                            height={150}
                        />
                        <h4 className="text-2xl mb-2 text-gray-600">No card on sell</h4>
                    </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center gap-4 mt-4">
                    {/* Previous Page Button */}
                    <Button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50"
                        variant='ghost'
                    >
                        {'<'}
                    </Button>

                    {/* Page Numbers */}
                    {[...Array(totalPages).keys()].map((pageIndex) => {
                        const page = pageIndex + 1;
                        if (
                            page <= 5 ||
                            page >= totalPages - 4 ||
                            (page >= currentPage - 2 && page <= currentPage + 2)
                        ) {
                            return (
                                <Button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 border rounded-lg ${currentPage === page ? 'bg-gray-950' : 'bg-white text-gray-950'} hover:bg-muted-foreground`}
                                >
                                    {page}
                                </Button>
                            );
                        } else if (page === 6 || page === totalPages - 5) {
                            return (
                                <span key={page} className="px-4 py-2">
                                    ...
                                </span>
                            );
                        }
                        return null;
                    })}

                    {/* Next Page Button */}
                    <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50"
                        variant='ghost'
                    >
                        {'>'}
                    </Button>

                    {/* Last Page Button */}
                    <Button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50"
                        variant='ghost'
                    >
                        {'>>'}
                    </Button>
                </div>
            </div>
            <div ref={DeckRef} className="order-4 sm:order-none col-span-4 p-4 space-y-4">
                <h5 className="text-2xl font-bold">Deck Template</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
                    <a className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <Image src={image} alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Why WitchCrafter is the best?</h5>
                                <p className="text-sm text-gray-600">I'm going to tell you why come see for yourself.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                    <a className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <img src="https://pbs.twimg.com/media/FxPpZiNWcAA2uKo?format=jpg&name=4096x4096" alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Dark Dragon, Blue-eyes Magician</h5>
                                <p className="text-sm text-gray-600">this is just nonsense are they even real cards, come find out.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                    <a className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <img src="https://i.ytimg.com/vi/Kwcj0GY8WVQ/mqdefault.jpg" alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Who need meta? You need waifu!</h5>
                                <p className="text-sm text-gray-600">list of waifu cards you might interested come see.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                    <a className='cursor-pointer'>
                        <div className="flex flex-col border rounded-lg shadow-md bg-gray-50 min-h-56">
                            <img src="https://preview.redd.it/gacrjhyggv4e1.jpeg?auto=webp&s=c41fd34afb415e84dead14e1658da7fa47f88519" alt="404" className="w-full h-20 object-cover rounded-t-lg bg-gray-950" />
                            <div className="flex flex-col p-4 flex-1">
                                <h5 className="text-lg font-bold leading-tight tracking-tight">Yet another cute deck you might want to try.</h5>
                                <p className="text-sm text-gray-600">come check out this deck you will love it.</p>
                                <p className="text-xs mt-auto text-gray-400">by Hakase.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex justify-end mt-4">
                    <a href={`/decks/${name}`} className="text-sm font-semibold cursor-pointer underline">See more</a>
                </div>
            </div>
        </div>
    );
}
