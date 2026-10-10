'use client'

const NavBarDate = () => {
    const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const date = new Date().getDate();
    const month = new Date().toLocaleDateString("en-GB", { month: "long" });
    const year = new Date().getFullYear()

    return (
        <div className="flex flex-col md:flex-row text-left gap-1">
            <div>{`${day}, ${date}`}</div>
            <div>{` ${month}, ${year}`}</div>
        </div>
    );
};

export default NavBarDate;