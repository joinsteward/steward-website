import { MulitPayment, TimeSpeed, TrackRevenue } from 'assets/icons'
import {
  apply_img,
  capital_img,
  create_img,
  momo,
  track_chart,
  tution_data,
  tution_man,
} from 'assets/image'
import Image from 'next/image'
import React from 'react'

const OnePlatform = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto flex flex-col px-6 py-16 sm:px-0 lg:py-37 lg:px-16 xl:px-5">
        <div className="mb-15 flex w-full justify-center text-center md:mb-30">
          <h1 className="mb-4 max-w-5xl font-duplicate-san text-3xl font-medium text-gray-900 md:text-4xl xl:text-6xl">
            One platform to manage all your payment collections for your school
          </h1>
        </div>
        <div className="grid w-full gap-10 md:grid-cols-2">
          <div className="rounded-xl bg-white">
            <MulitPayment />
            <div className="space-y-6 px-12">
              <h4 className="font-duplicate-san text-3xl font-medium">Multiple payment options</h4>
              <p className="text-lg">
                Accept payments through mobile money and bank transfers (coming soon) from students,
                parents and even vendors.
              </p>
            </div>

            <Image
              className="max-h-full w-full object-cover object-center md:block"
              alt="momo"
              src={momo}
            />
          </div>
          <div className="rounded-xl bg-white">
            <TrackRevenue />
            <div className="space-y-6 px-12">
              <h4 className="font-duplicate-san text-3xl font-medium">Track revenue growth</h4>
              <p className="text-lg">
                Get a school business account that helps you track your revenue growth in one place
              </p>
            </div>

            <Image
              className="max-h-full w-full object-cover object-center md:block"
              alt="track_chart"
              src={track_chart}
            />
          </div>
        </div>

        <div className="mt-10 grid w-full gap-10 rounded-3xl bg-white md:grid-cols-2">
          <div className="rounded-xl">
            <TimeSpeed />
            <div className="space-y-6 px-12">
              <h4 className="font-duplicate-san text-3xl font-medium">
                Get a collection platform in minutes
              </h4>
              <p className="text-lg">
                Create a free account in a few minutes and get where we will deposit funds, get
                student payment code and begin securely accepting school fees payments right away.
              </p>
            </div>
          </div>
          <div className="flex min-h-fit flex-col overflow-hidden rounded-xl">
            <Image
              className="max-h-full w-full rounded-xl object-contain object-center md:block"
              alt="create_img"
              src={create_img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnePlatform
