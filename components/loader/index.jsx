import { Logo } from 'assets/icons'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex min-h-screen w-full items-center justify-center bg-white p-8">
      <div className="flex flex-col items-center space-y-2">
        <Logo />
        <div className="infinity-10"></div>
      </div>
    </div>
  )
}

export default Loading
