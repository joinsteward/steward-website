import { appstore, gplay, map_image } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const EndorsedBy = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-purple-50 py-16 md:py-20 xl:py-28">
      <div className="container relative mx-auto w-full px-6 sm:px-0 md:px-20">
        <div className="mt-0 grid w-full items-center gap-10 md:grid-cols-2">
          <div className="flex min-h-fit flex-col overflow-hidden">
            <h1 className="mb-4 font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
              Endorsed by several Schools across Africa
            </h1>
            <p className="mb-8 leading-relaxed md:text-xl ">
              From elementary schools to major educational corporations, countless establishments
              globally trust Steward to accelerate their growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Image
                className="max-w-[200px]  object-scale-down object-center"
                alt="app"
                src={gplay}
              />
              <Image
                className="max-w-[200px] object-scale-down object-center"
                alt="app"
                src={appstore}
              />
            </div>
          </div>
          <div className="min-h-fit w-full overflow-hidden md:p-4">
            <div className="p-3 md:rounded-3xl md:p-6">
              <Image
                className="max-h-full w-full object-contain object-center"
                alt="hero"
                src={map_image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EndorsedBy
