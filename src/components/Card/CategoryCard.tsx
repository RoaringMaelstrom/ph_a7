import { ICategory } from "@/types/ICategory";

interface CategoryCardProps {
    category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <div className="card card-lg p-6 flex flex-col border-4 border-base-300 bg-base-200">
                <h1 className="text-6xl">{category.icon}</h1>
                <h1 className="text-5xl">{category.id}</h1>
        </div>
    );
};

export default CategoryCard;