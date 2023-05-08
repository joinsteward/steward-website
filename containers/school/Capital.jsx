import { apply_img, capital_img, tution_data, tution_man } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const capitalList = [
  {
    title: 'Quick loan approvals',
    body: 'Get loan request approved in 24-48 hours after the loan request.',
  },
  {
    title: 'Low interest rates',
    body: 'Enjoy low interest rates between 5-8% monthly.',
  },
  {
    title: 'No security/Low collateral',
    body: 'Request for as high as UGX 5 million without collateral.',
  },
  {
    title: 'Flexible loan structure',
    body: 'Get flexible repayment structure to suit your income.',
  },
]

const applyList = [
  {
    title: 'Apply for a loan',
    body: 'Apply for a loan and state reasons for application.',
  },
  {
    title: 'Confirm your eligibility',
    body: 'Verify your loan eligibility by login into your dashboard to view the options that are available.',
  },
  {
    title: 'Receive the money',
    body: 'After considering your option, we transfer the funds to your account within 24-48 hours business days.',
  },
  {
    title: 'Commence repayment',
    body: 'Initiate loan repayment in accordance with the negotiated flexible repayment schedule.',
  },
]

const Capital = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col px-6 py-16 sm:px-0 lg:py-37 lg:px-16 xl:px-5">
        <div className="mt-10 mb-12 flex w-full flex-col gap-10 md:mb-30 md:flex-row">
          <div className="min-h-fit flex-1 flex-col overflow-hidden rounded-xl">
            <Image
              className="max-h-full w-full rounded-xl object-contain object-center md:block"
              alt="schoolBanner"
              src={capital_img}
            />
          </div>
          <div className="min-h-fit flex-1 flex-col overflow-hidden rounded-xl py-5 md:py-10 md:px-10">
            <h5 className="mb-4 font-duplicate-san text-2xl font-medium md:leading-[44px] xl:text-6xl">
              Steward Capital provides you
            </h5>
            {capitalList.map((item, index) => (
              <div className="mt-4 space-y-2 md:mt-8" key={index}>
                <h5 className="font-duplicate-san text-lg font-medium text-primary-700 md:text-2xl">
                  {item.title}
                </h5>
                <p className="font-normal md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 mb-12 flex w-full flex-col gap-10 md:mb-30 md:flex-row">
          <div className="min-h-fit flex-1 flex-col overflow-hidden rounded-xl py-5 md:py-10 md:px-10">
            <h5 className="mb-4 font-duplicate-san text-2xl font-medium md:leading-[44px] xl:text-6xl">
              Tuition data for loan approvals
            </h5>
            <div className="mt-4 space-y-2 md:mt-8">
              <p className="font-normal md:text-xl">
                We leverage your school fee data to give you loans without requiring any collateral
              </p>

              <Image
                src={tution_data}
                alt="tution"
                className="h-full w-full object-contain object-center "
              />
            </div>
          </div>
          <div className="h-full flex-1 flex-col overflow-hidden rounded-xl">
            <Image
              className="h-full w-fit rounded-xl object-contain object-center md:block"
              alt="schoolBanner"
              src={tution_man}
            />
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col gap-10 md:flex-row">
          <div className="min-h-fit flex-1 flex-col overflow-hidden rounded-xl py-5 md:py-10 md:px-10">
            <h5 className="mb-4 font-duplicate-san text-2xl font-medium md:leading-[44px] xl:text-6xl">
              How to apply for loans
            </h5>
            {applyList.map((item, index) => (
              <div className="mt-4 space-y-2 md:mt-8" key={index}>
                <h5 className="font-duplicate-san text-lg font-medium text-primary-700 md:text-2xl">
                  {item.title}
                </h5>
                <p className="font-normal md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="min-h-fit flex-1 flex-col overflow-hidden rounded-xl">
            <Image
              className="max-h-full w-full rounded-xl object-contain object-center md:block"
              alt="schoolBanner"
              src={apply_img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capital
