import TopBar from "./_components/topbar";
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0">
      </div>

      {/* Content layer (TopBar and other content) */}
      <div className="relative z-10 top-0 shadow-2xl">
        <TopBar />
      </div>

      <span className="relative z-10 text-white flex flex-row justify-center p-56 font-bold text-8xl ">
        Hi
      </span>

      <div className="flex justify-center items-center z-0">
        <span className="font-mono font-bold text-4xl text-white">
          I'm Simon and I'm a recent Computer Science graduate from UCSC
        </span>
      </div>
    </div>
  );
}
