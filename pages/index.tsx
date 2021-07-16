import React, { useEffect, useState } from 'react'
import AppNav from '../components/AppNav'
import LandingPage from '../components/LandingPage'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
const IndexPage: React.FC<{}> = () => {
  const router = useRouter()
  const [status, setStatus] = useState(false)
  useEffect(() => {
    window.localStorage.getItem('loggedIn')
      ? router.replace('/curriculum')
      : setStatus(true)
  }, [])
  //render empty white background with AppNav before possible redirect to prevent 'flickering'
  return (
    <>
      <Head>
        <title key="title">Learn Javascript the old school way — C0D3</title>
      </Head>
      <AppNav />
      {status ? (
        <>
          <LandingPage />
          <Footer footerType="py-5 bg-white text-muted" />
        </>
      ) : (
        <div className="bg-white vh-100">
          <noscript>
            <div className="d-flex justify-content-center">
              <pre>
                {`
        |------------|
        | TO         |
        | LEARN      |
        | JAVASCRIPT |
        | YOU        |
        | FIRST      |
        | NEED       |
        | TO         |
        | ENABLE     |
        | JAVASCRIPT |
        | IN         |
        | YOUR       |
        | BROWSER!   |
        |------------|
        (\\__/) ||
        (•ㅅ•) ||
        / 　 づ
          `}
              </pre>
            </div>
            <Footer footerType="py-5 bg-white text-muted" />
          </noscript>
        </div>
      )}
    </>
  )
}
export default IndexPage
