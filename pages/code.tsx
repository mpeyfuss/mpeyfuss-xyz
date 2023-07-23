import LinkCard from "@/components/LinkCard";

export default function Code() {
  return (
    <div className="flex flex-col items-center px-6 mt-28 md:mt-28 min-w-screen">
      <h2 className="md:max-w-3xl w-full text-h2 font-vt text-black justify-self-start">code</h2>
      <div className="mt-12 space-y-10 w-full md:max-w-3xl">
        <LinkCard
          imageSrc="/pfp.png"
          title="mpeyfuss github"
          text="My personal Github. Some old projects live here - working on open sourcing more of my past works"
          link="https://github.com/mpeyfuss"
        />
        <LinkCard
          imageSrc="/TL-Logo-Dark.jpg"
          title="tl github"
          text="Transient Labs Github. This is where a lot of my recent code lives. Many things are open-sourced, especially our contracts."
          link="https://github.com/Transient-Labs"
        />
        <LinkCard
          imageSrc="/eth-diamond.png"
          title="ERC-7160"
          text="A proposal I’m working on to enable an ERC-721 extension that allows an NFT to have multiple pieces of metadata."
          link="https://eips.ethereum.org/EIPS/eip-7160"
        />
      </div>
    </div>
  )
}