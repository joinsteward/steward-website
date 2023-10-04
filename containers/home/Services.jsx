import { lady, lady_cup, lady_pc, men_cup } from 'assets/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
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
            <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-black via-black/80 text-white">
              <div className="max-w-xl space-y-4 p-10">
                <h1 className="font-duplicate-san text-xl font-medium md:text-4xl">
                  Income advance
                </h1>
                <p className="md:text-xl">
                  We give you an advance against your next term's revenue to make renovations, stock
                  food and pay your teachers. No security required.
                </p>
                <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium md:h-10 md:px-6 md:text-sm">
                  Learn more
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
              </div>
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={men_cup}
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute flex h-full w-full items-center bg-gradient-to-t from-black via-black/80 text-white">
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
              </div>
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={lady_cup}
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute flex h-full w-full items-center bg-gradient-to-l from-black via-black/80 text-white">
              <div className="max-w-xl space-y-4 p-10">
                <h1 className="font-duplicate-san text-xl font-medium md:text-4xl">
                  Income advance
                </h1>
                <p className="md:text-xl">
                  We give you an advance against your next term's revenue to make renovations, stock
                  food and pay your teachers. No security required.
                </p>
                <div className="flex h-8 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium md:h-10 md:px-6 md:text-sm">
                  Learn more
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
