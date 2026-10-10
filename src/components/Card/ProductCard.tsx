import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

import { IProduct } from "@/types/IProduct";

interface ProductCardProp {
    product: IProduct
}

const ProductCard = ({ product }: ProductCardProp) => {
    return (
        <div className="bg-base-200 p-5 rounded-xl border-2 border-base-300">
            <div className="flex gap-3">
                <div className="text-5xl bg-zinc-300 dark:bg-black p-3 rounded-xl">{product.categoryIcon}</div>
                <div>{product.slug} <br /> Per {product.unit}</div>
            </div>
            <div>
                <div className="pt-2">{`Today's Price`}</div>
                <div className="flex justify-between">
                    <div><h1 className="font-bold text-2xl">{product.today} <span className="font-medium text-xl">taka</span></h1></div>
                    <div>
                        <div className={`badge badge-soft ${product.change.dir === "flat" ? ("badge-ghost") : (product.change.dir === "up" ? "badge-error" : "badge-success")} font-bold`}>
                            {product.change.dir === "flat" ? ("— ") : (product.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />)}
                            {Math.abs(product.change.pct)} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
