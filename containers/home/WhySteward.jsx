import { avatar } from 'assets/image'
import ProfileCard from 'components/profile-card/ProfileCard'
import React from 'react'

const WhySteward = () => {
  return (
    <section className="w-full bg-blue-gray-25">
      <div className="container mx-auto flex flex-col px-6  py-16  sm:px-0 lg:py-37 lg:px-16  xl:px-5">
        <h1 className="max-w-3xl text-xl font-semibold md:text-3xl md:leading-[60px] xl:text-5xl">
          Why Steward is favoured by school owners.
        </h1>
        <p className="mt-8 text-2xl">Here's what some of them are saying.</p>
        <div className="mt-10 grid w-full max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex h-fit flex-col overflow-hidden rounded-xl bg-gray-100 px-10 py-16">
            <h5 className="mb-8 text-lg md:text-2xl md:leading-[44px] xl:text-4xl">
              "Steward helps individuals and organisations to manage the entire scholarship process
              from calls for applications to scholarship admin."
            </h5>
            <ProfileCard
              avatar={avatar}
              name="Chris Lubega"
              subtext="Director at Springfield Junior School, Kampala"
            />
          </div>
          <div className="flex h-fit flex-col overflow-hidden rounded-xl bg-gray-100 px-10 py-16">
            <h5 className="mb-8 text-lg md:text-2xl md:leading-[44px] xl:text-4xl">
              "Steward helps individuals and organisations to manage the entire scholarship process
              from calls for applications to scholarship admin."
            </h5>

            <ProfileCard
              avatar={avatar}
              name="Chris Lubega"
              subtext="Director at Springfield Junior School, Kampala"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySteward
