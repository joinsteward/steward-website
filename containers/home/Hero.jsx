import {
  acas,
  backedby,
  capital,
  future,
  Hero_img,
  Hero_img_mobile,
  hero_lady,
  monie,
  venture,
} from 'assets/image'
import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { ReactComponent as Capital } from 'assets/image/capital.svg'
import { removeAmountFraction } from 'utils/common'
import ReturnCountry from 'utils/hooks'

const Hero = () => {
  const { countryIso } = ReturnCountry()

  return (
    <section className="gradient__bg">
      <div className="container mx-auto flex flex-col px-6 py-16 sm:px-0 lg:px-16 xl:px-5">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 lg:flex-grow lg:pr-24 xl:my-16">
            <h1 className="mb-4 font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
              Access your school's future revenue today
            </h1>
            <p className="mb-8 leading-relaxed md:text-xl ">
              Steward helps schools across Africa to access their revenue before time, process
              payments and support parents to pay school fees daily, weekly or monthly.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAIO--jEsER0tbLHVvQBCBuEittEPzN1em-Gw5GDMyeIqyrg/viewform"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black px-7 py-4 text-center text-xs font-medium text-white md:text-sm"
              >
                Contact Us <ArrowRight className={classNames('h-5 w-5 text-white')} />
              </Link>
              <Link
                href="tel:+256706192709"
                className="flex  w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-7 py-4 text-center text-xs font-medium text-black md:text-sm"
              >
                Call +256 706 192709
              </Link>
            </div>
          </div>
          <div className="mb-8 flex w-full justify-center md:mb-0 md:w-1/2">
            <div className="mt-8 w-full max-w-xl md:mt-0 md:p-4">
              <div className="rounded-xl border border-gray-500 bg-white p-3 md:rounded-3xl md:p-6">
                <Image
                  className="max-h-full w-full object-contain object-center"
                  alt="hero"
                  src={hero_lady}
                />
                <div className="mt-6 flex flex-wrap justify-between gap-4">
                  <div className="space-y-2 md:space-y-4">
                    <div className="text-sm text-gray-600">Collection rate</div>
                    <div className="font-duplicate-san font-medium md:text-2xl">97%</div>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <div className="text-sm text-gray-600">Expected Revenue</div>
                    <div className="font-duplicate-san font-medium md:text-2xl">
                      {removeAmountFraction('140000000', countryIso, true)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 mx-auto box-border flex w-full flex-wrap items-center justify-center ">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="mb-5 w-full md:w-1/6">
              <h6 className="text-center text-xs sm:text-sm">
                We are backed by Africa’s most prominent investors
              </h6>
            </div>
            <div className="w-1/2 px-2 md:w-1/6">
              <Image
                className="w-full max-w-full object-scale-down object-center"
                alt="hero"
                src={future}
              />
            </div>
            <div className="w-1/2 px-2 md:w-1/6">
              <Image
                className="w-full max-w-full object-scale-down object-center"
                alt="hero"
                src={venture}
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/6">
              <Image
                className="w-full max-w-full object-scale-down object-center"
                alt="hero"
                src={monie}
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/6">
              <Image
                className="w-full max-w-full object-scale-down object-center"
                alt="hero"
                src={capital}
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/6">
              <Image
                className="w-full max-w-full object-scale-down object-center"
                alt="hero"
                src={acas}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
