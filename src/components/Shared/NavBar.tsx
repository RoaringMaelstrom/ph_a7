

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";


import NavLinks from "./NavLinks";
import NavBarDate from "../client/NavBarDate";
import SessionInfo from "./SessionInfo";
import Logo from "./../../../public/logo-icon.png"

const NavBar = () => {


    return (
        <div className="shadow-sm">
            <div className="navbar shadow-xs md:px-12 lg:px-24 bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Suspense>
                                {<NavLinks />}
                            </Suspense>
                        </ul>
                    </div>
                    <Link href="/" className="flex gap-3 pl-0 py-8 items-center btn btn-ghost text-xl">
                        <div className="bg-green-600 p-6 md:p-3 rounded-xl">
                            <Image
                                src={Logo}
                                alt="Site Logo"
                                height={40}
                                width={40}
                                className="h-5 w-5 object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-sm md:text-xl font-bold ">
                                BAZAR DOR
                            </h1>
                                <span className="text-xs font-medium"><NavBarDate /></span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end gap-2">
                    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    {<SessionInfo />}
                </Suspense>
                </div>
            </div>
            <div className="px-2 md:px-12 lg:px-24 bg-base-200 hidden lg:flex">
                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    {<NavLinks />}
                </Suspense>
            </div>
        </div>
    );
};

export default NavBar;