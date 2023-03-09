import { backedby, Hero_img } from 'assets/image'
import LayoutWrapper from 'components/layout-wrapper'
import Ambitions from 'containers/home/Ambitions'
import Hero from 'containers/home/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <Ambitions />
    </LayoutWrapper>
  )
}
