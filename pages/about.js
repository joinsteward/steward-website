import LayoutWrapper from 'components/layout-wrapper'
import CtaBanner from 'containers/home/CtaBanner'
import Capital from 'containers/school/Capital'
import Hero from 'containers/school/Hero'

export default function SchoolLoan() {
  return (
    <LayoutWrapper>
      <Hero />

      <CtaBanner />
    </LayoutWrapper>
  )
}
