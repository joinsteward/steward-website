import { loangrow, schoolfees } from 'assets/image'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BusinessTools = () => {
  return (
    <section
      id="loans"
      className="container mx-auto flex flex-col px-6  py-16 sm:px-0 lg:px-16 lg:py-37  xl:px-5"
    >
      <h1 className="max-w-3xl font-duplicate-san  text-xl font-semibold md:max-w-xl md:text-3xl md:leading-[60px] xl:text-5xl">
        Business tools and offerings for your school to grow.
      </h1>
      <div className="mt-10 grid w-full gap-10 md:grid-cols-2">
        <div className="flex min-h-fit flex-col overflow-hidden rounded-xl bg-success-25">
          <div className="p-10">
            <h5 className="mb-6 text-sm md:text-[18px]">CAPITAL</h5>
            <h3 className="mb-6 font-duplicate-san text-xl font-medium text-success-700 md:text-3xl">
              Loans to grow your school
            </h3>
            <p className="mb-4 text-sm leading-[30px] text-gray-600 md:text-xl ">
              We give you access to quick and flexible loans within 24-48 hours with low interest
              rate to expand and grow your school. No security is required.
            </p>
            <Link
              href="/school-loan"
              target="_blank"
              className="flex h-11 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:px-6 md:text-sm"
            >
              Learn more <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <Image src={loangrow} alt={loangrow} className="mt-auto w-full" />
        </div>
        <div className="flex min-h-fit flex-col overflow-hidden rounded-xl bg-blue-light-25">
          <div className="p-10">
            <h5 className="mb-6 text-sm md:text-[18px]">PAYMENTS</h5>
            <h3 className="mb-6 font-duplicate-san text-xl font-medium text-blue-light-700 md:text-3xl">
              School fees collection
            </h3>
            <p className="mb-4 text-sm leading-[30px] text-gray-600 md:text-xl ">
              Accept your school payments and fees collections from students and parents
            </p>
            <Link
              href="/school-fee"
              target="_blank"
              className="flex h-11 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:px-6 md:text-sm"
            >
              Learn more <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <Image src={schoolfees} alt={schoolfees} className="mt-auto w-full" />
        </div>
      </div>
    </section>
  )
}

export default BusinessTools
