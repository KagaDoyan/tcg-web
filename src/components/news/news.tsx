interface PageProps {
    category: string
}

export default async function NewsCategoryPage({ category }: PageProps) {
    return (
        <div>
            <h1>{category} News</h1>
        </div>
    );
}