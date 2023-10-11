import { Egypt, Kenya, Nigeria, Uganda } from 'assets/icons'
import Image from 'next/image'
import React from 'react'

const Availablity = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-available_bg bg-cover bg-no-repeat py-16 md:py-20 xl:py-40">
      <div className="container mx-auto space-y-4 px-10 md:max-w-5xl md:space-y-10 md:px-16 xl:px-0 ">
        <h1 className="font-duplicate-san text-xl font-light md:text-3xl  lg:!text-4xl xl:!text-6xl">
          What matters is the enormity of the ambition, not the size of the school. Ambitious
          private schools of all sizes depend on Steward to meet their liquidity needs..
        </h1>

        <div className="flex w-fit flex-wrap items-center gap-3 rounded-2xl border px-6 py-3 text-[10px] italic md:rounded-full md:p-3 md:text-base">
          Available in Nigeria and Uganda, with more coming soon
          <span className="grid grid-cols-4 items-center gap-2">
            <Nigeria className="h-6 w-6 md:h-full md:w-full" />{' '}
            <Uganda className="h-6 w-6 md:h-full md:w-full" />{' '}
            <Egypt className="h-6 w-6 md:h-full md:w-full" />{' '}
            <Kenya className="h-6 w-6 md:h-full md:w-full" />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Availablity
