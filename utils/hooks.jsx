import React, { useEffect, useState } from 'react'

const ReturnCountry = () => {
  const [countryIso, setCountryIso] = useState('')

  useEffect(() => {
    const getCountry = localStorage.getItem('country')
    setCountryIso(getCountry)
  }, [])

  return { countryIso }
}

export default ReturnCountry
