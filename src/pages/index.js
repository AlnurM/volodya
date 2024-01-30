import Head from 'next/head'
import { HomePage } from '@/pageComponents'

const Home = () => {
  return (
    <>
      <Head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <HomePage />
    </>
  )
}

export default Home
