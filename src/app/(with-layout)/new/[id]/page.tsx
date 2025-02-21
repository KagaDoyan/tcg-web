import NewPage from "@/components/news/new";

interface PageProps {
    params: {
        id: string
    }
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    return (
        <div>
            <NewPage id={id}/>
        </div>
    );
}