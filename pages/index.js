import Head from 'next/head'
import Navbar from "../components/Navbar";

export default function Home() {
    return (
            <div>
                <Head>
                    <title>1410 Match Scouting</title>
                    <meta name="description" content="A data collection app used by the frc 1410 scouting sub-team" />
                    <link rel="icon" href="./favicon.png" />
                </Head>
                <a href="/tabs/pregame" className="flex items-center justify-center basis-1/12 rounded-full bg-emerald-600 text-white text-3xl font-bold background-color:bg-emerald-600 active:bg-emerald-900 p-8">Data Time!</a>
    </div>
  )
}