import NewsCategoryPage from "@/components/news/news";

interface PageProps {
    params: {
        category: string
    }
}

export default async function Page({ params }: PageProps) {
    const { category } = await params;
    return (
        <div>
            <NewsCategoryPage category={category}/>
        </div>
    )
}