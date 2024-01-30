import Head from 'next/head'
import { MainPage } from '@/pageComponents'

const Main = () => {
  return (
    <>
      <Head>
        <script async src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <MainPage />
    </>
  )
}

export default Main
