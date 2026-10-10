import Image from "next/image";
import Link from "next/link";

import BannerImg from "../../../public/bazar-hero.png";

const Banner = () => {
    return (
        <div className="w-full md:px-12 lg:px-24">
            <div className="hero-content w-full  border-2 border-gray-400/20 rounded-xl bg-base-200 flex-col lg:flex-row">
                <div className="flex flex-col gap-3">
                    <h2 className="badge badge-soft badge-success font-bold">Thursday, October 10, 2026</h2>
                    <h1 className="font-bold text-3xl">{`Today's Market Prices at a Glance`}</h1>
                    <h3 className="lg:w-[60%]">Price of Rice, Lentils, Oil, Vegetables, Fish, Meat, Eggs, and Spices — detailed, average, minimum-maximum, and price changes of a market dynamics all in one place!</h3>
                    <div className='flex py-8 gap-x-3'>
                        <Link href="" className="btn btn-success rounded-md shadow-md shadow-green-300 text-[#000000] font-bold">See All Products</Link>
                    </div>
                </div>

                <Image src={BannerImg} alt='Interface Stack Image' />
            </div>
        </div>
    );
};

export default Banner;