import classNames from 'classnames'
import * as lodash from 'lodash'

export const FormTextarea = ({ id, name, label, register, rules, errors, className, ...props }) => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = lodash.get(errors, name)
  const hasError = !!(errors && errorMessages)

  return (
    <div className={classNames(`relative`, { [className]: className })}>
      <label htmlFor="email" className="text-sm leading-7 text-gray-600">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        aria-label={label}
        aria-invalid={!!(errors && errorMessages)}
        className={classNames(
          'relative inline-flex w-full resize-none appearance-none overflow-auto rounded-lg border border-gray-300 bg-transparent p-3 text-base leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
          hasError
            ? 'border-red-600 hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
            : ''
        )}
        {...props}
        {...(register && register(name, rules))}
      />
    </div>
  )
}
