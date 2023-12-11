import { ErrorMessage } from '@hookform/error-message'
import * as lodash from 'lodash'
import { FC, useState } from 'react'
import { Controller } from 'react-hook-form'
import Select, { components } from 'react-select'
import { FormErrorMessage } from './atom/form-error-msg'
import classNames from 'classnames'

const InputOption = ({
  getStyles,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false)
  const onMouseDown = () => setIsActive(true)
  // const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false)

  // styles
  let bg = 'transparent'
  if (isFocused) bg = '#eee'
  if (isActive) bg = '#B2D4FF'

  const style = {
    alignItems: 'center',
    backgroundColor: bg,
    color: 'inherit',
    display: 'flex ',
  }

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    // onMouseUp,
    onMouseLeave,
    style,
  }

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input
        type="checkbox"
        checked={isSelected}
        className="relative mr-2 inline-flex h-4 w-4 cursor-pointer rounded  border border-gray-300 text-indigo-500 checked:border-gray-800  checked:bg-gray-100 checked:text-gray-200 focus:ring-gray-800 focus:ring-opacity-25"
        readOnly
      />
      {children}
    </components.Option>
  )
}

export const theStyle = (error, { minWidth, maxWidth }) => {
  const style = {
    control: (base, state) => ({
      ...base,
      //   border: state.isFocused ? '#000' : base.color,
      // This line disable the blue border
      minHeight: '45px',
      minWidth,
      maxWidth,
      padding: '4px 4px',
      borderRadius: '8px',
      backgroundColor: null,
      borderColor: state.isFocused ? '#000' : error ? 'rgb(220 38 38 /100)' : base.color,
      ring: state.isFocused ? '#000' : '#000',
      color: state.isSelected ? '#000' : base.color,
      boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(208, 213, 221, .7)' : 0,
      '&:hover': {
        borderColor: state.isFocused ? '#000' : '#000',
        ring: state.isFocused ? '#000' : '#000',
      },

      '*': {
        boxShadow: 'none !important',
        borderColor: '#000',
      },
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? '#FFF' : '#6B7280',
      backgroundColor: state.isSelected ? '#000' : base.color,
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      '&:hover': {
        color: '#6B7280',
        backgroundColor: '#F1F5F9',
      },
    }),

    indicatorSeparator: () => ({ display: 'none' }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        textAlign: 'start',
      }
    },
  }

  return style
}

export const MultipleSelectCheckbox = ({
  options,
  placeholder,
  label,
  control,
  name,
  errors,
  rules,
  onChange,
  value,
  className,
  width,
}) => {
  const errorMessages = lodash.get(errors, name)
  const hasError = !!(errors && errorMessages)
  return (
    <div className="w-full">
      <label htmlFor="email" className="text-sm leading-7 text-gray-600">
        {label}
      </label>
      {control ? (
        <>
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange: controlOnChange, value: controlValue } }) => {
              return (
                <Select
                  isMulti
                  placeholder={placeholder}
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={controlOnChange}
                  options={options}
                  components={{
                    Option: InputOption,
                  }}
                  value={controlValue}
                  // className={classNames(hasError ? 'rounded-lg border-2 border-red-500' : '')}
                  className={classNames({ [className]: className })}
                  styles={theStyle(hasError, {
                    minWidth: width?.minWidth,
                    maxWidth: width?.maxWidth,
                  })}
                />
              )
            }}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
            )}
          />
        </>
      ) : (
        <Select
          name={name}
          isMulti
          placeholder={placeholder}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          onChange={onChange}
          options={options}
          components={{
            Option: InputOption,
          }}
          value={value}
          // className={classNames(hasError ? 'rounded-lg border-2 border-red-500' : '')}
          styles={theStyle(hasError, {
            minWidth: width?.minWidth,
            maxWidth: width?.maxWidth,
          })}
        />
      )}
    </div>
  )
}
