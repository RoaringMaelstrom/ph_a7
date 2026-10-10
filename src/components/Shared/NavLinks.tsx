'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export const instant = false
const NavLinks = () => {
    const pathname = usePathname()
    return (
        <nav className='menu flex flex-col md:flex-row menu-horizontal px-1 gap-4'>
            <Link className={`link ${pathname === '/categories/chal' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/chal">
                Chal
            </Link>

            <Link className={`link ${pathname === '/categories/dal' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/dal">
                Dal
            </Link>

            <Link className={`link ${pathname === '/categories/tel' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/tel">
                Tel
            </Link>

            <Link className={`link ${pathname === '/categories/sobji' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/shobji">
                Sobji
            </Link>

            <Link className={`link ${pathname === '/categories/mach' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/mach">
                Mach
            </Link>

            <Link className={`link ${pathname === '/categories/mangsho' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/mangsho">
                Mangsho
            </Link>

            <Link className={`link ${pathname === '/categories/dim-dui' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/dim-dui">
                Dim-dui
            </Link>
            
            <Link className={`link ${pathname === '/categories/mosla' ? 'bg-green-800 text-white dark:text-lime-400' : ''} rounded-full px-3 py-1`} href="/categories/mosla">
                mosla
            </Link>
        </nav>
    );
};

export default NavLinks;