'use client';

import TypingText from "./_components/TypingText";
import FileTree from './_components/FileTree';
import AsciiArt from "./_components/AsciiArt";
const treeData = [
  {
    id: 'home',
    name: '/',
    route: '/',
    icon: '📁',
    children: [
      {
        id: 'github',
        name: 'github',
        route: 'https://github.com/sikwong2',
        icon: '📄'
      },
      {
        id: 'resume',
        name: 'resume',
        route: '/resume',
        icon: '📄'
      },
      {
        id: 'contact',
        name: 'contact',
        route: '/contact',
        icon: '📄'
      },
      {
        id: 'portfolio',
        name: 'portfolio/',
        icon: '📁',
        route: '/portfolio',
        children: [
          {
            id: 'huffman',
            name: 'huffman_coding',
            route: '/portfolio/huffman',
            icon: '📄'
          },
          {
            id: 'schmidtsamoa',
            name: 'schmidt_samoa',
            route: '/portfolio/schmidtsamoa',
            icon: '📄'
          },
        ]
      },
    ]
  },
];
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0">
      </div>

      <AsciiArt
        art={`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⠀⠀⠀⢠⣾⣧⣤⡖⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠋⠀⠉⠀⢄⣸⣿⣿⣿⣿⣿⣥⡤⢶⣿⣦⣀⡀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡆⠀⠀⠀⣙⣛⣿⣿⣿⣿⡏⠀⠀⣀⣿⣿⣿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠷⣦⣤⣤⣬⣽⣿⣿⣿⣿⣿⣿⣿⣟⠛⠿⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⣠⣶⣶⣶⣿⣦⡀⠘⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠈⢹⡏⠁⠀⠀
⠀⠀⠀⢀⣿⡏⠉⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡆⠀⢀⣿⡇⠀⠀⠀
⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡘⣿⣿⣃⠀⠀⠀
⣴⣷⣀⣸⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⠹⣿⣯⣤⣾⠏⠉⠉⠉⠙⠢⠀
⠈⠙⢿⣿⡟⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣄⠛⠉⢩⣷⣴⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣀⡠⠋⠈⢿⣇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀
`}
        preserveWhitespace={true}
      />

      <div className="flex flex-col justify-center items-center z-0 p-12">
        <TypingText text=" Hi I'm Simon and I'm a recent Computer Science Graduate from UCSC" speed={50} />
      </div>

      <div className="z-0 p-8"> {/* Dark background */}
        <FileTree data={treeData} defaultExpanded={['home']} />
      </div>

    </div>
  );
}
