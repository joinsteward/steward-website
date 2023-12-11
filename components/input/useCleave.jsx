import { useState, useEffect, useRef } from 'react'
import { useForm, useController } from 'react-hook-form'
import Cleave from 'cleave.js'
import { CleaveOptions } from 'cleave.js/options'
import classNames from 'classnames'
import { Input, InputProps } from './atom/Input'
import { FormErrorMessage } from './atom/form-error-msg'
import { ErrorMessage } from '@hookform/error-message'
import * as lodash from 'lodash'

export const CleaveController = ({
  name,
  options,
  control,
  defaultValue,
  errors,
  className,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  })
  useEffect(() => {
    const instance = new Cleave(`#${name}`, options)

    return () => {
      instance.destroy()
    }
  }, [options, name])

  const errorMessages = lodash.get(errors, name)

  const hasError = !!(errors && errorMessages)
  //   return <input id={name}  />;
  return (
    <div className={classNames({ [className]: className })} aria-live="polite">
      <Input
        aria-invalid={hasError}
        className={classNames({
          'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50':
            hasError,
        })}
        isError={hasError}
        type="text"
        // onlyNumber={onlyNumber}
        {...props}
        {...field}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <FormErrorMessage className="mt-1">{message}</FormErrorMessage>}
      />
    </div>
  )
}
