import LayoutWrapper from 'components/layout-wrapper'
import Hero from 'containers/about/Hero'
import Investors from 'containers/about/Investors'
import Mission from 'containers/about/Mission'
import CtaBanner from 'containers/home/CtaBanner'

export default function SchoolLoan() {
  return (
    <LayoutWrapper>
      <Hero />
      <Mission />
      <Investors />
      <CtaBanner withBg={false} />
    </LayoutWrapper>
  )
}
