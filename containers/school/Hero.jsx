import { WhiteLogo } from 'assets/icons'
import { Logo } from 'assets/icons'
import { schoolBanner } from 'assets/image'
import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="gradient__bg">
      <div className="container mx-auto flex flex-col items-center px-6  pt-12 pb-16 sm:px-0 md:pt-36 lg:px-16 xl:px-5">
        <div className="max-w-xl text-center">
          <h1 className="mb-4  font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
            Money to expand your school
          </h1>
          <p className="mb-8 leading-relaxed md:text-xl ">
            Steward Capital offers you quick access to loans in 24-48 hours to help you at low
            interest rates. No security required.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="https://app.joinsteward.com/"
              target="_blank"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:h-15 md:px-6 md:text-sm"
            >
              Apply for a loan <ArrowRight className={classNames('h-5 w-5 text-white')} />
            </Link>
            <Link
              href="tel:+2349160011009"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:h-15 md:px-6 md:text-sm"
            >
              Call +234 916 0011 009
            </Link>
          </div>
        </div>

        <div className="relative mt-16 w-full md:mt-36">
          <Image
            className="h-[397px] w-full rounded-xl object-cover object-center md:block md:h-[597px] md:max-h-full"
            alt="schoolBanner"
            src={schoolBanner}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center  p-6 text-center ">
            <div className=" flex max-w-5xl flex-col items-center space-y-6">
              <WhiteLogo />
              <h1 className="custom-font font-duplicate-san text-xl font-bold text-white md:text-3xl 2xl:text-5xl">
                We aim to make sure that school owners can get loans without worrying about hefty
                documentation, stringent terms, or collateral requirements.
              </h1>

              <Link
                href="tel:+256706192709"
                className="flex h-11 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium text-white md:h-15 md:px-6 md:text-sm"
              >
                Apply for loans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
