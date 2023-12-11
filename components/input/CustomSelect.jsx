import { ErrorMessage } from '@hookform/error-message'
import * as lodash from 'lodash'
import { omit } from 'lodash'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import Select, { Props } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { FormErrorMessage } from './atom/form-error-msg'
import { theStyle } from './MultipleSelectCheckbox'

const CustomSelect = (props) => {
  const { id, label, createable, control, name, errors, rules, width } = props
  const idx = id || Math.random().toString()
  const res = omit(props, ['label', 'className'])
  const errorMessages = lodash.get(errors, name)

  const hasError = !!(errors && errorMessages)
  return (
    <div className="w-full">
      <label htmlFor={idx} className="text-sm leading-7 text-gray-600">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              {createable ? (
                <CreatableSelect
                  isClearable
                  onChange={onChange}
                  value={value}
                  styles={theStyle(hasError, {
                    minWidth: width?.minWidth,
                    maxWidth: width?.maxWidth,
                  })}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  {...res}
                />
              ) : (
                <Select
                  onChange={onChange}
                  value={value}
                  styles={theStyle(hasError, {
                    minWidth: width?.minWidth,
                    maxWidth: width?.maxWidth,
                  })}
                  {...res}
                />
              )}
            </>
          )
        }}
      />
      <ErrorMessage
        errors={errors}
        name={`${name}.value`}
        render={({ message }) => <FormErrorMessage className="mt-1">{message}</FormErrorMessage>}
      />
    </div>
  )
}

export default CustomSelect
