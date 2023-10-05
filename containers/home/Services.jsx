import { CheckIcon, DotedIcon } from 'assets/icons'
import { lady, lady_cup, lady_pc, men_cup, payslip, slider } from 'assets/image'
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
          Simple Financial Tools for Private Schools
        </div>
        <div className="mt-5 max-w-md text-center md:text-2xl">
          We are a financial service provider for private Schools across Africa
        </div>

        <div className="my-16 w-full py-4">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute h-full w-full bg-gradient-to-r from-black via-black/90 text-white">
              <div className="relative flex h-full w-full items-center text-white">
                <div className="max-w-xl space-y-4 p-10">
                  <h1 className="font-duplicate-san text-xl font-medium md:text-4xl">
                    Income advance
                  </h1>
                  <p className="md:text-xl">
                    We give you an advance against your next term's revenue to make renovations,
                    stock food and pay your teachers. No security required.
                  </p>
                  <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium md:h-10 md:px-6 md:text-sm">
                    Learn more
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[256px] w-[300px] -translate-x-4 -translate-y-4 rounded-xl border-2 border-purple-700 bg-black p-4">
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
                </div>
              </div>
            </div>
            <Image
              className="max-h-full w-full object-contain object-center"
              alt="hero"
              src={lady}
            />
          </div>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute flex h-full w-full items-center bg-gradient-to-t from-black via-black/80 text-white">
                <div className="relative flex h-full w-full items-end text-white">
                  <div className="max-w-xl space-y-4 p-10">
                    <h1 className="font-duplicate-san text-xl font-medium md:text-4xl">
                      Short term loans
                    </h1>
                    <p className="md:text-xl">
                      Get access to working capital to run your operations efficiently within 24-48
                      hours
                    </p>
                    <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium md:h-10 md:px-6 md:text-sm">
                      Learn more
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 h-[256px] w-[300px] -translate-x-4 translate-y-4 rounded-xl border-2 border-purple-700 bg-black p-4">
                    <div className="flex items-center justify-between border-b border-gray-400 pb-3">
                      <h5 className="font-duplicate-san text-sm font-medium">Income Advance</h5>
                      <DotedIcon />
                    </div>
                    <div className="my-4 space-y-1">
                      <div className="text-xs text-gray-600">Amount</div>
                      <div className="font-duplicate-san text-sm font-medium">
                        {' '}
                        {removeAmountFraction('140000000', countryIso)}
                      </div>
                    </div>
                    <div>
                      <Image
                        className="max-h-full w-full object-contain object-center"
                        alt="hero"
                        src={slider}
                      />
                      <div className="mt-2 mb-6 flex items-center justify-between">
                        <div className="text-xs font-medium">UGX 40,000,000</div>
                        <div className="text-xs font-medium">UGX 140,000,000</div>
                      </div>
                      <div className="flex items-center justify-center rounded-lg border border-purple-700 bg-primary-600 p-2 text-sm">
                        Request advance
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
                  <div className="max-w-xl space-y-4 p-10">
                    <h1 className="font-duplicate-san text-xl font-medium md:text-4xl">
                      Fee collection system.
                    </h1>
                    <p className="md:text-xl">
                      Enable your parents to pay you on timelines that coincide with their pay
                      cycles - daily, weekly or monthly.
                    </p>
                    <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium md:h-10 md:px-6 md:text-sm">
                      Learn more
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 translate-x-8 translate-y-8 space-y-2">
                    <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-4">
                      <CheckIcon />
                      <p className="text-sm">{`Payment of ${removeAmountFraction(
                        '4500000',
                        countryIso,
                        true
                      )} received`}</p>
                    </div>
                    <div className="flex w-fit items-center gap-3 rounded-xl border-2 border-purple-700 bg-black p-4">
                      <CheckIcon />
                      <p className="text-sm">Cash payment logged</p>
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
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute h-full w-full bg-gradient-to-l from-black via-black/90 text-white">
              <div className="relative flex h-full w-full items-center justify-end text-white">
                <div className="max-w-xl space-y-4 p-10">
                  <h1 className="font-duplicate-san text-xl font-medium md:text-4xl">
                    Payroll management and salary advance
                  </h1>
                  <p className="md:text-xl">
                    Automate and customise your employee’s pay, allow teachers access up to 50% of
                    their salary before payday and much more.
                  </p>
                  <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium md:h-10 md:px-6 md:text-sm">
                    Coming soon
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 h-[256px] w-[300px] -translate-x-2/3 transform">
                  <Image
                    className="max-h-full w-full object-contain object-center"
                    alt="hero"
                    src={payslip}
                  />
                </div>
              </div>
            </div>
            <Image
              className="max-h-full w-full object-contain object-center"
              alt="hero"
              src={lady_pc}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
