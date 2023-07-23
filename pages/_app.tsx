import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { VT323, Space_Mono } from 'next/font/google'
import Navigation from '@/components/Navigation';
import { useEffect, useState, Fragment } from 'react';
import throttle from 'lodash/throttle';
import { Dialog, Transition } from '@headlessui/react';
// @ts-ignore
import Terminal from 'react-console-emulator';

const vt323 = VT323({ weight: '400', subsets: ['latin'] });
const space_mono = Space_Mono({ weight: '400', subsets: ['latin'] });

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args: string[]) => args.join(' ')
  },
  line: {
    description: 'Draw a crappy line.',
    usage: 'line',
    fn: () => {
      const num = Math.round(Math.random() * 10);
      let result = '〰️';
      for (let i = 0; i < num; i++) {
        result = result + '〰️';
      }
      return result;
    }
  },
  lines: {
    description: 'Information about my Lines.',
    usage: 'lines',
    fn: () => `Lines is an exploration of emotion and human connection through generative lines.
    Using generative art techniques, I am able to create different types of lines that resemble "pen and ink" techniques that are traditionally made with various writing instruments.
    While the project started off as an exploration of metaphysical "pen and ink", the true purpose is to explore emotion and human connection in a post-physical world with these lines.
    The first three lines in this collection were created on my own. Each additional line will be co-created. But what does that mean?
    These pieces do not cost any form of tender, rather the co-creator gives me some of their time on a call and in return, gets some human connection, in addition to their custom Line.
    Each line represents the bond between our souls that was formed during co-creation. Minted on the Ethereum blockchain and metadata hosted on Arweave, these bonds will not break on or off chain.
    I hope you feel something, anon. 〰️`
  },
  mystery: {
    description: 'Who knows?',
    usage: 'mystery',
    fn: () => {
      const num = Math.round(Math.random() * 10);
      switch (num) {
        case 0:
          window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
          return;
        case 1:
          return 'get rekt'
        case 2:
          return 'There are two types of people in this world. Those who can extrapolate from incomplete data,'
        case 3:
          window.location.href = 'https://www.yahoo.com/lifestyle/1990-beanie-babies-collection-worth-124037918.html';
          return;
        case 4:
          window.location.href = 'https://pastel.network/the-25-best-nft-memes-will-make-you-cry-laughing/';
          return;
        case 5:
          return 'I never thought hamster racing would be so great. Then again, people were betting on digital horses racing 😂'
        case 6:
          return 'Remember the Mekaverse sale? That was cray.'
        case 7:
          return 'dm me with your answer: final form Zuck lizard vs iron man Musk'
        case 8:
          return 'I hate that I still own a cryptodickbutt. But I don\'t want to take a loss on it'
        case 9:
          return 'Is the earth flat?'
        case 10:
          return 'Python is the greatest programming language out there.'
      }
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [showTerminal, setShowTerminal] = useState(false);
  useEffect(() => {
    const mouseMoveHandler = throttle(
      ({ pageX, pageY }: { pageX: number, pageY: number }) => {
        const i = document.getElementById('cursor-inner');
        const o = document.getElementById('cursor-outer');
        if (i && o) {
          i.style.left = pageX + 'px';
          i.style.top = pageY + 'px';
          o.style.left = pageX + 'px';
          o.style.top = pageY + 'px';
        }
      },
      10
    );
    const mouseDownHandler = throttle(
      () => {
        const i = document.getElementById('cursor-inner');
        const o = document.getElementById('cursor-outer');
        if (i && o) {
          i.style.opacity = '0';
          o.style.backgroundImage = `radial-gradient(circle at center, #EF474C 10%, #F47D3D 20%, #FBC056 30%, #8DB37F 40%, #2B82A3 60%, #8E6AAD 70%)`;
          o.style.opacity = '75%';
          o.style.borderColor = '#8E6AAD';
        }
      }
    );
    const mouseUpHandler = throttle(
      () => {
        const i = document.getElementById('cursor-inner');
        const o = document.getElementById('cursor-outer');
        if (i && o) {
          i.style.opacity = '50%';
          o.style.background = 'none';
          o.style.opacity = '50%'
          o.style.borderColor = '#181B1E';
        }
      }
    );
    const keydownHandler = throttle(
      ({ ctrlKey, shiftKey, key }: { ctrlKey: Boolean, shiftKey: Boolean, key: String }) => {
        if (ctrlKey && shiftKey && key === 'T') {
          setShowTerminal((latestShowTerminal) => !latestShowTerminal);
        }
      },
      50
    );
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('keydown', keydownHandler);
    }
  }, []);

  return (
    <>
      <style jsx global>
        {`
          :root {
            --vt323-font: ${vt323.style.fontFamily};
            --space-mono-font: ${space_mono.style.fontFamily};
          }
        `}
      </style>
      <main className="bg-white">
        <div className="hidden md:block absolute w-12 h-12 border border-black rounded-full opacity-50 z-[1000] pointer-events-none duration-100 linear -translate-x-1/2 -translate-y-1/2" id="cursor-outer" />
        <div className="hidden md:block absolute w-4 h-4 border border-light-gray bg-light-gray rounded-full opacity-50 z-[1000] pointer-events-none -translate-x-1/2 -translate-y-1/2" id="cursor-inner" />
        <Navigation />
        <Component {...pageProps} />
        <div className="w-full h-36" />
      </main>
      <Transition appear show={showTerminal} as={Fragment}>
        <Dialog as="div" className="relative w-screen h-screen z-10" onClose={() => setShowTerminal(false)} static  >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-center justify-center w-screen h-screen text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full transform overflow-y-auto bg-black text-left align-middle shadow-xl transition-all ">
                  {/* 
                  // @ts-ignore */}
                  <Terminal
                    commands={commands}
                    welcomeMessage={
                      `Welcome, anon. You have found a secret terminal. Type in 'help' to start. More commands will come. For now, have fun. You may leave the same way you entered. (ctrl + shift + T)`}
                    promptLabel={'anon~'}
                    className="!bg-black w-full h-full"
                    contentClassName="!bg-black !font-mono !space-y-4 !text-light-gray"
                    promptLabelClassName="!text-red !font-mono"
                    inputClassName="!text-white !font-mono !align-middle"
                    inputAreaClassName="!items-center"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>

  )
}
