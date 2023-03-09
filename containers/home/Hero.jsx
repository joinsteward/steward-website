import { backedby, Hero_img } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-hero_bg">
      <div className="container mx-auto flex flex-col px-5 py-16 md:flex-row">
        <div className="my-16 flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 lg:flex-grow lg:pr-24">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-6xl">
            Financial Services for Ambitious Private Schools across Africa
          </h1>
          <p className="mb-8 leading-relaxed">
            Steward offers loans to private schools to fund operational
            <br className="hidden lg:inline-block" /> expenses and acquisition of assets.
          </p>
          <div className="flex gap-3">
            <button className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-sm">
              Contact Sales
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:px-6 md:text-sm">
              Call +256 706 192709
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3 md:mt-16 xl:mt-28">
            <h6 className="whitespace-nowrap text-sm">Backed by:</h6>
            <Image
              className="w-full max-w-md object-contain object-center"
              alt="hero"
              src={backedby}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            className="max-h-full w-full object-contain object-center"
            alt="hero"
            src={Hero_img}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
