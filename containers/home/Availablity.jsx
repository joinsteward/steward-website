import Image from 'next/image'
import React from 'react'

const Availablity = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-available_bg bg-cover bg-no-repeat py-16 md:py-20 xl:py-28">
      <div className="relative w-full px-6 sm:px-0 md:px-20">
        <div className="mt-0 grid w-full items-center gap-10 md:grid-cols-2">
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
      </div>
    </section>
  )
}

export default Availablity
