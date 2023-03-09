import { Logo } from 'assets/icons'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex h-20 justify-center border-b border-gray-300 bg-white py-4 px-6 lg:py-4 lg:px-16">
      <div className="container flex w-screen flex-row items-center justify-between">
        <div className="z-50 flex space-x-10">
          <Link href="/">
            <Logo />
          </Link>

          <div className="hidden md:ml-auto md:mr-auto md:flex">
            <button
              className="absolute z-50 block -translate-y-4 -translate-x-8 md:hidden"
              //   onClick={handleClick}
            ></button>
            <nav className="flex flex-row items-center gap-8 space-x-1 text-sm font-medium text-gray-30 lg:text-base">
              <a className="cursor-pointer hover:text-gray-900">Loans</a>
              <a className="flex cursor-pointer items-center hover:text-gray-900">About Us</a>
            </nav>
          </div>
        </div>

        <div className="z-50 md:flex">
          <div className="flex flex-row items-center space-x-4 font-medium md:ml-16">
            <Link
              className="flex h-11 items-center justify-center px-3 text-xs font-medium text-gray-30 md:px-6 md:text-base"
              href="/login"
            >
              Sign In
            </Link>
            <button className="flex h-11 items-center justify-center gap-2 rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-base">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
