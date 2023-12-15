import axios from 'axios'
import classNames from 'classnames'
import MultipleFileUpload from 'components/fileUpload/MultipleFileUpload'
import CustomButton from 'components/input/Button'
import CustomSelect from 'components/input/CustomSelect'
import { FormCheckbox } from 'components/input/FormCheckbox'
import { FormInput } from 'components/input/FormInput'
import PhoneInputs from 'components/input/PhoneInputs'
import Loading from 'components/loader'
import { notifyError, notifySuccess } from 'components/toast'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { QueryClient, useMutation, useQuery } from 'react-query'
import { fetchData, postData } from 'utils/api'
import { capitalizeString, cardidTypes, countries } from 'utils/common'

const Director = () => {
  const [files, setFiles] = useState([])
  const [fileChange, setFileChange] = useState(false)
  const [uploading, setUploading] = useState(null)

  const router = useRouter()
  const { slug, username } = router.query

  // Check if both slug and username are available before making the request
  const { data, error, isLoading, isSuccess } = useQuery(['director', slug, username], () => {
    if (slug && username) {
      return fetchData(`/public/${slug}/director/${username}`)
    }
  })

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (htmlElement) {
      htmlElement.style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      htmlElement.style.scrollBehavior = ''
    }
  }, [router.pathname, isSuccess])

  const { mutate, isLoading: loadingPost, isSuccess: successPost } = useMutation(postData)

  const [phone, setPhone] = useState({
    localFormat: '',
    international: '',
    countryCode: '',
  })

  const handlePhone = (localFormat, international, countryCode) => {
    setPhone({ localFormat, international, countryCode })
  }

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  })

  useEffect(() => {
    const fileData = data?.documentRequirement?.map((item) => ({
      requirementType: item.requirement_type,
      requirementId: item.id,
      name: item.name,
      type: item.type,
    }))
    if (data?.documentRequirement?.length) setFiles(fileData)
  }, [data?.documentRequirement?.length])

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
      nationality: data.nationality.label.toUpperCase(),
      documents: documents,
    }
    console.log(payload)

    const apiUrl = `/public/${slug}/director/${username}`

    // Trigger the mutation
    mutate({ newData: payload, apiUrl })
  })

  useEffect(() => {
    if (successPost) {
      reset({})
      notifySuccess('Success', 'Document submitted')

      router.push('/')
    }
  }, [successPost])

  useEffect(() => {
    if (isSuccess) {
      const { individual: { firstName, lastName, job_title, type } = {} } = data ?? {}

      reset({
        firstName,
        lastName,
        acceptTerms: true,
        role: type,
      })
    }
  }, [isSuccess, data, reset])
  if (isLoading) return <Loading />
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <div className="space-y-2 py-4">
        <h1 className="font-duplicate-san text-2xl font-medium">School owner profile</h1>
        <p className="text-md text-gray-600">Provide us with your School's owner details.</p>
      </div>
      <div className="mt-10 flex w-full items-center justify-between lg:!mt-auto">
        <div className="block w-full  space-y-2 rounded-lg border border-purple-300 bg-[#FAFAFF] p-4">
          <h3 className="text-base font-medium">Requirements</h3>
          <ul className="list-inside list-disc space-y-2 text-xs text-gray-600">
            <li>Minimum of 1 Director(s) Information provided</li>
            <li>Minimum of 1 Owner(s) Information provided</li>
          </ul>
        </div>
      </div>
      <form className="mt-8 w-full" onSubmit={onSubmit}>
        <div className="flex w-full flex-col md:flex-row md:gap-3">
          <FormInput
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
          <FormInput
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

        <FormInput
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
          setValue={(localFormat, international, countryCode) =>
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

          <FormInput
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
          <h6 className="md:text-md text-sm font-medium text-gray-700">Business role (s)</h6>
          <p className="text-xs text-gray-600 md:text-sm">Select at least one role type</p>

          <div className="flex max-w-sm gap-3">
            <FormCheckbox
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
            <FormCheckbox
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

        <>
          <CustomSelect
            id="idType"
            label="Business owner form of ID"
            placeholder="Select an option"
            options={cardidTypes}
            control={control}
            //   isDisabled={docLoading}
            //   isLoading={docLoading}
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
              uploadingFile={uploading}
              setUploadingFile={setUploading}
            />
          </div>
        </>
        <div className="mt-6 flex items-center">
          <FormCheckbox
            id="acceptTerms"
            name="acceptTerms"
            label="I accept that owner profile is for any co-founders, shareholders who hold at least a 10% stake in your business, or anyone who has financial control over it."
            register={register}
            rules={{ required: 'accept T&C' }}
            errors={errors}
          />
        </div>
        <div className="mt-10 flex items-center  justify-between">
          {/* <button
            className={classNames(
              'mx-auto flex transform items-center justify-center py-3 px-4 font-medium focus:outline-none disabled:opacity-50',

              'rounded-lg  bg-black  text-white shadow-md',
              loadingPost ? 'cursor-not-allowed' : ''
            )}
          >
            {loadingPost ? (
              <>
                <Loading className="mr-3 animate-spin" /> Please wait
              </>
            ) : (
              'Complete verification'
            )}
          </button> */}
          <CustomButton
            className="mx-auto"
            loading={loadingPost}
            disabled={loadingPost || uploading}
          >
            Complete verification
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default Director
