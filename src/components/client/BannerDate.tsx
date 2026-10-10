'use client'

const BannerDate = () => {
    const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const date = new Date().getDate();
    const month = new Date().toLocaleDateString("en-GB", { month: "long" });
    const year = new Date().getFullYear()

    return (
            <div className="font-bold flex-col md:flex-row text-left gap-1 ">
                <div className="badge badge-soft badge-success md:rounded-r-none">{`${day}, ${date}`}</div>
                <div className="badge badge-soft badge-success md:rounded-l-none">{` ${month}, ${year}`}</div>
            </div>
    );
};

export default BannerDate;