import LineCard from "@/components/LineCard";
import Image from "next/image";

const lines = [
  {
    tokenId: 1,
    image: 'https://arweave.net/vyoHX421AJNezbafUWopUTYxf7UsQ6H03Z4OguCCMaw',
    title: 'Line #1'
  },
  {
    tokenId: 2,
    image: 'https://arweave.net/lWnkZ5-5n57IB198IaEOgm4WcJ9DMhFRdhAFibDOxX0',
    title: 'Line #2'
  },
  {
    tokenId: 3,
    image: 'https://arweave.net/V4IwtOmkDPp0IK9scD8zjTwqw7y6snEMITZZ6YWsZb0',
    title: 'Line #3'
  },
];
lines.reverse();

export default function Lines() {
  return (
    <div className="flex flex-col items-center px-6 mt-28 md:mt-28 min-w-screen">
      <h2 className="md:max-w-3xl w-full text-h2 font-vt text-black justify-self-start">lines</h2>
      <div className="mt-12 space-y-10 w-full md:max-w-3xl">
        <Image src="/lines/pfp.png" alt="a line drawn by a computer program by Marco Peyfuss" width={800} height={400} className="w-full max-h-[300px] md:max-h-[400px] object-cover rounded-3xl shadow" />
      </div>
      <div className="w-full mt-14 md:max-w-3xl">
        <a href="https://superrare.com/0x4495e6f88b4c14c52d751f5232c31020fbdaaffe" target="_blank" rel="noreferrer noopener">
          <button className="text-link font-vt text-black border border-dark-gray rounded-xl bg-rainbow">
            <div className="w-full bg-white duration-150 ease-in hover:bg-white/0 px-6 rounded-xl">
              superrare
            </div>
          </button>
        </a>
        <a href="https://opensea.io/collection/sp-lines" target="_blank" rel="noreferrer noopener">
          <button className="text-link font-vt text-black border border-dark-gray rounded-xl ml-8 bg-rainbow">
            <div className=" w-full bg-white duration-150 ease-in hover:bg-white/0 px-6 rounded-xl">
              opensea
            </div>
          </button>
        </a>
      </div>
      <div className="md:max-w-3xl text-body font-mono mt-16 space-y-8 w-full">
        <h2 className="text-h2 font-vt text-black">
          what do you feel, anon?
        </h2>
        <p>
        Lines is an exploration of emotion and human connection through generative lines.
        </p>
        <p>
        Using generative art techniques, I am able to create different types of lines that resemble "pen and ink" techniques that are traditionally made with various writing instruments.
        </p>
        <p>
        While the project started off as an exploration of metaphysical "pen and ink", the true purpose is to explore emotion and human connection in a post-physical world with these lines.
        </p>
        <p>
        The first three lines in this collection were created on my own. Each additional line will be co-created. But what does that mean?
        </p>
        <p>
        These pieces do not cost any form of tender, rather the co-creator gives me some of their time on a call and in return, gets some human connection, in addition to their custom Line.
        </p>
        <p>
        Each line represents the bond between our souls that was formed during co-creation. Minted on the Ethereum blockchain and metadata hosted on Arweave, these bonds will not break on or off chain.
        </p>
        <p>
        I hope you feel something, anon. 〰️
        </p>
      </div>
      <h2 className="text-h2 font-vt text-black mt-16 w-full md:max-w-3xl">
        explore recent lines
      </h2>
      <div className="md:max-w-3xl text-body font-mono mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {lines.map(({tokenId, image, title}: {tokenId: number, image: string, title: string}) => (
          <LineCard
            imageSrc={image}
            title={title}
            link={`https://opensea.io/assets/ethereum/0x4495e6f88b4c14c52d751f5232c31020fbdaaffe/${tokenId}`}
            key={tokenId}
            />
        ))}
      </div>
    </div>
  )
}