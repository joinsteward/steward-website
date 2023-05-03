import { WhiteLogo } from 'assets/icons'
import { Logo } from 'assets/icons'
import { map_img, schoolBanner } from 'assets/image'
import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-wrap items-center px-6  pt-12 pb-16 sm:px-0 md:pb-32 md:pt-36 lg:px-16 xl:px-5">
        <div class="pr-0 md:w-1/2 md:pl-16 lg:w-3/6">
          <h1 class="font-duplicate-san text-4xl font-medium text-gray-900 md:text-5xl xl:text-7xl">
            We are the growth partner for private schools across Africa
          </h1>
        </div>
        <div class="mt-10 flex w-full flex-col rounded-lg  md:ml-auto md:mt-0 md:w-1/2 lg:w-3/6">
          <Image
            className="w-full rounded-xl object-cover object-center md:block md:max-h-full"
            alt="map_img"
            src={map_img}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
