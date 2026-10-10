import Link from "next/link";

import { IProduct } from "@/types/IProduct";
import PricesDecreases from "./PricesDecreases";
import PricesIncreases from "./PricesIncreases";
import ProductCard from "../Card/ProductCard";

const getAllProducts = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products/", { cache: "force-cache" });
        const data: IProduct[] = await res.json();
        return data;

    } catch (error) {
        console.error("error fetching all products ", error);
        return [];
    }
}


const ProductDisplay = async () => {
    const allProducts: IProduct[] = await getAllProducts();

    if (allProducts.length === 0) {
        return <div className="flex min-h-screen flex-col items-center justify-center gap-4"><h1 className="text-5xl bg-base-300 p-4 rounded-xl">FAILED TO LOAD ALL PRODUCTS</h1>
            <Link href="/"><button className="btn btn-error">Click here to return to home</button></Link></div>;
    }

    const priceDecreased: IProduct[] = allProducts.filter((product) => product.change.dir === "down").slice(0, 6);
    const priceIncreased: IProduct[] = allProducts.filter((product) => product.change.dir === "up").slice(0, 6);


    return (
        <div className="w-full pt-12">
            <PricesIncreases priceIncreased={priceIncreased} />
            <PricesDecreases priceDecreased={priceDecreased} />


            {/*All Products*/}
            <div className=" flex flex-col gap-4 py-5">
                <h1 className="font-bold text-xl">ALL Products</h1>
                <h2>{`Total ${allProducts.length} Products are being shown`}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allProducts.map((product: IProduct) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                        >
                            <ProductCard
                                product={product}
                            />
                        </Link>
                    )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;