import LayoutWrapper from 'components/layout-wrapper'
import CtaBanner from 'containers/home/CtaBanner'
import Hero from 'containers/one-platform/Hero'
import OnePlatform from 'containers/one-platform/OnePlatform'

export default function SchoolLoan() {
  return (
    <LayoutWrapper>
      <Hero />
      <OnePlatform />
      <CtaBanner />
    </LayoutWrapper>
  )
}
