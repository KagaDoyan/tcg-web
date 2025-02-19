import CategoryPage from "@/components/product/categoryPage"

interface PageProps {
    params: { category: string };
}
export default function Page({ params }: PageProps) {
    const { category } = params;
    const decode_name = decodeURIComponent(category);
    return (
        <div>
            <CategoryPage name={decode_name} />
        </div>
    )
}