import { people_img } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <section className="bg-warning-50">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-6 py-20 sm:px-0 lg:px-16 xl:px-5">
        <div className="mb-15 flex w-full md:mb-30">
          <h1 className="mb-4 max-w-5xl font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
            Our mission is to make education institutions across Africa financially resilient and
            sustainable for centuries.
          </h1>
        </div>
        <Image
          className="mb-20 w-full object-cover object-center md:block md:max-h-full"
          alt="map_img"
          src={people_img}
        />
        <hr className="w-full border-gray-500" />
        <div className="w-full py-16">
          <h1 className="mb-4 max-w-5xl font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-5xl">
            Launched in 2023. Numbers we're proud of
          </h1>
          <div className="grid grid-cols-3 gap-2 pt-10">
            <div className="w-fit space-y-8 text-center">
              <h2 className="font-duplicate-san text-4xl font-medium text-gray-900 md:text-5xl xl:text-7xl">
                2023
              </h2>
              <span className="text-base md:text-xl">Steward launch</span>
            </div>
            <div className="w-fit space-y-8 text-center">
              <h2 className="font-duplicate-san text-4xl font-medium text-gray-900 md:text-5xl xl:text-7xl">
                50+
              </h2>
              <span className="text-base md:text-xl">Schools funded</span>
            </div>
            <div className="w-fit space-y-8 text-center">
              <h2 className="font-duplicate-san text-4xl font-medium text-gray-900 md:text-5xl xl:text-7xl">
                ~$300k
              </h2>
              <span className="text-base md:text-xl">Total funding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
