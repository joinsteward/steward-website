import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import React, { useState } from 'react'

// Using maps so that the full Tailwind classes can be seen for purging
// see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html

const sizeMap = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
}

const Input = ({
  id,
  name,
  label,
  type = 'text',
  size = 'medium',
  className = '',
  placeholder,
  isError,
  group,
  groupClassName,
  onlyNumber,
  ref,
  ...props
}) => {
  const [showPassord, setShowPassord] = useState(false)

  const togglePassword = () => {
    setShowPassord(!showPassord)
  }
  return (
    <div className="relative">
      <label htmlFor="email" className="text-sm leading-7 text-gray-600">
        {label}
      </label>
      <div className="flex">
        {group && (
          <span
            className={classNames(
              'inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 px-3 text-sm text-gray-900',
              { [groupClassName]: groupClassName }
            )}
          >
            {group}
          </span>
        )}

        <input
          id={id}
          //   ref={ref}
          name={name}
          type={showPassord ? 'text' : type}
          aria-label={label}
          placeholder={placeholder}
          className={classNames([
            'relative inline-flex w-full border border-gray-300 bg-transparent leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
            sizeMap[size],
            className,
            { 'rounded-r-lg': group, 'rounded-lg': !group },
            {
              '!hover:border-none !border-gray-200 !text-[#929090]': props.disabled,
            },
            { 'pr-9': type === 'password' },
          ])}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key) && onlyNumber) {
              event.preventDefault()
            }
          }}
          {...props}
        />
      </div>

      {type === 'password' ? (
        <div className="absolute inset-y-0 right-0 m-auto mr-3 translate-y-10 cursor-pointer">
          {!showPassord ? (
            <EyeIcon
              className={classNames('h-5 w-5', { 'text-red-600': isError })}
              onClick={togglePassword}
            />
          ) : (
            <EyeSlashIcon
              className={classNames('h-5 w-5', { 'text-red-600': isError })}
              onClick={togglePassword}
            />
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Input
