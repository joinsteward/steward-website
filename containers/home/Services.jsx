import { CheckIcon, DotedIcon, QuestionMark } from 'assets/icons'
import {
  lady,
  lady_cup,
  lady_cup_mobile,
  lady_lap_mobile,
  lady_pc,
  lady_smile_mobile,
  man_mobile,
  men_cup,
  payslip,
  slider,
} from 'assets/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { removeAmountFraction } from 'utils/common'
import ReturnCountry from 'utils/hooks'

const Services = () => {
  const { countryIso } = ReturnCountry()

  return (
    <section className="flex w-full flex-col justify-center bg-white py-16 md:py-20 xl:py-28">
      <div className="container relative mx-auto flex w-full flex-col items-center px-6 sm:px-0 ">
        <div className="w-fit rounded-full border px-3 py-1">Services</div>
        <div className="mt-8 max-w-xl text-center font-duplicate-san text-xl font-normal md:text-3xl lg:!text-4xl xl:!text-6xl">
          Simple Financial Tools for Schools
        </div>
        <div className="mt-5 max-w-md text-center md:text-2xl">
          We are a financial service provider for private Schools across Africa
        </div>

        <div className="my-16 w-full py-4">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute h-full w-full bg-gradient-to-t from-black via-black/90 text-white lg:bg-gradient-to-r">
              <div className="relative flex h-full w-full items-end text-white lg:items-center">
                <div className="max-w-xl space-y-4 p-4 lg:p-10">
                  <div className="space-y-2 lg:hidden">
                    <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-2 lg:p-4">
                      <CheckIcon />
                      <p className="text-xs lg:text-sm">{`Payment of ${removeAmountFraction(
                        '4500000',
                        countryIso,
                        true
                      )} received`}</p>
                    </div>
                    <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-2 lg:p-4">
                      <CheckIcon />
                      <p className="text-xs lg:text-sm">Cash payment logged</p>
                    </div>
                  </div>
                  <h1 className="font-duplicate-san text-lg font-medium lg:text-4xl">
                    Fee collection system.
                  </h1>
                  <p className="text-xs lg:text-xl">
                    Enable your parents to pay you on timelines that coincide with their pay cycles
                    - daily, weekly or monthly.
                  </p>
                  <div className="flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium lg:h-10 lg:px-6 lg:text-sm">
                    Learn more
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 hidden -translate-x-25 -translate-y-25  space-y-2 lg:block">
                  <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-2 lg:p-4">
                    <CheckIcon />
                    <p className="text-xs lg:text-sm">{`Payment of ${removeAmountFraction(
                      '4500000',
                      countryIso,
                      true
                    )} received`}</p>
                  </div>
                  <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-2 lg:p-4">
                    <CheckIcon />
                    <p className="text-xs lg:text-sm">Cash payment logged</p>
                  </div>
                </div>
                {/* <div className="absolute bottom-0 right-0 hidden h-[256px] w-[300px] -translate-x-4 -translate-y-4 rounded-xl border-2 border-purple-700 bg-black p-4 lg:block">
                  <div className="flex items-center justify-between border-b border-gray-400 pb-3">
                    <h5 className="font-duplicate-san text-sm font-medium">Income Advance</h5>
                    <DotedIcon />
                  </div>
                  <div className="my-4 space-y-1">
                    <div className="text-xs text-gray-600">Amount</div>
                    <div className="font-duplicate-san text-sm font-medium">
                      {removeAmountFraction('120000000', countryIso, true)}
                    </div>
                  </div>
                  <div>
                    <Image
                      className="max-h-full w-full object-contain object-center"
                      alt="hero"
                      src={slider}
                    />
                    <div className="mt-2 mb-6 flex items-center justify-between">
                      <div className="text-xs font-medium">
                        {removeAmountFraction('3000000000', countryIso, true)}
                      </div>
                      <div className="text-xs font-medium">
                        {removeAmountFraction('140000000', countryIso, true)}
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg border border-purple-700 bg-primary-600 p-2 text-sm">
                      Request advance
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <Image
              className="hidden max-h-full w-full object-contain object-center lg:block"
              alt="hero"
              src={lady}
            />
            <Image
              className="block max-h-full w-full object-contain object-center lg:hidden"
              alt="hero"
              src={lady_lap_mobile}
            />
          </div>
          {/* <div className="my-6 grid gap-4 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute flex h-full w-full items-center bg-gradient-to-t from-black via-black/80 text-white">
                <div className="relative flex h-full w-full items-end text-white">
                  <div className="max-w-xl space-y-4 p-4 lg:p-10">
                    <h1 className="font-duplicate-san text-lg font-medium lg:text-4xl">
                      Short term loans
                    </h1>
                    <p className="text-xs lg:text-xl">
                      Get access to working capital to run your operations efficiently within 24-48
                      hours.
                    </p>
                    <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium lg:h-10 lg:px-6 lg:text-sm">
                      Learn more
                    </div>
                  </div>
                  <div className="absolute top-0 hidden h-auto rounded-xl border-2 border-purple-700 bg-black p-4 lg:right-0 lg:block lg:w-[300px] lg:-translate-x-4 lg:translate-y-4">
                    <div className="flex items-center justify-between border-b border-gray-400 pb-3">
                      <h5 className="flex items-center gap-2 font-duplicate-san text-xs  font-medium lg:text-sm">
                        Eligible loan{' '}
                        <span>
                          <QuestionMark />
                        </span>
                      </h5>
                      <DotedIcon />
                    </div>
                    <div className="my-4 space-y-1">
                      <div className="font-duplicate-san text-xs font-medium lg:text-sm">
                        {' '}
                        {removeAmountFraction('5156080', countryIso)}
                      </div>
                      <div className="text-[10px] text-gray-200 lg:text-xs">
                        <span className="text-gray-300">Total repayment:</span>{' '}
                        {removeAmountFraction('531076240', countryIso)}
                      </div>
                    </div>
                    <div>
                      <div className="flex w-fit items-center justify-center rounded-lg border border-purple-700 bg-primary-600 p-2 px-4 text-xs lg:text-sm">
                        Request loan
                      </div>
                      <div className="mt-3 text-[10px] font-medium text-gray-300 underline lg:text-xs">
                        Download loan agreement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={men_cup}
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute flex h-full w-full items-center bg-gradient-to-t from-black via-black/80 text-white">
                <div className="relative flex h-full w-full items-end text-white">
                  <div className="max-w-xl space-y-4 p-4 lg:p-10">
                    <h1 className="font-duplicate-san text-lg font-medium lg:text-4xl">
                      Fee collection system.
                    </h1>
                    <p className="text-xs lg:text-xl">
                      Enable your parents to pay you on timelines that coincide with their pay
                      cycles - daily, weekly or monthly.
                    </p>
                    <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium lg:h-10 lg:px-6 lg:text-sm">
                      Learn more
                    </div>
                  </div>
                  <div className="absolute top-0 translate-x-2 translate-y-3 space-y-2 lg:left-0 lg:translate-x-8 lg:translate-y-8">
                    <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-2 lg:p-4">
                      <CheckIcon />
                      <p className="text-xs lg:text-sm">{`Payment of ${removeAmountFraction(
                        '4500000',
                        countryIso,
                        true
                      )} received`}</p>
                    </div>
                    <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-2 lg:p-4">
                      <CheckIcon />
                      <p className="text-xs lg:text-sm">Cash payment logged</p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={lady_cup}
              />
            </div>
          </div> */}

          <div className="relative mt-6 overflow-hidden rounded-2xl">
            <div className="absolute h-full w-full  bg-gradient-to-t from-black via-black/90 text-white lg:bg-gradient-to-l">
              <div className="relative flex h-full w-full items-end text-white lg:items-center lg:justify-end">
                <div className="max-w-xl space-y-4 p-4 lg:p-10">
                  <h1 className="font-duplicate-san text-lg font-medium lg:text-4xl">
                    Payroll management and salary advance
                  </h1>
                  <p className="text-xs lg:text-xl">
                    Automate and customise your employee’s pay, allow teachers access up to 50% of
                    their salary before payday and much more.
                  </p>
                  <div className="flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium lg:h-10 lg:px-6 lg:text-sm">
                    Coming soon
                  </div>
                </div>
                <div className="absolute left-14 h-[256px] w-[300px] -translate-y-12 transform md:left-1/2 md:top-1/2 md:-translate-x-2/3">
                  <Image
                    className="max-h-25 w-full object-contain object-center md:max-h-full"
                    alt="hero"
                    src={payslip}
                  />
                </div>
              </div>
            </div>
            <Image
              className="hidden max-h-full w-full object-contain object-center lg:block"
              alt="hero"
              src={lady_pc}
            />
            <Image
              className="block max-h-full w-full object-contain object-center lg:hidden"
              alt="hero"
              src={lady_smile_mobile}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
