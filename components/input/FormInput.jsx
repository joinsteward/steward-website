import classNames from 'classnames'
import * as lodash from 'lodash'

import { ErrorMessage } from '@hookform/error-message'
import { Input } from './atom/Input'
import { FormErrorMessage } from './atom/form-error-msg'

export const FormInput = ({ name, register, rules, errors, className, ...props }) => {
  const errorMessages = lodash.get(errors, name)
  const hasError = !!(errors && errorMessages)

  return (
    <div className={classNames({ [className]: className })} aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        className={classNames({
          'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50':
            hasError,
        })}
        isError={hasError}
        // onlyNumber={onlyNumber}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <FormErrorMessage className="mt-1">{message}</FormErrorMessage>}
      />
    </div>
  )
}
