import { NigeriaLogo, UgandaLogo } from 'assets/image'
import React, { useEffect, useState } from 'react'

const country = [
  { country: 'Uganda', iso: 'UG', img: UgandaLogo, currency: 'UGX' },
  { country: 'Nigeria', iso: 'NGA', img: NigeriaLogo, currency: 'NGN', soon: true },
]
const ReturnCountry = () => {
  const [selectCountry, setSelectCountry] = useState({})

  const getCountry = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('country'))

  useEffect(() => {
    if (!getCountry?.iso) {
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((response) => {
          if (['UG', 'NGA'].includes(response?.country_code_iso3)) {
            localStorage.setItem(
              'country',
              JSON.stringify({
                iso: response?.country_code_iso3,
                currency: response?.currency,
              })
            )
            const selected = country.find((item) => item.iso === response?.country_code_iso3)
            setSelectCountry(selected)
          } else {
            localStorage.setItem(
              'country',
              JSON.stringify({
                iso: 'NGA',
                currency: 'NGN',
              })
            )
            const selected = country.find((item) => item.iso === 'NGA')
            setSelectCountry(selected)
          }
        })
        .catch((data, status) => {
          console.log('Request failed:', data)
        })
    } else {
      const selected = country.find((item) => item.iso === getCountry?.iso)
      setSelectCountry(selected)
    }
  }, [getCountry])

  return { countryIso: selectCountry?.currency, selectCountry, setSelectCountry }
}

export default ReturnCountry
