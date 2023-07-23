export default function LineCard(
  { imageSrc, title, link, className = "" }:
    { imageSrc: string, title: string, link: string, className?: string }
) {
  return (
    <div className="bg-rainbow rounded-xl">
    <a href={link} target="_blank" rel="noreferrer noopener" className={`w-full flex flex-col border border-light-gray/60 p-4 rounded-xl duration-150 ease-in bg-[#ffffff] hover:bg-white/0 ${className}`}>
      <img src={imageSrc} alt={title} width={800} height={800} className="w-full rounded-xl" />
      <div className="w-full-8 mt-4">
        <h3 className="text-h3 font-vt text-black">{title}</h3>
      </div>
    </a>
    </div>
  )
}