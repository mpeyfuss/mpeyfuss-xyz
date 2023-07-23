import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center px-6">
      <div className="md:max-w-3xl flex flex-col md:flex-row items-center justify-center mt-28 md:mt-48">
        <h1 className="text-h1 font-vt text-black w-full md:w-1/2">code. art. question everything.</h1>
        <Image src="/pfp.png" alt="profile picture" width={400} height={400} className="rounded-3xl w-full md:w-1/2 mt-16 md:mt-0" />
      </div>
      <hr className="border border-light-gray/20 w-full md:max-w-3xl mt-20 md:mt-36"></hr>
      <div className="md:max-w-3xl text-body font-mono mt-20 md:mt-36 space-y-8">
        <p>
          I&apos;m Marco. By trade, I&apos;m an engineer & innovator. But I&apos;m also much more.
        </p>
        <p>
          Currently I work for myself, as I co-founded Transient Labs with my best friend, Ben. I&apos;m lucky enough to be able to use my unique skillset daily.
        </p>
        <p>
          Previously, I was an aerospace engineer for a small company in Colorado and before that, I was an automotive engine research engineer for Honda R&D.
        </p>
        <p>
          Alright, now that we got the small talk out of the way, let&apos;s get into the good stuff.
        </p>
        <h2 className="text-h2 font-vt text-black">
          code
        </h2>
        <p>
          I&apos;ve been coding for over 10 years, starting in high school. Started with Java (ew), then Matlab & Simulink in college (ew), and then Python in the workforce (based).
        </p>
        <p>
          It was only after Ben and I wanted to do something interesting with his artwork in 2021 that I dove headfirst into the rabbit hole that I find myself in now.
        </p>
        <p>
          Creative coding was probably the first instance where I thought, “hey, I can actually be somewhat artistic”. Of course, I needed Ben to actually take and edit photos, but that&apos;s just a minor point. I was hooked. I learned Javascript and it was off to the races with creating dynamic art (more on this later).
        </p>
        <p>
          Ben really urged me to take a look at these things called smart contracts on the Ethereum blockchain. I was hesitant at first. I&apos;m not a finance guy, I didn&apos;t necessarily “get” Bitcoin, but that all changed when I read through the Ethereum docs and saw what could be accomplished with smart contracts.
        </p>
        <p>
          Of course now, I understand Bitcoin much more, but still my true love in web3 is decentralized computation, provenance, ownership, and smart contracts. I use Solidity, of course, but have also been getting into Vyper and I gotta say, don&apos;t sleep on Vyper.
        </p>
        <p>
          And that brings us to today - I use software to create, experiment, and much more.
        </p>
        <h2 className="text-h2 font-vt text-black">
          art
        </h2>
        <p>
          As I mentioned before, the only way I can really create art is with code. It&apos;s my paintbrush. My fingers are only good for typing, not anything like drawing a straight line even.
        </p>
        <p>
          I started off making dynamic art with Ben, where the displayed image would change over the course of a day. This was the moment. I dove in and kept on helping creators expand their art with code. This is really what got us traction and helped us found Transient Labs.
        </p>
        <p>
          From there, I got deeper and deeper into smart contracts. I started seeing them not only as the code behind NFTs but also that they can be part of the art themselves. I&apos;ve found many ways to use the blockchain as a paintbrush and I keep coming up with more ideas :)
        </p>
        <p>
          Recently, I&apos;ve gotten into tinkering around with generative algorithms and applying them to some ideas I have. The first project I&apos;m embarking on is called Lines. The project is all about human connection - something we all seem to lack a bit right now. You can read more about it <Link href="/lines" className="duration-150 ease-in hover:text-transparent bkg-rainbow"><u>here</u></Link>.
        </p>
        <h2 className="text-h2 font-vt text-black">
          question everything
        </h2>
        <p>
          I questioned even writing this section, let alone make this website.
        </p>
      </div>
      <hr className="border border-light-gray/20 w-full md:max-w-3xl mt-20 md:mt-36"></hr>
      <div className="md:max-w-3xl text-body font-mono mt-20 md:mt-36 space-y-8">
        <h2 className="text-h2 font-vt text-black">
          you made it all the way down here?
        </h2>
        <p>
          I was somewhat verbose, so I&apos;m surprised you&apos;re reading this.
        </p>
        <p>
          Well, as a reward, try typing in &apos;cntrl + shift + T&apos; or tapping with three fingers.
        </p>
      </div>
    </div >
  )
}
