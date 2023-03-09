import { Hero_img } from 'assets/image'
import LayoutWrapper from 'components/layout-wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <LayoutWrapper>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 lg:flex-grow lg:pr-24">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-6xl">
              Financial Services for Ambitious Private Schools across Africa
            </h1>
            <p className="mb-8 leading-relaxed">
              Steward offers loans to private schools to fund operational
              <br className="hidden lg:inline-block" /> expenses and acquisition of assets.
            </p>
            <div className="flex gap-3">
              <button className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-sm">
                Contact Sales
              </button>
              <button className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-black px-3 text-center text-xs font-medium text-black md:px-6 md:text-sm">
                Call +256 706 192709
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              className="max-h-full w-full rounded object-contain object-center"
              alt="hero"
              src={Hero_img}
            />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
