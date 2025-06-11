import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function TopBar({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div className="flex justify-end items-center p-4">
      {children}
      <ModeToggle />
    </div>
  )
}
