import { backedby, Hero_img } from 'assets/image'
import LayoutWrapper from 'components/layout-wrapper'
import Ambitions from 'containers/home/Ambitions'
import BusinessTools from 'containers/home/BusinessTools'
import CtaBanner from 'containers/home/CtaBanner'
import Hero from 'containers/home/Hero'
import WhySteward from 'containers/home/WhySteward'
import Image from 'next/image'

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <Ambitions />
      <BusinessTools />
      {/* <WhySteward /> */}
      <CtaBanner />
    </LayoutWrapper>
  )
}
