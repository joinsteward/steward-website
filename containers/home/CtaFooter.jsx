import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

const CtaFooter = ({ withBg = true }) => {
  return (
    <section className="flex w-full flex-col justify-center bg-cta_footer bg-cover bg-no-repeat py-16 md:py-20 xl:py-28">
      <div className="container mx-auto space-y-4 px-10 text-white md:max-w-5xl md:space-y-10 md:px-16 xl:px-0">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="custom-font font-duplicate-san text-3xl font-bold !leading-tight !tracking-wide md:text-5xl">
            We're fuelling the aspirations of thousands of schools. Let's fuel yours as well.
          </h1>
          <p className="text-base md:text-2xl">
            Create an account and instantly help your school meet its liquidity needs.
          </p>
          <div className="grid w-full gap-3 md:grid-cols-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdAIO--jEsER0tbLHVvQBCBuEittEPzN1em-Gw5GDMyeIqyrg/viewform"
              target="_blank"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-3 text-center text-xs font-medium text-black md:h-15 md:px-6 md:text-sm"
            >
              Contact Us <ArrowRight className={classNames('h-5 w-5 text-black')} />
            </Link>
            <Link
              href="tel:+256706192709"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium text-white md:h-15 md:px-6 md:text-sm"
            >
              Call +256 706 192709
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaFooter
