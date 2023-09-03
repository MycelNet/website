import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[360px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-lime-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-lime-900 after:dark:via-[#01ff01] after:dark:opacity-40 before:lg:h-[500px] z-[-1]">
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

      <div className="mb-32 grid text-center lg:max-w-3xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center">
        <p className="text-4xl font-bold text-white my-4">
          Vision
        </p>
        <p className="mb-6 font-bold text-white">
        The goal of MycelNet is one of decentralizing the concept of &quot;The Cloud.&quot; Empowering power users, tinkerers, hobbyists, and businesses to take part in the creation of a secure network that consumers can leverage for hosting a website, web services, games, AI, or any multitude of other workloads. These use cases and so many more are prime candidates to run as resilient distributed workloads across MycelNet infrastructure. No longer constrained by regional data centers or requiring distributed CDN services.
        </p>

        <p className="mb-6 font-bold text-white">
        With MycelNet we strive to create a workflow that mimics that of popular platforms such as <a href="https://fly.io">fly.io</a> or <a href="https://netlify.com">Netlify</a>. Leveraging technologies: Substrate, IPFS, Kubernetes, and more. We plan to extend our abilities beyond the constraints of application and web hosting services to more general workloads as we develop against an upcoming roadmap. The possibilities are only limited by the resources that support MycelNet as a whole. Our strength as a platform grows with the network and the diversity of resources provided by its users.
        </p>

        <p className="mb-6 font-bold text-white">
        Critical to the success of MycelNet is its ability to support consumers in a way that is familiar to their current workflows. Adapting tools and strategies in current development processes, we look toward the future while reducing friction in time to market. The requirement for users to adopt new untested technologies or development strategies will only work against the overall growth of a platform. It is with this understanding that we are designing MycelNet to be a next-gen ecosystem, while not creating new exotic roadblocks in its adoption. Streamlined from both the providers' side, as well as the consumer to increase opportunities and reduce overall time to market.
        </p>

        <p className="font-bold text-white">
        We've undertaken a formidable challenge, fully aware of the intricate landscape of the internet and the prevailing advantages offered by the contemporary 'Cloud.' Our core team boasts a wealth of expertise in catering to organizations and clients, delivering substantial value through the efficiencies inherent in cloud services. With a profound grasp of both development and infrastructure management, we're dedicated to reshaping the cloud paradigm. Our vision revolves around crafting a secure, open, and decentralized internet-ready platform, that's primed for consumption and scalability far into the future.
        </p>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center relative place-items-center ">
        <h1 className="text-md font-bold text-white my-4">
          Currently hosted by
        </h1>

        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/cf_logo.svg"
          alt="Cloudflare Logo"
          width={100}
          height={37}
          />

          <h2 className="text-sm font-bold text-white my-4">
            Watch this space for our evolving progress...
          </h2>
      </div>
    </main>
  )
}
