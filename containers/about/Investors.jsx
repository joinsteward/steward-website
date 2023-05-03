import { investor_logo } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const Investors = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-6 py-12 sm:px-0 md:py-25 lg:px-16 xl:px-5">
        <div className="mb-15 flex w-full md:mb-25">
          <h1 className="mb-4 max-w-5xl font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-5xl">
            Our Investors. We’re proud to be backed by some of the leading investors in Africa.
          </h1>
        </div>
        <Image
          className="w-full object-cover object-center md:block md:max-h-full"
          alt="map_img"
          src={investor_logo}
        />
      </div>
    </section>
  )
}

export default Investors
