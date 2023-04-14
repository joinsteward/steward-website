import { Kenya, Nigeria, Uganda } from 'assets/icons'
import { section_two, section_two_mobile } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const Ambitions = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-gray-25 py-16 md:py-20 xl:py-28">
      <div className="relative w-full px-6 sm:px-0 md:px-20">
        <div className="inset-0 mx-auto mb-10 max-w-[16rem] space-y-3 text-center sm:max-w-[16rem] md:absolute md:mt-10 md:max-w-xs xl:mt-24 xl:max-w-xl">
          <h4 className="font-duplicate-san text-base font-medium md:text-2xl xl:text-4xl">
            We create growth opportunities for small but ambitious schools
          </h4>
          <p className="text-xs lg:text-base xl:text-lg">
            Steward supports schools that are enthusiastic about growing and giving quality
            education to their students{' '}
          </p>
        </div>
        <Image
          className="hidden w-full max-w-full object-contain object-center md:block"
          alt="section_two"
          src={section_two}
        />
        <Image
          className="container mx-auto block max-h-full w-full object-contain object-center  md:hidden"
          alt="section_two"
          src={section_two_mobile}
        />
      </div>
      <div className="container mx-auto mt-10 space-y-4 px-10 md:mt-20 md:max-w-5xl md:space-y-10 md:px-16 xl:px-0 ">
        <h1 className="font-duplicate-san text-xl font-light md:text-3xl  lg:!text-4xl xl:!text-6xl">
          The enormity of the ambition, not the size of the school, is what matters. Ambitious
          private schools of all sizes depend on Steward to grow.
        </h1>
        <p className="text-xs italic md:text-xl">
          We are trusted by several schools across Uganda.{' '}
        </p>
        <div className="flex w-fit items-center gap-3 rounded-full border p-2 text-[8px] italic md:p-3 md:text-base">
          Available in Uganda, with more coming soon
          <span className="grid grid-cols-3 items-center gap-2">
            <Uganda className="h-6 w-6 md:h-full md:w-full" />{' '}
            <Nigeria className="h-6 w-6 md:h-full md:w-full" />{' '}
            <Kenya className="h-6 w-6 md:h-full md:w-full" />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Ambitions
