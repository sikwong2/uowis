'use client';
import TypingText from "./_components/TypingText";
import FileTree from './_components/FileTree';
import AsciiArt from "./_components/AsciiArt";
import TopBar from "./_components/topbar";
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
        icon: '📄',
        target: '_blank'
      },
      {
        id: 'resume',
        name: 'resume',
        route: '/resume',
        icon: '📄',
        target: '_blank'
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
          {
            id: 'amazon',
            name: 'ucsc_amazon',
            route: '/portfolio/amazon',
            icon: '📄'
          },
          {
            id: 'httpserver',
            name: 'http_server',
            route: '/portfolio/httpserver',
            icon: '📄'
          },
          {
            id: 'blackjack',
            name: 'blackjack_bot',
            route: '/portfolio/blackjack',
            icon: '📄'
          },
          {
            id: 'rsa',
            name: 'rsa_encryption',
            route: '/portfolio/rsa',
            icon: '📄'
          },
          {
            id: 'physics',
            name: 'ball_simulation',
            route: '/portfolio/physics',
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
      <TopBar />
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
        <FileTree data={treeData} defaultExpanded={['home', 'portfolio']} />
      </div>

    </div>

  );
}
