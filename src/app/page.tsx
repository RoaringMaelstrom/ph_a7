import Banner from "@/components/Landing/Banner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-300 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-12 px-16">
      <Banner />

      </main>
    </div>
  );
}
