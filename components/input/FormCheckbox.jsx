import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import * as lodash from 'lodash'
import { FormErrorMessage } from './atom/form-error-msg'

export const FormCheckbox = ({
  id,
  name,
  label,
  register,
  rules,
  errors,
  className,
  wrapperClass,
  inputClass,
  ...props
}) => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = lodash.get(errors, name)
  const hasError = !!(errors && errorMessages)

  const { type } = props

  return (
    <div
      className={classNames(`relative flex flex-col justify-center`, {
        [className]: className,
      })}
    >
      <div
        className={classNames(`flex items-center`, {
          [wrapperClass]: wrapperClass,
        })}
      >
        <input
          id={id}
          name={name}
          type="checkbox"
          aria-invalid={!!(errors && errorMessages)}
          className={classNames(
            'relative mr-2 inline-flex h-4 w-4 cursor-pointer border border-gray-300 text-indigo-500 checked:border-gray-800  checked:bg-gray-100 checked:text-gray-200 focus:ring-gray-800 focus:ring-opacity-25',
            hasError
              ? 'border-red-600 hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
              : '',
            type === 'radio' ? 'custom-radio !rounded-full' : '!rounded',
            {
              [inputClass]: inputClass,
            }
          )}
          {...props}
          {...(register && register(name, rules))}
        />
        {label && (
          <label
            htmlFor={type === 'radio' ? '' : name}
            className="leading-1 cursor-pointer text-sm text-gray-600"
          >
            {label}
          </label>
        )}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  )
}
