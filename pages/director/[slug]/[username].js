import LayoutWrapper from 'components/layout-wrapper'
import Director from 'containers/director/Director'
import CtaFooter from 'containers/home/CtaFooter'
import { useEffect } from 'react'

export default function DirectorPage() {
  return (
    <LayoutWrapper>
      <Director />
      <CtaFooter
        title={`We're fuelling the aspirations of thousands of schools. Let's fuel yours as well.`}
        subtitle="Create an account and instantly help your school meet its liquidity needs."
        bg="bg-black"
        withBg={false}
      />
    </LayoutWrapper>
  )
}
