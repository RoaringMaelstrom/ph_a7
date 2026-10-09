import Link from "next/link";

import { ICategory } from "@/types/ICategory";
import { IProduct } from "@/types/IProduct";

import CategoryProducts from "@/components/client/CategoryProducts";

const getCategory = async (id: string) => {
    try {
        const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${id}`, { cache: "force-cache" });
        const data: ICategory = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching category data ", error);
        return null;
    }
}

const getCategoryProducts = async (id: string) => {
    try {
        const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${id}`, { cache: "force-cache" });
        const data: IProduct[] = await res.json();
        return data;

    } catch (error) {
        console.error("Error fetching category products ", error);
        return null;
    }
}

interface CategoryDetailsProps {
    params: Promise<{ id: string }>
}

const CategoryDetailsPage = async ({ params }: CategoryDetailsProps) => {
    const { id } = await params

    const category: ICategory | null = await getCategory(id);
    const products: IProduct[] | null = await getCategoryProducts(id);

    if (category === null) {
        return <div><h1 className="text-5xl text-red">FAILED TO LOAD CATEGORY</h1>
            <Link href="/"><button>Click here to return to home</button></Link></div>;
    }

    if (products === null) {
        return <div><h1 className="text-5xl text-red">FAILED TO LOAD PRODUCTS</h1>
            <Link href="/"><button>Click here to return to home</button></Link></div>;
    }

    return (
        <div className="px-12 bg-zinc-300 dark:bg-black">
            <div className="flex">
                <div className="text-6xl">{category.icon}</div>
                <div>
                    <h1>{category.id}</h1>
                    <h1>{products.length} Products and their price changes</h1>
                </div>
            </div>
                <CategoryProducts products={products} />
        </div>
    );
};

export default CategoryDetailsPage;