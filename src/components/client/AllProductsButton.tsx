'use client'

const AllProductsButton = () => {
    const scrollToSection = () => {
        const element = document.getElementById("All_Products");

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className='flex py-8 gap-x-3'>
            <button onClick={() => scrollToSection()} className="btn btn-success rounded-md shadow-md shadow-green-300 text-[#000000] font-bold">See All Products</button>
        </div>
    );
};

export default AllProductsButton;