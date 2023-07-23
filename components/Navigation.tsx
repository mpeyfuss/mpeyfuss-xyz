import Image from "next/image";
import Link from "next/link";
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white">
      <nav className="hidden md:flex flex-row w-full justify-between px-6 mt-4">
        <Link href="/" className="text-link font-vt text-black duration-150 ease-in hover:text-transparent bkg-rainbow">
          mpeyfuss.xyz
        </Link>
        <div className="flex flex-row space-x-6">
          <Link href="/lines" className="text-link font-vt text-black duration-150 ease-in hover:text-transparent bkg-rainbow">
            lines
          </Link>
          <Link href="/code" className="text-link font-vt text-black duration-150 ease-in hover:text-transparent bkg-rainbow">
            code
          </Link>
          <Link href="/art" className="text-link font-vt text-black duration-150 ease-in hover:text-transparent bkg-rainbow">
            art
          </Link>
          <a href="https://mirror.xyz/mpeyfuss.eth" target="_blank" rel="noreferrer noopener" className="text-link font-vt text-black duration-150 ease-in hover:text-transparent bkg-rainbow">
            mirror
          </a>
        </div>
        <div className="fixed bottom-6 left-6 flex flex-row border rounded-lg border-black shadow-lg space-x-3.5 p-3 z-0 bg-white">
          <a href="https://twitter.com/mpeyfuss" target="_blank" rel="noreferrer noopener" className="duration-150 ease-in hover:scale-125">
            <Image src="/twitter.png" alt="twitter logo in black" width={24} height={24} />
          </a>
          <a href="https://mirror.xyz/mpeyfuss.eth" target="_blank" rel="noreferrer noopener" className="duration-150 ease-in hover:scale-125">
            <Image src="/mirror.png" alt="Mirror xyz logo in black" width={18.68} height={24} />
          </a>
          <a href="https://transientlabs.xyz" target="_blank" rel="noreferrer noopener" className="duration-150 ease-in hover:scale-125">
            <Image src="/tl.png" alt="Transient Labs logo" width={24} height={24} />
          </a>
        </div>
      </nav>
      <div className="md:hidden mt-4 px-6">
        <Disclosure as="nav" className="w-full">
          {({ open }) => (
            <div>
              <div className="flex flex-row justify-between w-full">
                <Link href="/" className="text-link font-vt text-black">
                  mpeyfuss.xyz
                </Link>
                <Disclosure.Button className="border border-black rounded-full p-2">
                  {!open &&
                    <ChevronDownIcon className="w-6 h-6" />
                  }
                  {open &&
                    <XMarkIcon className="w-6 h-6" />
                  }
                </Disclosure.Button>
              </div>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel static className="flex flex-col">
                  <Link href="/lines" className="text-link font-vt text-red">
                    lines
                  </Link>
                  <Link href="/code" className="text-link font-vt text-orange">
                    code
                  </Link>
                  <Link href="/art" className="text-link font-vt text-yellow">
                    art
                  </Link>
                  <a href="https://twitter.com/mpeyfuss" target="_blank" rel="noreferrer noopener" className="text-link font-vt text-green">
                    twitter
                  </a>
                  <a href="https://mirror.xyz/mpeyfuss.eth" target="_blank" rel="noreferrer noopener" className="text-link font-vt text-blue">
                    mirror
                  </a>
                  <a href="https://transientlabs.xyz" target="_blank" rel="noreferrer noopener"  className="text-link font-vt text-purple">
                    transient Labs
                  </a>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}