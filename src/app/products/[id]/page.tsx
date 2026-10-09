import Link from "next/link";

import { IProduct } from "@/types/IProduct";

const getProductDetails = async (id: number) => {
    try {
        const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`, { cache: "force-cache" });
        const data: IProduct = await res.json();
        return data;
    } catch (error) {
        console.error("error fetching data ", error);
        return null;
    }
}

interface ProductDetailsProps {
    params: Promise<{ id: number }>
}

const ProductDetailsPage = async ({ params }: ProductDetailsProps) => {
    const { id } = await params

    const productData: IProduct | null = await getProductDetails(id);

    if (productData === null) return (<div><h1>Failed to fetch product data</h1><Link href="/"><button className="btn btn-error">Return to Home</button></Link></div>);

    const minPrice: number = Math.min(...productData.markets.map(marketPrice => marketPrice.min));
    const maxPrice: number = Math.max(...productData.markets.map(marketPrice => marketPrice.max));


    return (
        <div className="md:px-12 lg:px-24 mx-5 dark:bg-black ">

            {/*Detailed Product Card*/}
            <div className="breadcrumbs text-sm  my-8">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/categories">{productData.category}</Link></li>
                    <li>{productData.slug}</li>
                </ul>
            </div>

            <div className="bg-base-200  p-3 md:p-10 flex flex-col md:flex-row gap-4 rounded-xl">
                <div className="m-6 flex flex-col md:flex-row gap-4 ">
                    <div className="text-6xl bg-zinc-300 dark:bg-black py-4 mx:auto text-center rounded-xl">{productData.categoryIcon}</div>
                    <div className="text-center md:text-left">
                        <h1 className="font-bold text-3xl">{productData.slug}</h1>
                        <h6 className="opacity-60">per {productData.unit} . {productData.category}</h6>
                        <h2>{`Relative to yesterday, today's price ${productData.change.dir === "flat" ? `is the same` : (productData.change.dir === "up" ? `increased ${productData.today - productData.yesterday}` : `decresed ${productData.yesterday - productData.today}`)} taka`}</h2>
                    </div>
                </div>
                <div className="bg-zinc-300 dark:bg-black md:ml-auto p-5 rounded-xl text-center md:text-left">
                    <h2>{`Today's price`}</h2>
                    <h1>{productData.today}</h1>
                    <h3>Price per {productData.unit}</h3>
                </div>
            </div>

            {/*Stat section*/}
            <div className="bg-base-200 p-4 md:p-5 my-4 rounded-xl">
                <h1 className="font-bold text-xl">Price Summary</h1>
                <div className="flex  py-4">
                    <div className="border-2 border-gray-300 w-[30%] rounded-xl p-4 mr-auto">
                        <h2>Minimum Price</h2>
                        <h1 className="text-emerald-800 text-2xl font-bold">{minPrice} <span className="text-xl font-medium">taka</span></h1>
                        <h2>Lowest available market price</h2>
                    </div>
                    <div className="border-2 border-gray-300 w-[30%] rounded-xl p-4 mr-auto">
                        <h2>Maximum Price</h2>
                        <h1 className="text-red-700 text-2xl font-bold">{maxPrice} <span className="text-xl font-medium">taka</span></h1>
                        <h2>Maximum available market price</h2>
                    </div>
                    <div className="border-2 border-gray-300 w-[30%] rounded-xl p-4 mr-auto">
                        <h2>Maximum Price</h2>
                        <h1 className="text-emerald-800 text-2xl font-bold">{(maxPrice + minPrice)/2} <span className="text-xl font-medium">taka</span></h1>
                        <h2>Average price per-{productData.unit}</h2>
                    </div>
                </div>

                {/*Market Prices Section*/}
                <div className="pt-4">
                    <h1 className="font-bold text-xl">{`Today's Market Prices`}</h1>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;