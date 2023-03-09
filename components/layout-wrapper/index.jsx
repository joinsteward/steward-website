import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
// import { useTheme } from 'next-themes';
import cn from 'classnames'
import 'swiper/css/bundle'
import Navbar from 'components/navbar'
import Footer from 'components/footer'

const LayoutWrapper = (props) => {
  const [mounted, setMounted] = useState(false)
  //   const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Steward - Steward for schools',
    description: `Financial Services for Ambitious Private Schools across Africa.`,
    image: 'https://steward-demo.netlify.app/images/banner.png',
    type: 'website',
    ...customMeta,
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://steward.com${router.asPath}`} />
        <link rel="canonical" href={`https://steward.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Steward" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@steward" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Navbar />
      <main className="w-full">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default LayoutWrapper
