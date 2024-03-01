import React, { useState, useRef, useEffect, useMemo } from 'react'
import Transition from 'utils/Transition'
import { NigeriaLogo, UgandaLogo } from 'assets/image'
import Image from 'next/image'
import ReturnCountry from 'utils/hooks'

const country = [
  { country: 'Uganda', iso: 'UG', img: UgandaLogo, currency: 'UGX' },
  { country: 'Nigeria', iso: 'NGA', img: NigeriaLogo, currency: 'NGN', soon: false },
]
const CountryDropDown = ({ align }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [select, setSelect] = useState({})

  const { selectCountry, setSelectCountry } = ReturnCountry()

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  const setCountry = (items) => {
    setSelectCountry(items)
    localStorage.setItem(
      'country',
      JSON.stringify({
        iso: items.iso,
        currency: items.currency,
      })
    )
    location.reload()
  }

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center rounded-3xl bg-gray-100 py-1 px-2 md:border md:bg-transparent md:p-1.5"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <I className="h-8 w-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User" /> */}
        <div className="flex items-center truncate ">
          <span className="flex items-center gap-0.5 truncate text-sm font-medium text-gray-600 group-hover:text-gray-800">
            <Image
              className="mr-0.5 object-contain object-center p-1 md:p-0.5 "
              alt="hero"
              src={selectCountry?.img}
            />
            <span className="hidden md:block">{selectCountry?.country}</span>
          </span>
          <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`absolute top-full z-10 mt-3 min-w-[250px] origin-top-right overflow-hidden rounded-md border border-slate-200 bg-white p-3 shadow-lg md:min-w-[320px] ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <ul className="space-y-1">
            {country.map((item, index) => (
              <li key={index}>
                <div
                  className="pointer-event flex cursor-pointer items-center justify-between  rounded-sm p-2  hover:bg-gray-100 "
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                    setCountry(item)
                  }}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <Image className="object-contain object-center" alt="hero" src={item.img} />{' '}
                    {item.country}
                  </div>
                  {item.soon && (
                    <div className="rounded-full bg-warning-50 px-2 py-1 text-xs text-warning-700">
                      Coming Soon
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mb-1 mt-2 rounded-md border border-warning-300 bg-warning-50 px-3 pt-0.5 pb-2">
            <div className="text-xs text-gray-600">
              You are currently on the{' '}
              <span className="font-medium">{selectCountry?.country} page</span> of Steward Inc.
              Select a different location to view Steward in other countries
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default CountryDropDown
