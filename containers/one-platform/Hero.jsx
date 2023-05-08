import { WhiteLogo } from 'assets/icons'
import { Logo } from 'assets/icons'
import { fee_tablet, schoolBanner } from 'assets/image'
import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center overflow-hidden  px-6 pt-12 sm:px-0 md:pt-36 lg:px-16 xl:px-5">
        <div className="mb-15 max-w-xl text-center md:mb-30">
          <h1 className="mb-4  font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
            Accept payment and school fees collection
          </h1>
          <p className="mb-8 leading-relaxed md:text-xl ">
            Steward helps you accept school fees and other payments from your students, staffs and
            vendors
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="https://app.joinsteward.com/"
              target="_blank"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:h-15 md:px-6 md:text-sm"
            >
              Create an account <ArrowRight className={classNames('h-5 w-5 text-white')} />
            </Link>
            <Link
              href="tel:+256706192709"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:h-15 md:px-6 md:text-sm"
            >
              Call +256 706 192709
            </Link>
          </div>
        </div>

        <Image
          className="-mb-5 max-h-full w-full object-cover object-center md:-mb-30 md:block"
          alt="fee_tablet"
          src={fee_tablet}
        />
      </div>
    </section>
  )
}

export default Hero
