import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

import { IProduct } from "@/types/IProduct";

interface MarqueeCardProp {
    product: IProduct
}

const MarqueeCard = ({ product }: MarqueeCardProp) => {
    return (
        <div className="flex px-3 bg-base-200 z-0 border-x-2 border-y-1  border-slate-500 hover:bg-emerald-400/80 dark:hover:bg-green-900/80 gap-1">
            <div>{product.categoryIcon}</div>
            <div>{product.slug}</div>
            <div>{`${product.today} taka / ${product.unit}`}</div>
            <div className={`${product.change.dir === "up" ? "text-red-700" : "text-emerald-500"} flex text-center items-center gap-1 pl-2 font-bold`}>
                {product.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />}
                {Math.abs(product.change.pct)} %
            </div>
        </div>
    );
};

export default MarqueeCard;