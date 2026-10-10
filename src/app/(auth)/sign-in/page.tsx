import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center text-center justify-center gap-4 py-6 md:py-0">
            <h1 className='font-bold text-3xl'>Sign In</h1>
            <h2 className='text-slate-600'>Log in to your account to see detailed prices, market comparisons, and profiles</h2>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-auto border p-4">
                <legend className="fieldset-legend"></legend>

                <label className="label font-bold">Email</label>
                <input type="email" className="input w-full" placeholder="you@example.com" />

                <label className="label font-bold">Password</label>
                <input type="password" className="input w-full" placeholder="Atleast 8 characters" />

                <button className="btn btn-neutral mt-4">Login</button>
                <div className="divider">OR</div>
                <div className='flex gap-2'>
                    <button className='btn btn-outline'><FcGoogle />Sign In with Google</button>
                    <button className='btn btn-outline border-stale-200'><AiFillGithub />Sign In with Github</button>
                </div>
                    <div className="text-center text-sm"><h1>Do not have an account? <Link href="/sign-up" scroll={false} className="text-green-700">Create an account</Link></h1></div>
            </fieldset>

            <div className="text-slate-700 text-base">
                <Link href="/" className="flex items-center gap-2">
                    <AiOutlineArrowLeft />
                    <h3>return to home page</h3>
                </Link>
            </div>
        </div>
    );
};

export default SignInPage;