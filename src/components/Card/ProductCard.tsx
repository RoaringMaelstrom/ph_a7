import { IProduct } from "@/types/IProduct";

interface ProductCardProp {
    product: IProduct
}

const ProductCard = ({ product }: ProductCardProp) => {
    return (
        <div className="bg-base-200">
            <div className="flex">
                <div className="text-5xl">{product.categoryIcon}</div>
                <div>{product.slug} <br /> Per {product.unit}</div>
            </div>
            <div>
                <div>{`Today's Price`}</div>
                <div className="flex justify-between">
                    <div>{product.today} taka</div>
                    <div>
                        <div></div>
                        <div className={`badge badge-soft ${ product.change.dir === "flat" ? ("badge-ghost") : ( product.change.dir === "up" ? "badge-success" : "badge-error")}`}>{product.change.pct} %</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
