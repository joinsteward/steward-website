import { apply_img, capital_img } from 'assets/image'
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
      <div className="container mx-auto flex flex-col px-6 py-16  sm:px-0 lg:py-37 lg:px-16  xl:px-5">
        <div className="mt-10 mb-36 grid w-full gap-10 md:grid-cols-2">
          <div className="flex min-h-fit flex-col overflow-hidden rounded-xl">
            <Image
              className="hidden max-h-full w-full rounded-xl object-contain object-center md:block"
              alt="schoolBanner"
              src={capital_img}
            />
          </div>
          <div className="flex min-h-fit flex-col overflow-hidden rounded-xl px-10 py-10">
            <h5 className="mb-4 font-duplicate-san text-lg font-medium md:text-2xl md:leading-[44px] xl:text-6xl">
              Steward Capital provides you
            </h5>
            {capitalList.map((item, index) => (
              <div className="mt-8 space-y-2" key={index}>
                <h5 className="font-duplicate-san text-2xl font-medium text-primary-700">
                  {item.title}
                </h5>
                <p className="text-xl font-normal">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid w-full gap-10 md:grid-cols-2">
          <div className="flex min-h-fit flex-col overflow-hidden rounded-xl px-10 py-10">
            <h5 className="mb-4 font-duplicate-san text-lg font-medium md:text-2xl md:leading-[44px] xl:text-6xl">
              How to apply for loans
            </h5>
            {applyList.map((item, index) => (
              <div className="mt-8 space-y-2" key={index}>
                <h5 className="font-duplicate-san text-2xl font-medium text-primary-700">
                  {item.title}
                </h5>
                <p className="text-xl font-normal">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="flex min-h-fit flex-col overflow-hidden rounded-xl">
            <Image
              className="hidden max-h-full w-full rounded-xl object-contain object-center md:block"
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
