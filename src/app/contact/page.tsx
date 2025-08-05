import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa6'
import TopBar from '@/components/topbar'

export default function contact() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      <TopBar />

      <div className="relative z-10 flex justify-center items-center text-center  text-6xl font-bold py-24 px-8">
        <p className="max-w-2xl">
          You can contact me through email or Linkedin
        </p>
      </div>


      <div className="z-10 flex flex-row justify-center items-center space-x-36">
        <Button className='button group'>
          <Link className="button_text group-hover:text-green-300" href="https://www.linkedin.com/in/sikwong2/" target='_blank'>
            <FaLinkedin />
            <span>Linkedin</span>
          </Link>
        </Button>
        <Button className='button group'>
          <Link className="button_text group-hover:text-green-300" href="mailto:skwong5@ucsc.edu" target='_blank'>
            <FaEnvelope />
            <span>Email</span>
          </Link>
        </Button>

      </div>
    </div>
  )
}
