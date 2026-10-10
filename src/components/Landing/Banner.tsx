import Image from "next/image";
import { Suspense } from "react";

import BannerImg from "../../../public/bazar-hero.png";
import BannerDate from "../client/BannerDate";
import AllProductsButton from "../client/AllProductsButton";

const Banner = () => {
    return (
        <div className="w-full md:px-12 lg:px-24">
            <div className="hero-content w-full  border-2 border-gray-400/20 rounded-xl bg-base-200 flex-col lg:flex-row">
                <div className="flex flex-col gap-3">
                    <Suspense fallback={"loading loading-dots loading-dots-xl"}>
                        <BannerDate />
                    </Suspense>
                    <h1 className="font-bold text-3xl">{`Today's Market Prices at a Glance`}</h1>
                    <h3 className="lg:w-[60%]">Price of Rice, Lentils, Oil, Vegetables, Fish, Meat, Eggs, and Spices — detailed, average, minimum-maximum, and price changes of a market dynamics all in one place!</h3>
                    <AllProductsButton />
                </div>

                <Image src={BannerImg} alt='Interface Stack Image' />
            </div>
        </div>
    );
};

export default Banner;