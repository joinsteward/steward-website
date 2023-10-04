import { map_image } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const EndorsedBy = () => {
  return (
    <section
      id="loans"
      className="container mx-auto flex flex-col px-6  py-16 sm:px-0 lg:px-16 lg:py-37  xl:px-5"
    >
      <div className="mt-0 grid w-full items-center gap-10 md:grid-cols-2">
        <div className="min-h-fit w-full overflow-hidden md:p-4">
          <div className="rounded-xl border border-gray-500 bg-white p-3 md:rounded-3xl md:p-6">
            <Image
              className="max-h-full w-full object-contain object-center"
              alt="hero"
              src={map_image}
            />
            <div className="mt-6 flex flex-wrap justify-between gap-4">
              <div className="space-y-2 md:space-y-4">
                <div className="text-sm text-gray-600">Expected Revenue</div>
                <div className="font-medium md:text-2xl">UGX 40,000,000</div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="text-sm text-gray-600">Recovery rate</div>
                <div className="font-medium md:text-2xl">87%</div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="text-sm text-gray-600">Growth rate</div>
                <div className="font-medium md:text-2xl">64%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-fit flex-col overflow-hidden">
          <h1 className="mb-4 font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
            We create growth opportunities for small but ambitious schools.
          </h1>
          <p className="mb-8 leading-relaxed md:text-xl ">
            Steward supports schools that are enthusiastic about growing and providing quality
            education to their students and communities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EndorsedBy
