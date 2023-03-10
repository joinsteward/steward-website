import React from 'react'

const CtaBanner = () => {
  return (
    <section className="flex justify-center bg-gray-25 py-24 px-6 pb-24 md:mb-20 md:pb-0 lg:px-16">
      <div className="container flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gray-100 bg-cta_banner bg-cover bg-top bg-no-repeat p-8 py-28 md:flex-row md:p-28">
        <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="custom-font text-3xl font-bold md:text-5xl">Ready to get started?</h1>
          <p className="text-base md:text-2xl">
            Create an account and instantly help your school grow
          </p>
          <button className="flex h-11 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:px-6 md:text-sm">
            Call +256 706 192709
          </button>
          <p className="text-base md:text-xl ">
            or send us an email at
            <span className="ml-1 font-medium italic">
              <a href="mailto:admin@joinsteward.com">admin@joinsteward.com</a>
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
