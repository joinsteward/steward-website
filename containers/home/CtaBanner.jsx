import Link from 'next/link'
import React from 'react'

const CtaBanner = ({ withBg = true }) => {
  return (
    <section className="flex justify-center bg-gray-25 px-6 py-16 sm:px-0 md:py-32 lg:px-16 xl:px-5">
      <div
        className={`container flex h-full w-full flex-col items-center justify-center rounded-2xl  ${
          withBg ? 'bg-cta_banner text-white' : 'text-primary-700'
        } bg-cover bg-top bg-no-repeat p-8 py-16 md:flex-row md:p-28 md:py-28`}
      >
        <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="custom-font font-duplicate-san text-3xl font-bold !leading-tight !tracking-wide md:text-5xl">
            We're fuelling the aspirations of thousands of schools. Let's fuel yours as well.
          </h1>
          <p className="text-base md:text-2xl">
            Create an account and instantly help your school grow
          </p>
          <Link
            href="tel:+2349160011009"
            className={`flex h-11 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border ${
              withBg ? 'border-white' : 'bg-primary-700 text-white'
            } px-3 text-center text-xs font-medium md:h-15 md:px-6 md:text-sm`}
          >
            Call +2349160011009
          </Link>
          <p className="text-base md:text-xl ">
            or send us an email at
            <span className="ml-1 font-medium italic">
              <a href="mailto:admin@joinsteward.com">support@joinsteward.com</a>
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
