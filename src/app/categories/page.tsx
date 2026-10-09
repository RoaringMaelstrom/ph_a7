import CategoryCard from "@/components/Card/CategoryCard";
import { ICategory } from "@/types/ICategory";

import Link from "next/link";

const getCategories = async() => {
    try {
        const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories", {cache: "force-cache"});
        const data: ICategory[] = await res.json();
        return data;

    } catch (error) {
        console.error("error fetching data,", error);
        return [];
    }
}

const CategoriesPage = async() => {
    const categories = await getCategories();
    return (
        <div className="px-30 flex flex-col gap-15 md:p-12 bg-zinc-300 dark:bg-black">
            <div className="text-5xl">Categories Available</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
                {categories.map((category: ICategory) => (
                    <Link
                        key={category.id}
                        href={`/categories/${category.id}`}>
                        <CategoryCard
                            category={category}
                        />
                    </Link>
                )
                )}
            </div>
        </div>
    );
};

export default CategoriesPage;