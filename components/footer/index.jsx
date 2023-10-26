import { Facebook, Linkedin, Logo, Twitter, WhiteLogo } from 'assets/icons'
import Link from 'next/link'
import React from 'react'

const product = [
  {
    link: '/',
    title: 'Income advance',
  },

  {
    link: '/',
    title: 'Short term loans',
  },
  {
    link: '/',
    title: 'Fee collection system ',
  },
  // {
  //   link: '/loans',
  //   title: 'School loans ',
  // },
  // {
  //   link: '/payments',
  //   title: 'Accept payments ',
  // },
  // {
  //   link: '/',
  //   title: 'Salary advance',
  // },
]

const resources = [
  {
    link: '/',
    title: 'Support',
  },
  {
    link: '/',
    title: `School manager's community`,
  },
  {
    link: '/',
    title: 'Princing',
  },
]

const company = [
  {
    link: '/',
    title: 'About Us',
  },
  {
    link: '/',
    title: 'Blog',
  },
  {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdAIO--jEsER0tbLHVvQBCBuEittEPzN1em-Gw5GDMyeIqyrg/viewform',
    title: 'Contact Us',
  },
  {
    link: '/',
    title: 'Careers',
  },
]
const privacy = [
  {
    link: '/',
    title: 'Privacy Policy',
  },
  {
    link: '/',
    title: 'Merchant service agreement',
  },
  {
    link: '/',
    title: 'Cookie policy',
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
    <footer className="bg-white">
      <div className="container mx-auto flex flex-col py-16 px-6 sm:px-0 lg:py-20 lg:px-16 xl:px-5">
        <div className="grid border-b border-gray-300 md:grid-cols-4 md:gap-4 md:pb-10">
          <div className="max-w-[18rem]">
            <Logo className="mb-2 " />
            <h5 className="mb-4  text-sm font-bold text-gray-600 md:text-[16px]">
              wwww.joinsteward.com
            </h5>
            <div className="flex items-center gap-3">
              <Twitter href="https://twitter.com/joinsteward" target="_blank" />
              <Linkedin href="https://www.linkedin.com/company/joinsteward" target="_blank" />
              <Facebook href="https://facebook.com/joinsteward" target="_blank" />
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-3  text-sm font-semibold text-black md:text-[16px]">Product</h2>
            <nav className="mb-10 list-none space-y-3  text-sm font-normal md:text-[16px]">
              {product.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-600 hover:text-gray-700" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="mb-3  text-sm font-semibold text-black md:text-[16px]">Resources</h2>
            <nav className="mb-10 list-none space-y-3  text-sm font-normal md:text-[16px]">
              {resources.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-600 hover:text-gray-700" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="mb-3  text-sm font-semibold text-black md:text-[16px]">Company</h2>
            <nav className="mb-10 list-none space-y-3  text-sm font-normal md:text-[16px]">
              {company.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-600 hover:text-gray-700" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div />
          {/*  */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-3 text-base font-semibold text-black">Uganda Office</h2>
            <nav className="mb-10 list-none space-y-3  text-sm font-normal md:text-[16px]">
              <li className="space-y-3">
                <p className="text-gray-600">
                  1st Floor, Post Bank Building, Nansana, Wakiso, Uganda
                </p>
                <p className="text-gray-600">support@joinsteward.com</p>
                <p className="text-gray-600">+256 706 192709</p>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-base font-semibold text-black">Lagos Office</h2>
            <nav className="mb-10 list-none space-y-3  text-sm font-normal md:text-[16px]">
              <li className="space-y-3">
                <p className="text-gray-600">
                  1A Hughes Avenue, Off Herbert Macualay Way, Yaba, Lagos State, Nigeria
                </p>
                <p className="text-gray-600">support@joinsteward.com</p>
                {/* <p className="text-gray-600">+234 708355828284</p> */}
              </li>
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-base font-semibold text-black">USA Office</h2>
            <nav className="mb-10 list-none space-y-3  text-sm font-normal md:text-[16px]">
              <li className="space-y-3">
                <p className="text-gray-600">Delaware 8 The Green Dover, DE 19901</p>
                <p className="text-gray-600">support@joinsteward.com</p>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-full border-b border-gray-300 py-10">
          <div className="text-sm text-gray-600 md:text-[16px]">
            Steward is a financial service provider for Schools, while not functioning as a bank
            itself, enables banking services through its partnership with WEMA Bank. WEMA Bank is a
            licensed financial institution and a member of the NDIC.
          </div>

          <div className="mt-5 text-sm text-gray-600 md:text-[16px] ">
            Copyright © 2023 Steward Inc. All rights reserved.
          </div>
        </div>
        <div className="w-full pt-10">
          <div className="mb-2 flex w-full flex-wrap justify-between gap-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className=" text-sm text-gray-600 md:text-[16px]">www.joinsteward.com</div>
            </div>
            <nav className="flex list-none flex-wrap items-center gap-4 text-sm md:text-[16px]">
              {privacy.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-600 hover:text-gray-700" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
