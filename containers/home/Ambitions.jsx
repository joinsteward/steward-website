import { Kenya, Nigeria, Uganda } from 'assets/icons'
import { section_two } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const Ambitions = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-gray-25 py-28">
      <div className="relative w-full px-20">
        <div className="absolute inset-0 mx-auto mt-24 max-w-xl space-y-3 text-center">
          <h4 className="text-4xl font-medium">
            We create growth opportunities for small but ambitious schools
          </h4>
          <p className="md:text-lg">
            Steward supports schools who are enthusiastic about growing and giving quality education
            to their students{' '}
          </p>
        </div>
        <Image
          className="w-full max-w-full object-contain object-center"
          alt="hero"
          src={section_two}
        />
      </div>
      <div className="mx-auto mt-20 max-w-5xl space-y-10">
        <h1 className="text-6xl font-light">
          The enormity of the ambition, not the size of the school, is what matters. Ambitious
          private schools of all sizes depend on Steward to grow.
        </h1>
        <p className="text-xl italic">We are trusted by over several schools across Uganda. </p>
        <div className="flex w-fit items-center gap-3 rounded-full border p-3 text-base italic">
          Available in Uganda, with more coming soon
          <span className="grid grid-cols-3 items-center gap-2">
            <Uganda /> <Nigeria /> <Kenya />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Ambitions
