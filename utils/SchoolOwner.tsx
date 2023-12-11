import Button from 'components/button/button'
import CustomSelect from 'components/ui/input/CustomSelect'
import { FormCheckbox } from 'components/ui/input/FormCheckbox'
import { FormInput } from 'components/ui/input/FormInput'
import PhoneInputs from 'components/ui/input/PhoneInputs'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { IDirectorsList, ISchoolOwnerForm } from 'models/onboardingModels'
import { FC, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  addDirector,
  getDirectors,
  getOnboardingDocumentType,
  resetBlockOnboarding,
  schoolOwner,
  updateDirector,
} from 'redux/slices/onboardingSlice'
import { cardidTypes, countries, jobTitle } from 'utils/mock'
import { IPageStepHandle } from '../types'
import FileUpload from 'components/ui/fileUpload/FileUpload'
import { CustomUploadLabel } from 'components/ui/fileUpload/customLabels'
import { useHistory } from 'react-router-dom'
import ProfilePicCard from 'components/cards/ProfilePic'
import Badge from 'components/ui/badge/Badge'
import { ReactComponent as EditIcon } from 'assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { capitalizeString, getStatus } from 'utils'
import classNames from 'classnames'
import { Add } from 'iconsax-react'
import { notifyError } from 'components/toast'
import React from 'react'
import MultipleFileUpload, { IuploadItem } from 'components/ui/fileUpload/MultipleFileUpload'
import PageLoading from 'components/ui/page-loading'
import { getLoginedUser } from 'hooks/common'
import Modal from 'components/ui/modal'
import InviteDirector from './InviteDirector'

export type RegistrationFormFields = {
  firstName: string
  lastName: string
  schoolEmail: string
  schoolName: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
}

const SchoolOwner: FC<IPageStepHandle> = ({ step, handleStep }) => {
  const [uploadingFile, setUploadingFile] = useState(false)
  const [preview, setPreview] = useState(false)
  const [files, setFiles] = useState<IuploadItem[] | undefined>([])
  const [fileChange, setFileChange] = useState(false)
  const [updateID, setUpdateID] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  // { setIsOpen, updateID, setUpdateID }
  useEffect(() => {
    localStorage.setItem('setStep', JSON.stringify(2))
  }, [])

  const dispatch = useAppDispatch()
  const { push } = useHistory()
  const {
    schoolOwner: { success, loading },
    getSchoolProfile: { data: schoolProfile, success: profileSuccess },
    getDirectors: {
      data: getDirectorsData,
      loading: getDirectorsLoading,
      success: getDirectorsSuccess,
    },
    addDirector: { loading: addDirectorLoading, success: addDirectorSuccess },
    updateDirector: { loading: updateDirectorLoading, success: updateDirectorSuccess },
    getOnboardingDocumentType: { data, success: docsuccess, loading: docLoading },
  } = useAppSelector(({ onboarding }) => onboarding)

  const [phone, setPhone] = useState({
    localFormat: '',
    international: '',
    countryCode: '',
  })

  const handlePhone = (localFormat: string, international: string, countryCode: string) => {
    setPhone({ localFormat, international, countryCode })
  }

  const { country } = getLoginedUser()

  useEffect(() => {
    if (updateDirectorSuccess || addDirectorSuccess) dispatch(getDirectors())
    if (!getDirectorsData?.length) dispatch(getDirectors())
  }, [updateDirectorSuccess, addDirectorSuccess])

  useEffect(() => {
    if (country?.label)
      dispatch(
        getOnboardingDocumentType({
          process: 'onboarding',
          country: country?.label.toUpperCase() as string,
          tag: 'DIRECTOR',
        })
      )
  }, [country?.label])

  useEffect(() => {
    const fileData = data?.map((item) => ({
      requirementType: item.requirement_type,
      requirementId: item.id,
      name: item.name,
      type: item.type,
    }))
    if (data?.length) setFiles(fileData)
  }, [data?.length])

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<ISchoolOwnerForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  })

  const hasDirectors = !!schoolProfile?.owner.document_reference

  const onSubmit = handleSubmit((data) => {
    const filteredDoc = files?.filter((item) => item.document)

    if (!filteredDoc?.length) return notifyError('Error', 'Please upload ID file')

    const documents = filteredDoc?.map(({ requirementType, requirementId, document, type }) => ({
      requirementType,
      requirementId,
      document,
      type: data.idType.value,
    }))

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone_number: {
        localFormat: phone.localFormat,
        countryCode: phone.countryCode,
      },
      dob: data.dob,
      type: capitalizeString(data.role),
      country: data.nationality.label.toUpperCase(),
      documents: updateID ? undefined : documents,
      code: updateID ? updateID : undefined,
    }

    if (updateID) {
      dispatch(updateDirector(payload))
    } else {
      if (hasDirectors) {
        dispatch(addDirector(payload))
      } else {
        dispatch(schoolOwner(payload))
      }
    }
  })

  useEffect(() => {
    if (success || addDirectorSuccess || updateDirectorSuccess) {
      setPreview(true)
      reset({})
    }
  }, [success, addDirectorSuccess, updateDirectorSuccess])

  useEffect(() => {
    if (schoolProfile && !hasDirectors) {
      const {
        owner: { firstName, lastName, phoneNumber, job_title, type, dob },
        owner,
      } = schoolProfile

      reset({
        phone_number: phoneNumber?.internationalFormat
          ? `+${phoneNumber?.internationalFormat}`
          : '',
        firstName,
        lastName,
        dob,
        acceptTerms: true,
        role: type as any,
      })
      setPhone({
        ...phone,
        countryCode: phoneNumber?.countryCode as string,
        localFormat: phoneNumber?.localFormat as string,
      })
    } else {
      setPreview(true)
    }
  }, [profileSuccess])

  const handlePrev = () => {
    push('/get-started/school-contact')
    localStorage.setItem('setStep', JSON.stringify(0))
  }

  const handlePreview = () => {
    if (updateID) reset({})
    setUpdateID(null)
    setIsOpen(true)
  }

  const handleContinue = () => {
    push('/get-started/documents')
  }

  const updatedDirectorInfo = (item: any) => {
    const { firstName, phoneNumber, lastName, code, type, dob } = item
    setUpdateID(code)
    setPreview(!preview)
    reset({
      phone_number: phoneNumber?.internationalFormat ? `+${phoneNumber?.internationalFormat}` : '',
      firstName,
      dob,
      lastName,
      acceptTerms: true,
      role: type,
    })
    setPhone({
      ...phone,
      countryCode: phoneNumber?.countryCode as string,
      localFormat: phoneNumber?.localFormat as string,
    })
  }

  const PreviewList = () => {
    return (
      <div className="mt-8 w-full">
        {getDirectorsData?.map((item, index) => (
          <div className="mt-3 space-y-4" key={index}>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
              <div>
                <ProfilePicCard
                  name={`${item.firstName} ${item.lastName}`}
                  email={capitalizeString(item.is_owner ? 'Owner' : item.type)}
                  success
                />
              </div>

              <div>
                <Badge
                  status={getStatus(item.verification_status)}
                  title={item.verification_status}
                />
              </div>

              {/* <div className="flex items-center gap-3">
                <EditIcon
                  onClick={() => updatedDirectorInfo(item)}
                  className={classNames('cursor-pointer')}
                />

                <DeleteIcon className={classNames('cursor-pointer')} />
              </div> */}
            </div>
          </div>
        ))}

        <div
          className="mt-5 flex w-fit cursor-pointer items-center  text-sm text-[#6938EF]"
          onClick={handlePreview}
        >
          <Add className="mr-1 h-5 w-5 text-[#6938EF]" /> Add another Owner, Director or Shareholder
        </div>
        <div className="mt-10 flex items-center  justify-between">
          <Button onClick={handlePrev} btnType="withoutbg" border type="button">
            Prev
          </Button>
          <Button className="ml-auto flex" onClick={handleContinue}>
            Save and continue
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div className="mx-auto w-full max-w-3xl">
      <h1 className="mb-3 text-xl font-medium">School owner profile</h1>
      <p className="mb-10 text-base">{"provide us with your School's contact info"}</p>

      {preview ? (
        !getDirectorsLoading ? (
          <PreviewList />
        ) : (
          <PageLoading />
        )
      ) : (
        <React.Fragment>
          {docLoading ? (
            <div className="flex h-fit w-full items-center justify-center">
              <PageLoading />
            </div>
          ) : (
            <>
              <div className="mt-10 flex w-full items-center justify-between lg:!mt-auto">
                <div className="block w-full  space-y-2 rounded-lg border border-purple-300 bg-[#FAFAFF] p-4">
                  <h3 className="text-base font-medium">Requirements</h3>
                  <ul className="list-inside list-disc space-y-2 text-xs text-gray-600">
                    <li>Minimum of 1 Director(s) Information provided</li>
                    <li>Minimum of 1 Owner(s) Information provided</li>
                  </ul>
                </div>
              </div>{' '}
              <form className="mt-8 w-full" onSubmit={onSubmit}>
                <div className="flex w-full flex-col md:flex-row md:gap-3">
                  <FormInput<ISchoolOwnerForm>
                    id="firstName"
                    type="text"
                    name="firstName"
                    label="Legal first name"
                    placeholder="First Name"
                    className="col-span-12 mb-4 w-full md:col-span-6"
                    register={register}
                    rules={{ required: 'You must enter your first name.' }}
                    errors={errors}
                  />
                  <FormInput<ISchoolOwnerForm>
                    id="lastName"
                    type="text"
                    name="lastName"
                    label="Legal last name"
                    placeholder="Last Name"
                    className="col-span-12 mb-4 w-full md:col-span-6"
                    register={register}
                    rules={{ required: 'You must enter your last name.' }}
                    errors={errors}
                  />
                </div>

                <FormInput<ISchoolOwnerForm>
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email here"
                  className="mb-4"
                  register={register}
                  rules={{ required: 'You must enter your email' }}
                  errors={errors}
                />

                <PhoneInputs
                  name="phone_number"
                  errors={errors}
                  control={control}
                  placeholder="(555) 000-0000"
                  label="Phone number"
                  classNames="mb-4"
                  setValue={(localFormat: any, international: any, countryCode: any) =>
                    handlePhone(localFormat, international, countryCode)
                  }
                  value={phone.international}
                />

                <div className="flex w-full flex-col md:flex-row md:gap-3">
                  <CustomSelect
                    id="nationality"
                    label="Nationality"
                    placeholder="Select an option"
                    options={countries}
                    control={control}
                    name="nationality"
                    errors={errors}
                    rules={{ required: 'Select nationality here' }}
                    className="col-span-12 mb-4 w-full md:col-span-6"
                  />

                  <FormInput<ISchoolOwnerForm>
                    id="dob"
                    type="date"
                    name="dob"
                    label="DOB"
                    className="col-span-12 mb-4 w-full md:col-span-6"
                    register={register}
                    rules={{ required: 'You must enter your dob.' }}
                    errors={errors}
                  />
                </div>

                <div>
                  <h6 className="md:text-md text-sm font-medium text-gray-700">
                    Business role (s)
                  </h6>
                  <p className="text-xs text-gray-600 md:text-sm">Select at least one role type</p>

                  <div className="flex max-w-sm gap-3">
                    <FormCheckbox<ISchoolOwnerForm>
                      id="role"
                      name="role"
                      label="Director"
                      type="radio"
                      value="director"
                      // defaultChecked={notifications?.transactions.notifyInflow.includes(
                      //   'email'
                      // )}
                      className="!my-4 w-full"
                      wrapperClass="!flex !items-start"
                      register={register}
                      rules={{
                        required: true,
                      }}
                      errors={errors}
                    />
                    <FormCheckbox<ISchoolOwnerForm>
                      id="role"
                      name="role"
                      label="Shareholder"
                      type="radio"
                      value="shareholder"
                      // defaultChecked={notifications?.transactions.notifyInflow.includes(
                      //   'email'
                      // )}
                      className="!my-4 w-full"
                      wrapperClass="!flex !items-start"
                      register={register}
                      rules={{
                        required: true,
                      }}
                      errors={errors}
                    />
                  </div>
                </div>
                {!updateID && (
                  <>
                    <CustomSelect
                      id="idType"
                      label="Business owner form of ID"
                      placeholder="Select an option"
                      options={cardidTypes}
                      control={control}
                      isDisabled={docLoading}
                      isLoading={docLoading}
                      name="idType"
                      errors={errors}
                      rules={{ required: 'Select owner ID type' }}
                      className="mb-4"
                    />

                    <div className="my-3">
                      <MultipleFileUpload
                        value={files}
                        setValue={setFiles}
                        setFileChange={setFileChange}
                        fileChange={fileChange}
                      />
                    </div>
                  </>
                )}
                <div className="mt-6 flex items-center">
                  <FormCheckbox<ISchoolOwnerForm>
                    id="acceptTerms"
                    name="acceptTerms"
                    label="I accept that owner profile is for any co-founders, shareholders who hold at least a 10% stake in your business, or anyone who has financial control over it."
                    register={register}
                    rules={{ required: 'accept T&C' }}
                    errors={errors}
                  />
                </div>
                <div className="mt-10 flex items-center  justify-between">
                  <Button onClick={handlePreview} btnType="withoutbg" border type="button">
                    Prev
                  </Button>
                  <Button
                    className="ml-auto flex"
                    disabled={loading || addDirectorLoading || updateDirectorLoading}
                    loading={loading || addDirectorLoading || updateDirectorLoading}
                  >
                    Save and continue
                  </Button>
                </div>
              </form>
            </>
          )}
        </React.Fragment>
      )}

      <Modal active={isOpen} close onClick={() => setIsOpen(false)}>
        <InviteDirector updateID={updateID} setIsOpen={setIsOpen} setUpdateID={setUpdateID} />
      </Modal>
    </div>
  )
}

export default SchoolOwner
