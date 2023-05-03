import React, { useEffect, useMemo } from 'react'
import { debounce } from 'lodash'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const CustomSearchInput = ({ term, setTerm }) => {
  const debouncedResults = useMemo(() => {
    const handleSearch = (e) => setTerm(e.target.value)

    return debounce(handleSearch, 500)
  }, [setTerm])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })
  return (
    <>
      <div className="relative min-w-full md:min-w-[22rem]">
        <input
          className="relative inline-flex w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-9 text-sm leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-blue-700 focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-30"
          type="search"
          onChange={debouncedResults}
          placeholder="Search..."
        />
        <span className="absolute left-2 top-0 mt-3 ml-2">
          <MagnifyingGlassIcon className="m-auto h-4 w-4 text-gray-500" />
        </span>
      </div>
    </>
  )
}

export default CustomSearchInput
