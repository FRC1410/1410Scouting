import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Head>
            <title>1410 Match Scouting</title>
            <meta name="description" content="A data collection app used by the frc 1410 scouting subteam" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    </div>
  )
}
