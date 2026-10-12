import Marquee from "react-fast-marquee";
import Link from "next/link";

import { IProduct } from "@/types/IProduct";
import MarqueeCard from "../Card/MarqueeCard";

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

const MarqueeItem = async () => {
    const products: IProduct[] = await getAllProducts()
    const priceChanges = products.filter((product: IProduct) => product.change.dir !== "flat")

    return (
        <Marquee>

            <div className="flex z-0">
                {priceChanges.map((product: IProduct) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                    >
                        <MarqueeCard
                            product={product}
                        />
                    </Link>
                )
                )}
            </div>
        </Marquee>
    );
};

export default MarqueeItem;