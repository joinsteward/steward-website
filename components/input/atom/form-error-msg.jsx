import React, { FC } from 'react'
import classNames from 'classnames'

export const FormErrorMessage = ({ children, className }) => (
  <p className={classNames('block text-left font-sans text-sm text-red-600', className)}>
    {children}
  </p>
)
