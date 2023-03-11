import { Facebook, Linkedin, Twitter, WhiteLogo } from 'assets/icons'
import Link from 'next/link'
import React from 'react'

const product = [
  // {
  //   link: '/',
  //   title: 'Payout',
  // },
  // {
  //   link: '/',
  //   title: 'Accept payments ',
  // },
  // {
  //   link: '/',
  //   title: 'Payout',
  // },
  // {
  //   link: '/',
  //   title: 'Payroll management ',
  // },
  {
    link: '/',
    title: 'School loans ',
  },
  // {
  //   link: '/',
  //   title: 'Salary advance',
  // },
]

const resources = [
  // {
  //   link: '/',
  //   title: 'Support',
  // },
  {
    link: '/',
    title: 'Join our WhatsApp community',
  },
  // {
  //   link: '/',
  //   title: 'Join our Telegram community',
  // },
]

const company = [
  // {
  //   link: '/',
  //   title: 'About Us',
  // },
  // {
  //   link: '/',
  //   title: 'Blog',
  // },
  {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdAIO--jEsER0tbLHVvQBCBuEittEPzN1em-Gw5GDMyeIqyrg/viewform',
    title: 'Contact Us',
  },
]
const privacy = [
  {
    link: '/',
    title: 'Privacy Policy ',
  },
  {
    link: '/',
    title: 'Terms of Use',
  },
  {
    link: '/',
    title: 'Security',
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto flex flex-col py-16 px-6 sm:px-0 lg:py-20 lg:px-16 xl:px-5">
        <div className="grid border-b border-gray-700 md:grid-cols-4 md:gap-4 md:pb-10">
          <div className="max-w-[18rem]">
            <WhiteLogo className="mb-10" />
            <h5 className="mb-4 text-sm font-bold text-gray-300">What does steward do?</h5>
            <p className="mb-10 text-sm text-gray-400">
              Steward offers loans to private schools to fund operational expenses and acquisition
              of assets.
            </p>
            <div className="flex items-center gap-3">
              <Twitter /> <Linkedin /> <Facebook />
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-3 text-sm font-semibold text-white">Product</h2>
            <nav className="mb-10 list-none space-y-2 text-sm font-normal">
              {product.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-300 hover:text-gray-400" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-white">Resources</h2>
            <nav className="mb-10 list-none space-y-2 text-sm font-normal">
              {resources.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-300 hover:text-gray-400" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-white">Company</h2>
            <nav className="mb-10 list-none space-y-2 text-sm font-normal">
              {company.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-300 hover:text-gray-400" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-full pt-10">
          <div className="mb-8 grid w-full gap-4 md:grid-cols-2">
            <nav className="flex list-none items-center gap-4 text-sm">
              {privacy.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-300 hover:text-gray-400" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-sm text-gray-400">
                Theatre House, 1st Floor, Suite F3B, Plot 5 De winton Street, Kampala, Uganda
              </div>
              <div className="text-sm text-gray-400">Delaware 8 The Green Dover, DE 19901</div>
            </div>
          </div>
          <div className="text-sm text-gray-25 ">
            © 2023 Steward Global Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
