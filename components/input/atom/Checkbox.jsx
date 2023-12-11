import classNames from 'classnames'

export const Checkbox = ({ id, name, label, className = '', ...props }, ref) => {
  return (
    <div
      className={classNames(`relative flex flex-col justify-center`, {
        [className]: className,
      })}
    >
      <div className="flex items-center">
        <input
          id={id}
          ref={ref}
          name={name}
          aria-label={label}
          type="checkbox"
          className={classNames(
            'relative mr-2 inline-flex h-4 w-4 cursor-pointer rounded  border border-gray-300 text-indigo-500 checked:border-gray-800  checked:bg-gray-100 checked:text-gray-200 focus:ring-gray-800 focus:ring-opacity-25'
          )}
          {...props}
        />
        {label && (
          <label htmlFor={name} className="leading-1 cursor-pointer text-sm text-gray-600">
            {label}
          </label>
        )}
      </div>
    </div>
  )
}
