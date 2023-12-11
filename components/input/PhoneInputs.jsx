import React, { useEffect, useState } from 'react'
import * as lodash from 'lodash'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumber,
} from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { FormErrorMessage } from './atom/form-error-msg'
import cs from 'classnames'
import { CountryCode, PhoneNumber } from 'libphonenumber-js'

const PhoneInputs = ({
  name,
  errors,
  value,
  setValue,
  classNames,
  label,
  control,
  required = true,
  ...rest
}) => {
  const [focused, setFocused] = useState(false)

  const errorMessages = lodash.get(errors, name)
  const hasError = !!(errors && errorMessages)

  const [phoneCountryIso, setPhoneCountryIso] = useState('NG')
  const international = parsePhoneNumber(formatPhoneNumberIntl(value))
  const countryCode =
    value && isValidPhoneNumber(value) ? getCountryCallingCode(phoneCountryIso) : undefined

  const [onChangeValue, setOnChangeValue] = useState()

  useEffect(() => {
    if (international) {
      setPhoneCountryIso(international?.country)
    }
  }, [value])

  useEffect(() => {
    if (countryCode && !onChangeValue) {
      if (!value) return setValue(undefined)

      return
    }
    if (onChangeValue) return setValue(formatPhoneNumber(onChangeValue), onChangeValue, countryCode)
  }, [onChangeValue, countryCode])

  return (
    <div className={cs({ [classNames]: classNames })}>
      <div className={cs('phone')}>
        <label htmlFor={name} className="text-sm leading-7 text-gray-600">
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          rules={{
            validate: (value) =>
              !required ? true : isValidPhoneNumber(value) || 'invalid phone number',
            required: required ? 'Please enter a valid phone.' : false,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <PhoneInput
                onCountryChange={(value) => setPhoneCountryIso(value)}
                onFocus={(e) => setFocused(e)}
                onBlur={() => setFocused(false)}
                defaultCountry={phoneCountryIso}
                value={value}
                // countries=
                countries={['NG', 'UG']}
                addInternationalOption={false}
                countrySelectProps={{ unicodeFlags: true }}
                countryCallingCodeEditable={false}
                // addInternationalOption={false}
                international={false}
                focusInputOnCountrySelection
                limitMaxLength
                onChange={(e) => {
                  onChange(e), setOnChangeValue(e)
                }}
                style={{
                  boxShadow: `${focused ? '0 0 0 0.2rem rgba(208, 213, 221, .7)' : ''}`,
                  border: `${focused ? '1px solid #242628' : ''}`,
                }}
                id={name}
                className={cs(
                  'relative inline-flex w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
                  {
                    'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50':
                      hasError,
                  }
                )}
                {...rest}
              />
            )
          }}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <FormErrorMessage className="mt-1">{message}</FormErrorMessage>}
        />
        {/* // {errors['phone-input'] && <p className="error-message">Invalid Phone</p>} */}
      </div>
    </div>
  )
}

export default PhoneInputs
