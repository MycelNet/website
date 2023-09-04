import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div
        className="relative flex place-items-center mb-16 sm:mb-6
      before:absolute before:h-[360px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
      after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-lime-200 after:via-yellow-200 after:blur-2xl after:content-[''] 
      before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-20 after:dark:from-lime-900 after:dark:via-[#01ff01] after:dark:opacity-40 before:lg:h-[500px] z-[-1]"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo/black.svg"
          alt="MycelNet Logo"
          width={360}
          height={37}
          priority
        />
        <p className="absolute text-xs text-center text-gray-500 dark:text-gray-400 bottom-[-1.5rem] left-1/2 transform -translate-x-1/2">
          <span className="opacity-50">Decentralize Web2</span>
        </p>
      </div>

      <div className="grid text-center lg:max-w-3xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center mb-8">
        <p className="lg:text-4xl text-2xl font-bold text-white my-4">Vision</p>
        <p className="font-bold text-white text-sm lg:text-lg">
          The goal of MycelNet is one of decentralizing the concept of &quot;The
          Cloud.&quot; Empowering power users, tinkerers, hobbyists, and
          businesses to take part in the creation of a secure network that
          consumers can leverage for hosting a website, web services, games, AI,
          or any multitude of other workloads. These use cases and so many more
          are prime candidates to run as resilient distributed workloads across
          MycelNet infrastructure. No longer constrained by regional data
          centers or requiring distributed CDN services.
        </p>
      </div>

      <div className="grid grid-cols-1 text-center lg:max-w-3xl lg:w-full lg:mb-0 lg:text-center relative place-items-center ">
        <div className="text-center font-bold text-white mb-4">
          Watch this space for our evolving progress...
        </div>

        <div className="text-xs font-bold text-white mb-2">
          Currently hosted on
        </div>
        <Image
          className="flex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/cf_logo.svg"
          alt="Cloudflare Logo"
          width={100}
          height={1}
        />
      </div>
    </main>
  );
}
