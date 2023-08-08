import Head from 'next/head'
import LotteryEntrance from '../components/LotteryEntrance'
import Image from 'next/image'
// import  Header from '../components/ManualHeader'
import Header from '../components/Header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
      { /* header/ connect button /nav bar */}
    </div>
  )
}
