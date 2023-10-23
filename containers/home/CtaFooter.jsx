import classNames from 'classnames'
import { ArrowRight } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

const defaultData = {
  title: 'Help your school automate and centralise payments, invoicing and financial operations.',
  subtitle: 'Create an account and instantly help your school meet its liquidity needs.',
  bg: 'bg-cta_footer',
}
const CtaFooter = ({
  withBg = true,
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  bg = defaultData.bg,
}) => {
  return (
    <section
      className={classNames(
        'flex w-full flex-col justify-center bg-cover bg-no-repeat py-16 md:py-20 xl:py-28',
        bg
      )}
    >
      <div className="container mx-auto space-y-4 px-10 text-white md:max-w-5xl md:space-y-10 md:px-16 xl:px-0">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="custom-font font-duplicate-san text-3xl font-bold !leading-tight !tracking-wide md:text-5xl">
            {title}
          </h1>
          <p className="text-base md:text-2xl">{subtitle}</p>
          <div className="grid w-full gap-3 md:w-fit md:grid-cols-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdAIO--jEsER0tbLHVvQBCBuEittEPzN1em-Gw5GDMyeIqyrg/viewform"
              target="_blank"
              className="flex  w-full items-center  justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-7 py-4 text-center text-xs font-medium text-black md:text-sm"
            >
              Contact Us <ArrowRight className={classNames('h-5 w-5 text-black')} />
            </Link>
            <Link
              href="tel:+256706192709"
              className="flex  w-full items-center  justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-7 py-4 text-center text-xs font-medium text-white md:text-sm"
            >
              Call +256 706 192709
            </Link>
          </div>
          <p className="mt-4 text-base text-white md:text-2xl">
            or send us an email at <span className="italic">admin@joinsteward.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CtaFooter
