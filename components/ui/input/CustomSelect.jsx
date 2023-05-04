import * as lodash from 'lodash'
import { omit } from 'lodash'
import React, { useState } from 'react'
import Select, { Props } from 'react-select'
import CreatableSelect from 'react-select/creatable'

export const theStyle = (error) => {
  const style = {
    control: (base, state) => ({
      ...base,
      //   border: state.isFocused ? '#000' : base.color,
      // This line disable the blue border
      minHeight: '45px',
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

const CustomSelect = (props) => {
  const { id, label, createable, control, name, errors, rules, onChange, value } = props
  const idx = id || Math.random().toString()
  const res = omit(props, ['label', 'className'])
  const errorMessages = lodash.get(errors, name)

  const hasError = !!(errors && errorMessages)
  return (
    <div className="w-full">
      <label htmlFor={idx} className="text-sm leading-7 text-gray-600">
        {label}
      </label>

      {createable ? (
        <CreatableSelect
          isClearable
          onChange={onChange}
          value={value}
          styles={theStyle(hasError)}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          {...res}
        />
      ) : (
        <Select onChange={onChange} value={value} styles={theStyle(hasError)} {...res} />
      )}
    </div>
  )
}

export default CustomSelect
