import CardCategory from '@/components/card-category/card-category';
import { Featured } from '@/components/featured/featured';
import Trending from '@/components/trending/trending';
import Head from 'next/head';

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
        {/* Cards Category */}
        <CardCategory />

        {/* Featured Cards */}
        <Featured />

        {/* Trending Listings */}
        <Trending />
      </main>
    </>
  );
}
