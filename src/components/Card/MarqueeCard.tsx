import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

import { IProduct } from "@/types/IProduct";

interface MarqueeCardProp {
    product: IProduct
}

const MarqueeCard = ({ product }: MarqueeCardProp) => {
    return (
        <div className="flex px-3 bg-base-200 border-x-2 border-y-1 border-slate-500 gap-1">
            <div>{product.categoryIcon}</div>
            <div>{product.slug}</div>
            <div>{`${product.today} taka / ${product.unit}`}</div>
            <div className={`badge badge-soft ${product.change.dir === "flat" ? ("badge-ghost") : (product.change.dir === "up" ? "badge-error" : "badge-success")} font-bold`}>
                {product.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />}
                {Math.abs(product.change.pct)} %
            </div>
        </div>
    );
};

export default MarqueeCard;