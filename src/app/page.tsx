// pages/index.js
import BannerSlider, { ImageData } from '@/components/ui/banner_slider';
import Head from 'next/head';


import image1 from "@/static/1.jpg";
import image2 from "@/static/2.jpg";
import image3 from "@/static/3.jpg";
import ItemCard from '@/components/ui/item_card';
const banner_data: ImageData[] = [
  { src: image1, href: null },
  { src: image2, href: null },
  { src: image3, href: null },
];

const trendingListings = [
  {
    id: 4,
    name: 'Shadow Assassin',
    image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
    description: 'Strike swiftly with the Shadow Assassin.',
    price: '0.40'
  },
  {
    id: 5,
    name: 'Crystal Guardian',
    image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
    description: 'Guard the realms with the Crystal Guardian.',
    price: '0.39'
  },
  {
    id: 6,
    name: 'Storm Bringer',
    image: 'https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF894,1000_QL80_.jpg',
    description: 'Bring the storm to your opponents.',
    price: '0.41'
  },
];

const newArrivals = [
  {
    id: 7,
    name: 'Solar Knight',
    image: '/images/solar-knight.jpg',
    description: 'Shine bright on the battlefield.',
  },
  {
    id: 8,
    name: 'Lunar Sorcerer',
    image: '/images/lunar-sorcerer.jpg',
    description: 'Harness the power of the moon.',
  },
  {
    id: 9,
    name: 'Ethereal Spirit',
    image: '/images/ethereal-spirit.jpg',
    description: 'An enigma on the field.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Trading Card Game Hub</title>
        <meta
          name="description"
          content="Discover featured cards, trending listings, and new arrivals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Trading Card Game Hub</h1>
          <p className="text-gray-600 mt-4">
            Discover, collect, and trade your favorite cards.
          </p>
        </header>

        {/* Featured Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Featured</h2>
          <BannerSlider images={banner_data} />
        </section>

        {/* Trending Listings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Trending Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingListings.map((card) => (
              <ItemCard item={{ name: card.name, image: card.image, description: card.description, price: card.price, title: card.name }} />
            ))}
          </div>
        </section>

        {/* New Arrivals */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newArrivals.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{card.name}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
