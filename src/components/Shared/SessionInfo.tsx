'use client'

import { BsBoxArrowLeft } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { FaCaretDown } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";

const SessionInfo = () => {
    const { data: session, isPending } = useSession();
    const handleSignOut = async () => {
        await signOut({
            callbackURL: "/",
        });
    }


    if (isPending) {
        return <div className="flex flex-col items-center loading loading-spinner loading-xl">
            <span className="text-xs text-muted">Loading...</span>
        </div>
    }

    const authLinks = <>
        {
            session?.user ? <>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex items-center justify-center gap-2 md:gap-3
                   rounded-xl p-1
                   bg-transparent border-none shadow-none
                   hover:bg-base-200
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-primary m-1">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
                            <div className="avatar">
                                <div className="w-7 h-7 md:w-12 md:h-12 rounded-xl overflow-hidden">
                                    <img
                                        alt={`${session.user.name ?? "User"}'s avatar`}
                                        src={session.user.image || "/default-avatar.png"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <h1 className="text-sm md:text-base font-bold  text-center md:text-left max-w-40 md:max-w-70 truncate">
                                {session.user.name}
                            </h1>
                            <FaCaretDown />
                        </div>
                    </div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><Link href="/profile"><FcBusinessman /> My Profile</Link></li>
                        <li><button onClick={handleSignOut} className="btn btn-error btn-ghost justify-start w-full"> <BsBoxArrowLeft /> Sign Out</button></li>
                    </ul>
                </div>
            </>
                :
                <>
                    <Link href='/sign-in' className="btn btn-ghost">Sign In</Link>
                    <Link href='/sign-up' className="btn btn-accent">Sign Up</Link>
                </>
        }
    </>

    return (
        <div>
            {authLinks}
        </div>
    );
};

export default SessionInfo;