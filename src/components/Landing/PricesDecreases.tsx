import { FaCaretDown } from "react-icons/fa6";

import Link from "next/link";

import { IProduct } from "@/types/IProduct";
import ProductCard from "../Card/ProductCard";

interface PricesDecreasesProps {
    priceDecreased: IProduct[];
}

const PricesDecreases = ({ priceDecreased }: PricesDecreasesProps) => {
    return (
        <div className=" flex flex-col gap-4 py-5">
            <h1 className="font-bold text-xl flex gap-2"><span className="text-green-600 text-3xl"><FaCaretDown></FaCaretDown></span>{`Today's Price Fall`}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {priceDecreased.map((product: IProduct) => (
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
    );
};

export default PricesDecreases;