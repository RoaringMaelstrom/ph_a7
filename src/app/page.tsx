import { Suspense } from "react";

import Banner from "@/components/Landing/Banner";
import ProductDisplay from "@/components/Landing/ProductDisplay";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-300 dark:bg-black font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-12 px-16">
      <Banner />
      <Suspense fallback="loading loading-dots">
        <ProductDisplay />
      </Suspense>
      </main>
    </div>
  );
}
