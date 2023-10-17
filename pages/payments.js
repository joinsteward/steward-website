import LayoutWrapper from 'components/layout-wrapper'
import CtaBanner from 'containers/home/CtaBanner'
import CtaFooter from 'containers/home/CtaFooter'
import Hero from 'containers/one-platform/Hero'
import OnePlatform from 'containers/one-platform/OnePlatform'
import Services from 'containers/one-platform/Services'

export default function SchoolLoan() {
  return (
    <LayoutWrapper>
      <Hero />
      <Services />
      <CtaFooter />
    </LayoutWrapper>
  )
}
