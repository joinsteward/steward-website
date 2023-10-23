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
      <CtaFooter
        title={`We're fuelling the aspirations of thousands of schools. Let's fuel yours as well.`}
        subtitle="Create an account and instantly help your school meet its liquidity needs."
        bg="bg-black"
        withBg={false}
      />
    </LayoutWrapper>
  )
}
