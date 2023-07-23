import LinkCard from "@/components/LinkCard";

export default function Art() {
  return (
    <div className="flex flex-col items-center px-6 mt-28 md:mt-28 min-w-screen">
      <h2 className="md:max-w-3xl w-full text-h2 font-vt text-black justify-self-start">art</h2>
      <div className="mt-12 space-y-10 w-full md:max-w-3xl">
        <LinkCard
          imageSrc="/lines/pfp.png"
          title="lines"
          text="A generative art project exploring human connection. What do you feel, anon?"
          link="/lines"
        />
        <LinkCard
          imageSrc="/awb.png"
          title="always will be"
          text={`A dynamic take on Jack Butcher's "Always Has Been". Changes with ETH change over the past 24 hours.`}
          link="https://editor.p5js.org/mpeyfuss/sketches/_yM_Sfkhp"
        />
      </div>
    </div>
  )
}