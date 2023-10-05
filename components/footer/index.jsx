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
            <h5 className="mb-4 text-sm font-bold text-gray-600">wwww.joinsteward.com</h5>
            <div className="flex items-center gap-3">
              <Twitter /> <Linkedin /> <Facebook />
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-3 text-sm font-semibold text-black">Product</h2>
            <nav className="mb-10 list-none space-y-3 text-sm font-normal">
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
            <h2 className="mb-3 text-sm font-semibold text-black">Resources</h2>
            <nav className="mb-10 list-none space-y-3 text-sm font-normal">
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
            <h2 className="mb-3 text-sm font-semibold text-black">Company</h2>
            <nav className="mb-10 list-none space-y-3 text-sm font-normal">
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
            <nav className="mb-10 list-none space-y-3 text-sm font-normal">
              <li className="space-y-3">
                <p className="text-gray-600">
                  1st Floor, Post Bank Building, Nansana, Wakiso, Uganda
                </p>
                <p className="text-gray-600">ugsupport@joinsteward.com</p>
                <p className="text-gray-600">+256 706 192709</p>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-base font-semibold text-black">Lagos Office</h2>
            <nav className="mb-10 list-none space-y-3 text-sm font-normal">
              <li className="space-y-3">
                <p className="text-gray-600">Delaware 8 The Green Dover, DE 19901</p>
                <p className="text-gray-600">ugsupport@joinsteward.com</p>
                <p className="text-gray-600">+234 708355828284</p>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-base font-semibold text-black">USA Office</h2>
            <nav className="mb-10 list-none space-y-3 text-sm font-normal">
              <li className="space-y-3">
                <p className="text-gray-600">Delaware 8 The Green Dover, DE 19901</p>
                <p className="text-gray-600">ugsupport@joinsteward.com</p>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-full pt-10">
          <div className="mb-8 grid w-full gap-4 md:grid-cols-2">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-sm text-gray-600">www.joinsteward.com</div>
            </div>
            <nav className="flex list-none flex-wrap items-center gap-4 text-sm">
              {privacy.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-gray-600 hover:text-gray-700" href={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="text-xs text-gray-600 md:text-sm">
            © 2023 Steward Global Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
