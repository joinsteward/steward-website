import React, { useState, useRef, useEffect } from 'react'
import Transition from 'utils/Transition'
import { NigeriaLogo, UgandaLogo } from 'assets/image'
import Image from 'next/image'

const country = [
  { country: 'Uganda', iso: 'UGX', img: UgandaLogo },
  { country: 'Nigeria', iso: 'NGN', img: NigeriaLogo, soon: true },
]
const DropDownMenue = ({ align, name, actions, setDropdownOpen, dropdownOpen = false }) => {
  //   const [dropdownOpen, setDropdownOpen] = useState(false)

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

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <I className="h-8 w-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User" /> */}
        <div className="flex items-center gap-1 truncate">
          <span className="flex cursor-pointer items-center gap-0.5 truncate text-sm font-medium hover:text-gray-900 group-hover:text-gray-800 lg:text-base">
            {name}
          </span>
          <svg className="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`absolute top-full z-10 mt-3 min-w-[240px]  origin-top-right overflow-hidden whitespace-pre-wrap rounded-md border border-slate-200 bg-white p-3 shadow-lg md:min-w-[320px] ${
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
          {actions}
        </div>
      </Transition>
    </div>
  )
}

export default DropDownMenue
