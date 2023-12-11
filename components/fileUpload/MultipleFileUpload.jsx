import React, { FC, useState } from 'react'
import { CustomUploadLabel } from './customLabels'
import FileUpload from './FileUpload'
import { Input } from 'components/input/atom/Input'

const MultipleFileUpload = ({
  value,
  setValue,
  setUploadingFile,
  uploadingFile,
  setFileChange,
  fileChange,
}) => {
  const handleSetValue = (event) => {
    const allItems = value

    const findItemIndex = allItems?.findIndex((item) => item.requirementId === event.requirementId)
    allItems[findItemIndex] = event
    setValue(allItems)
    setFileChange(!fileChange)
  }

  const handleFile = ({ requirementType, type, document, requirementId, name, required }) => {
    handleSetValue({
      requirementType,
      requirementId,
      document,
      type,
      name,
      required,
    })
  }

  return (
    <div>
      {value?.map(({ requirementType, requirementId, type, name, required }, index) => (
        <div className="mb-2" key={requirementId}>
          {requirementType === 'file' ? (
            <FileUpload
              key={requirementId}
              type="file"
              name={name}
              disabled={uploadingFile}
              group={name}
              customLabel={({ dragActive, onButtonClick, className }) =>
                CustomUploadLabel({
                  dragActive,
                  onButtonClick,
                  postion: 'row',
                  className,
                })
              }
              setUploadingFile={setUploadingFile}
              setFile={({ url }) =>
                handleFile({
                  requirementType,
                  type,
                  document: url,
                  requirementId,
                  name,
                  required,
                })
              }
            />
          ) : (
            <Input
              key={index}
              id="xs"
              name="file"
              type={requirementType}
              label={name}
              className="h-12"
              placeholder={`Enter ${name}`}
              groupClassName="!w-7/12 !max-w-3xl "
              onChange={(e) =>
                handleFile({
                  requirementType,
                  type,
                  document: e.target.value,
                  requirementId,
                  name,
                  required,
                })
              }
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default MultipleFileUpload
