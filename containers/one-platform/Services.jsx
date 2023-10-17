import { CheckIcon, DotedIcon, QuestionMark } from 'assets/icons'
import {
  bank_transfer,
  hand_mock,
  lady,
  lady_cup,
  lady_cup_mobile,
  lady_lap_mobile,
  lady_pc,
  lady_smile_mobile,
  man_mobile,
  men_cup,
  mobile_lady,
  mobile_lady_small,
  payslip,
  slider,
  track_revenue,
} from 'assets/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { removeAmountFraction } from 'utils/common'
import ReturnCountry from 'utils/hooks'

const Services = () => {
  const { countryIso } = ReturnCountry()

  return (
    <section className="flex w-full flex-col justify-center bg-white pt-16 md:py-20 xl:py-28">
      <div className="container relative mx-auto flex w-full flex-col items-center px-6 sm:px-0 ">
        <div className="w-fit rounded-full border border-[#9E77ED] px-3 py-1">OFFERING YOU</div>
        <div className="mt-8 max-w-3xl text-center font-duplicate-san text-xl font-normal md:text-3xl lg:!text-4xl xl:!text-6xl">
          One-stop platform for handling school fees and payments
        </div>
        <div className="mt-5 max-w-md text-center md:text-2xl">
          We are a financial service provider for private Schools across Africa
        </div>

        <div className="my-16 w-full py-4">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute h-full w-full bg-gradient-to-b from-black via-black/90 text-white lg:bg-gradient-to-l">
              <div className="relative flex h-full w-full items-start justify-center text-white lg:items-center lg:justify-end lg:pr-10">
                <div className="flex h-full flex-col justify-center p-4 sm:p-6 lg:max-w-xl lg:p-10">
                  <h1 className="mb-2 font-duplicate-san text-lg font-medium leading-none sm:mb-4 sm:text-3xl lg:text-4xl">
                    Multiple payment options.
                  </h1>
                  <p className="text-xs sm:text-lg lg:text-xl">
                    Accept payments through mobile money and bank transfers from students, parents
                    and even vendors.
                  </p>
                  <Image
                    className="mt-auto max-h-full w-full rounded-xl object-contain object-center lg:mt-12"
                    alt="bank_transfer"
                    src={bank_transfer}
                  />
                </div>
              </div>
            </div>
            <Image
              className="hidden max-h-full w-full object-contain object-center lg:block"
              alt="hero"
              src={mobile_lady}
            />
            <Image
              className="block max-h-full w-full object-contain object-center lg:hidden"
              alt="hero"
              src={mobile_lady_small}
            />
          </div>
          <div className="my-6 grid gap-4 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute flex h-full w-full items-center bg-gradient-to-b from-black via-black/80 text-white">
                <div className="relative flex h-full w-full items-start text-white">
                  <div className="flex h-full flex-col p-4 sm:p-6 lg:max-w-xl lg:p-10">
                    <h1 className="mb-2 font-duplicate-san text-lg font-medium leading-none sm:mb-4 sm:text-3xl lg:text-4xl">
                      Track your schools revenue growth
                    </h1>
                    <p className="text-xs sm:text-lg lg:text-xl">
                      Obtain a school business account designed to streamline the tracking of your
                      revenue growth in a single, convenient dashboard.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={track_revenue}
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-t from-black to-[#007D00]">
              <div className="absolute flex h-full w-full items-center text-white">
                <div className="relative flex h-full w-full items-start text-white">
                  <div className="flex h-full flex-col p-4 sm:p-6 lg:max-w-xl lg:p-10">
                    <h1 className="mb-2 font-duplicate-san text-lg font-medium leading-none sm:mb-4 sm:text-3xl lg:text-4xl">
                      Start collecting fees in minutes
                    </h1>
                    <p className="text-xs sm:text-lg lg:text-xl">
                      Sign up for a free account, receive funds, obtain a student payment code, and
                      start accepting school fees securely within minutes.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={hand_mock}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
