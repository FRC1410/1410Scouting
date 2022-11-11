import Head from 'next/head'
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Head>
            <title>1410 Match Scouting</title>
            <meta name="description" content="A data collection app used by the frc 1410 scouting sub-team" />
            <link rel="icon" href="../public/favicon.png" />
        </Head>
    </div>
  )
}