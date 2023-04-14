import { backedby, Hero_img, Hero_img_mobile } from 'assets/image'
import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="gradient__bg">
      <div className="container mx-auto flex flex-col px-6 py-16  sm:px-0  md:flex-row lg:px-16 xl:px-5">
        <div className="flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 lg:flex-grow lg:pr-24 xl:my-16">
          <h1 className="mb-4 font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
            Financial Services for Ambitious Private Schools across Africa
          </h1>
          <p className="mb-8 leading-relaxed">
            Steward offers loans to private schools to fund operational
            <br className="hidden xl:inline-block" /> expenses and acquisition of assets.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdAIO--jEsER0tbLHVvQBCBuEittEPzN1em-Gw5GDMyeIqyrg/viewform"
              target="_blank"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-sm"
            >
              Contact Us <ArrowRight className={classNames('h-5 w-5 text-white')} />
            </Link>
            <Link
              href="tel:+256706192709"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:px-6 md:text-sm"
            >
              Call +256 706 192709
            </Link>
          </div>
          <div className="my-8 box-border grid w-fit  grid-cols-6 items-center gap-16 sm:gap-10 md:mt-16 md:grid-cols-8  md:gap-20  xl:mt-28 xl:gap-0">
            <h6 className="col-span-1 whitespace-nowrap text-xs sm:text-sm">Backed by</h6>
            <Image
              className="col-span-5 w-full max-w-[18rem] object-scale-down object-center md:col-span-7 xl:max-w-lg"
              alt="hero"
              src={backedby}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            className="hidden max-h-full w-full object-contain object-center md:block"
            alt="hero"
            src={Hero_img}
          />
          <Image
            className="block max-h-full w-full  object-contain object-center  md:hidden"
            alt="hero"
            src={Hero_img_mobile}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
