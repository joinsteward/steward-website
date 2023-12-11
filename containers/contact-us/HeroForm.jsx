import PhoneInputs from 'components/ui/input/PhoneInputs'
import Input from 'components/ui/input/atom/Input'
import { FormTextarea } from 'components/ui/input/atom/TextArea'
import React, { useState } from 'react'

const HeroForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    localFormat: '',
    internationalFormat: '',
    countryCode: '',
  })

  const handlePhoneNumberChange = (localFormat, internationalFormat, countryCode) => {
    setPersonalInfo({
      ...personalInfo,
      internationalFormat,
      localFormat,
      countryCode,
    })
  }

  return (
    <section className="gradient__bg">
      <div className="container mx-auto flex flex-wrap px-6  pt-12 pb-16 sm:px-0 md:pt-36 lg:px-16 xl:px-5">
        <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/6 lg:pr-16">
          <h1 className="font-duplicate-san text-3xl font-medium text-black md:text-7xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-2xl">
            Collect school fees payments, obtain loans, and manage operations with the school
            business banking system that satisfies all of your requirements.
            <br />
            <br />
            To get in touch with someone from our team, please fill out the form.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col rounded-lg bg-white p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-3/6">
          <div className="relative mb-4 grid w-full gap-3 md:grid-cols-2">
            <Input label="First name" placeholder="Enter first name" />
            <Input label="Last name" placeholder="Enter last name" />
          </div>
          <div className="relative mb-4 grid w-full gap-3 md:grid-cols-2">
            <Input label="School name" placeholder="Enter school name" />
            <Input label="Country business is registered" placeholder="Enter name" />
          </div>
          <div className="relative mb-4 grid w-full gap-3 md:grid-cols-2">
            <PhoneInputs
              setValue={(localFormat, international, countryCode) =>
                handlePhoneNumberChange(localFormat, international, countryCode)
              }
              value={personalInfo.internationalFormat}
              label="Phone number"
              placeholder="Enter name"
            />
            <Input label="School email address (Optional)" placeholder="Enter name" />
          </div>
          <div className="relative mb-4 grid w-full gap-3 md:grid-cols-2">
            <Input group="https://" label="School website (If any) " placeholder="Enter name" />
            <Input label="Number of Staffs" placeholder="Enter name" />
          </div>
          <div className="relative mb-4 grid w-full gap-3 md:grid-cols-2">
            <Input label="Annual processing volume in UGX" placeholder="Enter name" />
            <Input label="What solution are you interested in" placeholder="Enter name" />
          </div>
          <div className="relative mb-4 w-full gap-3">
            <FormTextarea label="Message" placeholder="Enter a message" rows={6} />
          </div>
          <button className="flex h-11 w-fit items-center justify-center gap-2 rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-base">
            Send message
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroForm
