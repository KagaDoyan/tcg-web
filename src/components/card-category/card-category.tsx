import { Categories } from "./card-categorylist"
export default function CardCategory() {
    return (
        <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-6">
                {
                    Categories.map((category) => (
                        <a href={`/product/${category.name}`}>
                            <img src={category.image} alt={category.name} className="w-40 h-20 object-cover rounded-lg shadow-xl cursor-pointer bg-gray-950" />
                        </a>
                    ))
                }
            </div>
        </div>

    )
}