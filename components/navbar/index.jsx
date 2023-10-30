import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Logo } from 'assets/icons'
import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown2, ArrowRight, ArrowUp2, CloseCircle, HambergerMenu, Menu } from 'iconsax-react'
import CountryDropDown from './CountryDropDown'
import DropDownMenue from './DropDownMenue'
import Image from 'next/image'
import { emergency_loan, fee_collection, income_advance, school_licensing } from 'assets/image'
import { useRouter } from 'next/router'

const actionList = [
  // {
  //   name: 'Income advance',
  //   desc: 'Allow Schools access their future revenue in 2-5 business days',
  //   img: income_advance,
  //   path: '/',
  // },
  // {
  //   name: 'Emergency loans',
  //   desc: 'Get quick access to loans for your school in 24-48 hours',
  //   img: emergency_loan,
  //   path: '/',
  // },
  {
    name: 'Fee collection system',
    desc: 'Enables parents to pay that coincide with their pay cycles.',
    img: fee_collection,
    path: '/',
  },
  // {
  //   name: 'School Licensing',
  //   desc: 'Eliminate the complexities of paperwork and legal procedures with steward',
  //   img: school_licensing,
  //   path: '/',
  // },
]

const links = [
  { name: 'Product', links: actionList },
  { name: 'Pay fees', link: '/payments' },
  { name: 'About Us', link: '/about' },
]
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const { push } = useRouter()
  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'hidden',
      },
    },
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(null)

  const toggleDropdown = (index) => {
    setIsDropdownOpen(() => {
      const newValue = +index
      if (index === isDropdownOpen) return
      return newValue
    })
  }

  const actions = (
    <ul className="space-y-1">
      {actionList.map((item, index) => (
        <li key={index}>
          <div
            onClick={() => push(item.path)}
            class="flex cursor-pointer items-start rounded-md p-2 transition-all duration-100 ease-in-out hover:border hover:border-[#EBE9FE] hover:bg-gray-25"
          >
            <Image className="object-contain object-center" alt="hero" src={item.img} />
            <div class="pl-6">
              <h2 class="title-font mb-1 text-sm font-medium text-gray-900">{item.name}</h2>
              <div class="text-xs">{item.desc}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )

  const renderMenuItems = (links, isSubLink) => {
    return links.map((item, index) => {
      return (
        <li key={index}>
          <div
            onClick={() => {
              push(item.path)
              handleClick()
            }}
            class="flex cursor-pointer items-start rounded-md p-2 transition-all duration-100 ease-in-out hover:border hover:border-[#EBE9FE] hover:bg-gray-25"
          >
            <Image className="object-contain object-center" alt="hero" src={item.img} />
            <div class="pl-6">
              <h2 class="title-font mb-1 text-sm font-medium text-gray-900">{item.name}</h2>
              <div class="text-xs">{item.desc}</div>
            </div>
          </div>
        </li>
      )
    })
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex h-20 justify-center border-b border-gray-300 bg-white py-4 px-6 lg:py-4 lg:px-16">
      <div className="container flex w-screen flex-row items-center justify-between">
        <div className="z-50 flex w-full items-center justify-between space-x-10 md:w-0 md:justify-start ">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            {/* {!click && <CountryDropDown align="right" />} */}
            <button
              onClick={handleClick}
              className={classNames('z-50 rounded-full p-1.5', { ['bg-gray-100']: !click })}
            >
              {click ? (
                <XMarkIcon className={classNames('h-5 w-5 text-black')} />
              ) : (
                <HambergerMenu className={classNames('h-5 w-5 text-black')} />
              )}
            </button>
          </div>

          <div className="hidden w-full md:ml-auto md:mr-auto md:flex">
            <nav className="flex flex-row items-center gap-8 space-x-1 whitespace-nowrap text-sm font-medium text-gray-30 lg:text-base">
              {/* <Link className="cursor-pointer hover:text-gray-900" href="/payments">
                Payments
              </Link> */}
              <DropDownMenue
                setDropdownOpen={setDropdownOpen}
                dropdownOpen={dropdownOpen}
                name="Products"
                actions={actions}
              />
              <Link className="cursor-pointer hover:text-gray-900" href="/payments">
                Pay fees
              </Link>
              <Link className="flex cursor-pointer items-center hover:text-gray-900" href="/about">
                About Us
              </Link>
            </nav>
          </div>
        </div>

        <div className="z-50 hidden md:flex">
          <div className="flex flex-row items-center space-x-4 font-medium md:ml-16">
            {/* <CountryDropDown /> */}
            <Link
              className="flex  h-11 items-center justify-center px-3 text-xs font-medium text-gray-30 md:px-6 md:text-base"
              href="https://app.joinsteward.com"
            >
              Sign In
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0ONsW10nJ6dlf1zp3ALYA8H2nfctvKQYfqfpedAahoaYu_A/viewform?pli=1"
              target="_blank"
              className="flex h-11 items-center justify-center gap-2 rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-base"
            >
              Book a demo
            </Link>
          </div>
        </div>

        <motion.nav
          initial={false}
          animate={click ? 'open' : 'closed'}
          variants={variants}
          className={classNames(
            `absolute inset-0 flex h-full  min-h-[550px] w-full flex-col rounded-b-xl bg-white shadow-sm md:hidden`
          )}
        >
          <div className="container mx-auto mt-25 flex  h-fit flex-col overflow-y-scroll px-6 pb-10 ">
            <div className="w-full space-y-16 ">
              <nav className="flex  flex-col space-y-5 font-normal text-black ">
                {links.map((item, index) => (
                  <li key={index} className="list-none border-b py-1.5">
                    <button
                      className={classNames('mb-3 !flex w-full !justify-between')}
                      onClick={() => {
                        if (item.links) {
                          toggleDropdown(index)
                        } else {
                          push(item.link)
                          handleClick()
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      {item.links && (
                        <>
                          {isDropdownOpen === index ? (
                            <ArrowUp2 className="h-4 w-4 text-primary-700" />
                          ) : (
                            <ArrowDown2 className="h-4 w-4 text-primary-700" />
                          )}{' '}
                        </>
                      )}
                    </button>

                    {isDropdownOpen === index && item.links && (
                      <ul>{renderMenuItems(item.links, true)}</ul>
                    )}
                  </li>
                ))}
              </nav>
            </div>
          </div>

          <div className="!mt-auto flex flex-wrap items-center justify-between gap-2 px-6 pb-10 pt-4">
            <Link
              className="flex items-center justify-center gap-2  text-center text-xs font-medium text-black md:px-6 md:text-base"
              href="https://app.joinsteward.com"
            >
              Get started <ArrowRight className={classNames('h-4 w-4 text-black')} />
            </Link>
            <Link
              href="tel:+256706192709"
              className="flex  w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black p-2 text-center text-[11px] font-medium text-black"
            >
              Call +256 706 192709
            </Link>
          </div>
        </motion.nav>
      </div>
    </header>
  )
}

export default Navbar
