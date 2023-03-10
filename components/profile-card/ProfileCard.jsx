import Image from 'next/image'
import React from 'react'

const ProfileCard = ({ avatar, nameInitials, name, subtext }) => {
  return (
    <div className="flex w-full items-center gap-3">
      {avatar ? (
        <Image src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary-50 p-6">
          <h1 className="text-xl text-primary-600 ">{nameInitials}</h1>
        </div>
      )}

      <div>
        <h5 className="text-sm font-medium md:text-xl">{name}</h5>
        <p className="text-xs font-light md:text-lg">{subtext}</p>
      </div>
    </div>
  )
}

export default ProfileCard
