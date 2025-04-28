import React from 'react'
import { Button } from '@/components/ui/button'
import { FaGithub, FaFilePdf, FaCircleUser } from "react-icons/fa6"
import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="topbar">
      <Button className="button group" >
        <Link className="button_text group-hover:text-green-300" href="https://github.com/sikwong2">
          <FaGithub />
          <span>GitHub</span>
        </Link>
      </Button>

      <Button className="button group">
        <Link className='button_text group-hover:text-green-300' href="/resume">
          <FaFilePdf />
          <span>Resume</span>
        </Link>
      </Button>

      <Button className="button group">
        <Link className="button_text group-hover:text-green-300" href="/contact">
          <FaCircleUser />
          <span>Contact Me</span>
        </Link>
      </Button>
    </div>
  )
}
