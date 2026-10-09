"use client"

import Link from "next/link";

import ProductCard from "../Card/ProductCard";

import { IProduct } from "@/types/IProduct";
import { useState } from "react";

const sortProduct = (products: IProduct[], sortBy: number) => {
    const sortedProducts = [...products];
    if (sortBy === 2)
        sortedProducts.sort((a, b) => a.today - b.today);

    else if (sortBy === 3)
        sortedProducts.sort((a, b) => b.today - a.today);

    return sortedProducts;
}

interface CategoryProductsProp {
    products: IProduct[];
}

const CategoryProducts = ({ products }: CategoryProductsProp) => {
    const [sortBy, setSortBy] = useState<number>(1)

    const sortedProducts = sortProduct(products, sortBy);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center">
                <div className="ml-auto p-4">Sort By</div>
                <select defaultValue="Default" className="select select-neutral">
                    <option onClick={() => setSortBy(1)}>Default</option>
                    <option onClick={() => setSortBy(2)}>Price Ascending</option>
                    <option onClick={() => setSortBy(3)}>Price Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30">
                {sortedProducts.map((product: IProduct) => (
                    <Link
                        key={product.id}
                        href={`/`}
                    >
                        <ProductCard
                            product={product}
                        />
                    </Link>
                )
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;