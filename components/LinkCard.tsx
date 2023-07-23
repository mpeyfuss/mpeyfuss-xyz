import Image from "next/image";

export default function LinkCard(
  { imageSrc, title, text, link, className = "" }:
    { imageSrc: string, title: string, text: string, link: string, className?: string }
) {
  return (
    <div className="bg-rainbow rounded-xl">
    <a href={link} target="_blank" rel="noreferrer noopener" className={`md:max-w-3xl w-full flex flex-col md:flex-row md:justify-between border border-light-gray/60 p-4 rounded-xl duration-150 ease-in bg-white hover:bg-white/0 ${className}`}>
      <Image src={imageSrc} alt={text} width={800} height={800} className="w-full md:w-[152px] rounded-xl" />
      <div className="w-full md:ml-8 mt-4 md:mt-0">
        <h3 className="text-h3 font-vt text-black">{title}</h3>
        <p className="text-body font-mono text-black">{text}</p>
      </div>
    </a>
    </div>
  )
}