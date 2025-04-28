import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaDiscord, FaEnvelope } from 'react-icons/fa6'

export default function contact() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0">
      </div>

      <div className="relative z-10 flex justify-center items-center text-center text-white text-6xl font-bold py-24 px-8">
        <p className="max-w-2xl">
          You can contact me through email or Discord
        </p>
      </div>


      <div className="z-10 flex flex-row justify-center items-center space-x-36">
        <Button className='button group'>
          <Link className="button_text group-hover:text-green-300" href="https://discord.com/users/155725788363227136">
            <FaDiscord />
            <span>Discord</span>
          </Link>
        </Button>
        <Button className='button group'>
          <Link className="button_text group-hover:text-green-300" href="mailto:skwong5@ucsc.edu">
            <FaEnvelope />
            <span>Email</span>
          </Link>
        </Button>

      </div>
    </div>
  )
}
