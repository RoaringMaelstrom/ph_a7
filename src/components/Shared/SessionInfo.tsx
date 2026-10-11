'use client'

import Link from "next/link";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";
const SessionInfo = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div className="flex flex-col items-center loading loading-spinner loading-xl">
            <span className="text-xs text-muted">Loading...</span>
        </div>
    }

    const authLinks = <>
        {
            session?.user ? <>
                <Link href='/profile'>
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

                        <h1 className="text-sm md:text-base font-bold text-center md:text-left max-w-40 md:max-w-70 truncate">
                            {session.user.name}
                        </h1>
                    </div>
                </Link>
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