import ItemCard from "../ui/item_card";

export function Trending() {

    const trendingListings = [
        {
            id: 4,
            name: 'Witch Crafter Verre',
            image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
            description: 'Strike swiftly with the Shadow Assassin.',
            price: '0.40'
        },
        {
            id: 5,
            name: 'Witch Crafter Verre',
            image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
            description: 'Guard the realms with the Crystal Guardian.',
            price: '0.39'
        },
        {
            id: 6,
            name: 'Witch Crafter Verre',
            image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
            description: 'Bring the storm to your opponents.',
            price: '0.41'
        },
        {
            id: 4,
            name: 'Witch Crafter Verre',
            image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
            description: 'Strike swiftly with the Shadow Assassin.',
            price: '0.40'
        },
        {
            id: 5,
            name: 'Witch Crafter Verre',
            image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
            description: 'Guard the realms with the Crystal Guardian.',
            price: '0.39'
        },
        {
            id: 6,
            name: 'Witch Crafter Verre',
            image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
            description: 'Bring the storm to your opponents.',
            price: '0.41'
        },
    ];

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Trending Listings</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-6">
                {trendingListings.map((card) => (
                    <ItemCard 
                        item={{ 
                            name: card.name, 
                            image: card.image, 
                            description: card.description, 
                            price: card.price, 
                            title: card.name 
                        }} 
                    />
                ))}
            </div>
        </div>
    );
}